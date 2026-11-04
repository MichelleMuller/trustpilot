# Deck — working strategy spine

*Status: working draft. Structure before slides.*

---

## The one-line answer

> **Trustpilot has won the destination. The next 12–18 months is about being wherever the consumer makes the buying decision — and the thing that gets us there is radically better product review collection.**

Everything else is downstream of that.

---

## The argument, in order

### 1. The shift
Consumers no longer research on a destination and then buy. The decision happens inside an AI answer, or on a retailer's product page — and increasingly Trustpilot isn't present at either.

### 2. The gap — query divergence
Company-intent and product-intent queries are different queries, on both ChatGPT and Google.

| We win these | We barely compete for these |
|---|---|
| "is Brooks a legit company" | "best running shoes for flat feet" |
| "is this site a scam" | "does this jacket run small" |
| "what's their return policy" | "X vs Y — which actually lasts" |

The right-hand column is **larger in volume, closer to purchase, and where comparison happens**. Seer: review citations run 2% at Awareness → 16% at Evaluation → **24% at Intent**. The 9.5x co-mention effect only plays out in product comparison queries.

**We currently compete for a minority of shopping queries, and the majority are product-shaped and closest to the money.**

### 3. Why we win it — two assets nobody else has

**The pairing.** Bazaarvoice, Yotpo, Okendo and PowerReviews have product reviews and no independent company-level trust layer. We have company-level at 361m reviews and #1 cited, and can build product underneath it. *"Is this seller legitimate?"* and *"is this product any good?"* answered independently from one source.

**The collection advantage.** Every competitor sends review requests from the brand's own domain — thin sender reputation, spam filters, and a consumer who reads it as marketing. We send from trustpilot.com. Better deliverability, higher response, and the ask reads as *"tell the world"* rather than *"help our marketing."* In a business where volume is the asset, that's a structurally lower cost per review collected. **It is currently unmeasured, unpriced and unmentioned anywhere in our materials.**

### 4. The conversion problem — human equity has to become machine equity

Two decades of accumulated trust equity — 400m+ reviews, a brand every UK adult knows — was built for a world where a **person** read the page. **In an agent-mediated world, trust equity a machine can't parse doesn't convert.** It still exists; it stops doing work.

This is why **59% of AI answers quote the TrustScore**. Not because the number is the most meaningful thing we produce — because it's the most **machine-readable** thing we produce. A clean, comparable scalar. It converts, so it gets used.

| Human equity | Converts? |
|---|---|
| TrustScore, review count | ✅ Clean scalars — hence 59% and 16.6% quotation |
| Review prose | 🟡 Lossily, and only from the few reviews actually retrieved |
| **Attribute ratings** | ❌ Optional at collection — near-zero fill |
| **Verification and fraud posture** | ❌ Not exposed as a readable field |
| **Recency** | ❌ Not surfaced, despite being one of the three factors that decide citation |

**The bottom three rows are the strategy.** Real equity, already earned, not converting.

It's the founding insight with one word changed: Mühlmann built this because **reputation that can't travel is worthless**. In 2026, **reputation that can't be parsed is worthless.**

---

### 5. Why it isn't won yet — the collection layer is thin
Our live product review form (teardown: `research/07-practitioner-view.md`):
- Two generic attributes — **marked optional**
- Media capture: three empty boxes, no prompt, no guidance
- No visible verified-purchase signal, no variant capture
- Manual `mm/dd/yyyy` date entry carried over from company reviews
- Placeholder product image

**We are marketing an AI-visibility outcome that depends on attribute-rich, media-rich, verified data — while running a form that makes all three optional.**

### 6. Why now — we are a year behind on collection
Bazaarvoice shipped **Talk-to-Text** (spoken reviews, auto-transcribed) and **Visual Content Coach** in **November 2025**, explicitly positioned for AI discoverability. Yotpo ships AI Smart Prompts that guide customers on what to write.

Richer collection for AI is not a novel idea — **it is a year-old competitive move and we haven't answered it.** Our advantage isn't the idea. It's that we can execute it on top of a trust layer and a collection channel they don't have.

---

## Strategic direction — this executes the stated strategy, it doesn't replace it

The CEO has already named the destination. Our job is to say *how Product Reviews gets there*, not to propose a different direction.

| Company's stated direction | What Product Reviews contributes |
|---|---|
| **"Trust infrastructure for the age of AI"** — expanding *trust signals* and *trust impact* to consumers, businesses **and AI agents** | Product attributes and sentiment **are** trust signals. This is that expansion, at SKU level. |
| **Open platform** — *"make the data as useful as possible to as many people as possible."* ChatGPT citations **+400% YoY**; **75x** citation visibility for active profiles | Free widgets and uncapped invitations are the open-platform principle applied to packaging (Bet 3) |
| **"Relevance, recency, ranking"** is how citation is won — *"if your reviews are stale and many months old, then it's much less likely to get cited"* | Volume, freshness and relevance are all **collection** problems. Bet 1 is the CEO's own mechanism, operationalised. |
| **"Product reviews are not just for retail"** — a bank's accounts, TUI's holiday offerings | One product, two motions: ecommerce for collection volume, *offerings* for the enterprise verticals already winning |
| **Neutrality as the moat** — *"no vested interest in whether a transaction happens"* | Hard guardrail on Bet 2 — see Trade-off 3 |
| **B2B subscription, advertising explicitly rejected**, 83% gross margin | Constrains Bet 3: repackaging must move value *within* subscription, never to ads |

**What we are *not* doing:** we're not building a slide on the `robots.txt` disallow of `/product-reviews/`. It's most likely deliberate — product data is reachable via the crawlable company profile, and gating a beta path is ordinary practice. The discovery gaps that **do** matter for Bet 2 are simpler and need no claim about intent: **Trustpilot's consumer search returns companies only, and there is no product sitemap.**

---

## Where we point it: the US

**Biggest audience, smallest business.**

- The **US is ~28–30% of trustpilot.com traffic** — the largest market. The **UK** — the mature home market — is at *"around 5%"* penetration. The US is far below that.
- At UK penetration, the US alone is a **billion-dollar-plus ARR business**
- North America H1'26: bookings **+27%**, new business **+76% YoY**, **organic reviews +50% YoY** against paying customers **+11%**

**Supply is growing four times faster than monetised demand.** US review inventory is already arriving unmonetised.

**The rail is built and underused.** Trustpilot became a **Shopify Key Product Partner** in June 2026 with an upgraded 2.0 app. Shopify is **~2.86m live storefronts and >14% of US ecommerce** ($216bn GMV in H1'26, +33%). US ecommerce overall: **~$1.3–1.6tn across 2.7–3.5m active stores.**

**And the demand signal is there:** 95% of consumers use reviews when shopping; a product with five reviews converts at ~**270%** the rate of one with none; **71%** of US consumers say a good Trustpilot score makes them more likely to buy.

> **The US thesis:** our largest audience sits in our smallest business, the reviews are already arriving faster than we monetise them, and the distribution rail into US ecommerce is built. Product Reviews is the product that turns that audience and that rail into revenue — because product-level reviews are what US ecommerce needs and what AI cites in the comparison queries that decide purchases.

---

## The bets

Blair's own statement of the mission is three clauses, and they are the three bets:

> *"Get trust signals like reviews **in very large quantity**, make them **as trusted as possible**, and **get them into as many places as possible**."*

```
  BET 3 — SYNDICATE IN              BET 1 — COLLECTION
  other platforms' product          richness + ratings coverage,
  reviews flow into Trustpilot      right moment, right channel
            |                                   |
            v                                   v
      CATALOGUE COVERAGE  <---------->  VERIFIED DEPTH
      (broad, labelled)                 (deep, provenance-backed)
                         \          /
                          v        v
                     BET 2 — AGENTS
            queryable product truth: attributes,
               provenance, freshness, at scale
                            |
                            v
                  cited, compared, chosen
                            |
                            v
           we learn the pipes --> syndicate OUT (18mo+)
```

**One engine, one distribution layer, one accelerator.** Collection produces verified depth. Inbound syndication produces breadth. Agents are how both reach the point of decision.

---

### Bet 1 — Collection: richness *and* ratings

**Both, deliberately.** They serve different jobs:

- **Richness** — attributes, sentiment, media. Agents **filter on attributes before they rank**, and represent products as attribute vectors. External evidence is unambiguous: detailed reviews outperform brief ones, and reviews mentioning specific attributes carry more weight.
- **Ratings coverage** — breadth of rated SKUs. **59% of AI answers citing Trustpilot quote the TrustScore or star rating**; 16.6% quote review counts. The numeric signal is the most-reproduced thing we produce.

**And sentiment beats raw volume.** *"100 reviews averaging 4.6 stars outperforms 1,000 reviews averaging 4.1 stars in most agent algorithms."* A strategy that optimised only for review count would be optimising the wrong variable.

**The design tension, resolved rather than dodged:** rich collection takes longer per review and yields fewer; simple ratings yield coverage. The form becomes **progressive** — a near-frictionless rating first, conversational depth for those who continue. Floor optimised for coverage, ceiling for richness.

**How:**
- A **conversational interface** replacing the static form — asks follow-ups, gets to *why*, produces structured attributes as a by-product rather than as an optional star row users skip
- **Right moment, right channel** — SMS alongside email, triggered on delivery or a usage milestone, not a fixed delay. They've started here with QR-code collection; richness is the untouched half.
- Compounds with the **trustpilot.com deliverability advantage** — competitors send from the brand's own domain and fight spam filters and consumer scepticism; we send from the brand consumers associate with independent second opinions

**The number:** the agent-experience benchmark is **95%+ attribute fill rate**. Ours is near zero, because attributes are optional. That gap is the clearest single metric in the deck.

**Why it's bet one:** no attribute data, no agent filtering. No coverage, no syndication inventory. Everything downstream is gated here.

*CEO's own words: "relevance, recency, ranking... if your reviews are stale and many months old, then it's much less likely to get cited."* All three are collection problems.

---

### Bet 2 — Agents: be the data they query, not the page they scrape

*Fully worked out in [`../agentic-discoverability/`](../agentic-discoverability/).*

**"Be open" is not a bet — we're already open and it's already working** (ChatGPT citations +400%, top-10 most-cited domain). The bet is becoming **agent-readable**, which we are not.

Our machine surface today is built for the wrong consumer. The APIs answer *"let me pull my own review data"* — asked by a paying customer, OAuth-authenticated, about a business they own. An agent asks *"which of these twelve should I recommend, and what's the independent evidence?"* — unauthenticated, across brands, at runtime. **There is no front door.**

Agents filter → rank → format. **We are strong only at format** — the credible thing quoted *after* the decision. We're absent from the two steps that actually decide it.

**What we ship:**
1. **A Trustpilot MCP server.** Commerce is standardising on MCP — Adobe made it the default for Commerce, Microsoft shipped one for Dynamics 365 at NRF 2026, an IETF draft is formalising discovery. The most-cited review source on the internet is absent. Most concrete, most demonstrable item in the plan.
2. **Attributes as a filterable dimension**, in the API and extended into product JSON-LD beyond the headline score.
3. **Provenance and freshness as the headline product.** `isVerified`, `verificationLevel`, `reviewSource` already exist as fields. Package them as the promise: not *"here's a 4.6"* but *"here's a 4.6, verified this way, this fresh, behind fraud models that removed 3.9m fakes last half."*
4. **Open, not gated** — see the competitive note below.

**Why agents and not a consumer shopping surface:** serving agents meets the consumer half of the brief *where consumers actually are*, without colliding with *"we don't monetise at all through engagement metrics."* We don't build a destination that needs traffic to justify itself.

**Dependency, stated plainly:** an agent surface over a sparse catalogue is worse than none. **Bet 1 gates Bet 2.**

---

### Bet 3 — Syndicate *in*: become the verification layer for the category

**The inversion.** We cannot build Bazaarvoice's 1,750-retailer outbound network in 18 months. We don't have to — we can become the place everyone syndicates **to**.

**The precedent is Google Seller Ratings.** Google collects no reviews. It aggregates from approved partners — Trustpilot, Yotpo, Bazaarvoice, Loox, Junip — and became the destination without ever doing collection. Trustpilot is entitled to the same move for AI visibility: top-10 most-cited domain, domain authority 100.

**It is the open-platform thesis, inverted.** Blair's line is *"get them into as many places as possible."* This is *get everything into the place AI already looks.*

**What it buys:**
- **Coverage, fast.** Discovery and citation both need catalogue breadth. Organic collection builds it slowly; inbound syndication builds it now.
- **A commercial surface we don't have.** We can serve brands who will never switch collection vendors — which only makes sense once we've stopped monetising collection (see Trade-off 1).
- **A stronger moat, not a weaker one.** Everything inbound passes our fraud models, so syndication pushes more volume and more adversarial variety through the detection that is already the company's deepest asset. Attribute extraction and category sentiment models improve too.
- **The pipes.** SKU matching across catalogues — GTINs, variants, title collisions — is the hard engineering problem in syndication. We solve it **inbound**, where we control the destination and failure is cheap. **That is how we earn the right to syndicate outbound in year two.**

**The risk, named:** why would Judge.me or Bazaarvoice feed us? The honest answer is the Google one — **because brands make them.** Google didn't persuade vendors to integrate; merchants demanded it because Google was where the demand was. This is a bet that our demand-side pull is strong enough to compel supply. It may not be, at first.

**The integrity problem is real — and we've answered it.** Nothing is ingested without passing Trustpilot's own fraud models. We don't host other platforms' reviews, **we verify them** — which lets us strip incentivised content at the door rather than refusing syndication to avoid it. See Trade-off 3.

## Trade-offs

### Trade-off 1 — Give the widgets away and move monetisation up the stack

Today we meter inputs and gate display: invitations capped by plan (50/100/300/1,000), TrustBox widgets gated behind Plus and Premium. **That prices what competitors give away and under-prices the only thing we have.** Judge.me ships unlimited reviews and display tooling at $0–15/mo; our widget offering is weaker *and* costs more.

**The move: update the widgets, make them free, uncap invitations, and monetise the visibility and insight layer instead.**

Blair's own framing supports it — *"Not quite SaaS... it's more about **the data and the infrastructure**."* Infrastructure is priced on value delivered, not metered inputs. And invitation caps actively throttle our single biggest structural advantage.

**This is also the sequencing insight:** free widgets and uncapped invitations are what *produce* the volume Bet 1 needs. **Repackaging comes first, not last.**

| For | Against |
|---|---|
| Display is commodity; we were losing on it anyway | Gives up near-term revenue from widget-driven upgrades |
| More widgets live = more content visible = more collection | Harder pricing conversation in transition |
| Stops invitation caps taxing our deliverability advantage | Enterprise may resist repackaged line items |
| Moves monetisation to the layer only we can supply | Requires AI-visibility value to be **provable** |

**The bet underneath the bet:** that independent AI visibility is durable enough to carry the price. If it isn't, we've given away revenue for nothing. Biggest commercial risk in the plan.

---

### Trade-off 2 — Incentivised reviews: the line we don't cross

Larger brands will ask for incentivised review support. It's real revenue and competitors accommodate it. **We don't, and we accept losing business over it.**

1. **It attacks the asset the whole strategy rests on.** Our value to an LLM is that the content is independent. Incentivised reviews are compensated opinion by construction. We already remove 3.9m fakes a half — 10% of submissions, rising — without adding a sanctioned channel for compromised content.
2. **The downstream surfaces already reject it.** From direct experience at Yotpo: **Walmart, Target and Google all require incentivised reviews to be removed or flagged.** So it isn't only an AI-moat risk — it disqualifies that content from the exact syndication surfaces Bet 3 is built to reach. Revenue today for inventory that can't travel tomorrow.
3. **A narrative beats a bought review anyway.** An influencer making the case for a product carries far more weight than one incentivised five-star. What the brand actually wants is persuasive advocacy — available elsewhere, and no reason to compromise the one asset nobody can copy to deliver a weaker version of it.

**In the sales conversation this is a strength, not an apology:** *"our reviews get cited by AI because we don't allow that."* The integrity is the product.

---

### Trade-off 3 — Inbound syndication vs. the integrity moat: *verified at the door*

**This is where Bet 3 lives or dies, and the decision we've taken turns it from a risk into the product.**

Trustpilot has **already made this call in the opposite direction**. From the Product Review Pages documentation:

> *"**Only reviews collected through Trustpilot's invitation methods appear here**, so any third-party imported reviews won't be displayed."*

That is the integrity architecture, not an oversight. Ingesting Judge.me, Loox or Okendo content means ingesting reviews collected under someone else's standards — **including incentivised reviews**, which several permit. Which runs straight into Trade-off 2.

#### The decision: we run our own fraud models over everything that comes in

Syndicated content doesn't get hosted. **It gets screened.** Nothing enters without passing the same detection that removed 3.9m fakes last half.

That single choice changes what Bet 3 *is*:

| Without verification | With verification |
|---|---|
| We host other platforms' content | **We verify other platforms' content** |
| Integrity is diluted | **Integrity is extended** |
| Coverage bought at the cost of the moat | **Coverage *and* a bigger moat** |
| A liability to be labelled around | **A product nobody else can offer** |

#### Four consequences

**1. It resolves the tension with Trade-off 2 instead of living with it.**
Incentivised reviews are a *detectable pattern* — clustered timing, correlated with promo mechanics, characteristic language. If we screen inbound content, we can **strip incentivised reviews at ingestion** rather than refusing syndication to avoid them.

That is precisely what Walmart, Target and Google already require of review content — and Trustpilot becomes the thing that does for AI answers what those retailers do for their own product pages. **We don't have to choose between coverage and the line we won't cross.**

**2. It feeds the moat the CEO already names.**
The data moat is 400m+ reviews and 200,000+ daily submissions training probabilistic detection *"more like spam detection in email or fraud detection with credit card companies."* Screening inbound content means **more volume through the models, and adversarial variety the models have never seen.** The detection gets better because of syndication, not despite it.

**3. It becomes something we can charge for.**
We're giving widgets away and uncapping invitations (Trade-off 1), so we need the scarce layer to be genuinely scarce. **Independent verification of someone else's review corpus is exactly that** — costly, hard, and uniquely ours. Bazaarvoice can syndicate volume; it cannot offer independent verification of a competitor's content.

This is "provenance beats volume" made concrete and billable.

**4. It gives agents something no one else can give them.**
Not *"here's a 4.6"*, and not even *"here's a 4.6 we collected."* It's: **"here's a 4.6, from this source, screened by the models behind 400m reviews, incentivised content removed, this fresh."** In an internet filling with synthetic review text, that is the scarce good.

#### The provenance tiers

| Tier | Collected by | Screened by us | Carries the score |
|---|---|---|---|
| **Verified — first party** | Trustpilot | ✓ | ✓ |
| **Verified — syndicated** | Partner platform | ✓ | ✗ — displayed and exposed to agents, labelled by source, outside the product score |
| **Rejected** | Partner platform | ✗ failed screening | Never ingested |

Verified-but-syndicated is a **legitimate weaker signal class**, not contaminated content — which is exactly the *"other trust signals"* expansion already on the roadmap. The in-product precedent exists: MultiSource widgets already combine sources, and Trustpilot already documents that those scores differ from PRP scores. **We're extending a trust model, not inventing one.**

#### The two honest costs

**It's the largest operating cost in the plan, and it scales with volume.** Fraud detection at 200k submissions a day is already a cost centre; inbound syndication multiplies throughput. This has to be funded deliberately and priced into the partner or brand relationship — it cannot be a free service.

**And the models may be weaker on imported content at first.** They're trained on Trustpilot's own collection patterns — our invitation flows, our timing distributions, our text characteristics. Partner content is out-of-distribution, so expect lower precision early, and expect false positives on legitimate partner reviews to create friction. **Plan for a calibration period per partner**, and make the first integration a pilot, not a launch.

### Resolved — neutrality and the consumer surface

Worth noting because it was a live risk and the agent framing closed it.

> *"We're not a marketplace... no vested interest in whether a transaction happens... **we don't monetise at all through engagement metrics.** So we're not an advertising business either."*

Building a consumer product-comparison destination would have run at this — a surface justified on traffic and attention. **Serving agents instead means we never take that risk.** We meet the consumer where they already are, and the product earns its place by making the subscription more valuable, not by capturing attention.

Guardrails stated anyway, because they'll be asked for: no transaction economics, no purchasable placement, no commercial ranking signal.

## Metrics — how we know it's working

**Attribution is the metrics layer, not a fourth bet.** Blair is already on it — *"we are doing more... to help them really quantify the ROI. It isn't as straightforward as simply things like traffic metrics"* — so claiming it as an initiative would look like we hadn't listened. But nobody has closed the loop, and that's where this section earns its place.

### Leading — collection quality (Bet 1)
- **Attribute fill rate per review and per SKU** — *today near zero; benchmark 95%+.* The headline number.
- Invitation → review conversion rate, **and the gap vs. brand-domain senders** — a number no competitor can produce
- % of reviews carrying media
- **Review recency distribution** — median review age per SKU. Recency is one of the CEO's three named factors and is currently unmanaged.

### Middle — agent and AI visibility (Bet 2)
- MCP server calls; unique agents querying
- **Product-level citation rate** in comparison queries, across ChatGPT, Gemini, AI Overviews, Perplexity
- **Co-mention share** in "X vs Y" and "best ___ for ___" prompts — where the 9.5x effect actually plays out
- Time-to-first-citation for a new SKU
- Agent surfaces actively opened to, beyond organic crawling *(precedent: Meta Muse)*

### Coverage (Bet 3)
- SKUs with queryable attribute data
- Syndication partners live; share of catalogue covered by syndicated vs. verified reviews
- SKU match rate — the capability that earns outbound syndication later
- **Screening throughput and rejection rate on inbound content** — and the incentivised-review strip rate, which is the proof point for the whole tier model
- Model precision on partner content vs. first-party, per partner, through calibration

### Lagging — commercial
- Product Reviews attach rate and ARR, **US specifically**
- **AI-referred traffic and its conversion.** Trustpilot already observes AI-sourced visitors arrive with unusually high intent and doesn't measure it. Closing citation → visit → conversion is the unclaimed position in the category.
- Net dollar retention on accounts using Product Reviews *(group NDR is 101%, GDR 87%)*

### Kill criteria
- **Bet 1:** if conversational collection doesn't beat the current form on *both* completion rate and attributes-per-review by month 6, the interface isn't the constraint — revert and put the money into timing and channel.
- **Bet 2:** if at month 9 attribute fill is below 40% and MCP calls aren't growing month over month, distribution isn't the constraint. Stop building the pipe and put everything into Bet 1.
- **Bet 3:** if no syndication partner is live by month 12, demand-side pull wasn't strong enough to compel supply. Fold the SKU-matching work into outbound planning and stop.

## Open items

- [ ] Resourcing: what does Bet 1 cost, and what are we stopping to fund it?
- [x] ~~Decide: do we verify syndicated content with our own fraud models?~~ **Yes — everything inbound is screened. See Trade-off 3.**
- [ ] Size the verification cost, and decide who pays: syndication partner, or the brand
- [ ] Pick the three headline metrics for the one-slide version
- [ ] Does the US slide lead with **offerings** (financial services — where the CEO's evidence is) or **ecommerce** (where the volume and product-intent demand are)?
- [ ] Confirm PRP rollout status — the H1 call says all languages from 1 Oct; the help centre still says six English markets
- [ ] Slide-level build

## Explicitly not doing

- **Not** competing with Judge.me or Okendo on SMB product-review features or price
- **Not** building a general-purpose AEO measurement suite against Profound
- **Not** building an outbound retailer syndication network in this window — Bet 3 buys the option, it isn't the option
- **Not** building a consumer shopping destination
- **Not** licensing data to model providers — considered and rejected by the CEO on mission grounds
- **Not** llms.txt as a strategy — 10% adoption via platform defaults, Google doesn't read it, no confirmed ranking effect
