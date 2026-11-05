# Conversational review collection — prototype

**One file: [`review-collector.html`](review-collector.html).** No build, no backend, no external requests. Open it, email it, host it anywhere.

---

## What it's for

Slide 16 of the deck — *"what better collection looks like"* — and the live demo behind the QR code.

It exists to prove one claim from Initiative 1: **a model reads the subject and generates the right questions to ask.** A static form has fixed fields, so it asks everyone the same two generic questions. That isn't a styling problem, it's a structural one.

## The demo move

Use the toggle at the top. The **same engine** runs both:

| A product | This presentation |
|---|---|
| what you used them for · sizing accuracy · wet grip · comfort over distance | which parts landed · argument clarity · evidence strength · plan feasibility |

Nothing a form could do. Switching between them in front of someone demonstrates the point faster than any explanation.

## How it works

**A chat, not a form.** Modelled on ChatGPT and Claude — typing indicator, message bubbles, quick-reply chips in the thread, a persistent composer.

**Three question types:**
- **Single-select** — scale chips, tap one
- **Multi-select** — pick several, then Continue *(the "what did you use them for" question)*
- **Open** — free text

**Answer, then elaborate.** After any choice question, a small **＋ add detail** appears under your answer. The flow moves straight on to the next question either way — so it costs nothing if you ignore it, and if you use it, the text attaches to *that specific attribute* rather than floating free at the end. That's the difference between `sizing_accuracy: "Runs small"` and `sizing_accuracy: "Runs small" — "half a size at least, go up if you're between"`.

**Three input modes, all available throughout:**
- **Tap** a quick reply
- **Type** — the composer stays live during chip questions, so anyone can answer in their own words instead
- **Speak** — mic button, Web Speech API, live interim transcription

Which input modes were used is recorded in the payload's provenance, as is how the variant was established — `order_confirmed`, `reviewer_corrected` or `reviewer_selected`. A variant the buyer confirmed against their own order is better evidence than one they picked from a menu, and an agent can see the difference.

> A freeform answer to a scale question is stored with `value: null` and flagged `unmapped — a model would score this in production`. Honest about what's mocked.

## What it embodies

Every principle from the strategy — if the prototype broke them it would argue against the deck:

- **Progressive** — one tap finishes. Depth is offered, never required.
- **Attributes elicited**, never a skippable star row
- **Variant confirmed, not asked** — an invitation-linked review already knows the order, so the flow says *"your order says UK 6 · Slate — is that right?"* rather than making someone pick from a list. One tap, and it shows the system using what it already has. If there's no order to draw on (the presentation subject), it asks normally.
- **Neutral phrasing** — *"how did the sizing compare to what you expected?"*, never *"did you love the fit?"*
- **Verified purchase** as a field, not just a badge
- **Ends on the payload** — structured output with provenance, that an agent would consume

The closing stats are the evidence: time taken, attributes captured, variant tagged — against what today's form would have returned.

---

## Sending responses to your Google Sheet

A sheet URL can't receive a POST — it needs a small Apps Script in front of it.

**The script is [`apps-script.gs`](apps-script.gs).** Open that file and copy the whole thing. Don't copy from a code block in a README — the ``` fence lines come with it and break the parser.

1. Open the sheet → **Extensions › Apps Script**
2. **Select all in the editor and delete it**, then paste the contents of `apps-script.gs`
3. *(Optional)* run `testConnection` once — it writes a test row, so you know the sheet link works before you deploy
4. **Deploy › New deployment** → type **Web app** → Execute as **Me** → Who has access **Anyone** → **Deploy**, and authorise when prompted
5. Copy the **Web app URL** (it ends `/exec`) into line 1 of the script block in `review-collector.html`:

   `const FORM_ENDPOINT = "https://script.google.com/macros/s/..../exec";`

Leave it empty and the prototype falls back to copy-to-clipboard and download, so the file works either way. A failed send copies instead and says so, so nobody loses their answers.

> **Two things worth knowing.** The script uses no template literals or backticks, so nothing gets mangled on paste. And the browser POSTs with `mode: "no-cors"`, which is what Apps Script requires — the response can't be read, so *"Sent"* means sent, not confirmed stored. Check the sheet on your first test.
>
> **If you redeploy**, use *Deploy › Manage deployments › edit › New version*, or you'll get a different `/exec` URL and have to update the HTML again.

## Honest limits

- **Attribute sets are pre-computed, not generated live.** A live model call would mean an API key inside a file you're sharing externally. In production, generation runs server-side at catalogue ingestion, per category.
- **Voice needs Chrome, Edge or Safari.** The Web Speech API isn't in Firefox — the mic button hides itself there and typing still works.
- **Two subjects.** Enough to prove the point; more is a few lines in `SUBJECTS`.
