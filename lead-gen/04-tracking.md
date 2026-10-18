# 04 — Track, Analyze, Adjust

## A. UTM rules (so every click is labeled)

Format: `?utm_source=<where>&utm_medium=<type>&utm_campaign=<goal-topic>&utm_content=<date-or-variant>`

| Channel | utm_source | utm_medium |
|---|---|---|
| Google Business Profile | google | gbp |
| Facebook organic | facebook | social |
| Facebook boosted/ads | facebook | paid-social |
| Instagram | instagram | social |
| LinkedIn | linkedin | social |
| Email newsletter | lofty | email |
| Text blast | lofty | sms |
| QR code / flyer / sign | print | qr |

`utm_campaign` starts with the goal: `seller-…`, `buyer-…`, `renter-…`, `investor-…`.
All lowercase, dashes not spaces. Build links at ga-dev-tools.google/campaign-url-builder.

## B. Lofty lead sources + tags

Every landing page and form gets its own Lead Source (Website → page settings → Lead Source).
Use the names in `01-google-seo-gbp.md` and `03-social.md`. Pattern: `<Channel> – <Detail>`.

Tags to add automatically via Smart Plan "Update Lead → Tag":
`src-google`, `src-aeo`, `src-social`, `src-gbp`, `goal-seller`, `goal-buyer`, `goal-renter`, `goal-investor`.

Gotcha: Lofty records UTM data on website registrations, but manually added leads have none.
When you add a lead by hand, always pick the source.

## C. Zapier zaps

**Zap 1 — Every new Lofty lead → Google Sheet "Lead Tracker"**
- Trigger: Lofty → *New Lead* (if the trigger isn't listed, use a Smart Plan with Auto-Apply on
  all lead types whose first step is **Automate → Zapier Zap**).
- Action: Google Sheets → *Create Spreadsheet Row* in the Lead Tracker (import
  `templates/lead-tracker.csv` as the header row).
- Map: Date created, First name, Lead type, Lead source, City/area, Price, Tags. Leave
  Stage/Appointment/Closed columns for you (or Zap 2) to update.

**Zap 2 — Pipeline change → update the row**
- Trigger: Lofty → *Lead Updated* / *Pipeline Changed* (or a Smart Plan Zapier step on the
  "Appointment Set" and "Under Contract" stages).
- Action: Google Sheets → *Lookup Row* by email → *Update Row* (Stage, Appointment date).

**Zap 3 — Friday 4 PM scoreboard email**
- Trigger: Schedule by Zapier → Weekly, Friday, 4:00 PM ET.
- Action: Gmail → send yourself a link to the tracker + "Do the Friday review."

*Lofty's Zapier app names change; if a trigger name doesn't match, search "Lofty" (formerly
"Chime") in Zapier and pick the closest new-lead/updated-lead trigger.*

## D. Scoreboard (fill every Friday, `templates/weekly-scoreboard.csv`)

| Metric | Where to get it | Target by week 12 |
|---|---|---|
| New leads by source | Lead Tracker sheet (count by source) | 10+/week total |
| Speed to lead (minutes) | Lofty Cowork → My Production | under 5 |
| Lead → appointment % | Tracker | 10%+ |
| Appointments set | Tracker / Lofty Calendar | 2+/week |
| GBP calls + website clicks | GBP → Performance | rising monthly |
| Google impressions / clicks | Search Console → Performance | rising monthly |
| Review count | GBP | 15 by day 60 |
| AI-mention hits (of 24 checks) | `ai-mention-log.csv` | 3+ by month 3 |
| Pages published | Content calendar | 2/week |

## E. Friday review: 45 minutes, same 4 questions

1. **Which source produced appointments this week?** (Not leads — appointments.)
2. **Which source produced leads but zero appointments for 4 weeks?** → Fix the follow-up
   (Smart Plan copy, speed) before cutting the source.
3. **Which page/post got the most clicks?** → Make 2 more like it next week.
4. **What's the one thing I stop doing?** Anything with 4 weeks of zero leads and zero
   appointments gets cut or changed.

Adjust rules of thumb:
- Search Console query at position 8–20 with lots of impressions → add an FAQ + 200 words to that page.
- FB post with 3× your normal link clicks → boost it $30–50 to the same landing page.
- Leads with no response in 24 hrs → check the Smart Plan is firing (Troubleshoot Enrollment) and
  10DLC is registered.

## F. Where Netlify fits

You don't need it for this. Keep lead pages on Lofty so leads go straight into the CRM. Netlify
is only useful later for a stand-alone tool (e.g. a rent-vs-buy calculator) that links back to a
Lofty page.
