# How AI shopping agents actually evaluate products

The strategy has to intervene at a specific point in this process. Here's the process.

---

## The three-step pipeline

Agents interpret intent, compare across retailers, and recommend or purchase on the user's behalf. Mechanically that resolves into three steps:

```
  1. FILTER            2. RANK                  3. FORMAT
  by hard constraints  by conversion signals    by trust factors
  ─────────────────    ───────────────────      ─────────────────
  price ceiling        review sentiment         what to cite as
  size / fit           attribute match          justification
  availability         delivery reliability     → "4.6 stars on
  compatibility        return rate                 Trustpilot, with
  features             price dynamics              reviewers noting..."
  ↓                    ↓                        ↓
  ATTRIBUTE DATA       SENTIMENT + ATTRIBUTES   PROVENANCE + SCORE
```

**Where Trustpilot can play at each step is different, and only one of them is currently served.**

| Step | What the agent needs | Trustpilot today |
|---|---|---|
| **Filter** | Structured attributes it can constrain on — "runs small", "waterproof", "under 2kg" | ✗ Attributes exist but are optional at collection, so coverage is near zero |
| **Rank** | Sentiment scores and attribute-level signal across many products | ✗ Not exposed in any agent-queryable form |
| **Format** | A citable, credible trust signal with provenance | ✓ **This is what Trustpilot already wins** — the TrustScore as justification |

**Trustpilot is strong at step 3 and absent from steps 1 and 2.** That is the whole bet in one line: we're the evidence an agent quotes *after* it has decided, not the data it uses *to* decide.

---

## Products are vectors, not pages

Agents represent a product as a **vector of attributes** — battery life in hours, delivery latency in days, return rate as a percentage, review sentiment score, warranty duration, price.

That reframes what a review *is*. To a human, a review is a story. **To an agent, a review is a source of attribute values and a sentiment weight.** The prose is raw material; the structured extract is the product.

This is why collection richness (Bet 1) and agent-readability (Bet 2) are the same strategy viewed from two ends. Bet 1 produces attribute values. Bet 2 exposes them as a queryable vector.

## What the evidence says about what agents reward

**Review data is the most heavily weighted positive input.** When a shopper asks "which should I buy", reviews are the closest thing to ground truth an agent can quote.

Then three findings that should shape the collection strategy directly:

1. **Sentiment beats volume.** *"100 reviews averaging 4.6 stars outperforms 1,000 reviews averaging 4.1 stars in most agent algorithms."*
2. **Detailed reviews beat brief ones.** Agents extract specific information — battery life, durability, ease of use — and can only do so from reviews that contain it.
3. **Reviews mentioning specific attributes carry more weight.**

**All three validate "richness *and* ratings" over a pure volume play.** A strategy that optimised only for review count would be optimising the wrong variable. This is independent external confirmation of the Bet 1 design tension — the progressive form that takes a cheap rating from everyone and rich detail from those who continue.

### The underlying point: human equity only counts once it converts to machine equity

Everything above resolves into one idea.

Trustpilot has spent two decades accumulating **human trust equity** — 400m+ reviews, a brand every UK adult recognises, the habit of checking before buying. That equity was built for a world where a *person* read the page.

**In an agent-mediated world, trust equity that a machine cannot parse does not convert.** It still exists. It just stops doing work.

This explains the single most-quoted finding in the whole research base. **59% of AI answers citing Trustpilot quote the TrustScore or star rating** — not because the number is the most *meaningful* thing on the page, but because it is the most **machine-readable** thing on the page. One unambiguous, comparable, extractable value. It converts cleanly, so it gets used.

Run the same test across the asset:

| Human equity | Converts to machine equity? |
|---|---|
| **TrustScore / star rating** | ✅ Fully — a clean scalar. Hence 59% quotation. |
| **Review count** | ✅ Fully — another scalar. 16.6% quotation. |
| **Review prose** | 🟡 Partially — models extract from it, but lossily, and only from the handful they actually retrieve |
| **Attribute ratings** | ❌ Barely exists — optional at collection, near-zero fill |
| **Verification and fraud posture** | ❌ Not exposed as a field an agent can read at all |
| **Recency** | ❌ Not surfaced as a signal, despite being one of the three factors that decide citation |

**The bottom four rows are the strategy.** They are places where real human trust equity has been accumulated and is not converting — attributes humans could have told us and weren't asked for, verification work that happens invisibly, freshness that nobody can query.

This reframes both bets:

- **Bet 1 is not "collect more reviews."** It's *capture human equity in a form that converts* — attributes as structured values rather than facts buried in prose.
- **Bet 2 is not "be open to agents."** It's *build the conversion layer* — expose what's already been earned in a shape a machine can read.

And it connects to the founding insight directly. Peter Mühlmann built Trustpilot because **reputation that can't travel is worthless**. The 2026 version is the same sentence with one word changed: **reputation that can't be parsed is worthless.** Portability was the problem then; legibility is the problem now.

## Absence is penalised, and it's quantified

Bazaarvoice cites research that **AI agents are 20–40% less likely to select a product when key information is missing.**

That is the product-level analogue of the Seer finding that ChatGPT flags the *absence* of a Trustpilot profile in 34.4% of responses. Missing data isn't neutral at either level — it's evidence against.

And the benchmark the agent-experience field has settled on is **95%+ fill rate on core attributes**. Trustpilot's attribute fields are optional at the point of collection, which puts actual fill rate near zero. **That gap — 95% target against a near-zero floor — is the clearest single number for the deck.**

## The AX framing

"Agent Experience" (AX) is emerging as the counterpart to UX: the experience an AI agent has interacting with a product or platform. The governing principles:

- Agents read **structured product data before marketing copy** — incomplete attributes make products invisible in agent-led search
- Every attribute needed to match a product to a query must be **machine-readable, semantically labelled and unambiguous**
- JSON-LD lets agents extract attributes **without rendering the page**
- Morgan Stanley expects "agent search engine optimisation" to be an established category in 2026

**The uncomfortable implication for Trustpilot:** Product Review Pages are a *UX* artefact — a page for a human, which an agent can scrape if it chooses. Winning AX means shipping something an agent is *designed* to consume. Those are different products.
