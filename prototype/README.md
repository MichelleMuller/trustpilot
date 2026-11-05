# Conversational review collection — prototype

**One file: [`review-collector.html`](review-collector.html).** No build, no backend, no external requests. Open it, email it, host it anywhere.

---

## What it's for

Slide 16 of the deck — *"what better collection looks like"* — and the live demo behind the QR code.

It exists to prove one specific claim from Initiative 1: **an LLM reads the subject and generates the right questions to ask.** A static form has fixed fields, so it asks everyone the same two generic questions. That's not a styling problem, it's a structural one.

## The demo move

Use the toggle at the top. The **same engine** runs both:

| A product | This presentation |
|---|---|
| sizing accuracy · wet grip · comfort over distance · durability | argument clarity · evidence strength · plan feasibility · originality |

Nothing a form could do. Switching between them in front of someone demonstrates the generated-attributes claim faster than any explanation.

## What it embodies

Every principle from the strategy — if the prototype broke them it would argue against the deck:

- **Progressive** — one tap finishes. Depth is offered, never required.
- **Attributes elicited**, never a skippable star row
- **Variant captured** — "runs small" is useless unless you know which size
- **Neutral phrasing** — *"how did the sizing compare to what you expected?"*, never *"did you love the fit?"*
- **Verified purchase** surfaced as a field, not just a badge
- **Ends on the payload** — the structured output, with provenance, that an agent would consume

The closing stats are the evidence: time taken, attributes captured, variant tagged — against what today's form would have returned.

## Sending responses somewhere

Line 1 of the script block:

```js
const FORM_ENDPOINT = "";
```

Paste a Formspree / Google Form / webhook URL and the Send button POSTs the JSON. Leave it empty and it falls back to copy-to-clipboard and download, so the file works as-is.

*If a send fails it copies instead and says so — nobody loses their answers.*

## Honest limits

- **Attribute sets are pre-computed, not generated live.** A live model call would mean an API key inside a file you're sharing externally. The UI says so in the footer. In production the generation runs server-side at catalogue ingestion, per category.
- **Two subjects only.** Enough to prove the point; adding more is a few lines in `SUBJECTS`.
- Needs a browser from the last few years. Works offline.
