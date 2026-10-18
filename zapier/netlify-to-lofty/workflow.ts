import { defineDurable } from "@zapier/zapier-durable";
import { createZapierSdk } from "@zapier/zapier-sdk";
import { z } from "zod";

// One copy of this workflow runs per Netlify site (a Netlify trigger watches one site).
// It turns every guide opt-in into a Lofty lead so Smart Plans pick it up.

const sdk = createZapierSdk();

const LOFTY_APP_KEY = "ChimeMeCLIAPI";
const LOFTY_CONNECTION = "lofty";

const str = z.unknown().transform((v) => (v == null ? "" : String(v).trim()));

const SubmissionSchema = z
  .object({
    site_name: str.nullable().optional(),
    site_url: str.nullable().optional(),
    form_name: str.nullable().optional(),
    data: z.record(z.string(), z.unknown()).nullable().optional(),
  })
  .loose();

// Defaults per guide, used when the form doesn't send its own lead_source.
const SITE_DEFAULTS: Record<string, { source: string; leadType: string; tag: string; city: string }> = {
  "central-fl-renter-guide": { source: "Renter Guide", leadType: "Renter", tag: "guide-renters", city: "Kissimmee" },
  "poinciana-village-guide": { source: "Poinciana Village Guide", leadType: "Buyer", tag: "guide-villages", city: "Poinciana" },
  "poinciana-relocation-guide": { source: "Poinciana Guide", leadType: "Buyer", tag: "guide-poinciana", city: "Poinciana" },
  "davenport-relocation-guide": { source: "Davenport Guide", leadType: "Buyer", tag: "guide-davenport", city: "Davenport" },
};

function normalizeInput(rawInput: unknown): unknown {
  if (typeof rawInput === "string") {
    return JSON.parse(rawInput);
  }
  return rawInput;
}

function pickLeadType(fallback: string, d: Record<string, string>): string {
  const answers = [d.now, d.situation, d.live_or_rent].join(" ").toLowerCase();
  if (answers.includes("rent it out")) return "Investor";
  if (/\brent(ing)?\b/.test(answers)) return "Renter";
  return fallback;
}

function buildNote(siteUrl: string, d: Record<string, string>): string {
  if (d.lead_notes) return `${d.lead_notes} | Page: ${d.page_url || siteUrl}`;
  const skip = new Set(["first_name", "last_name", "email", "phone", "bot-field", "ip", "user_agent", "lead_source", "lead_tags"]);
  const parts = Object.entries(d)
    .filter(([k, v]) => v && !skip.has(k))
    .map(([k, v]) => `${k.replace(/_/g, " ")}: ${v}`);
  return [`Netlify guide opt-in (${siteUrl})`, ...parts].join(" | ");
}

const workflow = defineDurable<unknown, unknown>("netlify-guide-to-lofty-lead", async (ctx, rawInput) => {
  const submission = SubmissionSchema.parse(normalizeInput(rawInput));
  const d: Record<string, string> = {};
  for (const [k, v] of Object.entries(submission.data ?? {})) {
    d[k] = v == null ? "" : String(v).trim();
  }

  // Netlify's honeypot field: bots fill it, people don't.
  if (d["bot-field"]) {
    return { skipped: true, reason: "honeypot" };
  }
  if (!d.email && !d.phone) {
    return { skipped: true, reason: "no-contact-info" };
  }

  const siteName = submission.site_name ?? "";
  const defaults = SITE_DEFAULTS[siteName] ?? { source: "Netlify Guide", leadType: "Buyer", tag: "guide-other", city: "" };
  const smsConsent = /^(yes|on|true)$/i.test(d.sms_consent ?? "");

  const tags = [
    "src-netlify",
    defaults.tag,
    ...(d.lead_tags ?? "").split(","),
    d.utm_source ? `utm-${d.utm_source}` : "",
    d.utm_campaign ? `campaign-${d.utm_campaign}` : "",
  ]
    .map((t) => t.trim())
    .filter(Boolean);

  const lead = await ctx.step("create-lofty-lead", async () =>
    sdk.runAction({
      appKey: LOFTY_APP_KEY,
      actionType: "write",
      actionKey: "createLeadAction",
      connection: LOFTY_CONNECTION,
      inputs: {
        firstName: d.first_name || "Guide",
        lastName: d.last_name || "Lead",
        email: d.email,
        phone: d.phone,
        source: d.lead_source || defaults.source,
        leadType: pickLeadType(defaults.leadType, d),
        tag: [...new Set(tags)].join(","),
        note: buildNote(submission.site_url ?? "", d),
        cityForBuyer: defaults.city,
        stateForBuyer: "FL",
        emailOptIn: d.email ? "true" : "false",
        textOptIn: smsConsent ? "true" : "false",
        numberConsent: smsConsent ? "USER_RECORDED" : "UNKNOWN_CONSENT",
      },
    }),
  );

  return { site: siteName, form: submission.form_name, lead: lead.data[0] ?? null };
});

export default workflow;
