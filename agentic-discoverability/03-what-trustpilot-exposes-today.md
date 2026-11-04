# What Trustpilot exposes to machines today — and the gap

---

## What exists

### APIs

| API | What it does |
|---|---|
| **Reviews API** | `api.trustpilot.com/v1`, OpenAPI 3.2.0, API Key and OAuth 2.0 |
| **Product Reviews API** | Get product reviews by **SKU**, **productUrl** or **customerProductId** |
| **Private Products API** | Accepts product data: `sku`, `title`, `link`, `imageLink`, `gtin`, `mpn`, `brand`, `price`, `currency`, `description` |

Fields exposed on reviews include: `companyDomain`, `companyName`, `companyTrustScore`, `reviewId`, `reviewUrl`, `title`, `text`, `rating`, `publishedAt`, `experiencedAt`, `updatedAt`, `language`, `likes`, **`isVerified`**, **`verificationLevel`**, **`reviewSource`**, `consumerCountry`.

### Structured data

Trustpilot pages emit JSON-LD: **Review**, **AggregateRating**, **Organization**, **LocalBusiness**.

### Pages

Product Review Pages — public, indexed, showing product name, details, product score, individual reviews, business replies and review attributes.

---

## The gap, stated precisely

**Trustpilot's machine-readable surface is built for the wrong consumer.**

Today's APIs answer the question *"let me pull my own review data into my systems"* — asked by a **paying customer, authenticated via OAuth, about a business they own**.

An agent asks a completely different question: *"which of these twelve products should I recommend, and what's the independent evidence?"* — asked by a **non-customer, unauthenticated, about products across many brands at once**.

| | Today's API | What an agent needs |
|---|---|---|
| **Who's asking** | A paying customer | Anyone's agent |
| **Auth** | API key / OAuth | Open, or a low-friction agent credential |
| **Scope** | One business's own data | Across brands, for comparison |
| **Shape** | Review objects with prose | Attribute vectors, filterable |
| **Query** | "Give me my reviews" | "Which of these runs small?" |
| **Discovery** | Read the developer docs | Protocol-level, at runtime |

**There is no front door for an agent.** Its only options are scrape a Product Review Page or hope the model memorised something during training. Both work — that's how 400% citation growth happened — but neither is designed, neither is queryable, and neither carries attribute structure.

## Three specific shortfalls

**1. Attribute data isn't exposed as a filterable dimension.**
The live submission form shows **two generic attributes (Quality, Value for money), both marked optional**. Even where richer category attributes are mapped, optional collection means near-zero fill. Against an agent-experience benchmark of **95%+ attribute fill rate**, this is the binding constraint — and it's a Bet 1 problem surfacing as a Bet 2 problem.

**2. Provenance exists but isn't the product.**
`isVerified`, `verificationLevel` and `reviewSource` are already fields in the API. **That's the infrastructure for the most defensible thing Trustpilot could offer an agent:** not just "here's a rating" but "here's a rating, here's how it was verified, here's the fraud posture behind it, here's how fresh it is."

In a world where any site can publish review text, **cryptographic-grade provenance is the scarce good** — and Trustpilot has the fields and the fraud infrastructure already. It just isn't packaged as an agent-facing promise.

This is also exactly what makes the inbound-syndication bet safe: provenance tiering is already modelled in the data.

**3. No protocol presence.**
No MCP server. Adobe and Microsoft have shipped commerce MCP servers; an agent plugged into either can query catalogue, price and inventory through a standard interface and then has nowhere standard to go for trust data.

## What Trustpilot has that nobody can copy

Worth stating plainly, because the gap list is long and the asset is real:

- **400m+ reviews**, 200,000+ new per day
- **Domain authority 100**; top-10 most-cited domain globally
- Fraud detection at a scale nobody else operates — 3.9m fakes removed in H1, 10% of submissions
- **Independence.** Bazaarvoice's content lives inside brand- and retailer-owned pages. Trustpilot's is third-party by construction — which is exactly why an agent reaches past brand-owned content to find it.

**The bet is not to acquire an advantage. It's to make an advantage we already have machine-consumable.**
