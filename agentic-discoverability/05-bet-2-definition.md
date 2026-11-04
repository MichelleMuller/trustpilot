# Bet 2, defined

> **Make Trustpilot the product-truth layer agents query — not the web page they scrape.**

---

## The problem, in one line

Trustpilot's product data is **human-readable** and **customer-readable**. It is not **agent-readable**. An agent evaluating a product has no front door — only a page to scrape or a memory to hope for.

## The four things we'd ship

### 1. A Trustpilot MCP server
The commerce agent ecosystem is standardising on MCP — Adobe made it the default for Commerce, Microsoft shipped one for Dynamics 365 at NRF 2026, and an IETF draft is formalising discovery. **The most-cited review source on the internet has no presence on it.**

Tools an agent would call: look up product trust data by GTIN/SKU/name; compare several products on attributes; retrieve attribute-level sentiment; retrieve provenance and freshness metadata.

*Most concrete, most shippable, most demonstrable item in the plan.*

### 2. Attributes exposed as a filterable dimension
Agents **filter on attributes before they rank**. Trustpilot's attribute data is the native input and today it's near-absent — two generic attributes, both optional at collection, against an industry benchmark of **95%+ fill rate**.

This is where Bet 1 and Bet 2 meet: **Bet 1 produces attribute values, Bet 2 exposes them as a queryable vector.** Neither works alone.

Also means extending product JSON-LD beyond the headline score into filterable attribute data.

### 3. Provenance and freshness as the headline product
`isVerified`, `verificationLevel` and `reviewSource` already exist. Package them as the promise: not *"here's a 4.6"* but *"here's a 4.6, verified this way, this fresh, backed by fraud models that removed 3.9m fakes last half."*

In an internet filling with synthetic review text, **verifiable provenance is the scarce good.** It's also what makes inbound syndication safe — tiering by provenance is already modelled in the data.

### 4. Open, not gated
Bazaarvoice's equivalent is enterprise-only. Agents reward **coverage**. An open surface across the whole catalogue is both strategically consistent with the open-platform thesis and commercially differentiating — and it pairs with the repackaging: stop monetising access, monetise visibility and insight.

---

## Sequencing

| When | What | Gate |
|---|---|---|
| **0–3 mo** | Product JSON-LD extended to attributes; provenance fields surfaced; llms.txt as housekeeping | None — ship now |
| **3–6 mo** | **MCP server, v1** — product lookup and comparison tools | Needs enough attribute coverage to be worth querying |
| **6–12 mo** | Open agent endpoint; provenance as a named, documented promise | Needs Bet 1 volume |
| **12–18 mo** | Agent surface partnerships, the way they opened to Meta Muse | Needs a track record |

**The dependency to state plainly:** an agent surface over a sparse catalogue is worse than no agent surface. **Bet 1 gates Bet 2.** Don't ship the API before the data is worth querying.

---

## How we'd know it's working

**Leading**
- Attribute fill rate per review, and per SKU *(today: near zero. Target: 95%+)*
- % of catalogue with queryable attribute data
- Review recency distribution — median age of reviews per SKU

**Middle**
- MCP server calls; unique agents querying
- Product-level citation rate in comparison queries
- Co-mention share in "X vs Y" and "best ___ for ___" prompts
- Agent surfaces opened to, beyond organic crawling

**Lagging**
- Product Reviews attach rate and ARR
- AI-referred traffic and its conversion — Trustpilot already observes AI-sourced visitors arrive with unusually high intent, and doesn't yet measure it
- Net dollar retention on accounts using Product Reviews

**Kill criterion:** if at month 9 attribute fill rate is below 40% and MCP calls aren't growing month over month, the agent surface isn't the constraint — collection is. Stop building distribution and put everything into Bet 1.

---

## What this bet is not

- **Not llms.txt.** 10% adoption driven by platform defaults, Google doesn't read it, no confirmed ranking effect. A day's work, not a strategy.
- **Not a payments or checkout play.** ACP and AP2 are the transaction layer. OpenAI already retired Instant Checkout in March 2026. Not our layer.
- **Not licensing data to model providers.** Blair considered *"licence it out piecemeal and to the highest bidder"* and rejected it on mission grounds.
- **Not a consumer shopping destination.** Serving agents is how we serve the consumer half of the brief without colliding with *"we don't monetise at all through engagement metrics."*

---

## The line for the deck

> We are already the evidence an agent **quotes**. We are not yet the data an agent **queries**. Bazaarvoice built the queryable layer first and patented it — but they built it gated, over first-party content, and sold it on volume. We build it open, over independent content, and sell it on provenance. That is the version they cannot copy.
