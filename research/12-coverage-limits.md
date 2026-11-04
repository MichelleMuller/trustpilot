# The limits of coverage — what we can't fix, and why that's correct

*Background analysis. Deliberately **not** a slide — it names a structural ceiling, and a deck is a worse place for that than a working document. But it should inform how coverage targets get set, and it has one open question that matters enormously.*

---

## The claim being tested

The strategy rests on coverage: if reviews build the candidate set, a product with no review data isn't in the set. So coverage is existence.

**Which raises the obvious question: can every brand actually get covered?** No. And understanding where the ceiling sits changes how the initiatives should be sized.

## Invitations can't solve a long tail

A brand with **2,000 products and 500 orders a month** cannot reach thirteen reviews per product by buying more invitations. The purchasers don't exist. Invitation volume is bounded by order volume, always.

This is why catalogue size is the wrong tiering dimension for pricing (see [`../deck/04-monetisation.md`](../deck/04-monetisation.md)) — the constraint isn't what you're willing to pay for, it's how many customers you have to ask.

## Syndication doesn't rescue it either

Bringing reviews across from Yotpo, Okendo or Judge.me **moves the same thin pile.** A brand with few orders has few reviews *anywhere*.

Syndication adds volume only where a brand has **more** reviews somewhere else than on its own site. For most product brands that means **Amazon, Walmart and Target** — and that's the volume we largely cannot reach:

- A brand owns the reviews **it** collected, wherever displayed, and can bring those
- It does **not** own reviews written by a Walmart shopper on Walmart — those belong to the retailer and its review platform
- Outbound syndication networks exist precisely to **feed** retailer PDPs, not to drain them. The flow runs the wrong way for us by design.

So the volume that would actually fix the tail is the volume we're least able to reach.

## The honest map

| Catalogue shape | What solves coverage |
|---|---|
| **Few products, many variants** | **Variant-aware collection** — capture *which variant did you buy*, so fifty variants need reviews **tagged**, not fifty times the volume. A collection-flow design problem, not a pricing one. |
| **Many products, high order volume** | **Invitations.** The existing model, working as intended. |
| **Committed to another collection platform** | **Syndication** — reaches brands we otherwise cannot sell to, and brings the reviews they did collect |
| **Thin volume, sells through retail** | Review equity sits on retailer PDPs. Brand-collected reviews can come; retailer-shopper reviews cannot. **Partly unreachable.** |
| **Genuinely low total sales** | **Not solvable — and it shouldn't be.** |

## Why the last row is a feature

A business with few customers **should** have a thin trust signal. That's the system working.

Manufacturing coverage where no customer experience exists is the one thing that would genuinely break the asset — it's the same failure mode as incentivised reviews, arriving through a different door. The value of the signal to an LLM depends entirely on it tracking reality.

So the ceiling isn't a gap in the strategy. **It's the strategy holding its own line.**

## Getting more signal from fewer reviews

Where volume can't grow, the lever is signal per review — and signal from outside reviews.

### 1. Find the per-product presence cliff **← the question that matters most**

Company level: **1% → 54% at ~13 reviews → 75% at ~81.**

The product-level threshold is **unmeasured by anyone**. And the answer changes the size of this problem dramatically:

- If a product needs **~13** reviews to start getting cited, a large share of long-tail catalogues are structurally uncoverable
- If it needs **~3**, most of the tail is reachable and the ceiling barely matters

**That single number should be measured before coverage targets are set for any initiative.** It's also the most quotable finding available — nobody in the category has it.

### 2. Attribute inheritance
Variant-level signal rolls up to the parent; category-level priors inform sparse products. A modelling answer rather than a collection one, and it compounds with variant-aware capture.

### 3. Trust signals that aren't reviews
Return rates, repeat-purchase rates, resolution behaviour — **available at scale without anyone writing anything.**

This is the CEO's own stated expansion: *"we're interested in **other trust signals** as well."*

**For thin catalogues it may be the only real answer** — which is an argument for treating it as a response to a structural gap rather than as a nice-to-have expansion, and possibly for pulling it earlier than "beyond 18 months."
