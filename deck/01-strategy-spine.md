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

The right-hand column is **larger in volume and it's where comparison happens** — and the 9.5x co-mention effect only plays out there.

**And the funnel has collapsed.** Seer measured review citation at 2% Awareness → 16% Evaluation → **24% Intent** — the shape of the *old* journey, where consumers discovered products themselves and used reviews to validate a choice already narrowed. In agentic discovery, one query does all three: the model uses review data to **build the candidate set**. Mechanically, agents **filter → rank → format**, and attributes and sentiment are consumed at **filter**.

**So the 2% is the opportunity, not the 24%.** Reviews are cited 2% of the time at discovery, and discovery is now where the decision is made.

**Which changes the goal.** Not *"help brands get visible"* — that is what an AEO vendor sells, and a model will learn to discount a source that promotes rather than informs. **The goal is that the best product for the query gets discovered and converted on.** A quality claim, not a visibility claim — and only an independent source can credibly make it. It is also why coverage stops being an optimisation and becomes existence: no review data, no place in the candidate set.

**We currently compete for a minority of shopping queries, and the majority are product-shaped and closest to the money.**

### 3. Why we win it — two assets nobody else has

**The pairing.** Bazaarvoice, Yotpo, Okendo and PowerReviews have product reviews and no independent company-level trust layer. We have company-level at 361m reviews and #1 cited, and can build product underneath it. *"Is this seller legitimate?"* and *"is this product any good?"* answered independently from one source.

**The collection advantage.** Every competitor sends review requests from the brand's own domain — thin sender reputation, spam filters, and a consumer who reads it as marketing. We send from trustpilot.com. Better deliverability, higher response, and the ask reads as *"tell the world"* rather than *"help our marketing."* In a business where volume is the asset, that's a structurally lower cost per review collected. **It is currently unmeasured, unpriced and unmentioned anywhere in our materials.**

### 4. What AI reaches for — and where we supply it

Two decades of trust equity was built for a world where a **person** read the page. **Equity a machine can't parse doesn't convert** — it still exists, it just stops doing work.

The Seer study tells us precisely what AI uses when it cites a review source. **We need all of it at both levels, and at product level we have far less of it.**

| What AI uses | What the study found | Where we stand |
|---|---|---|
| **A score** | **59%** of Trustpilot-citing answers quote the TrustScore or star rating | Strong at company. Most products have none. |
| **A count** | **16.6%** quote review volume; ~3 in 5 surface some numeric signal | Strong at company. Lower at product level. |
| **Thematic detail** | Five themes dominate: service **63%**, shipping **34%**, quality **33%**, legitimacy **30%**, refunds **21%** | **Derived** from text at company level, where volume is highest. Deriving themes needs many reviews about one thing — so at lower per-product volume it must be **collected** instead. |
| **Recency** | One of three named factors — *"if your reviews are stale and many months old, then it's much less likely to get cited"* | **Free at company**: 200k reviews a day means a page is never stale. **Not automatic at product level**, where a thin, older set of reviews can sit unflagged. |
| **Volume past a threshold** | **1% → 54%** at ~13 reviews **→ 75%** at ~81 | Proven at company. **No published figure for the product-level threshold** — and finding it would size the whole opportunity. |

**Why per-product volume is structurally lower, always.** A company page aggregates *every* customer the business has ever had. A product page gets only the customers who bought *that* product. So however many product reviews exist, the count per product is necessarily a fraction of the count per company — that's arithmetic, not an assumption. **Which is why mechanisms that work on company-scale volume — deriving themes from text, freshness arriving for free — can't be relied on to work the same way per product.**

**One the study didn't test, which the agent era adds: verified purchase.** Trustpilot already holds it as `isVerified`, `verificationLevel` and `reviewSource`, and shows a badge to humans. It is **not exposed as a machine-readable signal**, and schema.org has no slot for it — so the MCP is where it becomes readable. In an internet filling with synthetic review text, it's the most defensible thing we could hand an agent.

**Note what the two cleanly-converting signals have in common:** both are **counts and scores**. They convert because there's nothing to interpret. Everything below them needs either more volume per product, or a mechanism we haven't built.

> **Seer told us what AI reaches for. We supply it strongly at company level and at lower volume per product — and the queries are moving to products.**

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

**Two bets.** Blair's own statement of the mission contains both:

> *"Get trust signals like reviews **in very large quantity**, make them **as trusted as possible**, and **get them into as many places as possible**."*

| | **Bet 1 — Product review collection** | **Bet 2 — MCP** |
|---|---|---|
| **What it buys** | **Coverage and authority** | **Human equity → machine equity** |
| **Initiatives** | Collection flow · Consumer page · Syndication in | Build the MCP |

```
        BET 1 — COVERAGE AND AUTHORITY
   +--------------+--------------+--------------+
   | 1. Collect   | 2. Surface   | 3. Let others|
   |    better    |    it better |    bring      |
   |              |              |    theirs     |
   | collection   | consumer     | syndication   |
   | flow         | product page | in, verified  |
   +--------------+--------------+--------------+
                        |
                        v
            BET 2 — MACHINE EQUITY
                  build the MCP
                        |
                        v
          discovered, compared, chosen
```

**Neither works alone.** Coverage a machine can't read is invisible. A machine-readable layer over a thin catalogue has nothing worth reading. **Both, or neither.**

---

### Bet 1 — Coverage and authority

**Why coverage is the whole game.** At company level we won by **covering the entity space** and addressing it with a key the world already uses. Absence became a signal *because* presence was the norm — ChatGPT flags a missing profile **34.4%** of the time. At product level we have **neither coverage nor identity**.

And if reviews now **build the candidate set** rather than validate it, no review data means **not in the set at all**. Coverage stops being an optimisation and becomes existence.

#### Initiative 1 — Enhance the collection flow for attribute coverage

**Don't infer attributes — ask for them, and let the model decide what to ask.**

An LLM can read a product and generate the questions worth asking: a running shoe → fit, arch support, durability, breathability; a mattress → firmness, motion transfer, temperature; a savings account → rate, fees, app quality, service.

**A form structurally cannot do this.** Fixed fields mean everyone gets the same two generic questions. A conversation asks *this product's* questions — which is the actual case for conversational collection, not that forms are dull.

**And it inverts the volume problem.** Company-level attributes are *derived* from hundreds of reviews — AI already extracts five themes from Trustpilot text (service 63%, shipping 34%, quality 33%, legitimacy 30%, refunds 21%). That works because a company has thousands of reviews. Most products have a handful, so derivation has nothing to work from. **Asking produces a structured value from a single review.**

**It's also the adoption unlock.** Okendo makes brands configure attribute prompts — setup burden is why most catalogues never get covered. Generated attributes mean **coverage from day one with zero configuration**, and the same mechanism serves offerings as well as physical goods.

*Two design constraints: generate at **category** level so "arch support" means the same thing across every running shoe — per-product free-form attributes are one-offs and nothing is comparable. And questions must be neutral: "did you love the comfort?" biases the answer and corrupts the data.*

**Progressive** — frictionless rating at the floor, depth at the ceiling. Right moment, right channel: SMS alongside email, triggered on delivery.

**The unlock: let brands run us *alongside* what they already have.** A brand on Yotpo or Judge.me shouldn't have to rip and replace to collect through Trustpilot — they add us. **That removes the switching barrier entirely**, and it's how coverage scales. And it pairs with the syndication fee: a brand that won't switch collection platforms can still bring its reviews to us, screened and scored, for a price.

**The brand's advantage:** reviews requested through trustpilot.com convert better than reviews requested from a brand's own domain — better deliverability, and an ask that reads as *"tell the world"* rather than *"help our marketing."*

**Governing metric:** per-SKU attribute coverage.

#### Initiative 2 — Build the consumer destination for product truth

Already in flight; the job is to make it work, and then make it bigger.

**Make the pages work.** PRPs need real traffic, because traffic makes pages authoritative and authority is what gets them cited. **99.5% of our citations are organic — won by pages that exist and rank.** Today: restricted beta, selected categories, **no product search on trustpilot.com**, no product sitemap, discovery only via a 12-item carousel on the brand profile. Exit the beta, finish the rollout, make products findable.

**Then cross-brand discovery — the Which? of crowdsourced product truth.**

Which? proves the model: independent, subscription-funded, accepts nothing from manufacturers, and makes recommendations **across brands** that consumers trust. Different evidence base — **crowdsourced experience at scale rather than lab testing** — which complements rather than copies, and scales where testing can't.

**It is also the direct answer to the query-divergence gap.** *"Best running shoes for flat feet"* is a query we barely compete for; a page built from real cross-brand review data **is** the answer to it, and it will rank and get cited.

*Sequenced after coverage builds — comparison over a thin catalogue is worse than none. Guardrails unchanged: ranked on review evidence only, placement never sold, no transaction economics.*

#### Initiative 3 — Pilot syndication *to* Trustpilot *(the controversial one)*

We can't build Bazaarvoice's 1,750-retailer outbound network. **We become the place everyone syndicates *to*** — the Google Seller Ratings model, where Google collects nothing and became the destination.

**Pilot with a handful of partners who are also competitors.** What it buys:
- **Coverage, fast** — the binding constraint on everything
- **It cements us as the third-party destination** in the brand's mind — the neutral place their reviews go, whoever collected them
- **More data to train on** — attribute extraction, category sentiment, and the fraud models that are already the company's deepest moat

**Everything inbound carries a trust score and passes our fraud models.** We don't host other platforms' reviews — **we verify them.** Tiers in Trade-off 3.

**The risk, named:** competitors only feed us if brands make them. That's the Google precedent — merchants demanded integration because Google was where the demand was — but it's a bet on demand-side pull.

---

### Bet 2 — Build the MCP: convert human equity into machine equity

Two decades of trust equity sits in a form machines read lossily or not at all. **The MCP is the conversion layer.**

Commerce is standardising on it — **Adobe made MCP the default agent protocol for Commerce; Microsoft shipped one for Dynamics 365 at NRF 2026**, and an IETF draft is formalising discovery. **The most-cited review source on the internet has no presence on it.** An agent wired into Adobe or Dynamics can query catalogue, price and inventory through a standard interface, then has nowhere standard to go for trust data.

**Ships:** product lookup and comparison tools; **attributes as a filterable dimension**; provenance and freshness as first-class fields; **open, not gated** — where Bazaarvoice's equivalent is enterprise-only, and agents reward coverage.

*Good for the consumer. Good for the brand.* The agent gives a better answer because the evidence is independent; the brand is present at the moment of decision **because** the consumer can rely on it.

**Dependency:** an agent surface over a sparse catalogue is worse than none. **Bet 1 gates Bet 2.**

## Trade-offs

### Trade-off 1 — Free the display layer, charge for verified supply

*Full model in [`04-monetisation.md`](04-monetisation.md).*

> **We charge for verified supply. We give away display and demand.**

**Widgets go free.** Display is a commodity — Judge.me ships unlimited reviews and display tooling at $0–15/mo, and ours is weaker *and* costs more. Charging for it loses deals on the one layer where we have no advantage, and suppresses what we actually want: our content on more sites.

**Invitations stay metered — and that's deliberate.** An invitation goes to a known purchaser and produces a **verified-purchase review**: the highest-trust, brand-controlled, most citable content on the platform. Organic reviews are free and uncontrolled; invitations are directed supply. **The cap isn't a tax on the product — it is the product.**

And it strengthens as Initiative 1 lands: **a better flow means every invitation returns more.** Product work becomes pricing power, the way seats do in SaaS.

**And catalogue size is the wrong tiering dimension** — a brand can have two products and fifty variants, or two thousand products and none. What actually binds is **order volume**: you can only invite people who bought, and that's what plan tiers already proxy.

**And coverage has a ceiling.** Invitation volume is bounded by order volume, syndication only helps where a brand has reviews elsewhere, and a business with genuinely few customers should have a thin trust signal — that's the system working, not a gap. *Worked through in [`../research/12-coverage-limits.md`](../research/12-coverage-limits.md); not a slide.* The practical consequence: **measure the per-product presence cliff before setting coverage targets.** If a product needs ~3 reviews to get cited rather than ~13, most of the long tail is reachable and the ceiling barely matters.

**Syndication becomes a new ARR line.** Brands on Yotpo, Okendo, Judge.me or Loox can choose to **also** syndicate to Trustpilot, for a fee — reviews screened by our fraud models, carried with a trust score, present on PRPs and in the MCP. **Verified presence where AI looks, without changing their collection stack.**

That one move does four things: it reaches brands we currently cannot sell to at all; it **dissolves the "why would a competitor feed us" risk**, because it isn't the competitor's decision — the brand owns its reviews and can bring them; it makes Initiative 3 **revenue-positive**, with the fee funding the screening cost; and it monetises **coverage** directly.

**The agent layer stays open and free.** Agents reward coverage, so gating it caps the thing that makes it valuable. *Consumers read free. Agents read free. Brands pay to be found well* — the company's existing architecture, with agents as the new consumers.

**The line that constrains all of it:** *you can pay to have your data complete and verified; you cannot pay to rank higher.* Paying improves data **quality**, never **position** — exactly as today, where you pay to collect reviews but never buy the score.

| Line | Direction |
|---|---|
| Widgets | **Given away** |
| Invitations | **Core, strengthened** — tiered on catalogue |
| Syndication | **New ARR line** |
| Intelligence | Grown |
| Agent access | Deliberately unmonetised |

**One line given away, one created, two strengthened.**

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
| **Cross-brand discovery** — category browse, "best X for Y", side-by-side comparison across sellers | **Manageable.** We rank competing products against each other — but on review evidence only, never on commercial relationship. The Which? model. | **In scope, sequenced after coverage** |

The second is where *"no vested interest in which provider a transaction happens with"* bites hardest. It's defensible — ranking strictly on review evidence is exactly what a neutral party should be able to do — but it is genuinely new behaviour for Trustpilot.

**Decision: both are in scope, sequenced.** Per-product pages first; **cross-brand discovery once coverage supports it** — comparison over a thin catalogue is worse than none.

**The precedent that settles the neutrality question is Which?** — independent, subscription-funded, accepts nothing from manufacturers, and has made cross-brand recommendations consumers trust for decades. An independent body **can** rank products across brands, provided it never sells placement. That's the same line we already hold, and the guardrails above are exactly how Which? holds it too.

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
| **Repackage** *(Trade-off 1)* | Widgets updated and made free. Syndication priced as a new ARR line. Invitation tiers left broadly as they are. |
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
| **More trust signals** | Return rates, repeat purchase, resolution behaviour — signal at scale without anyone writing anything. The CEO's stated expansion, and **the only real answer for catalogues too thin to review** (see `../research/12-coverage-limits.md`). |
| **Syndicate *out*** | Earned by running the matching, screening and provenance pipes **inbound** first, where we control the destination and failure is cheap. This is how we eventually walk into a Walmart with inventory and a proven capability rather than a pitch. |
| **Review collection flows, expanded** | **SMS provider partnerships and review collection via WhatsApp** — new channels into the engine, and WhatsApp matters most in markets where it *is* the messaging layer. |
| **Better widgets** | A separate category — **display, not collection**. Free from day one, but a proper rebuild comes once the data layer is done. |

## Metrics — how we know it's working

**Attribution is the metrics layer, not a fourth bet.** Blair is already on it — *"we are doing more... to help them really quantify the ROI. It isn't as straightforward as simply things like traffic metrics"* — so claiming it as an initiative would look like we hadn't listened. But nobody has closed the loop, and that's where this section earns its place.

### Leading — collection quality (Bet 1)
- **Per-product attribute coverage** — share of *parent products* with enough attribute-rated reviews to be filterable. The headline number, and the first one to go measure. *(Per-review fill rate is the input; coverage is what agents consume. Measured on parent products, since the universal catalogue already rolls variants into one score and one page.)*
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
