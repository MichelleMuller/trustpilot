# Agentic product discoverability

*Working folder to define what Bet 2 — "make product reviews available to agents" — actually means in practice.*

---

## Why this folder exists

"Be open to agents" is not a bet. **Trustpilot is already open, and it's already working** — ChatGPT citations up 400%, top-10 most-cited domain globally, 99.5% of citations won organically. Proposing "keep being open" is proposing the status quo.

So the question this folder answers is: **what would Trustpilot actually build, that it does not have today, to be the product-truth layer agents reach for?**

## The bet, in one line

> **Build the trust infrastructure that agents rely on for information. Good for the consumer. Good for the brand.**

## The answer in one paragraph

> Trustpilot's product data today is **human-readable** (Product Review Pages) and **customer-readable** (authenticated business APIs). It is not **agent-readable** — there is no open, discoverable, machine-first surface where an agent can query product truth without being a paying customer or scraping a web page. Bazaarvoice shipped exactly that in April 2026 and patented it. Bet 2 is building Trustpilot's version on the one thing Bazaarvoice can't match: **independence** — which is also why it serves both sides at once. The consumer gets a better answer because the evidence is independent; the brand gets visibility *because* the consumer can rely on it.

## The four things that define the bet

| # | What | Why it's the gap |
|---|---|---|
| 1 | **An open agent-queryable surface** | Today's APIs are OAuth-gated and built for a business to pull *its own* data. An agent evaluating a product it has no relationship with has no front door. |
| 2 | **Attributes as structured vectors, not prose** | Agents represent products as attribute vectors and filter on them *before* ranking. Trustpilot's attribute data is the native input — and it's optional at collection, so fill rate is near zero. |
| 3 | **Provenance and freshness as first-class fields** | `isVerified`, `verificationLevel` and `reviewSource` already exist in the API. They are the differentiator against an internet of unverifiable review text — and the mechanism that makes inbound syndication safe. |
| 4 | **Protocol presence where agents already look** | MCP is becoming the default commerce agent protocol. There is no Trustpilot MCP server. |

## Contents

| File | What's in it |
|---|---|
| [`01-how-agents-evaluate-products.md`](01-how-agents-evaluate-products.md) | The actual mechanics — filter, rank, format — and what review data does at each step |
| [`02-protocol-landscape.md`](02-protocol-landscape.md) | MCP, UCP, ACP, llms.txt, schema.org. What matters, what's noise |
| [`03-what-trustpilot-exposes-today.md`](03-what-trustpilot-exposes-today.md) | Current API and structured-data surface, and precisely where it falls short |
| [`04-competitive-benchmark.md`](04-competitive-benchmark.md) | Bazaarvoice's Authentic Discovery API — the thing to beat |
| [`05-bet-2-definition.md`](05-bet-2-definition.md) | What we'd ship, in what order, and how we'd know it worked |
| [`06-why-company-reviews-get-cited.md`](06-why-company-reviews-get-cited.md) | **The blueprint** — the eleven mechanics behind Trustpilot's company-level citation dominance, and which transfer to products |
| [`07-entity-model-for-agents.md`](07-entity-model-for-agents.md) | **The architecture** — one entity model so ecommerce (GTINs) and offerings (no identifiers) present a single consistent interface to agents |

*Last updated: 4 November 2026*
