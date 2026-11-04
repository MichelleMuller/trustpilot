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

### Two motions, two jobs

*Full analysis: [`../research/11-offerings-vs-ecommerce.md`](../research/11-offerings-vs-ecommerce.md)*

**Ecommerce via Shopify is how we get in. Offerings is where we stay.**

| | **Ecommerce via Shopify** | **Offerings** — accounts, policies, packages, courses |
|---|---|---|
| **Job** | The **volume engine** | The **margin engine — and the defensible one** |
| **Why** | Builds the corpus, trains the models, proves the attribute system, feeds the agent layer | High-ACV expansion inside accounts we already have |
| **Entry** | Shopify Key Product Partner rail — ~14% of US ecommerce, built and underused | The vertical enterprise motion already winning: financial services, insurance, banking, credit unions, education, hospitality |
| **Competition** | **Contested** — Bazaarvoice's network, Judge.me's price | **Uncontested** |

**Why offerings is uncontested, and it's structural.** Every competitor is built on a GTIN, a catalogue feed, variants and a retailer PDP. **A bank account has none of those.** Bazaarvoice's deepest moat — 1,750+ retailer syndication — is worth precisely nothing to a credit union. As the competitive research puts it: *"a Bazaarvoice contract without a retail footprint is money spent on a network you'll never use."*

**And there's a visible evidence vacuum.** In US insurance queries, ChatGPT citations to **brand homepages rose from 1.4% in March 2026 to 12.8% by July**, with Healthcare.gov climbing from 19.2% to 40.4%. **Models are citing government sites and brands' own words about themselves** — because independent product-level evidence barely exists. That is Trustpilot's founding problem, measured:

> *"Every business on the planet will tell you they're good. The problem is knowing who you can believe."*

**The incumbents there are paid on conversion.** MoneySuperMarket, NerdWallet and Bankrate are affiliate-monetised — and MoneySuperMarket already has a ChatGPT app covering insurance, credit cards and loans. So the comparison layer forming in AI has a commercial interest in the answer. In apparel, neutrality is a nice-to-have. **In financial services, where the only alternative is paid on conversion, neutrality is the entire product** — and it's exactly what *"no vested interest in whether a transaction happens at all, let alone which provider"* buys us.

### The opportunity: we want both — and the sequencing is the hard part

**This is not a choice between two markets. The prize is both, and the order matters.**

**Why ecommerce leads:**
- **The rail already exists.** Shopify Key Product Partner, built, underused. We can start without building distribution.
- **It produces the corpus.** The attribute system, the extraction models and the fraud models all need volume, and offerings won't supply it — a bank has eight account types, a Shopify store has five hundred SKUs.
- **It proves the attribute system on easy categories first.** Sizing accuracy and durability before we attempt "what are the attributes of a savings account."
- **No regulatory gate.** Ships immediately.

**But the offerings window may be closing faster than the ecommerce one.** This is the tension, and it's the reason sequencing can't mean *serial*:

- Brand-homepage citations in insurance went **1.4% → 12.8% in four months**. AI is actively filling the vacuum with brand-owned content, and defaults entrench.
- **MoneySuperMarket is already inside ChatGPT** with insurance, credit cards and loans.
- Every month the gap stays open, the models get more habituated to citing government sites and brand pages for exactly the queries we should own.

So the answer is **parallel, with asymmetric investment** — ecommerce gets the engineering, offerings gets a cheap track that de-risks the later scale-up.

| | **Ecommerce** | **Offerings** |
|---|---|---|
| **0–6 mo** | The build. Shopify rail, conversational collection, identity, plumbing. | **One vertical pilot with an existing enterprise customer**, plus attribute-taxonomy design and legal review on regulated products. Cheap, and it removes the two things that would otherwise block scale later. |
| **6–12 mo** | Scale collection, MCP v1 | Pilot proves out; second vertical; taxonomy extends |
| **12–18 mo** | Coverage, syndication, agent layer | **Offerings scales** on a proven attribute system through the enterprise motion that's already winning |

**The pilot isn't hypothetical — it already exists.** Blair names it: *"a bank with different accounts, or **TUI, who are using product reviews for specific holiday offerings**."* The proof is inside the business already. The job is to turn one customer's workaround into a product.

### Two motions, two cost shapes — and one data model underneath

**Offerings is a sales-push motion. Ecommerce is where the engineering goes.**

| | **Ecommerce** | **Offerings** |
|---|---|---|
| **Motion** | Engineering and architecture | **Sales-push** |
| **Why** | GTINs, catalogue feeds, variant rollup, SKU matching for syndication — the hard technical problems all live here | Existing accounts, existing verticals, existing sales team. The work is taxonomy, enablement and legal. |
| **Cost shape** | High build, low per-customer | Low build, high per-customer touch |

**That asymmetry is what makes "both" affordable.** Offerings moves on a sales timeline without competing for engineering.

**But it only works if the data model carries both from day one** — otherwise agents see two different interfaces and offerings becomes an expensive retrofit. *(Architecture worked through in [`../agentic-discoverability/07-entity-model-for-agents.md`](../agentic-discoverability/07-entity-model-for-agents.md).)*

The design rule: **ecommerce drives the requirements, but must not define the schema.**

- **Don't make GTIN the primary key.** External identifiers are an optional *list* — ecommerce populates GTIN for syndication matching; offerings populate nothing.
- **Fall back to the identity that already works:** `provider + offering name`. The company domain was a free primary key at company level; this is its product-level equivalent, and it works with or without a GTIN.
- **One attribute structure, category-scoped vocabularies.** *Sizing accuracy* and *claims handling* are the same shape to an agent.

**The payoff:** one MCP tool set, and launching a new offerings vertical becomes a taxonomy exercise rather than an engineering project — which is exactly what a sales-led motion needs.

*Honest counterweights, which is why ecommerce still leads: attributes need category-specific definition per vertical, regulated-product reviews need legal input before anything ships, and offerings won't generate the corpus.*

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

**One engine, one distribution layer, one accelerator.** Collection produces verified depth. Inbound syndication produces breadth. Together they fill the product pages — the consumer destination *and* the substrate that gets crawled. Agents are how that same corpus reaches the decision when it happens inside an assistant rather than on a page.

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

**The metric that governs this bet:** **per-SKU attribute coverage** — the share of products with enough attribute-rated reviews to produce a score an agent can filter on. Agents filter before they rank, so a missing attribute means the product is *unmatched*, not down-ranked. Our attribute fields are **optional**, which structurally caps that coverage.

*(The agent-experience field benchmarks 95%+ fill on core attributes — though that's drawn from merchant product catalogues, so it's an analogy rather than a like-for-like target. Our actual coverage isn't measurable externally. **It's one query internally, and it's the first number I'd want.**)*

**Why it's bet one:** no attribute data, no agent filtering. No coverage, no syndication inventory. Everything downstream is gated here.

*CEO's own words: "relevance, recency, ranking... if your reviews are stale and many months old, then it's much less likely to get cited."* All three are collection problems.

---

### Bet 2 — Build the trust infrastructure agents rely on for information

> **Good for the consumer. Good for the brand.**

*Fully worked out in [`../agentic-discoverability/`](../agentic-discoverability/).*

**This is the slide that answers both halves of the brief at once.** Consumers get a better answer because the agent has better evidence — delivered where they already are, not on a site they'd have to visit. Brands get their product truth present and citable at the moment of decision.

**And the two are the same mechanism, not two benefits.** Optimise for the brand alone and the data becomes marketing, which agents learn to discount. Serve the consumer alone and there's no business to fund the collection or the fraud detection. **Independence isn't a constraint on the model — it is the model.** It's also the answer to *"why not just use the brand's own product feed?"* — because that's the brand talking about itself, and the agent already discounts it.

**"Be open" is not a bet — we're already open and it's already working** (ChatGPT citations +400%, top-10 most-cited domain). The bet is becoming **agent-readable**, which we are not.

Our machine surface today is built for the wrong consumer. The APIs answer *"let me pull my own review data"* — asked by a paying customer, OAuth-authenticated, about a business they own. An agent asks *"which of these twelve should I recommend, and what's the independent evidence?"* — unauthenticated, across brands, at runtime. **There is no front door.**

Agents filter → rank → format. **We are strong only at format** — the credible thing quoted *after* the decision. We're absent from the two steps that actually decide it.

**What we ship:**
1. **A Trustpilot MCP server.** Commerce is standardising on MCP — Adobe made it the default for Commerce, Microsoft shipped one for Dynamics 365 at NRF 2026, an IETF draft is formalising discovery. The most-cited review source on the internet is absent. Most concrete, most demonstrable item in the plan.
2. **Attributes as a filterable dimension**, in the API and extended into product JSON-LD beyond the headline score.
3. **Provenance and freshness as the headline product.** `isVerified`, `verificationLevel`, `reviewSource` already exist as fields. Package them as the promise: not *"here's a 4.6"* but *"here's a 4.6, verified this way, this fresh, behind fraud models that removed 3.9m fakes last half."*
4. **Open, not gated** — see the competitive note below.

**Agents and the destination are the same corpus, served two ways.** The product pages are the human rendering; the agent layer is the machine rendering. They share one body of verified reviews and attributes — and the pages are also what gets crawled and cited, so they're the substrate of the citation engine, not an alternative to it. See Trade-off 4.

*We are already the evidence an agent **quotes**. We are not yet the infrastructure it **relies on**.*

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

### Trade-off 4 — The consumer destination and the neutrality rule

**We are building a consumer destination.** Product Review Pages, populated by verified first-party reviews (Bet 1) and verified syndicated reviews (Bet 3), with attribute breakdowns — a place a consumer can find a product and evaluate it on independent evidence.

That has to be said plainly, because it runs at the CEO's sharpest constraint:

> *"We're not a marketplace... **no vested interest in whether a transaction happens**... **we don't monetise at all through engagement metrics.** So we're not an advertising business either."*

#### Why the destination isn't optional

Two reasons it has to exist, not just one:

**1. It's the substrate of the citation engine.** 99.5% of Trustpilot's citations are organic — won by pages that exist, rank and get crawled. The company-level dominance didn't come from an API; it came from a consumer destination that models found useful. **Remove the pages and you remove the thing being cited.** The agent layer (Bet 2) and the consumer pages are the same corpus served two ways — human-readable and machine-readable — and the human rendering is what earned the authority in the first place.

**2. It's half the brief.** *"Help consumers confidently evaluate products when making purchasing decisions."* Agents serve consumers who ask an agent. The destination serves everyone else, and it's where the consumer relationship that generates reviews actually lives.

#### How it stays inside the neutrality rule

**The precedent is the existing business.** Trustpilot already runs a consumer destination at scale — ~64m monthly readers, company profiles, no ads, no transaction cut, no engagement monetisation. **Product pages are that same model extended to SKU level, not a new one.** The rule was never "don't have a destination"; it was "don't monetise it on attention."

Guardrails, stated explicitly because they will be tested:

- **No transaction economics.** No cut, no affiliate revenue, no referral fee — whether or not a purchase happens.
- **No purchasable placement.** Ranking and presentation by review evidence only. Placement is never sold, which also rules out funding this with advertising.
- **No commercial ranking signal.** A paying customer's product does not outrank a non-customer's.
- **It earns its place via the subscription**, not via traffic. More coverage → more citation → more collection → more reason to subscribe. Engagement is an output we measure, never a thing we sell.

#### The genuine edge case, and an open decision

There's a real distinction inside "destination" that the deck should not blur:

| | Neutrality risk | Status |
|---|---|---|
| **Per-product pages** — look up a product, see independent evidence. The per-SKU analogue of company profiles. | **Low.** Direct extension of what already exists. | **In scope** |
| **Cross-brand discovery** — category browse, "best X for Y", side-by-side comparison across sellers | **Higher.** We'd be ranking competing products against each other, which is closer to marketplace behaviour. | **Open — to decide** |

The second is where *"no vested interest in which provider a transaction happens with"* bites hardest. It's defensible — ranking strictly on review evidence is exactly what a neutral party should be able to do — but it is genuinely new behaviour for Trustpilot.

**Decision: per-product pages in this window; cross-brand comparison is a next step beyond it.** It needs the coverage from Bets 1 and 3 before it would work anyway — comparison across a thin catalogue is worse than none — and deferring it means we don't ask the business to take a neutrality decision at the same time as three delivery bets. See the roadmap.

## Resourcing — what we stop doing to fund this

The brief asks how trade-offs get handled. This is the one with a cost attached.

**The principle, in the CEO's own framing:**

> *"Not quite SaaS in the sense that it's not like the workflows inside companies — **it's more about the data and the infrastructure**."*

**So: we stop investing in the display and workflow layer, and move that investment to the data layer.** Everything below follows from that one rule rather than being a list of arbitrary cuts.

### The clearest cut: review widgets

Ship the free, updated widget set once — then **freeze further investment.** No ongoing roadmap, no feature parity chase with Okendo or Judge.me.

The logic is the same one that makes them free (Trade-off 1): **display is a commodity we were losing on anyway.** Spending engineering to compete on widget polish is spending it on the layer where we have no advantage, against competitors who do it for $15 a month. One good free release buys the sales conversation; a roadmap buys nothing.

### What that funds

| From | To |
|---|---|
| Widget feature development | **Conversational collection** — research, experimentation, build |
| Display-layer polish | **Product identity resolution** (GTIN-first) — the prerequisite nobody owns |
| | **MCP server and the agent-readable layer** |
| | **Screening pipeline** for syndicated content — the largest new operating cost |

### Candidates for the same treatment

Same test applied: *is this the display and workflow layer, or the data layer?*

- **Workflow tooling for business users** — response management, dashboards, in-app analytics. Maintain, don't extend.
- **Feature depth on the mature company-reviews product.** It works; it's cited; it funds the business. Protect it, don't grow it.
- **Anything competing on AEO measurement** against Profound, who has $334m and an enterprise sales motion built for it.

### The honest cost

Widgets and dashboards are **what customers ask for in the sales call.** Freezing them means short-term friction with AEs and some renewal risk with customers who bought on display tooling. That's the trade — and it's only the right one if the thesis holds that independent AI visibility is the durable asset.

**This is the same bet as Trade-off 1, stated on the cost side rather than the revenue side.**

## The roadmap

**Sequencing logic:** repackaging unlocks collection, collection fills the pages, the pages and the agent layer are the same corpus rendered twice, and syndication accelerates coverage once screening is in place. **Nothing downstream ships before the data is worth consuming.**

### Months 0–6 — unlock, and fix what's cheap

| Workstream | What ships |
|---|---|
| **Repackage** *(Trade-off 1)* | Widgets updated and made free. Invitation caps removed. Monetisation moved to the visibility and insight layer. **First, because it's what produces the volume everything else needs.** |
| **Measure** | Baseline **per-SKU attribute coverage** — the number that governs the whole plan and that nobody has looked at |
| **Identity** | **The entity model** — provider + offering as the key, external identifiers as an optional list, category tree spanning retail and non-retail **from day one**. Prerequisite for canonical URLs, syndication matching and agent lookup, and the thing that keeps offerings cheap later. |
| **Plumbing** | Exit PRP beta, complete the non-English rollout, add a product sitemap, extend product JSON-LD to attributes, surface provenance fields |
| **Collection** | Conversational collection: research and experimentation, first A/B against the current form |
| **Syndication** | Partner conversations; design the screening pipeline |
| **Offerings** *(parallel, low-cost)* | One vertical pilot with an existing enterprise customer — TUI already does this informally. Attribute taxonomy design. Legal review on regulated-product reviews. |

### Months 6–12 — collection at scale, agent layer v1

| Workstream | What ships |
|---|---|
| **Collection** | Conversational flow rolled out *(subject to the month-6 kill criterion)*. SMS alongside email. Trigger on delivery and usage milestones. |
| **Agents** | **MCP server v1** — product lookup and comparison tools |
| **Syndication** | First partner **pilot**, not launch — with a per-partner model calibration period |
| **Trust** | Provenance tiering live: verified first-party, verified syndicated, rejected |
| **Offerings** | Pilot proves out; second vertical; taxonomy extends |

### Months 12–18 — coverage and the queryable layer

| Workstream | What ships |
|---|---|
| **Syndication** | Partners scaling; syndicated coverage reported as a share of catalogue |
| **Agents** | Open agent endpoint. Provenance and freshness as a documented, named promise. |
| **Agents** | Active surface partnerships, on the Meta Muse precedent |
| **Measurement** | The attribution loop: citation → AI-referred visit → conversion. The unclaimed position in the category. |
| **Offerings** | **Scales** on the proven attribute system, through the enterprise motion already winning |

### Beyond 18 months — the next steps this buys

These are **not** in the window, and saying so is the point — each one is earned by the work above rather than promised alongside it.

| Next step | What earns it |
|---|---|
| **Cross-brand product discovery and comparison** | Needs the catalogue coverage from Bets 1 and 3. Comparison over a thin catalogue is worse than none. Also a deliberate neutrality decision the business shouldn't be asked to take alongside three delivery bets. |
| **Outbound syndication to retailer PDPs** | Earned by solving SKU matching *inbound*, where we control the destination and failure is cheap. This is how we eventually approach a Walmart or a Target — with inventory and a proven matching capability, not a pitch. |
| **Trust signals beyond reviews** | The CEO's own stated expansion — *"we're interested in other trust signals as well."* Attributes are the first one; this is where the next ones go. |

## Metrics — how we know it's working

**Attribution is the metrics layer, not a fourth bet.** Blair is already on it — *"we are doing more... to help them really quantify the ROI. It isn't as straightforward as simply things like traffic metrics"* — so claiming it as an initiative would look like we hadn't listened. But nobody has closed the loop, and that's where this section earns its place.

### Leading — collection quality (Bet 1)
- **Per-SKU attribute coverage** — share of products with enough attribute-rated reviews to be filterable. The headline number, and the first one to go measure. *(Per-review fill rate is the input; coverage is what agents consume.)*
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
- **Bet 2:** if at month 9 per-SKU attribute coverage hasn't moved materially off baseline and MCP calls aren't growing month over month, distribution isn't the constraint. Stop building the pipe and put everything into Bet 1.
- **Bet 3:** if no syndication partner is live by month 12, demand-side pull wasn't strong enough to compel supply. Fold the SKU-matching work into outbound planning and stop.

## Open items

- [ ] Resourcing: what does Bet 1 cost, and what are we stopping to fund it?
- [x] ~~Decide: do we verify syndicated content with our own fraud models?~~ **Yes — everything inbound is screened. See Trade-off 3.**
- [ ] Size the verification cost, and decide who pays: syndication partner, or the brand
- [ ] Pick the three headline metrics for the one-slide version
- [ ] Confirm PRP rollout status — the H1 call says all languages from 1 Oct; the help centre still says six English markets
- [ ] Slide-level build

## Explicitly not doing

- **Not** competing with Judge.me or Okendo on SMB product-review features or price
- **Not** building a general-purpose AEO measurement suite against Profound
- **Not** building an outbound retailer syndication network in this window — Bet 3 buys the option, it isn't the option
- **Not** licensing data to model providers — considered and rejected by the CEO on mission grounds
