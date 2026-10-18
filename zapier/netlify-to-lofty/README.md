# Netlify guide forms → Lofty leads

Live Zapier workflows (private, enabled, built Oct 18 2026). Same `workflow.ts` in each; only the trigger site differs.

| Guide | Netlify site | Zapier workflow |
|---|---|---|
| renters.bernardsellsflhomes.com | central-fl-renter-guide | https://zapier.com/workflow/01a15106-52d0-70e3-8b0c-4751dddca973 |
| villages.bernardsellsflhomes.com | poinciana-village-guide | https://zapier.com/workflow/01a15120-e943-79bf-8d91-0747382bab8d |
| poinciana.bernardsellsflhomes.com (form `poinciana-guide` only) | poinciana-relocation-guide | https://zapier.com/workflow/01a15120-eeb4-75c7-9916-62d2717813e0 |
| davenport.bernardsellsflhomes.com | davenport-relocation-guide | https://zapier.com/workflow/01a15120-f405-74f6-9720-9293d1149fb6 |

What each lead gets in Lofty: name, email, phone, Source (form's `lead_source`, or the guide name),
Lead Type (Renter / Buyer / Investor from the form answers), tags `src-netlify`, `guide-<site>`,
`utm-<source>`, `campaign-<campaign>`, a note with every form answer, city, and text opt-in only
when the visitor ticked the SMS consent box. Lofty doesn't duplicate an existing email.

Bots (honeypot filled) and submissions with no email or phone are skipped.
