# Why company reviews already work — and what transfers to products

Trustpilot is a **top-10 most-cited domain on the internet**, alongside Wikipedia and YouTube. ChatGPT citations are up **400% YoY**. It's the most-cited review platform on three of four engines tested — 58% on ChatGPT, 52% Perplexity, 49% Google AI Mode.

**That didn't happen by accident, and it wasn't bought.** 99.5% of observed citations came from the organic strength of the content — the model wasn't looking for Trustpilot by name.

So before designing the product-level play, it's worth decomposing exactly *what* about the company-level product makes it so machine-legible. **That decomposition is the blueprint** — and it also shows which parts transfer to products for free and which have to be rebuilt.

---

## The eleven mechanics that make company reviews citable

### 1. One canonical URL per entity, keyed on a global identifier
`trustpilot.com/review/{domain}`

**This is the most underrated thing in the entire product.** The company's own domain *is* the primary key. A model resolving "is acme.com legit?" can construct or recognise the right URL deterministically. No disambiguation, no fuzzy matching, no catalogue lookup. The identifier the world already uses to name the entity is the identifier Trustpilot uses to address it.

### 2. One unambiguous scalar — the TrustScore
A single number, same scale for every entity, directly comparable across all of them. **59% of citing answers quote it.** It converts to machine equity perfectly because there is nothing to interpret.

### 3. Near-universal entity coverage
Any company can have a profile; profiles exist whether or not the business claims them, and a business **cannot remove its profile**. Trustpilot has effectively mapped the entity space. The model almost always finds *something*.

### 4. The content answers the question actually being asked
Company-intent queries are evaluative: *is this reliable, how's their service, will I get refunded?* Review text answers those directly — the model doesn't have to infer sentiment from context. **Relevance** is structural, not engineered.

### 5. Continuous freshness
200,000+ new reviews a day. A company page is effectively never stale. **Recency** — one of the three factors Blair names — is a property of the system, not something anyone manages.

### 6. Independence that is structurally legible
A business can't delete a critical review, can't demand removal, can't take its profile down. A model doesn't have to discount for seller bias, the way it must with brand-owned content. **This is why an AI reaches past a company's own website in the first place.**

### 7. Domain authority 100
Models don't read the web — they run searches and pull from reputable sources. Trustpilot ranks when AI searches for brand information. **Ranking**, the third of Blair's factors.

### 8. Schema markup that doesn't require rendering
JSON-LD: Review, AggregateRating, Organization, LocalBusiness. Extraction is cheap and deterministic.

### 9. Cross-industry universality
One source covers telco, insurance, software, logistics, retail. A model doesn't need a different review source per vertical the way it would with Yelp or TripAdvisor. **One integration, total coverage** — which is exactly Mühlmann's "universal symbol of trust" expressed as a machine-readability advantage.

### 10. Enough volume per entity to synthesise themes
Models summarise recurring patterns rather than quoting one person. Seer found five themes dominating: customer service (63%), shipping (34%), product quality (33%), legitimacy concerns (30%), refunds (21%). **Theme synthesis requires depth per entity** — you can't find a pattern in three reviews.

### 11. Absence is informative — *because* coverage is near-universal
When ChatGPT searched Trustpilot and found no profile, it **still mentioned Trustpilot 34.4% of the time**, to flag the missing evidence.

This is the most interesting one, and it's a second-order effect: **absence only carries meaning because presence is the norm.** Trustpilot earned the right to have its silence be a signal by covering nearly everything first.

---

## The transfer test

Which of these does Product Reviews get for free, and which must be rebuilt?

| # | Mechanic | Company level | Product level | Transfers? |
|---|---|---|---|---|
| 1 | Canonical URL on a global key | ✅ the domain | ❌ no universal product key in use; PRPs keyed on internal catalogue IDs | **No — rebuild** |
| 2 | One unambiguous scalar | ✅ TrustScore | 🟡 product score exists but is **deliberately separate from the TrustScore** | **Partial** |
| 3 | Near-universal coverage | ✅ | ❌ restricted beta, selected categories, subscription-gated | **No — rebuild** |
| 4 | Content answers the query | ✅ evaluative by nature | 🟡 needs attributes, which are optional | **Partial** |
| 5 | Continuous freshness | ✅ 200k/day | 🟡 depends entirely on per-SKU volume | **Partial** |
| 6 | Structural independence | ✅ | ✅ inherited | **Yes — free** |
| 7 | Domain authority 100 | ✅ | ✅ inherited | **Yes — free** |
| 8 | Schema markup | ✅ | 🟡 present, but unclear whether attributes are in it | **Partial** |
| 9 | Cross-industry universality | ✅ | ❌ selected categories only | **No — rebuild** |
| 10 | Volume per entity for themes | ✅ | ❌ most SKUs have few or no reviews | **No — rebuild** |
| 11 | Absence as a signal | ✅ 34.4% | ❌ requires coverage first | **No — downstream of 3** |

### What this tells us

**Two things transfer for free, and they're the two hardest to build:** domain authority and structural independence. Product Review Pages inherit a DA-100 domain and a two-decade reputation for neutrality on day one. **No competitor can buy that.** It's the reason this strategy is viable at all.

**Everything else has to be rebuilt — and they're all versions of the same problem: coverage and identity.**

Items 1, 3, 9, 10 and 11 are one problem wearing five hats. Trustpilot won at company level by **covering the entity space and addressing it with a key the world already uses**. At product level it has neither: a tiny fraction of products, reachable only through internal catalogue IDs, in selected categories.

**That is the thing to copy.** Not the pages — the coverage.

---

## The three implications for the bets

**1. Identity is a missing bet-level problem.** The domain was a free primary key at company level. Products have no equivalent in use. **GTIN is the closest thing** and it's inconsistently applied — and the help centre already flags that products sharing exact titles get excluded entirely, which is an identity collision problem surfacing as a product rule.

Resolving product identity — GTIN-first, with a deterministic fallback — is the prerequisite for canonical URLs, for cross-platform syndication matching (Bet 3), and for an agent being able to *ask about a specific product* at all (Bet 2). **It is currently nobody's bet and it should probably be inside Bet 1.**

**2. The presence cliff is the coverage argument, restated.** 1% → 54% at thirteen reviews → 75% at eighty-one. That curve *is* mechanics 3, 5 and 10 interacting: once an entity crosses a volume threshold, everything else fires. **The same cliff almost certainly exists per-SKU, and nobody has measured where it sits.** Finding that number — how many reviews a product needs before it starts getting cited — would be the single most useful piece of evidence in the deck.

**3. The TrustScore separation is a real strategic decision, not an inherited default.** Product reviews sit outside the TrustScore deliberately. That protects merchant-trust integrity — a bad product shouldn't tank a good merchant's score, and vice versa. But it also means the product-level play forfeits mechanic 2, **the single most-cited artefact Trustpilot produces.**

The resolution isn't to merge them. It's to make the **product score** its own clean, comparable, universally-scaled scalar — the TrustScore's equivalent at SKU level — and to get it onto enough products that it becomes the thing a model reaches for. That's mechanic 2 rebuilt rather than borrowed.

---

## The one-line version

> We are cited at company level because we **covered the entity space and addressed it with a key the world already uses** — then put one clean number and fresh, independent evidence at every address. Products inherit the authority and the independence for free. They inherit **none of the coverage and none of the identity.** That is the whole job.
