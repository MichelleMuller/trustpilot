# Deck outline — slide by slide

*24 slides. Narrative-first; speaker notes carry the detail. Three slides need your screenshots — marked **[ASSET]**.*

---

## Act 1 — The problem (8 slides)

### 1. Cover
**Trustpilot Product Reviews — a 12–18 month strategy**
Michelle Muller. Dark slide.

### 2. Trustpilot exists because reputation couldn't travel
The founding story, in Blair's words: Mühlmann sold cables on eBay, built a strong seller rating, went independent — *"and realised he couldn't take his seller rating with him."* So he built *"something that didn't just exist on eBay, but existed in lots of other places as well."*
**Big quote slide.** One line, lots of air.

### 3. Now the problem is that reputation can't be parsed
Same sentence, one word changed. Two decades of human trust equity — 400m+ reviews, a brand every UK adult knows — was built for a world where a *person* read the page. **Equity a machine can't parse doesn't convert.**
**Statement slide**, accent background.

### 4. Two sides, one mechanism **← your slide**
Split slide. Brand on one side, consumer on the other.

| **The brand wants** | **The consumer wants** |
|---|---|
| To be found when someone's deciding | To know what this is actually like |
| To be recommended, not just listed | To not be sold to |
| Visibility in the answer | An answer they can trust |
| Proof that isn't their own marketing | Someone with nothing to gain |

**The point of the slide:** these look like two jobs. They're one. The brand only gets visibility *because* the consumer can trust the source — optimise for the brand alone and agents learn to discount it. **Independence isn't a constraint on the model. It is the model.**

### 5. Company-intent and product-intent are different queries
The table. We win the left column and barely compete for the right.

| We win these | We barely compete for these |
|---|---|
| "is Brooks a legit company" | "best running shoes for flat feet" |
| "is this site a scam" | "does this jacket run small" |
| "what's their return policy" | "X vs Y — which actually lasts" |

Right column is **larger, closer to purchase, and where comparison happens**.

### 6. What AI says when someone asks for a product **← your slide [ASSET]**
Screenshots of *"best sneakers for walking in London"* across engines. Placeholder frames until you supply them.
**Caption line underneath** pulling out what to notice — who gets cited, what evidence the model reaches for, whether product-level review data appears at all.
*(Tell me what the screenshots show and I'll write the callouts.)*

### 7. Reviews matter most at the moment of purchase
Seer funnel, as a three-step bar: **Awareness 2% → Evaluation 16% → Intent 24%.**
Nearly 1 in 4 sources cited at the point of purchase is an independent review site. **Review data is a bottom-funnel asset** — which is where budget concentrates.

### 8. What converts to machine equity, and what doesn't
The conversion table. Explains *why* the TrustScore is quoted 59% of the time — it's the most machine-readable thing we produce, not the most meaningful.

| Human equity | Converts? |
|---|---|
| TrustScore, review count | ✓ clean scalars — 59% and 16.6% quotation |
| Review prose | ~ lossily, and only the few reviews retrieved |
| **Attribute ratings** | ✗ optional at collection |
| **Verification posture** | ✗ not a readable field |
| **Recency** | ✗ not surfaced, despite deciding citation |

**The bottom three rows are the strategy.**

---

## Act 2 — Why us, why not yet (3 slides)

### 9. Two assets no competitor has
**The pairing** — Bazaarvoice, Yotpo, Okendo and PowerReviews have product reviews and no independent company-level trust layer. We have both. *"Is this seller legitimate"* and *"is this product any good"* from one independent source.
**The collection advantage** — every competitor sends review requests from the brand's own domain. We send from trustpilot.com. Better deliverability, higher response, and the ask reads as *"tell the world"* not *"help our marketing."* **Currently unmeasured, unpriced, unmentioned.**

### 10. The collection layer is the weak link **[ASSET — existing screenshots]**
The live submission form teardown. Two generic attributes, **both optional**. Media: three empty boxes, no prompt. No visible verified-purchase signal. No variant capture. Manual date entry carried over from company reviews.
**We're marketing an AI-visibility outcome built on attribute-rich, verified, media-rich data — on a form that collects none of it reliably.**

### 11. The category moved to collection a year ago
Bazaarvoice shipped **Talk-to-Text** and a **Visual Content Coach** in **November 2025**, explicitly for AI discoverability. Yotpo ships AI Smart Prompts.
**Richer collection isn't a novel idea — it's a year-old competitive move we haven't answered.** Our edge isn't the idea; it's the substrate underneath it.

---

## Act 3 — Where we point it (2 slides)

### 12. The US: biggest audience, smallest business
US ≈ **28–30% of traffic** — our largest market. The **UK**, our mature home market, sits at *"around 5%"* penetration; the US is far below.
North America H1'26: bookings **+27%**, new business **+76%**, **organic reviews +50%** against paying customers **+11%**. *Supply is growing four times faster than monetised demand.*
And the rail is built: **Shopify Key Product Partner**, ~2.86m storefronts, >14% of US ecommerce.

### 13. Two motions, two cost shapes
| | **Ecommerce** | **Offerings** |
|---|---|---|
| Motion | Engineering and architecture | **Sales-push** |
| Job | The volume engine | The margin engine |
| Competition | Contested | **Uncontested** |

**Why uncontested:** every competitor is built on GTINs, catalogue feeds and retailer PDPs. **A bank account has none of those.** And in US insurance queries, ChatGPT citations to **brand homepages rose 1.4% → 12.8% in four months** — models are citing brands' own words because independent evidence barely exists.

---

## Act 4 — The bets (5 slides)

### 14. Three bets
The diagram. Blair's own mission statement is three clauses and they are the three bets:
> *"Get trust signals in very large quantity, make them as trusted as possible, and get them into as many places as possible."*

Collection → verified depth. Syndication → breadth. Agents → how both reach the decision.

### 15. Bet 1 — Collection: richness *and* ratings
Both, deliberately. Richness answers product-intent queries and feeds attribute filtering. Ratings coverage feeds the scalar AI quotes most.
Progressive form: frictionless rating at the floor, conversational depth at the ceiling. Right moment, right channel — SMS alongside email, triggered on delivery.
**The governing metric: per-SKU attribute coverage.**

### 16. What better collection looks like **← your slide [ASSET]**
Screenshot of the conversational collection interface — the prototype.
Side-by-side with the current form if it fits: **static form vs conversation**. Attributes elicited rather than offered as a skippable row.
*Live demo hook: QR code to try it.*

### 17. Bet 2 — The trust infrastructure agents rely on
*Good for the consumer. Good for the brand.*
We're the evidence an agent **quotes**; not yet the infrastructure it **relies on**. Our APIs answer *"give me my reviews"* — OAuth-gated, single business. An agent asks *"which of these twelve, and what's the evidence?"*
Ships: **MCP server**, attributes as a filterable dimension, provenance and freshness as the headline product, **open not gated**.

### 18. Bet 3 — The verification layer for the category
Invert syndication. We can't build Bazaarvoice's 1,750-retailer outbound network — we become the place everyone syndicates **to**. The Google Seller Ratings model: Google collects nothing and became the destination.
**And everything inbound passes our fraud models.** We don't host other platforms' reviews — **we verify them.**

---

## Act 5 — Trade-offs (3 slides)

### 19. What we stop doing
The principle, in Blair's framing: *"not quite SaaS… it's more about the data and the infrastructure."* **Stop funding the display and workflow layer. Fund the data layer.**
Clearest cut: **ship one free updated widget set, then freeze.** Display is a commodity we were losing on anyway.
**Honest cost:** widgets are what customers ask for in the sales call.

### 20. The line we don't cross
No incentivised reviews, and we accept losing business over it.
It attacks the asset everything rests on. **Walmart, Target and Google all require incentivised reviews removed** — so it's revenue today for inventory that can't travel tomorrow. And a brand gets more from an influencer's narrative than a bought five-star anyway.
**"Our reviews get cited by AI because we don't allow that."**

### 21. Verified at the door
The provenance tiers.

| Tier | Screened by us | Carries the score |
|---|---|---|
| Verified — first party | ✓ | ✓ |
| Verified — syndicated | ✓ | ✗ labelled, exposed to agents |
| Rejected | failed | never ingested |

Screening lets us **strip incentivised reviews at ingestion** rather than refusing syndication to avoid them — and it pushes more adversarial variety through the models that are already our deepest moat.
**Costs named:** largest new operating cost, and lower model precision on out-of-distribution partner content at first.

---

## Act 6 — Execution (3 slides)

### 22. The 12–18 month roadmap
Four columns. 0–6 unlock and fix what's cheap · 6–12 collection at scale, MCP v1 · 12–18 coverage and the queryable layer · **beyond: cross-brand comparison, outbound syndication, trust signals beyond reviews.**
Offerings runs as a parallel low-cost track from month one.

### 23. How we'll know it's working
Three headline metrics *(to finalise)* plus the tree: collection quality → agent and AI visibility → commercial.
**Kill criteria per bet** — the slide that shows this is a plan, not a pitch.
**The unclaimed position:** nobody has closed citation → AI-referred visit → conversion. Trustpilot already observes AI-sourced visitors arrive with unusually high intent and doesn't measure it.

### 24. The bet, in one line
> Trustpilot has won the destination. The next 12–18 months is about being wherever the consumer makes the buying decision — and the engine that gets us there is radically better product review collection.

Dark slide, closing.

---

## Assets needed from you

| Slide | What |
|---|---|
| **6** | Screenshots: *"best sneakers for walking in London"* across engines — tell me what they show and I'll write the callouts |
| **10** | The product-review form screenshots (already in `reference/screenshots/`) |
| **16** | Conversational collection interface — the prototype, once built |

## Open before build

- Three headline metrics for slide 23
- Whether slide 13 leads with ecommerce or offerings visually
- Do you want speaker notes written as a full script? *(Recommended — it lets the slides stay visual)*
