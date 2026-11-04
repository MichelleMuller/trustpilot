# How this monetises

> **We charge for verified supply. We give away display and demand.**

---

## The correction that sets the model

An earlier draft argued for **uncapping invitations** on the grounds that caps throttle the collection advantage. **That was wrong, and it inverted what invitations actually are.**

An invitation goes to a **known purchaser**. It produces a **verified-purchase review** — the highest-trust, brand-controlled, most citable content on the platform. Organic reviews are free and uncontrolled; invitations are the mechanism for supply a brand can actually direct.

**So the cap isn't a tax on the product. The cap *is* the product.**

And it gets better, not worse, as Initiative 1 lands: **if the collection flow converts higher and returns richer attributes, every invitation is worth more.** That's pricing power created by product work — the same logic as seats in SaaS. You don't uncap seats; you make seats more valuable.

---

## The four lines

### 1. Invitations — metered, and the core
Verified-purchase review capacity, priced by volume. The existing model, **strengthened** rather than dismantled.

**What changes: nothing, probably — and catalogue size is a red herring.**

An earlier draft proposed tiering the invitation allowance on catalogue size. That doesn't survive contact with how catalogues actually look. **A brand can have two products and fifty variants**, or two thousand products and almost no variants. SKU count, parent-product count and review need don't track each other.

Follow the actual drivers instead:

| | What it scales with |
|---|---|
| **Our cost** | Reviews processed — screening, storage, attribute extraction |
| **Customer's need** | Products they want covered |
| **Customer's natural supply** | **Order volume** — you can only invite people who bought |

**Order volume is the binding constraint, and it's what plan tiers already proxy.** A brand with two products and 10,000 orders a month needs lots of invitations. A brand with 2,000 products and 500 orders needs fewer — and *cannot* get more, because it has no one else to invite.

Which exposes something more important than a pricing question.

**Why it holds up:** the better the flow gets, the more each invitation returns. Product work becomes pricing power.

### The coverage problem, honestly

**For a long-tail catalogue, invitation volume is not the answer.** A brand with 2,000 products and 500 orders a month cannot reach thirteen reviews per product by sending more invitations — the purchasers don't exist.

**And syndication doesn't fix it either.** Bringing reviews across from Yotpo or Okendo just moves the same thin pile: a brand with few orders has few reviews *anywhere*. Syndication adds volume only where the brand has **more** reviews somewhere else than on its own site — and for most product brands that means **Amazon, Walmart and Target**, where retailer-shopper reviews live.

**Which we largely cannot reach.** A brand owns the reviews **it** collected, wherever they're displayed, and can bring those. It does not own reviews written by Walmart shoppers on Walmart. Those belong to the retailer and its review platform, and outbound syndication networks exist precisely to feed retailer PDPs, not to drain them.

So the honest picture:

| Catalogue shape | What solves coverage |
|---|---|
| **Few products, many variants** | **Variant-aware collection** — capture *which variant did you buy*, so fifty variants need reviews **tagged**, not fifty times the volume. A collection-flow design problem (Initiative 1), not a pricing one. |
| **Many products, high order volume** | **Invitations.** The existing model, working as intended. |
| **Committed to another collection platform** | **Syndication** (Initiative 3) — reaches brands we otherwise cannot sell to, and brings the reviews they *did* collect. |
| **Thin volume, sells through retail** | Their review equity sits on retailer PDPs. **Brand-collected reviews can come; retailer-shopper reviews cannot.** Partly unreachable. |
| **Genuinely low total sales** | **Not solvable — and it shouldn't be.** A business with few customers should have a thin trust signal. Manufacturing coverage where no experience exists is the one thing that would break the asset. |

**That last row belongs in the deck.** A strategy claiming to solve every case is less credible than one that names its floor.

### Getting more from fewer reviews

Where volume genuinely can't grow, the lever isn't more reviews — it's more signal per review, and more signal from outside reviews:

- **Find the per-product presence cliff.** The company-level curve is 1% → 54% at ~13 reviews. The product-level threshold is unmeasured by anyone. **If it's three rather than thirteen, the long tail is far more reachable than we assume** — and that single number changes how much of this problem exists.
- **Attribute inheritance.** Variant-level signal rolls up to the parent; category-level priors inform sparse products. Modelling, not collection.
- **Trust signals that aren't reviews.** Return rates, repeat-purchase rates, resolution behaviour — available at scale without anyone writing anything. This is the CEO's own stated expansion: *"we're interested in **other trust signals** as well."* For thin catalogues it may be the only answer, and it's already on the roadmap.

### 2. Widgets — free
Display is a commodity. Judge.me ships unlimited reviews and display tooling at $0–15/mo; our widget offering is weaker *and* costs more. Charging for it loses deals on the layer where we have no advantage, and it suppresses the thing we want — our content on more sites, more visible.

Ship one good free set, then freeze development (see Resourcing).

### 3. Syndication — a new ARR line **← the new money**
**Brands using Yotpo, Okendo, Judge.me or Loox can choose to *also* syndicate their reviews to Trustpilot, for a fee.**

This is the single best idea in the monetisation model, for four reasons:

**It opens a segment we can't otherwise sell to.** Brands committed to another collection platform are currently unreachable. This reaches them without asking them to switch — they keep their stack and buy AI visibility from us.

**It dissolves the "why would a competitor feed us" problem.** They don't have to. **It isn't their decision — it's the brand's.** The brand owns its reviews and can export them. Okendo doesn't need to integrate, partner or agree; it just needs to not block a customer exporting their own data. *(A formal partnership later is upside, not a dependency.)*

**It makes Initiative 3 revenue-positive instead of cost-positive.** Screening inbound content is the largest new operating cost in the plan. **The syndication fee pays for the verification** — which answers who funds it: the brand, bundled.

**It monetises coverage directly** — the metric the whole strategy is built on.

**What the brand gets:** their reviews screened by our fraud models, carried with a trust score, present on Product Review Pages, and exposed through the MCP. **Verified presence where AI looks, without changing their collection stack.**

**Priced on order volume**, the same dimension that governs invitations. A bigger business brings more reviews, consumes more screening, and gets more value from the coverage — so it pays more. It's a consistent story across both lines rather than two different pricing logics, and it's a number the brand already knows about itself.

### 4. Intelligence — paid tiers
AEO measurement, competitive citation tracking, and **attribute insight as product intelligence** — *"customers consistently say your sizing runs small"* is merchandising feedback, not marketing. A different buyer and a different budget.

Table stakes rather than a lead: Profound has $334m and an enterprise motion built for measurement. We differentiate by being the only player that both **diagnoses** the gap and **owns the remedy**.

### And what stays free: agents and consumers
The MCP is **open, not gated** — where Bazaarvoice's equivalent is enterprise-only. Agents reward coverage, so gating the agent surface caps the thing that makes it valuable.

**Consumers read free. Agents read free. Brands pay to be found well.** That is the company's existing architecture with one addition: **agents are the new consumers.**

---

## The line that constrains everything

> **You can pay to have your data complete and verified. You cannot pay to rank higher.**

Paying improves your data **quality**, never your **position**. Exactly as today: you pay to collect more reviews, which improves your score honestly — you don't buy the score. Hold that line and the neutrality moat survives. Cross it and the citation position goes with it, and every revenue line above with that.

---

## What this adds up to

| Line | Today | Proposed | Direction |
|---|---|---|---|
| **Invitations** | Metered by plan | Metered, **tiered on catalogue size** | Core, strengthened |
| **Widgets** | Gated on Plus/Premium | **Free** | Given away |
| **Syndication** | — | **New ARR line, priced on order volume** | **New** |
| **Intelligence** | AI Search Analytics / Market Insights | Extended to product + attribute intelligence | Grown |
| **Agent access** | — | **Open, free** | Deliberately unmonetised |

**One line given away, one line created, two strengthened.** That's a far more defensible position than the earlier draft, which gave away two and created none.

---

## Open

- **Syndication pricing** — settled on **order volume**, matching the invitations dimension. Still to model: where the tier boundaries sit, and whether volume ingested needs a cap above the top tier.
- **Does a brand syndicating in also get a TrustScore contribution?** No — syndicated reviews sit outside the score (Trade-off 3). Worth being explicit in the sell, because it's the first question a brand will ask.
- **Catalogue-tiered invitations** needs modelling against the existing tiers before it goes on a slide as a number.
