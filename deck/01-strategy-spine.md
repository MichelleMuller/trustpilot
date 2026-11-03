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

## The bets

### Bet 1 — Rebuild collection for richness, not ratings

Move from a star-rating form to a **conversational interface** that elicits genuine sentiment and structured attributes. A form asks you to fill fields; a conversation asks follow-up questions and gets to *why*. Target: every review produces category-specific attributes, sentiment detail and media — the exact structured data LLMs and agents consume, and that retailers need for syndication.

**Collection is a timing and channel problem as much as a form problem**, so this bet includes:
- **SMS alongside email** — higher open rates, better suited to the post-delivery moment
- **Trigger on the right event** — delivery, or a usage milestone, not a fixed delay after purchase
- Both compound directly with the trustpilot.com deliverability advantage

**Approach:** research and experimentation before commitment. Conversational collection is unproven at scale for reviews — Bazaarvoice went to voice, which is one answer, not the only one. Test completion rate, data richness per review, and review quality before building.

**Why it's bet one:** everything else depends on it. No attribute data, no AI citations. No SKU-level inventory, no syndication conversation later. No media, no answer to Bazaarvoice's photo feed into Google.

---

### Bet 2 — Make products discoverable product-first, not company-first

**What already exists (fact-checked):** Product Review Pages launched 24 Sept 2026. They *are* public, consumer-facing, indexed pages on trustpilot.com showing product name, details, score, reviews, business replies and attributes. So "launch consumer-facing product review pages" is **done** — this bet has to start from there.

**What's actually missing is discovery.** Today a shopper reaches a product page through the **company**: a "Popular products" carousel on the brand's public profile, surfacing up to 12 of its most-reviewed items. That mirrors the company-reviews mental model — find the business, then its products.

It does not answer the query that matters:

> *"best running shoes for flat feet"*

That requires **cross-brand product discovery** — category browse across sellers, attribute filtering, and product-vs-product comparison. None of it exists. We have product *pages*; we don't have product *discovery*.

**This bet is:**
- **Cross-brand category browse and comparison** — the product-first surface that serves the right-hand column of the query table
- **Attribute-based filtering** — directly consuming what Bet 1 collects ("runs small", "durable", "worth the money")
- **Get out of beta.** PRPs are currently free beta, restricted to a select group in six English markets (UK, US, AU, NZ, CA, IE), in selected categories, requiring an active Product Reviews subscription and ≥1 review in 12 months. Coverage is the constraint on everything.
- **Resolve the TrustScore question.** Product reviews currently **do not affect the overall TrustScore** — while 59% of AI answers citing Trustpilot reference the TrustScore or star rating. The single most-quoted signal we produce is untouched by the product data we're asking businesses to invest in. That needs a deliberate answer, not an inherited default.

**Why it's bet two and not bet one:** discovery is worthless without the attribute data to filter and compare on. Bet 1 produces the inventory; Bet 2 makes it navigable.

---

### Bet 3 — *Open.*

Two bets may be enough — the brief asks for 2–3. If we want a third, the candidates are:
- **Attribution** — close the citation→revenue loop nobody in the category has
- **Measured collection advantage** — quantify and productise the trustpilot.com deliverability edge as a competitive number
- **Syndication groundwork** — first retailer conversations, using SKU inventory as the asset

*To decide.*

## Trade-offs

### Trade-off 1 — Discoverability before on-site widgets

**Fact check first:** we *do* have a Product Reviews TrustBox that pulls by SKU/product ID. So this isn't "build widgets or not" — it's **where the next increment of investment goes**.

Customers who collect product reviews through us will want to display them on their own site, and our widget offering is weaker and more expensive than ecommerce-native competitors (Plus/Premium gating; Judge.me and Okendo ship better display tooling for far less).

**The call: optimise for discoverability on AI surfaces first, with a committed roadmap promise on widgets.**

| For discoverability first | Against |
|---|---|
| It's the defensible position — widgets are commodity, independent AI citation isn't | Widgets are what the customer asks for in the sales call |
| Aligned to where consumer behaviour is actually moving | Risks churn to competitors with better display tooling |
| Builds the SKU inventory that unlocks syndication later | Weakens the on-site conversion story, which is how mid-market brands justify spend |

**Mitigation:** be explicit with customers about sequencing rather than silent about the gap. Ship a credible widget improvement inside the window even if it isn't the headline investment.

### Trade-off 2 — Incentivised reviews: the line we don't cross

Larger brands will ask for incentivised review support (discounts, loyalty points, free product in exchange for a review). It's a real revenue ask and competitors accommodate it.

**The call: we don't support it, and we accept losing business over it.**

**Why:**

1. **It directly attacks the asset the entire strategy rests on.** Our value to an LLM is that our content is independent and trustworthy. Incentivised reviews are, by construction, compensated opinion. If model providers lose confidence in review platform integrity, the citation rate goes toward zero — and every bet above goes with it. We are already removing 3.9m fake reviews a half, at 10% of submissions and rising. We don't need to add a sanctioned channel for compromised content.

2. **The downstream surfaces already reject it.** From direct experience at Yotpo: **Walmart, Target and Google all require incentivised reviews to be removed or clearly flagged.** So supporting incentivised reviews doesn't just risk the AI moat — it actively disqualifies that content from the retailer syndication surfaces we want to be on. We'd be taking revenue today in exchange for inventory that can't be distributed tomorrow.

3. **The brand gets more from a narrative than from a bought review anyway.** An influencer making the case for your product on social carries far more weight than one incentivised five-star review. The thing a brand actually wants — persuasive advocacy at scale — is better served elsewhere. There is no reason to compromise the one asset we have that nobody can copy in order to deliver a weaker version of something they can get from another channel.

**How we handle the sales conversation:** this becomes a positioning strength, not an apology. "Our reviews get cited by AI *because* we don't allow that" is a better pitch than matching a competitor's permissiveness. The integrity is the product.

---

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
