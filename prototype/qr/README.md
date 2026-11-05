# QR codes

Two, for two different jobs.

| File | Lands on | Use it for |
|---|---|---|
| **`feedback-qr`** | `?mode=deck` — **presentation feedback** | The QR on your closing slide. People scan and review *the deck*. |
| **`review-collector-qr`** | the product demo (default) | Showing the product use case — handouts, the slide-16 demo |

Each comes as **SVG** (slides and print — vector, no pixelation when projected) and **PNG** (anywhere SVG isn't accepted).

## Deep links

The prototype reads the URL:

| Link | Behaviour |
|---|---|
| `/` | Product demo *(default)* |
| `/?mode=deck` | **Starts on presentation feedback**, toggle still available |
| `/?mode=deck&only=1` | Starts there **and hides the toggle** — a panel just gives feedback, no product demo to wander into |
| `/?mode=product` | Explicitly the product demo |

**`feedback-qr` points at `?mode=deck`** — toggle left visible, so anyone curious can still see the product side and watch the questions change. That contrast is the demo, so hiding it loses something. If you'd rather lock it down for the room, regenerate against `&only=1`.

## ⚠️ Redeploy before you rely on the feedback QR

The deep-link handling is new. **The live Netlify site doesn't have it yet** — until you re-drop `review-collector.html` onto [Netlify](https://app.netlify.com/drop), `?mode=deck` will be ignored and people will land on the sneaker.

Re-drop the file, then scan the QR with your phone to confirm it opens on *"Thanks for going through the deck."*

## Putting one on a slide

- **Minimum ~180px square** on a 1920×1080 slide, or phones at the back struggle
- **Keep the pale quiet-zone border** — it's part of the code, don't crop it or set text against it
- **Don't recolour the dark modules to green** — contrast drops below the scanning threshold
- Add a line underneath — *"Scan to review this deck"* — so it reads as live, not decorative

## Regenerating

```
qrencode -t SVG -l H -m 3 -s 10 -o feedback-qr.svg "URL"
qrencode -t PNG -l H -m 3 -s 24 -o feedback-qr.png "URL"
```

Error-correction level H throughout, so they survive projector glare and off-angle phone cameras.
