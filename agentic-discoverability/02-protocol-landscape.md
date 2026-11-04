# The protocol landscape — what matters, what's noise

A lot of standards are being announced. Most don't matter to Trustpilot. Here's the filter.

---

## The one that matters: MCP

**Model Context Protocol** — open protocol created by Anthropic, November 2024. Servers expose tools; agents discover and call them at runtime over JSON-RPC 2.0.

**Why it matters here:** it has become the default way an agent reaches a data source, and commerce has adopted it fast.

- **Adobe made MCP the default agent protocol for Commerce** — exposing catalogue, cart, pricing, inventory, promotions, checkout, OMS and post-purchase to agents
- **Microsoft shipped a Dynamics 365 Commerce MCP server at NRF 2026** — product discovery, inventory, pricing, discounts, checkout, store operations
- An **IETF draft** (`draft-soden-wellknown-mcp-commerce`) is working on well-known discovery for commerce MCP servers

**The gap: there is no Trustpilot MCP server.** The commerce agent ecosystem is standardising on a protocol where the most-cited review source on the internet has no presence. An agent wired into Adobe or Dynamics can query catalogue, price and inventory through a standard interface — and then has to go scrape a web page for trust data.

**This is the single most concrete, most shippable item in Bet 2.**

---

## Worth tracking, not building for yet

**UCP — Universal Commerce Protocol** (Google, NRF 2026). Merchant capability profiles: an agent can list what services a merchant supports — checkout, product search, returns — before it transacts. Relevant because Google is the other half of the citation story and because capability declaration is where Trustpilot could eventually advertise "independent review data available here."

**ACP — Agentic Commerce Protocol** (OpenAI + Stripe). Shared Payment Tokens, merchant-bound and single-use. Launched Sept 2025, **used in ChatGPT Instant Checkout until March 2026 when OpenAI retired it** in favour of dedicated retailer apps. Transaction layer, not a discovery layer — out of scope for a trust-data provider, and a reminder that protocols at this layer are still churning.

**AP2** — agent payments. Same reasoning: not our layer.

**Standards bodies now circling:** NIST launched an AI Agent Standards Initiative (17 Feb 2026); the FIDO Alliance announced agentic interaction standards (28 Apr 2026). Worth watching for the moment provenance and verification get standardised — that is the conversation Trustpilot should want a seat at.

---

## Asked and answered: llms.txt

A Markdown file at the domain root giving AI systems a curated index of a site's important content — robots.txt's opposite number. Proposed by Jeremy Howard (Answer.AI), September 2024.

**It dominates the AEO content landscape, so expect it to come up. The short answer:** adoption reached ~10% of 300,000 surveyed domains by May 2026, but largely via platform defaults (Shopify, Mintlify) rather than deliberate choice; **Google doesn't read or act on it**; there's **no confirmed effect on AI search rankings or citations**; and it remains a community convention, not a W3C or IETF standard. Real usage is IDE agents fetching documentation.

**Verdict: ship it as housekeeping, don't think about it again.** It's a day of work and it isn't a strategy. *(Same posture for WebMCP, SDF and CAP — earlier stage, watch, don't build.)*

## The boring one that actually works: schema.org / JSON-LD

Not new, not exciting, and currently the highest-leverage machine-readable surface there is.

- **Product schema** carries name, description, image, brand, SKU, GTIN
- **Offer schema** carries live price and availability
- **AggregateRating** carries review score and count
- **Review** snippets get **directly quoted inside AI Overviews** when the system wants to justify a recommendation
- A Product block **without** AggregateRating or Review ranks below competitors that include review markup
- JSON-LD lets agents extract attributes **without rendering the page**

Trustpilot already emits Review, AggregateRating, Organization and LocalBusiness JSON-LD. **The question for Bet 2 is whether product-level attribute data is in there in a form an agent can filter on — or whether it's only the headline score.**

---

## What this means for the bet

| Priority | Action | Rationale |
|---|---|---|
| **1** | **Ship a Trustpilot MCP server** | The protocol commerce agents are standardising on. We're absent. Concrete, shippable, demonstrable. |
| **2** | **Rich attribute data in product JSON-LD** | The surface that provably works today, extended from headline score to filterable attributes |
| **3** | **Open agent-queryable endpoint** | See `03` — today's APIs are auth-gated and built for the wrong consumer |
| **4** | Track UCP, NIST, FIDO | Provenance standards are where Trustpilot's interest lies |
| **5** | llms.txt and similar conventions | Housekeeping. Not a slide. |
