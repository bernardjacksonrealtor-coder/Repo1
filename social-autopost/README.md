# Social Auto-Post Setup

## Why not 20–25 posts a day

- **Reach drops when you post too much.** Facebook and Instagram show each new post
  to a slice of your followers and stop showing it if nobody engages. At 20+ posts a
  day, each post competes with your others, engagement per post falls, and the
  platforms throttle the whole page. Local agents get the most leads posting 1–3
  times a day.
- **People unfollow.** 20 posts a day from one realtor reads as spam, and sellers
  hire the agent they trust.
- **Meta flags bulk automated posting.** A high volume of near-identical API posts
  can trigger restrictions on the page. That's the same page that runs your lead ads.
- **Instagram needs an image for every post.** At 20 a day you'd need 140 fresh
  images a week, so you'd end up with stock photos and recycled graphics.

The recommended plan is 2–3 Facebook posts and 1–2 Instagram posts a day, plus
Stories as often as you like. Stories don't hurt feed reach.

## Setup steps

1. Connect Facebook Pages in Zapier (log in as an admin of "Your Florida Realtor").
2. Connect Instagram for Business in Zapier. Your IG account must be a
   Business or Creator account linked to that Facebook page.
3. Put 30+ of your own photos/Canva graphics in a Google Drive folder.
4. Fill in the three `{{ }}` values at the bottom of `POSTING_PROMPT.md`.
5. Schedule it as a Claude Routine (e.g. 8:45 AM, 12:45 PM, 6:45 PM ET) that
   runs the prompt.
6. Run week one in `draft` mode, then switch to `auto`.
