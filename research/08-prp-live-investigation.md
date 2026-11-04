# Live investigation — can anyone actually find a Product Review Page?

*Browser investigation, 3 November 2026. Attempted to locate a live PRP on trustpilot.com.*

**Short answer: I could not find one, and the reasons why are more interesting than the example would have been.**

---

## What I checked

| Check | Result |
|---|---|
| `trustpilot.com/review/gymshark.com` | No "Popular products" carousel. Only "People also looked at" — **other companies** |
| `trustpilot.com/review/theproteinworks.com` | No carousel, no product links |
| Trustpilot site search: "protein powder" | **"Companies (114)"** — companies only. No product results, no product tab |
| `sitemaps.trustpilot.com/index_en-us.xml` | 24 sitemap files, **all domain/company sitemaps. No product sitemap exists** |
| `trustpilot.com/robots.txt` | See below |

---

## Finding 1 — Product search doesn't exist for consumers

Trustpilot's own search returns **companies only**. Searching a product category gives you a list of businesses, not products. There is no product tab, no cross-brand product results, no comparison.

This confirms the gap behind Bet 2 directly from the live product: **Trustpilot has product pages, not product discovery.** The only route in is the "Popular products" carousel on a brand profile — and across three well-known English-market ecommerce brands, none had one, consistent with a 418-business beta.

## Finding 2 — No product sitemap

The sitemap index lists 24 files, every one of them company/domain sitemaps (`domains0_en-us.xml` … `domains17_en-us.xml`, plus `recent.xml`). **There is no product sitemap.**

For pages whose entire stated purpose is being "publicly indexed" so that "shoppers and AI search engines" discover them, having no sitemap entry is a meaningful omission.

## Finding 3 — robots.txt blocks `/product-reviews/` to every crawler

`trustpilot.com/robots.txt` contains, for **every** named user-agent:

```
Disallow: /product-reviews/
```

That list includes **Googlebot, bingbot, OAI-SearchBot, GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Claude-SearchBot, Google-Extended**, and the Meta crawlers — i.e. precisely the AI answer engines PRPs were launched to reach.

### Is `/product-reviews/` actually the PRP path?

Probing the route from the browser:

| Path | Response |
|---|---|
| `/product-reviews/` | redirect (live route, **not** 404) |
| `/product-reviews/test` | 404 |
| `/products/` | redirect |
| `/review/{domain}/product` | 404 |

`/product-reviews/` resolves as a real route whose sub-paths 404 on an invalid identifier — the signature of `/product-reviews/{id}`. Combined with the name, this is strong evidence it's the public PRP path.

**Caveat, stated plainly:** I could not load a live PRP to confirm it 100%, because I couldn't find a brand in the beta. This needs one confirmation — easiest from a Trustpilot Business account with the module enabled, or any beta brand's profile.

---

## ⚠️ Decision: not using this. Probably deliberate.

**Michelle's call (4 Nov 2026): the robots.txt finding is most likely intentional, and we're not building a slide on it.**

Reasonable readings of why it would be deliberate: product data is already reachable via the crawlable company profile (`/review/`), so blocking the standalone path costs little; and gating a beta path until it stabilises is ordinary practice, not an oversight.

The two findings that **do** survive and still matter are **Finding 1 (no consumer product search)** and **Finding 2 (no product sitemap)** — both evidence for Bet 2's discovery gap, neither requiring any claim about intent.

The analysis below is kept for completeness only.

## [Not used] If it held, it would have been a slide

Trustpilot launched Product Review Pages on 24 September 2026, explicitly positioned so products "surface in AI comparison queries," and reported a **1,548% first-week citation lift** from the beta.

Meanwhile, as of 3 November 2026:
- `robots.txt` disallows `/product-reviews/` to every AI crawler and search engine
- no product sitemap exists
- consumer product search doesn't exist

There are three possible explanations, and all three are useful:

1. **It's a genuine own-goal** — the pages are blocked from the engines they were built for. Highest-impact, lowest-cost fix imaginable, and it would be the first slide.
2. **PRPs live on a different, allowed path** and `/product-reviews/` is something else (a legacy or business-facing route). Then the finding is narrower but the sitemap and search gaps still stand.
3. **robots.txt simply hasn't been updated** since the launch six weeks ago. Which is itself the finding: the AI-discovery infrastructure is lagging the AI-discovery marketing.

**In every case the strategic point is the same:** the company is selling AI visibility while the crawl-and-index plumbing underneath the flagship AI-visibility product is incomplete. That is a credibility problem and an unusually cheap thing to fix.

---

## Finding 4 — the crawler policy is actually well-judged

Worth separating from the above, because it's the one thing in this area Trustpilot has got right.

robots.txt draws a deliberate line between **retrieval** and **training**:

| Allowed (standard disallow list only) | Fully blocked (`Disallow: /`) |
|---|---|
| Googlebot, bingbot | `anthropic-ai` |
| OAI-SearchBot, GPTBot, ChatGPT-User | `Applebot-Extended` |
| PerplexityBot | `CCBot` |
| ClaudeBot, Claude-SearchBot | `Bytespider`, `cohere-ai`, `Diffbot`, `YouBot`, `Omgili`, `Yandex` |
| Google-Extended, Meta crawlers | `ImagesiftBot`, `Timpibot`, `Webzio-Extended` |

**Be cited, don't be absorbed.** Answer engines that retrieve and attribute get access; bulk training and scraping crawlers are refused outright.

That is exactly the right posture for a business whose asset is being *the cited source*, and it's a genuine strategic position worth stating out loud in the deck — especially next to the question of whether to sign direct data deals with model providers.
