# One entity model: making ecommerce and offerings consistent for the MCP layer

*Two go-to-market motions with very different shapes — physical SKUs with GTINs, and offerings with no identifier at all — have to resolve into **one** interface an agent can query without special-casing.*

---

## The framing this falls out of

| | **Ecommerce** | **Offerings** |
|---|---|---|
| **Motion** | Engineering and architecture | **Sales-push** |
| **Why** | GTINs, catalogue feeds, variant rollup, SKU matching for syndication — the genuinely hard technical problems live here | Existing enterprise accounts, existing verticals, existing sales team. The work is taxonomy, enablement and legal — not engineering. |
| **Cost shape** | High build, low per-customer | Low build, high per-customer touch |

**That asymmetry is a feature.** It means offerings can move on a sales timeline while the engineering investment concentrates where the hard problems are — provided the data model underneath is built to carry both from day one.

## The trap

**If ecommerce drives the schema, offerings becomes a retrofit.**

Design for ecommerce in isolation and you will bake in:
- **GTIN as the primary key** — offerings have none
- **Variants as size/colour** — a savings account has tiers, not variants
- **Physical attributes** — material, durability, shipping
- **A retail category taxonomy**

Then offerings arrives and needs a parallel model, a second set of MCP tools, and an agent that has to know in advance whether it's asking about a jacket or a mortgage. **That's bad agent experience and it's expensive to unpick later.**

> **The rule: ecommerce drives the *requirements*, but must not define the *schema*.** Build the hard case generically; the easy case is then free.

---

## The model

The common abstraction is **a reviewable thing offered by a business** — which is also exactly what the company-level product already models one level up.

### Identity — don't make GTIN the primary key

```
Offering
├─ offering_id            Trustpilot canonical ID (always present)
├─ provider               the business — keyed on domain, as company profiles already are
├─ name
├─ category               from a category tree that spans retail and non-retail
└─ external_identifiers[] a LIST, not a field
     ├─ { type: "gtin",  value: "05012345678900" }   ← ecommerce
     ├─ { type: "mpn",   value: "ABC-123" }
     ├─ { type: "sku",   value: "merchant-internal" }
     └─ (offerings populate this sparsely, or not at all)
```

**Why a list rather than a GTIN field:** ecommerce gets the deterministic matching it needs for syndication; offerings work with zero external identifiers; and the MCP interface never changes shape.

**And the fallback identity is one we already know works.** `{provider_domain} + {offering_name}` resolves uniquely in the overwhelming majority of cases — which is mechanic #1 from [`06`](06-why-company-reviews-get-cited.md) reused one level down. The domain was a free primary key at company level; **provider + offering name is the product-level equivalent**, and it works whether or not a GTIN exists.

*(This also explains the existing rule that products sharing an exact title are excluded — that's an identity collision surfacing as a product constraint. Scoping names to a provider mostly dissolves it.)*

### Attributes — one shape, category-scoped vocabularies

The *content* differs completely. The *structure* shouldn't.

```
Attribute
├─ key          "sizing_accuracy" | "claims_handling"
├─ label        human-readable
├─ value        normalised score
├─ scale        so agents can compare across attributes
├─ sample_size  how many reviews produced it
└─ scope        which category vocabulary it belongs to
```

| Ecommerce vocabulary | Offerings vocabulary |
|---|---|
| sizing accuracy, material quality, durability, colour accuracy, value for money | rate competitiveness, fee transparency, claims handling, onboarding, app quality, service responsiveness |

**Same structure, different vocabulary.** The MCP server returns `attributes[]` either way and the agent filters identically — which is the whole point, because agents filter on attributes before they rank.

### Where the vocabularies come from

**Generated, not configured.** An LLM reads the product or offering and proposes the attributes worth asking about — the collection flow then asks them (see Initiative 1). This is what makes the model viable across both motions: nobody hand-builds an attribute taxonomy for financial services, and no brand configures one for a 2,000-product catalogue.

**Generated at category level, not per product.** This is the constraint that makes the data filterable: *arch support* must mean the same thing on every running shoe, or an agent cannot compare across them. Per-product free-form attributes produce one-offs — rich to read, useless to filter.

So the vocabulary is a **category-scoped, model-generated, human-reviewable set**, with per-product phrasing variation on top. That gives coverage without configuration and comparability without a hand-built taxonomy.

### Provenance travels with everything

Every review and every derived attribute carries the tier from Trade-off 3 — `verified_first_party`, `verified_syndicated`, with verification method and recency. **Identical for both motions**, because it's a property of how the review was obtained, not what it describes.

---

## What this buys

**1. One MCP tool set.** `lookup_offering`, `compare_offerings`, `get_attributes`, `get_provenance` — the agent never needs to know whether it's a jacket or a current account.

**2. Syndication matching works where it's needed and is irrelevant where it isn't.** Bet 3 matches on `external_identifiers` — essential for ecommerce, where competing platforms hold overlapping catalogues. Offerings have no competing source to match against, so the absence of identifiers costs nothing.

**3. It carries "trust signals beyond reviews."** The model is a reviewable entity with signals attached. New signal types extend the same object rather than needing a new one — which is the stated roadmap direction.

**4. The sales-push motion stays cheap.** Launching a new offerings vertical becomes: define a category attribute vocabulary, enable the accounts. **A taxonomy and enablement exercise, not an engineering project.** That's what makes a sales-led motion viable.

---

## What this means for sequencing

**Build the entity model once, early, driven by ecommerce's hard requirements — but designed generically.**

| Phase | Engineering (ecommerce-driven) | Sales-push (offerings) |
|---|---|---|
| **0–6 mo** | Entity model and identity resolution. GTIN-first with provider+name fallback. Category tree spanning retail and non-retail **from day one**. | One vertical pilot (TUI-style), attribute vocabulary design, legal review |
| **6–12 mo** | Variant rollup, syndication matching, MCP v1 | Pilot proves out; second vocabulary; enablement |
| **12–18 mo** | Open agent endpoint, scale | **Scales on the model already built** — no new engineering |

**The test to apply at design time:** *could a savings account be represented in this schema without a single field being NULL-by-necessity or misused?* If not, the schema is retail-shaped and offerings will cost ten times more later.

---

## The line for the deck

> Ecommerce gets the engineering because that's where the hard problems live — GTINs, variants, catalogue matching. Offerings is a sales-push motion into accounts we already have. **They stay consistent because we build one entity model, keyed on provider plus offering with external identifiers as an optional list rather than GTIN as the primary key.** Agents see one interface. Launching a new vertical becomes a taxonomy exercise, not an engineering project.
