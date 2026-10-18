# 03 — Social Media Lead Flow (Facebook, Instagram, LinkedIn)

Posting automation (prompt + Zapier) is already built in `../social-autopost/`. This file
covers turning posts into **tracked leads in Lofty**.

## The rule: every post sends people to ONE of three places

| Goal | Destination | Lofty lead source |
|---|---|---|
| Seller | `/home-value` | Social – FB / Social – IG / Social – LinkedIn |
| Buyer / renter | `/first-time-home-buyer-florida` or city search page | same |
| Talk now | DM keyword or booking link | same |

Never link to your homepage — it converts worst and you can't tell which post worked.

## UTM-tag every link (see `04-tracking.md`)

Example for a Facebook seller post:
```
https://www.bernardsellsflhomes.com/home-value?utm_source=facebook&utm_medium=social&utm_campaign=seller-value&utm_content=2026-10-20-pricing-tip
```

## DM keywords → Lofty (Zapier)

Posts end with "Comment VALUE" / "DM me LIST." Capture those people:
- **Lofty Text Codes** (Automation → Text Codes): create `VALUE` and `HOME` so people can also
  text your Lofty number. Auto-reply (160 chars):
  - VALUE: `Thanks! I'll send your home value within 24 hrs. What's the property address? – Bernard Jackson, LPT Realty`
  - HOME: `Let's get you a plan to own. What city and monthly payment are you aiming for? – Bernard Jackson, LPT Realty`
- **Facebook Lead Ads** (if you run any): Zapier "Facebook Lead Ads – New Lead" → Lofty
  "Create Lead" with source `Social – FB Lead Ad` and tag `fb-leadad-<campaign>`.
- For DMs/comments you answer by hand: when they give contact info, add them in Lofty with source
  `Social – FB DM` (or IG/LinkedIn). Takes 30 seconds, and without it your scoreboard is wrong.

## LinkedIn (your second priority channel)

LinkedIn finds you relocation buyers, investors, and professionals moving up to Windermere/Lake Nona.
- Profile headline: `REALTOR® & ABR® at LPT Realty | Helping Central FL homeowners sell and renters become owners | Poinciana · Kissimmee · Davenport · Windermere`
- Featured section: home-value page, buyer guide page, booking link (all UTM-tagged with `utm_source=linkedin`).
- Post 3×/week (Mon/Wed/Fri), repurposing your best question-page of the week as a 150-word
  insight + link in the first comment.
- Each week, connect with 20 people: HR/relocation managers at Orlando-area employers, local
  lenders, CPAs, property managers. Referral sources beat cold followers.

## What to measure (weekly, in the tracker)

Posts published · link clicks (Meta Business Suite / LinkedIn analytics) · leads in Lofty with a
Social source · appointments from social. Ignore likes when deciding what to keep.
