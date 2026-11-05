# Checklist

*Last updated: 5 November 2026 — **deck delivered**.*

---

## Status

| | |
|---|---|
| Research base — 12 notes + reference material | ✅ Done |
| Agentic discoverability — 7 files defining Bet 2 | ✅ Done |
| Strategy — two bets, four initiatives, trade-offs, roadmap, resourcing, monetisation, metrics | ✅ Settled |
| Deck outline | ✅ Done |
| **Deck — 29 slides, built and exported** | ✅ **Delivered** |
| Conversational prototype — built, hosted, wired to the sheet | ✅ Done |
| QR codes — three, generated | ✅ Done |

---

## 1. Research

- [x] Trustpilot today — business, financials, where Product Reviews sits
- [x] The Seer white paper, synthesised — including what it doesn't prove
- [x] Competitive landscape — reviews/UGC, AEO platforms, the platform layer
- [x] How LLMs source product data; agentic commerce
- [x] Live investigation of Product Review Pages
- [x] The CEO's stated strategy, from the verified transcript
- [x] The US market
- [x] Offerings vs ecommerce — two motions, two jobs
- [x] Coverage limits — what can't be fixed, and why that's correct
- [x] Agentic discoverability — how agents evaluate, protocols, what Trustpilot exposes, the benchmark, the entity model, and why company reviews already get cited
- [x] **Primary sources secured** — both transcripts, the white paper, product-flow screenshots
- [x] **Provenance audited** — weak sources flagged in `sources.md`, one claim retracted

**Deliberately not done:** a deeper dive into how models mechanically parse reviews — retrieval, chunking, attribute extraction, per-product presence cliff. *Would sharpen Bet 1's design; not needed for the deck. Parked below.*

## 2. Strategy

- [x] Positioning and thesis
- [x] Two bets, four initiatives
- [x] Trade-offs, with the costs named
- [x] Resourcing — stop funding the display layer, fund the data layer
- [x] Monetisation — charge for verified supply, give away display and demand
- [x] Roadmap, 0–6 / 6–12 / 12–18, plus what it buys next
- [x] Metrics, guardrails and kill criteria
- [x] Syndication verification — yes, everything inbound is screened
- [x] Who pays for verification — the brand, bundled into the syndication fee
- [x] Headline metrics — one number per initiative *(settled on the slide)*

## 3. Deck

- [x] Format — slides
- [x] Narrative order — five sections, thesis as the hinge
- [x] Visuals — funnel pipeline, mocked product pages, roadmap, provenance tiers
- [x] Appendix — Seer detail, why product level is harder, two assets, research discoveries
- [x] Product-flow teardown screenshots used as evidence
- [x] **Built and exported**

## 4. Prototype

- [x] Scope the flow — variant confirm → rating → offer depth → attributes → open → payload
- [x] Generated attribute sets, deliberately different per subject
- [x] Built — one file, no backend
- [x] Chat interface, multi-select, voice, per-attribute detail
- [x] Instrumented — time, attributes, variant source
- [x] Structured payload as the closing screen
- [x] Apps Script written, deployed and authorised
- [x] Hosted on Netlify
- [x] QR codes — product demo, feedback, and feedback-locked
- [x] Deep links — `?mode=deck`, `&only=1`

---

## Before presenting

Small, and all in the deck rather than the repo.

- [ ] **Cut or replace the 66% stat** on the target-market slide — untraceable to an original. Adyen's *44% of UK shoppers open to AI handling the entire purchase* is sourced and makes the same point.
- [ ] **Slide 7** — em dash on `products-`, curly quotes on `"chat"`, drop the duplicate *THE OPPORTUNITY* label, and change *"awareness chat"* to *"buying conversation"* so it matches slides 8 and 24
- [ ] **Slide 10** — missing word in the Bet 2 goal line
- [ ] **Slide 2** — pull one citation number forward from the appendix, so the claim isn't unsupported on slide 2
- [ ] **Page numbers** — duplicate pairs at 04/05, 20/23, 21/25
- [ ] **Slide 24** — restore *"At company level, Trustpilot is the independent source of trust AI relies on"* so the recap is a complete thought and the callback closes
- [ ] **Confirm a row actually lands in the sheet** — the prototype says "Sent" regardless, so the sheet is the only proof
- [ ] **Re-drop the prototype on Netlify** so the `?mode=deck&only=1` QR resolves to the locked feedback flow
- [ ] Try the prototype on a few people — completion rate is the evidence for Bet 1

---

## Parked

Not needed for this assignment; useful if the work continues.

- **How models mechanically parse reviews** — retrieval, chunking, aggregate-vs-text weighting, what makes a review quotable, engine differences
- **The per-product presence cliff** — company level is 1% → 54% at ~13 reviews → 75% at ~81. No published product-level figure, and finding it would size the whole opportunity
- **Product identity resolution** — the domain is a free primary key at company level; products have no equivalent in use
- **PRP rollout status** — the H1 call says all languages from 1 Oct, the help centre still says six English markets
