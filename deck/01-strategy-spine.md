# Deck — working strategy spine

*Status: working draft. Structure before slides.*

---

## The one-line answer

> **Trustpilot has won the destination. The next 12–18 months is about being wherever the consumer makes the buying decision — and the thing that gets us there is radically better product review collection.**

Everything else is downstream of that.

---

## The argument, in order

### 1. The shift
Consumers no longer research on a destination and then buy. The decision happens inside an AI answer, or on a retailer's product page — and increasingly Trustpilot isn't present at either.

### 2. The gap — query divergence
Company-intent and product-intent queries are different queries, on both ChatGPT and Google.

| We win these | We barely compete for these |
|---|---|
| "is Brooks a legit company" | "best running shoes for flat feet" |
| "is this site a scam" | "does this jacket run small" |
| "what's their return policy" | "X vs Y — which actually lasts" |

The right-hand column is **larger in volume, closer to purchase, and where comparison happens**. Seer: review citations run 2% at Awareness → 16% at Evaluation → **24% at Intent**. The 9.5x co-mention effect only plays out in product comparison queries.

**We currently compete for a minority of shopping queries, and the majority are product-shaped and closest to the money.**

### 3. Why we win it — two assets nobody else has

**The pairing.** Bazaarvoice, Yotpo, Okendo and PowerReviews have product reviews and no independent company-level trust layer. We have company-level at 361m reviews and #1 cited, and can build product underneath it. *"Is this seller legitimate?"* and *"is this product any good?"* answered independently from one source.

**The collection advantage.** Every competitor sends review requests from the brand's own domain — thin sender reputation, spam filters, and a consumer who reads it as marketing. We send from trustpilot.com. Better deliverability, higher response, and the ask reads as *"tell the world"* rather than *"help our marketing."* In a business where volume is the asset, that's a structurally lower cost per review collected. **It is currently unmeasured, unpriced and unmentioned anywhere in our materials.**

### 4. Why it isn't won yet — the collection layer is thin
Our live product review form (teardown: `research/07-practitioner-view.md`):
- Two generic attributes — **marked optional**
- Media capture: three empty boxes, no prompt, no guidance
- No visible verified-purchase signal, no variant capture
- Manual `mm/dd/yyyy` date entry carried over from company reviews
- Placeholder product image

**We are marketing an AI-visibility outcome that depends on attribute-rich, media-rich, verified data — while running a form that makes all three optional.**

### 5. Why now — we are a year behind on collection
Bazaarvoice shipped **Talk-to-Text** (spoken reviews, auto-transcribed) and **Visual Content Coach** in **November 2025**, explicitly positioned for AI discoverability. Yotpo ships AI Smart Prompts that guide customers on what to write.

Richer collection for AI is not a novel idea — **it is a year-old competitive move and we haven't answered it.** Our advantage isn't the idea. It's that we can execute it on top of a trust layer and a collection channel they don't have.

---

## Strategic direction — this executes the stated strategy, it doesn't replace it

The CEO has already named the destination. Our job is to say *how Product Reviews gets there*, not to propose a different direction.

| Company's stated direction | What Product Reviews contributes |
|---|---|
| **"Trust infrastructure for the age of AI"** — expanding *trust signals* and *trust impact* to consumers, businesses **and AI agents** | Product attributes and sentiment **are** trust signals. This is that expansion, at SKU level. |
| **Open platform** — *"make the data as useful as possible to as many people as possible."* ChatGPT citations **+400% YoY**; **75x** citation visibility for active profiles | Free widgets and uncapped invitations are the open-platform principle applied to packaging (Bet 3) |
| **"Relevance, recency, ranking"** is how citation is won — *"if your reviews are stale and many months old, then it's much less likely to get cited"* | Volume, freshness and relevance are all **collection** problems. Bet 1 is the CEO's own mechanism, operationalised. |
| **"Product reviews are not just for retail"** — a bank's accounts, TUI's holiday offerings | One product, two motions: ecommerce for collection volume, *offerings* for the enterprise verticals already winning |
| **Neutrality as the moat** — *"no vested interest in whether a transaction happens"* | Hard guardrail on Bet 2 — see Trade-off 3 |
| **B2B subscription, advertising explicitly rejected**, 83% gross margin | Constrains Bet 3: repackaging must move value *within* subscription, never to ads |

**The one place we're pointing out a gap, constructively:** the open-platform strategy isn't implemented on the flagship AI-discovery product. `robots.txt` disallows `/product-reviews/` to Googlebot, OAI-SearchBot, GPTBot, PerplexityBot and ClaudeBot; there is no product sitemap; consumer product search returns companies only. Cheapest fix in the plan, fully aligned with what the company already says it wants. *(Needs one confirmation — see `../research/08-prp-live-investigation.md`.)*

---

## Where we point it: the US

**Biggest audience, smallest business.**

- The **US is ~28–30% of trustpilot.com traffic** — the largest market. The **UK** — the mature home market — is at *"around 5%"* penetration. The US is far below that.
- At UK penetration, the US alone is a **billion-dollar-plus ARR business**
- North America H1'26: bookings **+27%**, new business **+76% YoY**, **organic reviews +50% YoY** against paying customers **+11%**

**Supply is growing four times faster than monetised demand.** US review inventory is already arriving unmonetised.

**The rail is built and underused.** Trustpilot became a **Shopify Key Product Partner** in June 2026 with an upgraded 2.0 app. Shopify is **~2.86m live storefronts and >14% of US ecommerce** ($216bn GMV in H1'26, +33%). US ecommerce overall: **~$1.3–1.6tn across 2.7–3.5m active stores.**

**And the demand signal is there:** 95% of consumers use reviews when shopping; a product with five reviews converts at ~**270%** the rate of one with none; **71%** of US consumers say a good Trustpilot score makes them more likely to buy.

> **The US thesis:** our largest audience sits in our smallest business, the reviews are already arriving faster than we monetise them, and the distribution rail into US ecommerce is built. Product Reviews is the product that turns that audience and that rail into revenue — because product-level reviews are what US ecommerce needs and what AI cites in the comparison queries that decide purchases.

---

## The bets

**One engine, three payoffs.** Collection is the bet. AI visibility, the consumer product surface and eventual retailer syndication are all downstream of the same inventory.

```
                    +-------------------------+
                    |   BET 1 - COLLECTION    |
                    |  richness + ratings,    |
                    |  right time, right      |
                    |  channel                |
                    +-----------+-------------+
                                |
          +---------------------+---------------------+
          v                     v                     v
   AI VISIBILITY        CONSUMER PRODUCT         SYNDICATION
   attribute + rating   DISCOVERY (Bet 2)        (the 18mo+ option)
   data AI can cite     needs volume and         SKU inventory is the
                        coverage to exist        ticket to a retailer
```

---

### Bet 1 — Enhance collection: richness *and* ratings

**Both, deliberately.** They serve different jobs and the strategy needs each:

- **Richness** — attributes, sentiment, media. Answers product-intent queries ("does it run small", "is it durable"), powers attribute filtering on a consumer surface, and is what a retailer needs for syndication.
- **Ratings coverage** — breadth of rated SKUs across the catalogue. **59% of AI answers citing Trustpilot quote the TrustScore or star rating**, 16.6% quote review counts. The numeric signal is the single most-reproduced thing we produce. Deep reviews on a handful of SKUs don't serve it; coverage does.

**The design tension to resolve, not dodge:** rich conversational collection takes longer per review, so it yields fewer. Simple ratings yield coverage. The form should be **progressive** — a near-frictionless rating first, conversational depth for those who continue. Optimise the floor for coverage and the ceiling for richness instead of trading one against the other.

**How:**
- A **conversational interface** in place of a static form — asks follow-ups, gets to *why*, and produces structured attributes as a by-product rather than as an optional field users skip
- **Right time, right channel** — SMS alongside email, triggered on delivery or a usage milestone rather than a fixed delay. Compounds with the trustpilot.com deliverability advantage.
- **Attributes elicited, not offered** — conversationally drawn out rather than presented as a skippable star row

**Approach:** research and experimentation before building. Bazaarvoice went to voice (Talk-to-Text, Nov 2025); that's one answer, not the only one. Test completion rate, coverage, richness per review and review quality.

**Why it's the bet:** no volume, no consumer product page worth visiting. No attributes, no AI citation and no syndication conversation. Everything downstream is gated on this.

---

### Bet 2 — Consumer-facing product discovery

**Fact-checked, and it changes the shape of this bet.** PRPs launched 24 Sept 2026 and *are* public consumer-facing indexed pages. But the live investigation (`../research/08-prp-live-investigation.md`) found:

- **Site search returns companies only** — no product search, no product tab, no cross-brand results
- **No product sitemap exists**
- **robots.txt disallows `/product-reviews/` to every crawler**, Googlebot and OAI-SearchBot included *(needs one confirmation)*

So the bet isn't "launch product pages." It's three things:

1. **Fix the plumbing.** Unblock crawling, add a product sitemap, exit the restricted beta (six English markets, selected categories, subscription-gated). Cheapest, fastest, highest-leverage work in the plan.
2. **Build product-first discovery.** Cross-brand category browse, attribute filtering off Bet 1's data, product comparison. Today a shopper reaches a product only *through* the company that sells it — a 12-item carousel on the brand profile. That cannot serve *"best running shoes for flat feet."*
3. **Resolve the TrustScore question.** Product reviews sit outside the TrustScore entirely, while the TrustScore is what AI quotes most. Needs a deliberate position, not an inherited default.

**Sequencing:** (1) starts immediately; (2) is gated on Bet 1's volume — discovery with thin coverage is worse than no discovery.

---

### Bet 3 — Repackage: free the commodity, charge for the outcome

**Widgets need updating — and then giving away free.**

Today we meter inputs and gate display: invitations capped by plan (50/100/300/1,000), TrustBox widgets tier-gated behind Plus and Premium. **That prices what competitors give away and under-prices the thing only we have.** Judge.me ships unlimited reviews and display tooling at $0–15/mo; our widget offering is weaker *and* costs more.

**The move:**
- **Update the widgets and make them free.** Display is commodity. Charging for it loses deals to Judge.me and Okendo, and suppresses the thing we actually want — our content on more sites, more visible, driving more collection.
- **Stop metering invitations.** Caps tax our single biggest structural advantage: trustpilot.com deliverability and consumer response. We should want more invitations sent, not fewer.
- **Monetise the scarce layer instead** — AI visibility and citation performance, product discovery placement, competitive and attribute insight, Enterprise intelligence tooling.

**Why this resolves the earlier trade-off properly.** The first draft said "discoverability first, widgets later" and accepted churn risk to ecommerce-native competitors. Free widgets removes that risk rather than absorbing it: customers get the display tooling they ask for in the sales call, *and* we stop defending a commodity we were losing on anyway.

**What it costs:** real near-term revenue from widget-driven upgrades, and a harder pricing conversation in transition. That's the trade.

---

## Trade-offs

### Trade-off 1 — Give widgets away and move monetisation up the stack

**Superseded by Bet 3.** The earlier framing — "optimise discoverability first, promise widgets later" — accepted churn risk to Judge.me and Okendo as the price of focus. Making widgets free and updating them removes the risk instead of absorbing it.

The real trade-off underneath is a **pricing** one:

| For free widgets + uncapped invitations | Against |
|---|---|
| Display is commodity; we were losing on it anyway | Gives up near-term revenue from widget-driven tier upgrades |
| More widgets live = more of our content visible = more collection | Harder pricing conversation during transition |
| Stops invitation caps taxing our deliverability advantage | Enterprise may resist repackaging that changes their line items |
| Moves monetisation to the layer only we can supply | Requires AI-visibility value to be *provable* — which is why measurement matters |

**The bet underneath the bet:** that independent AI visibility is durable enough to carry the price. If that's wrong, we've given away revenue for nothing. It is the single biggest commercial risk in this plan and the deck should say so.

### Trade-off 2 — Incentivised reviews: the line we don't cross

Larger brands will ask for incentivised review support (discounts, loyalty points, free product in exchange for a review). It's a real revenue ask and competitors accommodate it.

**The call: we don't support it, and we accept losing business over it.**

**Why:**

1. **It directly attacks the asset the entire strategy rests on.** Our value to an LLM is that our content is independent and trustworthy. Incentivised reviews are, by construction, compensated opinion. If model providers lose confidence in review platform integrity, the citation rate goes toward zero — and every bet above goes with it. We are already removing 3.9m fake reviews a half, at 10% of submissions and rising. We don't need to add a sanctioned channel for compromised content.

2. **The downstream surfaces already reject it.** From direct experience at Yotpo: **Walmart, Target and Google all require incentivised reviews to be removed or clearly flagged.** So supporting incentivised reviews doesn't just risk the AI moat — it actively disqualifies that content from the retailer syndication surfaces we want to be on. We'd be taking revenue today in exchange for inventory that can't be distributed tomorrow.

3. **The brand gets more from a narrative than from a bought review anyway.** An influencer making the case for your product on social carries far more weight than one incentivised five-star review. The thing a brand actually wants — persuasive advocacy at scale — is better served elsewhere. There is no reason to compromise the one asset we have that nobody can copy in order to deliver a weaker version of something they can get from another channel.

**How we handle the sales conversation:** this becomes a positioning strength, not an apology. "Our reviews get cited by AI *because* we don't allow that" is a better pitch than matching a competitor's permissiveness. The integrity is the product.

---

### Trade-off 3 — Neutrality vs. building a consumer shopping surface

**This is the objection the strategy will face from the top, and it comes from the CEO's own definition of the moat:**

> *"We're not a marketplace, it's not any kind of retailer. So we have no vested interest in whether a transaction happens."*

Bet 2 builds cross-brand product discovery and comparison, and PRPs already carry "Shop now" buttons. At what point does a comparison surface acquire a vested interest in transactions?

**The answer is a hard guardrail, stated up front:**

- **No transaction economics.** Never a cut, never affiliate revenue, never a referral fee.
- **No purchasable placement.** Ranking is by review evidence only. Placement is never sold — which also rules out funding this with advertising, already rejected as a model.
- **No commercial ranking signal.** A paying customer's product does not outrank a non-customer's.

Product discovery extends the *same* neutral service — "here is what independent customers actually said" — into product-intent queries. **The moment placement becomes purchasable, the moat is gone and the AI citation position goes with it.**

Naming this constraint ourselves, before anyone raises it, is worth more than avoiding the subject.

## Metrics — how we know it's working

*To develop. Draft structure:*

**Leading — collection quality**
- Invitation → review conversion rate (and the gap vs. brand-domain senders — *the number nobody else can produce*)
- % of reviews carrying structured attributes (today: optional, so near-zero)
- % carrying media
- Attribute coverage per SKU

**Middle — AI visibility**
- Product-level citation rate across ChatGPT, Gemini, AI Overviews, Perplexity
- Co-mention share in product comparison queries
- Time-to-first-citation for a new SKU
- % of catalogue above the citation threshold

**Lagging — commercial**
- Product Reviews attach rate and ARR
- Mid-market/ecommerce segment ARR growth
- Net dollar retention on accounts using Product Reviews
- Signed retailer syndication conversations (option value on the long game)

**Kill criteria** — *to define.* What result at month 6 tells us the conversational collection bet is wrong?

---

## Open items

- [ ] Metrics tree — tighten, pick the 3 headline numbers
- [ ] Define kill criteria for Bet 1
- [ ] Resourcing: what does Bet 1 cost, and what are we stopping to fund it?
- [ ] Sequencing across the 12–18 months
- [ ] The explicit "what we are NOT doing" slide
