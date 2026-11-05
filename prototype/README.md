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

**Three input modes, all available throughout:**
- **Tap** a quick reply
- **Type** — the composer stays live during chip questions, so anyone can answer in their own words instead
- **Speak** — mic button, Web Speech API, live interim transcription

Which input modes were used is recorded in the payload's provenance.

> A freeform answer to a scale question is stored with `value: null` and flagged `unmapped — a model would score this in production`. Honest about what's mocked.

## What it embodies

Every principle from the strategy — if the prototype broke them it would argue against the deck:

- **Progressive** — one tap finishes. Depth is offered, never required.
- **Attributes elicited**, never a skippable star row
- **Variant captured** — "runs small" is useless unless you know which size
- **Neutral phrasing** — *"how did the sizing compare to what you expected?"*, never *"did you love the fit?"*
- **Verified purchase** as a field, not just a badge
- **Ends on the payload** — structured output with provenance, that an agent would consume

The closing stats are the evidence: time taken, attributes captured, variant tagged — against what today's form would have returned.

---

## Sending responses to your Google Sheet

A sheet URL can't receive a POST. It needs a small Apps Script in front of it — about two minutes.

**1.** Open your sheet → **Extensions › Apps Script**

**2.** Replace everything in the editor with:

```javascript
const SHEET_ID = '1-Lir9BpgClicd_HnWKKIeXervKQfPHiA8EHaebAg-lA';

function doPost(e) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
  const d = JSON.parse(e.postData.contents);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Received','Subject','Variant','Rating','Attributes','Comment','Verified','Input modes']);
  }

  const attrs = (d.attributes || []).map(a =>
    a.type === 'multi' ? `${a.key}: ${a.values.join(', ')}` : `${a.key}: ${a.label}`
  ).join('\n');

  sheet.appendRow([
    new Date(),
    d.subject && d.subject.name,
    d.variant,
    d.rating && d.rating.value,
    attrs,
    d.comment,
    d.provenance && d.provenance.verified_purchase,
    d.provenance && (d.provenance.input_modes || []).join(', ')
  ]);

  return ContentService.createTextOutput(JSON.stringify({ok: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

**3.** **Deploy › New deployment** → type **Web app** → Execute as **Me** → Who has access **Anyone** → Deploy. Authorise when asked.

**4.** Copy the **Web app URL** (ends `/exec`) and paste it into line 1 of the script block in `review-collector.html`:

```js
const FORM_ENDPOINT = "https://script.google.com/macros/s/..../exec";
```

That's it. Leave it empty and the prototype falls back to copy-to-clipboard and download, so the file works either way. A failed send copies instead and says so, so nobody loses their answers.

*Note: the POST uses `mode: "no-cors"`, which is what Apps Script needs from a browser. The response isn't readable, so "Sent" means sent, not confirmed-stored — check the sheet when you test it.*

---

## Honest limits

- **Attribute sets are pre-computed, not generated live.** A live model call would mean an API key inside a file you're sharing externally. In production, generation runs server-side at catalogue ingestion, per category.
- **Voice needs Chrome, Edge or Safari.** The Web Speech API isn't in Firefox — the mic button hides itself there and typing still works.
- **Two subjects.** Enough to prove the point; more is a few lines in `SUBJECTS`.
