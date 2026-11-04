# Checklist to complete the deck

*Last updated: 4 November 2026*

---

## 1. Further research — how agents read and parse reviews

**Goal:** go a layer deeper than "agents weight review data heavily." Understand the actual mechanics of ingestion, so Bet 1 and Bet 2 are designed against how models really behave rather than how we assume they do. **Not Trustpilot-specific — the general case.**

- [ ] **Retrieval mechanics** — how review text gets chunked, embedded and retrieved. Does a model see whole reviews, snippets, or a pre-aggregated summary?
- [ ] **How many reviews actually get read.** Context limits mean a model never reads 4,000 reviews. What's the practical sample, and how is it selected — most recent, most helpful, highest-signal?
- [ ] **Aggregate vs. text weighting.** We know 59% of citing answers quote the TrustScore. When does a model reach past the number into the prose, and what triggers that?
- [ ] **Attribute extraction.** How models pull "runs small" or "battery lasts 8 hours" out of free text — and whether an explicit structured attribute outperforms the same fact stated in prose. **This is the load-bearing question for Bet 1's form design.**
- [ ] **What makes a review quotable.** Length, specificity, concreteness, first-person, named attributes. Is there a shape of review that gets surfaced disproportionately?
- [ ] **Recency weighting, mechanically.** Blair says stale reviews get cited less. Is that the model, the retrieval layer, or the ranking of the source page?
- [ ] **Engine differences.** ChatGPT vs Gemini vs Perplexity vs AI Overviews — different retrieval stacks, likely different review handling. Seer showed Gemini at 21% vs 49–58% elsewhere; is that sourcing, weighting, or partnership?
- [ ] **Summarisation behaviour and bias** — do models over-index on negative reviews, extremes, or recency when synthesising?
- [ ] Look for academic / industry work on review summarisation and opinion extraction, not just vendor blogs

**Output:** a new file in `agentic-discoverability/` — `07-how-models-parse-reviews.md` — and any consequent revisions to Bet 1's collection design.

*(See [`agentic-discoverability/06-why-company-reviews-get-cited.md`](agentic-discoverability/06-why-company-reviews-get-cited.md) for the companion analysis of why company-level citation already works — that one is done.)*

**Two questions that surfaced from the 06 analysis and belong in this research:**
- [ ] **Where is the per-SKU presence cliff?** The company-level curve is 1% → 54% at ~13 reviews → 75% at ~81. The product-level equivalent is unmeasured and would be the single most useful number in the deck.
- [ ] **Product identity.** The domain was a free primary key at company level; products have no equivalent in use. How do models and agents resolve product identity — GTIN, title matching, something else?

---

## 2. Define strategy

The spine exists in [`deck/01-strategy-spine.md`](deck/01-strategy-spine.md). What's still genuinely open:

- [ ] **Resourcing.** What does Bet 1 cost, and what gets stopped to fund it? The trade-offs section is strong on product trade-offs and silent on cost — and the brief explicitly asks how trade-offs get handled.
- [ ] **Who pays for verification** of syndicated content — the partner platform, or the brand?
- [ ] **US framing:** does the US slide lead with **offerings** (financial services, where the CEO's evidence is) or **ecommerce** (where volume and product-intent demand are)? Pick one.
- [ ] **Three headline metrics.** The metric tree is complete; it needs a top three that fit on one slide.
- [ ] **Sequencing across 12–18 months** — a single timeline view across all three bets plus the repackaging.
- [ ] Confirm PRP rollout status — H1 call says all languages from 1 Oct, help centre still says six English markets

---

## 3. Deck build

- [ ] **Decide format** — slides to present from, or a written memo, or both
- [ ] **Narrative order.** Current working order: founding insight → the shift → query divergence → why us → why not yet → US → three bets → trade-offs → metrics. Open on *"he couldn't take his seller rating with him"*.
- [ ] **Slide count and depth** — what's on the page vs. what's in the appendix
- [ ] **Pick the visuals.** Candidates: the funnel citation chart (2% → 16% → 24%), the presence cliff (1% → 54% → 75%), the company-intent vs product-intent query table, the one-engine-three-payoffs diagram, the provenance tier table
- [ ] **Appendix** — Seer methodology, competitive landscape, the agentic-discoverability detail
- [ ] Decide what to do with the product-flow teardown screenshots — they're strong evidence of the collection gap

---

## 4. Build a conversational review collection prototype

**A working demo of Bet 1, used to collect feedback on the deck itself.** QR code at the end of the presentation → reviewers scan → conversational flow captures structured attributes and sentiment about the presentation.

Strong move for three reasons: it demonstrates the product rather than describing it; it proves the conversational-vs-form thesis with real completion data; and it mirrors the QR-code collection Trustpilot already ships, extended with the richness half they haven't built.

- [ ] **Scope the flow** — what it asks, how many turns, where it stops
- [ ] **Define the attributes** it captures about the deck (e.g. clarity, strategic depth, evidence quality, actionability) — mirroring how product attributes would work
- [ ] **Build it** — mobile-first web page, conversational rather than a form, progressive: quick rating first, depth for those who continue
- [ ] **Generate the QR code** linking to it
- [ ] **Capture and store responses** so results can be read back
- [ ] **Instrument it** — completion rate, attributes captured per response, time to complete. This is the evidence for the Bet 1 thesis.
- [ ] Optional: show the captured structured output live as the closing slide — "this is what an agent would consume"

**Design constraint:** it has to embody the principles from Bet 1, or it undercuts the argument. Attributes elicited conversationally rather than offered as a skippable star row. Progressive depth. Near-frictionless floor.

---

## Status

| Item | State |
|---|---|
| Research base (10 notes + reference material) | ✅ Done |
| Agentic discoverability definition | ✅ Done — incl. the company-level blueprint. One research gap open (item 1) |
| Strategy spine, three bets, trade-offs, metrics | 🟡 Drafted — 6 open decisions |
| Deck build | ⬜ Not started |
| Collection prototype | ⬜ Not started |
