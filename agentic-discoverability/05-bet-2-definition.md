# Bet 2, defined

> **Build the trust infrastructure that agents rely on for information.**
> **Good for the consumer. Good for the brand.**

---

## Why that framing, and not a cleverer one

It uses the company's own language — *"provide the kind of **trust layer or trust infrastructure for AI**"* — so the bet reads as executing stated strategy rather than proposing a detour.

And it names **both halves of the brief in one line**, which no internally-focused framing does:

| The brief asks for | This delivers |
|---|---|
| *"help consumers confidently evaluate products when making purchasing decisions"* | The agent gives a better answer because it has better evidence — **delivered where the consumer actually is**, not on a site they'd have to visit |
| *"help businesses drive visibility of their products in LLMs"* | Their product truth is present, structured and citable **at the moment of decision** |

**The alignment is the whole argument.** These aren't two benefits we happen to deliver — they're the same mechanism seen from two sides, and neither works without the other:

- If we optimised for the **brand alone**, the data would be marketing, and agents would learn to discount it. Brand visibility is only worth anything *because* the content is independent enough for a consumer to rely on.
- If we served the **consumer alone**, there'd be no business. The subscription is what funds the collection, the fraud detection and the infrastructure.

**Independence isn't a constraint on the business model. It is the business model.** That's also the answer to the obvious challenge — *why would an agent use Trustpilot rather than a brand's own product feed?* Because the brand's feed is the brand talking about itself, and the agent already knows to discount that.

---

## The problem, in one line

Trustpilot's product data is **human-readable** and **customer-readable**. It is not **agent-readable**. An agent evaluating a product has no front door — only a page to scrape or a memory to hope for.

> We are already the evidence an agent **quotes**. We are not yet the infrastructure an agent **relies on**.

## The four things we'd ship

### 1. A Trustpilot MCP server
The commerce agent ecosystem is standardising on MCP — Adobe made it the default for Commerce, Microsoft shipped one for Dynamics 365 at NRF 2026, and an IETF draft is formalising discovery. **The most-cited review source on the internet has no presence on it.**

Tools an agent would call: look up product trust data by GTIN/SKU/name; compare several products on attributes; retrieve attribute-level sentiment; retrieve provenance and freshness metadata.

*Most concrete, most shippable, most demonstrable item in the plan.*

### 2. Attributes exposed as a filterable dimension
Agents **filter on attributes before they rank** — a missing attribute means the product is *unmatched*, not down-ranked. Trustpilot's attribute data is the native input, and today the live form offers **two generic attributes, both optional**, which structurally caps per-SKU coverage. *(The 95%+ fill-rate benchmark used in agent-experience work comes from merchant product catalogues, so treat it as an analogy; our real coverage is an internal query, not an external measurement.)*

This is where Bet 1 and Bet 2 meet: **Bet 1 produces attribute values, Bet 2 exposes them as a queryable vector.** Neither works alone.

Also means extending product JSON-LD beyond the headline score into filterable attribute data.

### 3. Provenance and freshness as the headline product
`isVerified`, `verificationLevel` and `reviewSource` already exist. Package them as the promise: not *"here's a 4.6"* but *"here's a 4.6, verified this way, this fresh, backed by fraud models that removed 3.9m fakes last half."*

In an internet filling with synthetic review text, **verifiable provenance is the scarce good.**

And it gets stronger with Bet 3: because **everything syndicated in is screened by Trustpilot's own fraud models**, the promise to an agent isn't just *"we collected this"* — it's *"this passed the detection behind 400m reviews, whoever collected it, with incentivised content removed."* That is a claim no other review source can make, and it's the thing worth exposing as a first-class field.

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
- **Per-SKU attribute coverage** — share of products filterable by attribute. Measure it first; set the target from the baseline.
- Per-review attribute fill rate — the input that drives it
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

**Kill criterion:** if at month 9 per-SKU attribute coverage hasn't moved materially off its baseline and MCP calls aren't growing month over month, the agent surface isn't the constraint — collection is. Stop building distribution and put everything into Bet 1.

---

## What this bet is not

- **Not llms.txt.** 10% adoption driven by platform defaults, Google doesn't read it, no confirmed ranking effect. A day's work, not a strategy.
- **Not a payments or checkout play.** ACP and AP2 are the transaction layer. OpenAI already retired Instant Checkout in March 2026. Not our layer.
- **Not licensing data to model providers.** Blair considered *"licence it out piecemeal and to the highest bidder"* and rejected it on mission grounds.
- **Not a consumer shopping destination.** Serving agents is how we serve the consumer half of the brief without colliding with *"we don't monetise at all through engagement metrics."*

---

## The line for the deck

> **Build the trust infrastructure that agents rely on for information — good for the consumer, good for the brand.**
>
> We are already the evidence an agent **quotes**. We are not yet the infrastructure it **relies on**. Bazaarvoice built the queryable layer first and patented it — but gated, over first-party content, sold on volume. We build it open, over independent content, and sell it on provenance. That is the version they cannot copy — and the version a consumer has reason to trust.
