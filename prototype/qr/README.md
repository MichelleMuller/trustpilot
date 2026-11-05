# QR code — live prototype

Points at **https://timely-speculoos-059b27.netlify.app/**

| File | Use |
|---|---|
| `review-collector-qr.svg` | **Slides and print.** Vector — scales to any size with no pixelation when projected. |
| `review-collector-qr.png` | Anywhere SVG isn't accepted. 1032px, fine up to about A4. |

**Error correction level H** — the most redundant setting, so it still scans when photographed at an angle, partly glared out by a projector, or with something overlaid in the middle. Worth it for a room.

Coloured to the deck palette: `#181818` on `#faf9f5`. Contrast is far above what scanners need.

## Putting it on a slide

- **Minimum ~180px square** on a 1920×1080 slide. Smaller and phones at the back of a room struggle.
- **Keep the quiet zone.** The pale border is part of the code — don't crop it or sit text against it.
- **Don't recolour it to green.** The dark modules need to stay dark; mid-tone greens drop contrast below the scanning threshold.
- Put a line of text under it — *"Scan to try it"* — so people know it's not decorative.

## If the URL changes

Regenerate rather than editing the file:

```
qrencode -t SVG -l H -m 3 -s 10 -o review-collector-qr.svg "NEW_URL"
qrencode -t PNG -l H -m 3 -s 24 -o review-collector-qr.png "NEW_URL"
```
