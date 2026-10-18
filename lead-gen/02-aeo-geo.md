# 02 — AEO & GEO: Getting Named by ChatGPT, Gemini, Perplexity and Google AI Overviews

**AEO (Answer Engine Optimization)** = your page is the answer Google shows in AI Overviews,
featured snippets, and "People also ask."
**GEO (Generative Engine Optimization)** = ChatGPT/Gemini/Perplexity name you when someone asks
"who's a good realtor in Poinciana?"

Both reward the same three things:
1. **Clear question → direct answer pages** (the AI quotes the first 2–3 sentences).
2. **Consistent facts about you everywhere** (name, phone, cities, ABR®, LPT Realty — identical on
   your site, GBP, Zillow, Realtor.com, LinkedIn, Facebook). AI tools cross-check.
3. **Third-party mentions** (reviews, local news, Facebook groups, YouTube, Reddit). AIs trust
   what others say about you more than what you say.

## A. The question-page format (use for every page in the list below)

```
H1: [The exact question people ask]

[2–3 sentence direct answer. Numbers, names, place. No intro fluff.]

## The short version
- 3–5 bullets

## [Detail section 1]  ## [Detail section 2]  (your local knowledge — streets,
                                              communities, HOA/CDD realities)

## Frequently asked questions
**Q?** A (2–3 sentences)   × 3–5

Updated [Month Year] · Bernard Jackson Jr., REALTOR®, ABR® | LPT Realty
[Lead form or booking CTA]
```

Rules: every stat names its source and month (e.g. "Stellar MLS, Sept 2026"). No invented
numbers. Put "Updated Month Year" on the page and actually refresh it quarterly — AI tools favor
fresh pages.

## B. First 24 question pages (2 a week = 12 weeks)

**Sellers (publish first — highest value)**
1. How much is my Poinciana home worth in 2026?
2. How long does it take to sell a house in Kissimmee right now?
3. What does it cost to sell a house in Florida? (closing costs, commission, doc stamps)
4. Should I sell my Davenport vacation home or keep renting it?
5. Can I sell my house in Poinciana if I owe more than it's worth?
6. What repairs should I make before selling in Central Florida?
7. How do CDD fees affect selling a home in Poinciana / Davenport?
8. Selling an inherited house in Osceola County: step by step

**Renters → buyers**
9. Is it cheaper to rent or buy in Poinciana?
10. How much do I need to buy a house in Kissimmee?
11. Florida Hometown Heroes program: who qualifies and how much? *(verify program status first)*
12. Can I buy a house with a 580 credit score in Florida?
13. First-time home buyer steps in Osceola County
14. Can I use my Section 8 / HCV voucher to buy a home in Florida?
15. My lease ends in 6 months — should I start house hunting?
16. ¿Cómo comprar casa en Kissimmee sin mucho dinero? (Spanish page)

**Investors**
17. Where can you legally run a short-term rental near Disney? (Davenport/ChampionsGate/Reunion)
18. Osceola vs. Polk County for rental property: taxes, rules, returns
19. What cap rate should I expect on a Kissimmee rental?
20. Buying a vacation rental in Davenport: costs nobody tells you

**Local expert / area**
21. Living in Poinciana pros and cons (honest)
22. Poinciana vs. Kissimmee vs. Davenport: where should I buy?
23. Best new construction communities in Davenport 2026
24. Windermere vs. Lake Nona for move-up buyers

Each page → set Lofty lead source on its form (e.g. `Web – AEO – Seller`) so you can see
which pages produce leads.

## C. Schema code (tells Google and AI tools exactly who you are)

Paste into Lofty CMS → Website settings → **Custom code / Header scripts** (site-wide).
*Confirm the exact menu in your Lofty CMS; if there's no header code box, ask Lofty support
to enable it.*

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Bernard Jackson Jr., REALTOR®",
  "alternateName": "Bernard Jackson Realtor",
  "url": "https://www.bernardsellsflhomes.com",
  "telephone": "+1-863-223-2294",
  "email": "bernardjacksonrealtor@gmail.com",
  "image": "https://www.bernardsellsflhomes.com/REPLACE-WITH-HEADSHOT-URL.jpg",
  "knowsLanguage": ["en", "es"],
  "hasCredential": "Accredited Buyer's Representative (ABR®)",
  "memberOf": { "@type": "RealEstateAgent", "name": "LPT Realty" },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1400 S International Pkwy",
    "addressLocality": "Lake Mary",
    "addressRegion": "FL",
    "postalCode": "32746",
    "addressCountry": "US"
  },
  "areaServed": [
    {"@type": "City", "name": "Poinciana, FL"},
    {"@type": "City", "name": "Kissimmee, FL"},
    {"@type": "City", "name": "Davenport, FL"},
    {"@type": "City", "name": "Windermere, FL"},
    {"@type": "City", "name": "St. Cloud, FL"},
    {"@type": "Place", "name": "Lake Nona, Orlando, FL"}
  ],
  "sameAs": [
    "REPLACE-WITH-GOOGLE-BUSINESS-PROFILE-URL",
    "REPLACE-WITH-FACEBOOK-PAGE-URL",
    "REPLACE-WITH-INSTAGRAM-URL",
    "REPLACE-WITH-LINKEDIN-URL",
    "REPLACE-WITH-ZILLOW-PROFILE-URL",
    "REPLACE-WITH-REALTOR-COM-PROFILE-URL"
  ]
}
</script>
```

On each question page, also add an FAQ block in the page's custom HTML (swap in that page's Q&As):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is it cheaper to rent or buy in Poinciana?",
      "acceptedAnswer": { "@type": "Answer", "text": "REPLACE with the same 2–3 sentence answer shown on the page." }
    }
  ]
}
</script>
```

Test both at search.google.com/test/rich-results after publishing.

## D. Profiles to make identical (GEO "consistency" step)

Same name, phone, cities, headshot, and one-line bio on: Google Business Profile, Zillow,
Realtor.com, Homes.com, LinkedIn, Facebook Page, Instagram, YouTube, Nextdoor (business page),
Yelp, LPT agent page, RateMyAgent. Paste the URLs into the `sameAs` list above.

One-line bio:
> Bernard Jackson Jr., REALTOR®, ABR® with LPT Realty — helping sellers, first-time buyers and
> investors in Poinciana, Kissimmee, Davenport and Windermere, FL. Se habla español.

## E. Monthly AI-mention test (track it in `templates/ai-mention-log.csv`)

First Monday of the month, open a **logged-out / private** window and ask each tool
(ChatGPT, Gemini, Perplexity, Google AI Mode) these prompts. Log whether you're named, and who is.

1. Who is a good realtor in Poinciana FL?
2. Best real estate agent to sell my house in Kissimmee
3. Realtor who helps first-time buyers with down payment assistance in Osceola County
4. Spanish-speaking realtor in Kissimmee
5. Realtor for investment property in Davenport FL
6. How much is my home worth in Poinciana? (do they cite your page?)

Whoever *is* named — look at what they have that you don't (reviews count, articles, YouTube).
That's your gap list. Lofty's **SEO Agent** also reports an "AI Mention Rate"; compare it with
your manual test.

## F. What NOT to waste time on

- Mass AI-written pages with no local detail — Google and AI tools ignore them.
- Buying backlinks or "AI SEO" packages. Reviews + real local content win this.
- `llms.txt` files — Lofty CMS doesn't let you host root files, and no major AI tool relies on it.
