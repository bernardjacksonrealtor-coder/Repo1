# New landing page checklist

## New page on an existing guide site
Nothing to set up in Zapier. Any Netlify form on that site already flows to Lofty
(except poinciana., whose workflow watches only the `poinciana-guide` form — reuse that form name).

## New Netlify site
Ask Claude: "Clone the Netlify → Lofty workflow for <site name>." It needs a new workflow because
each Zapier trigger watches one site. Also add the site to `SITE_DEFAULTS` in `workflow.ts`
(source, lead type, tag, city), or leads fall back to source "Netlify Guide", type Buyer.

## Every form must have
```html
<form name="UNIQUE-FORM-NAME" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <p hidden><input name="bot-field"></p>
  <input type="hidden" name="lead_source" value="Exact Source Name For Lofty">
  <input type="hidden" name="lead_tags" value="Topic, Buyer, City">
  <input type="hidden" name="utm_source"><input type="hidden" name="utm_medium">
  <input type="hidden" name="utm_campaign"><input type="hidden" name="utm_content">
  <input type="hidden" name="page_url">
  <input name="first_name" required> <input name="last_name">
  <input type="email" name="email" required> <input type="tel" name="phone">
  <label><input type="checkbox" name="sms_consent" value="Yes">
    I agree to receive text messages from Bernard Jackson, LPT Realty. Msg & data rates may apply.
    Reply STOP to opt out.</label>
  <button type="submit">Send me the guide</button>
</form>
<script>
  const p = new URLSearchParams(location.search);
  ["utm_source","utm_medium","utm_campaign","utm_content"].forEach(k => {
    const el = document.querySelector(`[name="${k}"]`); if (el) el.value = p.get(k) || "";
  });
  const pu = document.querySelector('[name="page_url"]'); if (pu) pu.value = location.href.split("?")[0];
</script>
```
Rules: SMS box unchecked and optional (10DLC). Use field names exactly as above. Optional extra
questions (timeline, situation, `now`, `live_or_rent`) go into the Lofty note automatically; answers
containing "rent"/"renting" set Lead Type = Renter, "Rent it out" sets Investor.

## Test before you promote it
Submit the form with `bernardjacksonrealtor+<pagename>test@gmail.com` and `?utm_source=test`.
Within ~2 minutes the lead should be in Lofty with the right source and tags. Delete it after.
