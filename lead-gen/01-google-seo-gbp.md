# 01 — Google Search: Business Profile + Lofty SEO

Two places Google finds you: the **Map pack** (Google Business Profile, fastest leads) and
**regular search results** (your Lofty website, slower but compounding).

## A. Google Business Profile (GBP) — do this first

Go to business.google.com and claim/verify the profile.

| Field | Fill in |
|---|---|
| Business name | Bernard Jackson, REALTOR® – LPT Realty *(name only, no keywords — Google suspends keyword-stuffed names)* |
| Primary category | Real Estate Agent |
| Secondary categories | Real Estate Consultant |
| Service areas | Poinciana, Kissimmee, Davenport, Windermere, St. Cloud, Lake Nona |
| Phone | 863-223-2294 |
| Website | `https://www.bernardsellsflhomes.com/?utm_source=google&utm_medium=gbp&utm_campaign=profile` |
| Appointment link | `https://www.bernardsellsflhomes.com/schedule-your-free-buyer-or-seller-consultation?utm_source=google&utm_medium=gbp&utm_campaign=booking` |
| Hours | Mon–Sat 9–7 (match what you'll actually answer) |
| Languages | English, Spanish |

**Description (750 chars max, paste as-is):**
> Bernard Jackson is a REALTOR® with LPT Realty and an Accredited Buyer's Representative (ABR®)
> serving Poinciana, Kissimmee, Davenport, Windermere, St. Cloud and Lake Nona. I help homeowners
> sell for the right price with a clear plan, help renters become homeowners using FHA, VA,
> Florida Hometown Heroes and down-payment assistance programs, and help investors find
> properties that pencil out in Osceola, Polk and Orange counties. Se habla español. Every
> client gets a straight answer, a written plan, and fast communication. Book a free buyer or
> seller consultation. Bernard Jackson Jr., REALTOR® | LPT Realty | FL Lic. #SL3324846.

**Services to add:** Home selling, Home buying, First-time homebuyer help, Home valuation,
Investment property, Relocation, New construction buyer representation.

**Photos:** 10 to start — headshot, you at showings/closings (with permission), city
landmarks you shoot yourself. Add 2 new photos a week. Profiles with fresh photos rank better.

**Weekly GBP post:** one post per week that matches the page you published that week. Button =
"Learn more" → page URL with `utm_source=google&utm_medium=gbp&utm_campaign=post-<topic>`.

**Reviews = #1 Map-pack ranking factor you control.** Goal: 15 in 60 days, then 2/month.
Get your review link: GBP → "Ask for reviews". Text script:
> Hey [Name], it was great working with you on [the house / your sale]. Would you mind
> leaving me a quick Google review? It helps other families in [city] find me. [link]
> Mentioning the city and whether you bought or sold helps a lot. Thank you!

Reply to every review within 48 hours, mentioning the city ("Glad we got you into Poinciana!").

## B. Lofty website SEO

Path: AOS → **Website** (opens CMS) → Settings → SEO. Classic: Website → Settings → SEO.
*If the menu doesn't match, Lofty's rollout stage differs — ask Lofty Help.*

Your site is on your broker's **Enterprise** Lofty plan, so the SEO tier isn't a cost question.
The catch: broker-managed sites sometimes lock settings (custom header code, sitemap, Search
Console verification). If a setting below is greyed out, ask your LPT Lofty admin to unlock it
for your site, or put that piece on your Netlify subdomains instead (see section C).

### Site-wide
- **Site title:** `Bernard Jackson, REALTOR® | Poinciana, Kissimmee & Davenport Homes`
- **Meta description:** `Buy or sell in Poinciana, Kissimmee, Davenport or Windermere with Bernard Jackson, ABR® REALTOR® at LPT Realty. Free home value, first-time buyer help, se habla español.`
- Connect **Google Search Console** (search.google.com/search-console): add the domain, verify via
  the meta tag Lofty gives you (SEO settings → Google verification), submit `/sitemap.xml`.
- Connect **Google Analytics 4** with the Measurement ID in Lofty's tracking settings.

### Core pages (build these as Featured Areas / landing pages)

| URL slug | Page title (≤60 chars) | Meta description (≤155 chars) | Lead source in Lofty |
|---|---|---|---|
| `/poinciana-homes-for-sale` | Poinciana FL Homes for Sale \| Bernard Jackson | Search every Poinciana home for sale, see new listings first, and get local advice from an ABR® REALTOR®. | Web – Poinciana |
| `/kissimmee-homes-for-sale` | Kissimmee FL Homes for Sale \| Bernard Jackson | Kissimmee homes for sale updated daily. First-time buyer and DPA help from a local REALTOR®. | Web – Kissimmee |
| `/davenport-homes-for-sale` | Davenport FL Homes & Vacation Rentals for Sale | Davenport homes and short-term-rental-ready properties near ChampionsGate and Reunion. | Web – Davenport |
| `/windermere-homes-for-sale` | Windermere FL Homes for Sale \| Bernard Jackson | Windermere homes for sale, lakefront and gated communities, with an expert buyer's agent. | Web – Windermere |
| `/home-value` | What's My Home Worth? Free Poinciana & Kissimmee Home Value | Get a free, local home value for your Poinciana, Kissimmee, Davenport or Windermere home in 24 hours. | Web – Home Value |
| `/sell-my-home` | Sell Your Home in Poinciana, Kissimmee & Davenport | A clear plan to sell for the best price: pricing, prep, marketing and net-proceeds estimate. | Web – Seller |
| `/first-time-home-buyer-florida` | First-Time Home Buyer in Central Florida \| DPA Help | Florida Hometown Heroes, FHA, VA and down-payment assistance explained by an ABR® REALTOR®. | Web – First-Time Buyer |
| `/rent-to-own-poinciana` *(renter → owner, not lease-option)* | Stop Renting in Poinciana: Your Path to Owning | Compare rent vs. own in Poinciana and Kissimmee and get a step-by-step plan to buy. | Web – Renter |
| `/investment-property-davenport` | Davenport & Kissimmee Investment Properties | Short-term-rental zoning, cap rates and properties that cash flow near Disney. | Web – Investor |
| `/se-habla-espanol` | Agente de Bienes Raíces que Habla Español – Kissimmee | Compre o venda su casa en Kissimmee y Poinciana con un REALTOR® bilingüe. | Web – Español |

Each page needs: 300+ words of your own local writing (not the IDX widget alone), an H1 that
matches the title, one FAQ block (see `02-aeo-geo.md`), a lead form, and the booking link.

Also add Featured Areas for: Solivita, ChampionsGate, Storey Lake, Reunion, Laureate Park
(Lake Nona), Keene's Pointe (Windermere). Subdivision pages are easier to rank than city pages.

### What to check monthly in Search Console
Performance → Queries: which searches show your site. If a query has many impressions but
position 8–20, improve that page (add an FAQ, more local detail). That's the cheapest win in SEO.

## C. Your Netlify subdomain guides

You already run these on Netlify (17 form submissions so far, as of Oct 18 2026):

| Site | URL | Form | Submissions |
|---|---|---|---|
| central-fl-renter-guide | renters.bernardsellsflhomes.com | renter-guide | 6 |
| poinciana-village-guide | villages.bernardsellsflhomes.com | poinciana-village-guide | 6 |
| davenport-relocation-guide | davenport.bernardsellsflhomes.com | davenport-guide | 3 |
| poinciana-relocation-guide | poinciana.bernardsellsflhomes.com | poinciana-guide | 2 |

**Why they matter:** you control 100% of the code there — titles, schema, FAQ markup, speed.
That makes them your best AEO/GEO pages. Use Lofty for IDX search, home value, and CRM; use
Netlify for deep guides and question pages.

**SEO rules for subdomains** (Google treats each subdomain as close to a separate site):
1. Add each subdomain to Google Search Console as its own property and submit its sitemap.
2. Link both ways: each Netlify guide links to the matching Lofty page (search/home value/booking),
   and the Lofty site links to each guide from the menu or footer. Without links from the main
   site, the subdomains rank alone.
3. Same name, phone, license, and brokerage footer on every guide (Florida advertising rule
   and GEO consistency).
4. Don't publish the same article on both Lofty and Netlify — pick one home per topic.
