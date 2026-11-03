# How AI actually sources product data

The mechanics matter, because the strategy has to intervene somewhere in this pipeline.

## The two tracks into an LLM answer

### Track 1 — Structured feeds (contracted, fast, controlled)
- **OpenAI** publishes a product feed spec: product id, title, description, link, price, availability, GTIN, brand, media, seller details, shipping. Merchants submit directly.
- **Google Merchant Center** takes product data and separate **product review feeds** (minimum 50 total reviews, 3 per product). Approved review partners include Trustpilot, Yotpo, Bazaarvoice, Loox and Junip.
- **Google Shopping Graph** — 50bn+ products — powers Gemini, AI Mode and AI Overviews. **Bazaarvoice feeds it directly** with verified reviews, customer photos and review facets, refreshed every 24 hours.

### Track 2 — Crawling and structured markup (organic, slower, uncontracted)
- **OAI-SearchBot** crawls pages and reads schema.org markup during live searches
- **Product schema** carries name, description, image, brand, SKU, GTIN
- **Offer schema** carries live price and availability
- **AggregateRating schema** carries review scores and counts
- **Review schema** snippets get **directly quoted inside AI Overviews** when the system wants to justify a recommendation

A Product schema block **without** AggregateRating or Review properties ranks below competitors that include review markup. ChatGPT Shopping surfaces review counts directly inside conversational answers as justification.

**Trustpilot's current position is almost entirely Track 2** — 99.5% of its citations were organic, won on domain authority and page structure, not on a contract. That is impressive and it is fragile. Track 1 is where the durable positions are being allocated right now, and Bazaarvoice has taken one.

## The three signals AI rewards in review content

From the Seer study, review content works for AI because it supplies:

1. **Relevance** — consumer questions about AI are evaluative ("is this reliable?", "how's their service?"). Review text answers those directly; the model doesn't have to infer sentiment.
2. **Ranking** — models don't read the whole web. They run searches and pull from reputable sources. High domain authority plus AI-friendly page structure wins.
3. **Recency** — models prioritise what's true *now*. Review platforms update continuously; a brand's own site doesn't.

**Recency is the most under-exploited of the three.** It is the one advantage a review platform has that a brand page structurally cannot replicate, and it is the one Trustpilot's current product does least to operationalise. Nothing in the offering today makes freshness *legible* to a model or *targetable* by a business.

## Agentic commerce — where this is heading

- **Consumer-side agents today:** ChatGPT, Google Gemini / AI Mode shopping, Perplexity's Comet browser and "Buy with Pro", Amazon's Rufus
- **Agentic Commerce Protocol** (OpenAI + Stripe, Sept 2025): Shared Payment Tokens, merchant-bound, amount-bound, time-bounded, single-use
- **March 2026:** OpenAI retired Instant Checkout in favour of dedicated retailer apps inside ChatGPT; purchases increasingly complete on the merchant's own site
- Traffic from AI sources to US retail sites grew **393% YoY** in Q1 2026
- Trustpilot's own observation: **visitors arriving from AI tools have unusually high buying intent**

### The strategic read

The agent is becoming the shopper. When an AI agent evaluates products on a consumer's behalf, it does not read marketing copy, look at a hero image, or respond to a brand story. **It reads structured attributes and independent validation.**

That is a narrowing of what matters — and the things that survive the narrowing are exactly the things Trustpilot produces: verified, independent, attribute-level, continuously refreshed product sentiment.

The open question the strategy has to answer: **does Trustpilot serve the agent, or serve the human?** The brief asks for both. They are not the same product.

- **Serving the human** means a consumer destination: product comparison, attribute filtering, "which of these actually holds up" — building a shopping surface on top of 361m reviews.
- **Serving the agent** means being machine-legible infrastructure: feeds, APIs, schema, licensing deals, structured attribute data refreshed continuously.

Trustpilot's traffic is ~58% organic search — the exact channel being disintermediated. Serving the human is a defence of a declining channel. Serving the agent is an offence into a growing one. But the agent only values Trustpilot because humans wrote the reviews, and humans only write reviews because the destination exists.

**That dependency is the strategic knot the deck has to cut.**
