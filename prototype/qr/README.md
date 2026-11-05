# QR codes

Two, for two different jobs.

| File | Lands on | Use it for |
|---|---|---|
| **`feedback-only-qr`** | `?mode=deck&only=1` — **feedback, toggle hidden** | **The closing slide.** People scan, review the deck, and there's nothing else to wander into. |
| `feedback-qr` | `?mode=deck` — feedback, toggle visible | If you'd rather let people flip to the product side and see the questions change |
| `review-collector-qr` | the product demo (default) | Showing the product use case — handouts, the slide-16 demo |

Each comes as **SVG** (slides and print — vector, no pixelation when projected) and **PNG** (anywhere SVG isn't accepted).

## Deep links

The prototype reads the URL:

| Link | Behaviour |
|---|---|
| `/` | Product demo *(default)* |
| `/?mode=deck` | **Starts on presentation feedback**, toggle still available |
| `/?mode=deck&only=1` | Starts there **and hides the toggle** — a panel just gives feedback, no product demo to wander into |
| `/?mode=product` | Explicitly the product demo |

**For the closing slide, use `feedback-only-qr`.** It hides the toggle, so a panel lands on the feedback flow and stays there — no sneaker to stumble into mid-thought.

`feedback-qr` keeps the toggle if you'd rather people could explore. Watching the questions change between a shoe and a strategy deck is the strongest thing the prototype does — but that's a point better made by you, live, than discovered by someone trying to give you feedback.

## ⚠️ Redeploy before you rely on the feedback QR

The deep-link handling is new. **The live Netlify site doesn't have it yet** — until you re-drop `review-collector.html` onto [Netlify](https://app.netlify.com/drop), `?mode=deck` will be ignored and people will land on the sneaker.

Re-drop the file, then scan the QR with your phone to confirm it opens on *"Thanks for going through the deck."* — with no toggle in the top right.

## Putting one on a slide

- **Minimum ~180px square** on a 1920×1080 slide, or phones at the back struggle
- **Keep the pale quiet-zone border** — it's part of the code, don't crop it or set text against it
- **Don't recolour the dark modules to green** — contrast drops below the scanning threshold
- Add a line underneath — *"Scan to review this deck"* — so it reads as live, not decorative
- This one is slightly denser than the others (the URL is longer), so don't go below 180px

## Regenerating

```
qrencode -t SVG -l H -m 3 -s 10 -o feedback-qr.svg "URL"
qrencode -t PNG -l H -m 3 -s 24 -o feedback-qr.png "URL"
```

Error-correction level H throughout, so they survive projector glare and off-angle phone cameras.
