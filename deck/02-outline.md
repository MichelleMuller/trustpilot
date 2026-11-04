# Deck outline — slide by slide

**28 slides, five acts.** The deck turns on slide 9 — everything before it earns the thesis, everything after executes it. **We get to the bets by slide 11.**

> **Trustpilot has won the destination. The next 12–18 months is about being wherever the consumer *starts* the buying conversation — in order to support it. Brands who use Trustpilot don't lose their visibility. Brands who don't — even the big ones — might. The engine that gets us there is product reviews.**

*Three slides need your assets — marked **[ASSET]**.*

---

# ACT 1 — The ground moved

### 1. Cover
**Trustpilot Product Reviews — a 12–18 month strategy.** Michelle Muller. Dark slide.

### 2. Trustpilot exists because reputation couldn't travel
Mühlmann sold cables on eBay, built a strong seller rating, went independent — *"and realised he couldn't take his seller rating with him."* So he built *"something that didn't just exist on eBay, but existed in lots of other places as well."*
**Big quote slide.**

### 3. Now the problem is that reputation can't be parsed
Same sentence, one word changed. Two decades of trust equity built for a world where a *person* read the page. **Equity a machine can't parse doesn't convert.**
**Statement slide**, accent background.

### 4. Two sides, one mechanism **← your slide**
| **The brand wants** | **The consumer wants** |
|---|---|
| To be found when someone's deciding | To know what this is actually like |
| To be recommended, not just listed | To not be sold to |
| Visibility in the answer | An answer they can trust |
| Proof that isn't their own marketing | Someone with nothing to gain |

**They look like two jobs. They're one.** The brand only gets visibility *because* the consumer can trust the source. **Independence isn't a constraint on the model. It is the model.**

### 5. Company-intent and product-intent are different queries
| We win these | We barely compete for these |
|---|---|
| "is Brooks a legit company" | "best running shoes for flat feet" |
| "is this site a scam" | "does this jacket run small" |
| "what's their return policy" | "X vs Y — which actually lasts" |

### 6. What AI says when someone asks for a product **← your slide [ASSET]**
Screenshots: *"best sneakers for walking in London"* across engines. Callouts to write once you send them.

### 7. Reviews used to validate the decision. Now they make it.
Seer funnel: **2% awareness → 16% evaluation → 24% intent.** That shape describes the **old** journey — discover yourself, narrow, then use reviews to confirm.
**Agentic discovery collapses it.** The model uses review data to **build the candidate set**. Agents filter → rank → format, and attributes are consumed at **filter**.
**So the 2% is the opportunity, not the 24%.**
> **The goal is that the best product for the query gets discovered and converted on.**

### 8. What AI reaches for — and where we supply it
**The Seer study told us exactly what AI uses when it cites a review source. We need all of it, at both levels — and at product level we have far less of it.**

| What AI uses | What the study found | Where we stand |
|---|---|---|
| **A score** | **59%** of Trustpilot-citing answers quote the TrustScore or star rating | Strong at company. **Lower volume at product level.** |
| **A count** | **16.6%** quote review volume; ~3 in 5 surface a numeric signal of some kind | Strong at company. Lower at product level. |
| **Thematic detail** | Five themes dominate: service **63%**, shipping **34%**, quality **33%**, legitimacy **30%**, refunds **21%** | **Derived** from text at company level. Deriving themes needs a lot of reviews about one thing — so at lower per-product volume it has to be **collected** instead. |
| **Recency** | One of three named factors. Stale reviews are far less likely to be cited | **Free at company** — 200k reviews a day means a page is never stale. **Not automatic at product level.** |
| **Volume past a threshold** | **1% → 54%** at ~13 reviews **→ 75%** at ~81 | Proven at company. **No published figure for the product-level threshold.** |

**Why per-product volume is structurally lower.** A company page aggregates *every* customer. A product page gets only the buyers of that product. So the count per product is necessarily a fraction of the count per company — arithmetic, not an assumption. **Mechanisms that work at company scale — deriving themes from text, freshness arriving for free — can't be assumed to work per product.**

**And one the study didn't test, which the agent era adds: verified purchase.** Trustpilot already holds it — `isVerified`, `verificationLevel`, `reviewSource` — and shows a badge to humans. It isn't exposed as a signal a machine can read, and schema.org has no slot for it. **In an internet filling with synthetic review text, that's the most defensible thing we could hand an agent.**

> **Seer told us what AI reaches for. We supply it strongly at company level and at lower volume per product — and the queries are moving to products.**

# ACT 2 — The thesis

### 9. The thesis **← the hinge**
> **Trustpilot has won the destination.**
> **The next 12–18 months is about being wherever the consumer *starts* the buying conversation — in order to support it.**
> **Brands who use Trustpilot don't lose their visibility. Brands who don't — even the big ones — might.**
> **The engine that gets us there is product reviews.**

Full-bleed statement slide. *Callback at 28.*

### 10. Two assets no competitor has
**The pairing.** Bazaarvoice, Yotpo, Okendo and PowerReviews have product reviews and **no independent company-level trust layer**. We have both. *"Is this seller legitimate"* and *"is this product any good"* from one source.

**Organic supply.** Every competitor can only collect **what a brand asks for** — solicited reviews, brand-initiated, one invitation at a time. **We have a destination people come to.** ~64m monthly readers, **100+ reviews posted every minute**, and North America organic reviews **+50% YoY**. Consumers arrive unprompted to tell us about a company.

**No competitor can replicate that, because none of them has a destination.** And at product level it's the whole opportunity: people already come to us to talk about companies — product pages let them tell us about *products*.

---

# ACT 3 — The bets

### 11. Two bets
> *"Get trust signals in **very large quantity**, make them **as trusted as possible**, and get them into **as many places as possible**."*

| **Bet 1 — Product review collection** | **Bet 2 — MCP** |
|---|---|
| Coverage and authority | Human equity → machine equity |
| Collection flow · Consumer destination · Syndication in | Build the MCP |

**Neither works alone.** Coverage a machine can't read is invisible. A machine-readable layer over a thin catalogue has nothing to read.

### 12. Bet 1 — Coverage and authority
At company level we won by **covering the entity space**. Absence became a signal *because* presence was the norm — ChatGPT flags a missing profile **34.4%** of the time. **At product level we have neither coverage nor identity.**
And if reviews build the candidate set, no review data means **not in the set.** Coverage becomes existence.

### 13. Initiative 1 — Enhance the collection flow
**Don't infer attributes. Ask for them — and let the model decide what to ask.**

An LLM can look at a product and generate the right questions: a running shoe → fit, arch support, durability, breathability. A mattress → firmness, motion transfer, temperature. A savings account → rate, fees, app, service.

**That's what a form structurally cannot do.** A form has fixed fields, so it asks everyone the same two generic questions. A conversation asks *this product's* questions.

And it inverts the volume problem from slide 8: **instead of inferring attributes from hundreds of reviews, you ask once and get a structured value from one.** No volume requirement, no drift, no per-brand configuration.

**Which is the adoption unlock.** Okendo makes brands configure attribute prompts; that's setup burden, and setup burden is why most catalogues never get covered. **Generated attributes mean a brand gets coverage on day one with zero configuration** — and the same mechanism works for bank accounts and holiday packages, not just physical goods.

*Design constraint: generate at **category** level so "arch support" means the same thing across every running shoe — otherwise attributes are one-offs and nothing is comparable. And questions must be neutral; "did you love the comfort?" biases the answer.*

Plus: progressive depth, right moment and channel (SMS alongside email, triggered on delivery), **variant capture** — *which one did you buy* — and **brands run us alongside what they already have.** No rip-and-replace.

### 14. Today's collection flow **[ASSET — screenshots in repo]**
The teardown. Two generic attributes, **both optional**. Media: three empty boxes, no prompt. No verified-purchase signal. No variant capture. Manual date entry inherited from company reviews.
**We're marketing an AI-visibility outcome built on attribute-rich data — on a form that collects none of it reliably.**

### 15. The category moved to collection a year ago
Bazaarvoice shipped **Talk-to-Text** and a **Visual Content Coach** in **November 2025**, explicitly for AI discoverability. Yotpo ships AI Smart Prompts.
**Not a novel idea — a year-old move we haven't answered.** Our edge isn't the idea; it's the substrate underneath it.

### 16. What better collection looks like **← your slide [ASSET]**
The conversational interface, side by side with today's form.
*Live demo: QR code.*

### 17. Initiative 2 — The consumer destination for product truth
**Make the pages work first.** PRPs need real traffic — traffic makes pages authoritative, authority is what gets them cited, and **99.5% of our citations are organic.** Today: restricted beta, selected categories, **no product search on trustpilot.com**, no product sitemap, discovery only via a 12-item carousel.

**Then cross-brand discovery — the Which? of crowdsourced product truth.** Which? proves the model: independent, subscription-funded, takes nothing from manufacturers, trusted to recommend **across brands**. Different evidence base — crowdsourced experience at scale, not lab testing — which complements rather than copies, and scales where testing can't.
**It's the direct answer to slide 5.**

### 18. Initiative 3 — Pilot syndication *to* Trustpilot **← the controversial one**
We can't build Bazaarvoice's 1,750-retailer outbound network. **We become the place everyone syndicates *to*** — the Google Seller Ratings model.
**Pilot with a few partners who are also competitors.** It buys coverage fast, cements us as the third-party destination in the brand's mind, and gives more data to train on.
**It isn't the competitor's decision — it's the brand's.** The brand owns its reviews and can bring them. Priced on order volume, as a new ARR line.

### 19. Verified at the door
Everything inbound passes our fraud models. **We don't host other platforms' reviews — we verify them.**

| Tier | Screened | Carries the score |
|---|---|---|
| Verified — first party | ✓ | ✓ |
| Verified — syndicated | ✓ | ✗ labelled, exposed to agents |
| Rejected | failed | never ingested |

**And this is how we hold the line on incentivised reviews.** Incentivised content is a detectable pattern — we **strip it at ingestion** rather than refusing syndication to avoid it. **Walmart, Target and Google all require it removed**, so it's revenue today for inventory that can't travel tomorrow. *"Our reviews get cited because we don't allow that."*
**Costs named:** largest new operating cost; lower model precision on partner content at first.

### 20. Bet 2 — Build the MCP
Two decades of trust equity in a form machines read lossily or not at all. **The MCP is the conversion layer.**
**Adobe made MCP the default agent protocol for Commerce; Microsoft shipped one for Dynamics 365 at NRF 2026.** The most-cited review source on the internet has no presence on it.
Ships: product lookup and comparison, **attributes as a filterable dimension**, provenance and freshness as first-class fields, **open not gated**.

---

# ACT 4 — Who this is for

### 21. Where we point it: the US
US ≈ **28–30% of traffic** — our largest market. The **UK**, our mature home market, is at *"around 5%"* penetration; the US is far below.
NA H1'26: bookings **+27%**, new business **+76%**, **organic reviews +50%** against paying customers **+11%**. *Supply growing four times faster than monetised demand.*
The rail is built: **Shopify Key Product Partner**, >14% of US ecommerce.

### 22. Two motions, two cost shapes
| | **Ecommerce** | **Offerings** |
|---|---|---|
| Motion | Engineering and architecture | **Sales-push** |
| Job | The volume engine | The margin engine |
| Competition | Contested | **Uncontested** |

**Why uncontested:** every competitor is built on GTINs, catalogue feeds and retailer PDPs. **A bank account has none of those.** In US insurance queries, ChatGPT citations to **brand homepages rose 1.4% → 12.8% in four months** — models citing brands' own words because independent evidence barely exists.

---

# ACT 5 — Execution

### 23. How this monetises
> **We charge for verified supply. We give away display and demand.**

| Line | Direction |
|---|---|
| **Invitations** | **Core, strengthened** — verified-purchase capacity. A better flow means every invitation returns more. |
| **Widgets** | **Free** |
| **Syndication** | **New ARR line**, priced on order volume |
| **Intelligence** | Grown — AEO, competitive, attribute insight |
| **Agent access** | **Open, free** |

*Consumers read free. Agents read free. Brands pay to be found well.*
**The line:** you can pay to have your data complete and verified. **You cannot pay to rank higher.**

### 24. What we stop doing
| We stop | We fund |
|---|---|
| **Widget development** — free, but no roadmap | **The collection flow** |
| **Workflow tooling** — dashboards, response management. Maintain, don't extend. | **Product identity and the entity model** |
| **Company-reviews feature depth** — protect it, don't grow it | **The MCP and the agent layer** |
| **Competing with Profound on AEO measurement** | **The screening pipeline** |

*"Not quite SaaS — it's more about the data and the infrastructure."* **Fund the data layer first.**
**Honest cost:** widgets and dashboards are what customers ask for in the sales call.

### 25. The 12–18 month roadmap
**0–6** unlock and fix what's cheap · **6–12** collection at scale, MCP v1 · **12–18** coverage and the queryable layer. Offerings runs as a parallel low-cost track from month one.

### 26. How we'll know it's working
**Measured at the initiative level**, so a break in the chain tells you *which* initiative is wrong:

| Initiative | The number |
|---|---|
| **Collection flow** | **Product reviews collected** — and attribute coverage per product |
| **Consumer destination** | **PRP traffic**, and products findable |
| **Syndication** | **Product reviews syndicated in**, and partners live |
| **MCP** | **Calls, and unique agents querying** |
| **All of it** | **Product-level citation rate** in comparison queries |

Plus kill criteria per initiative. *(Full menu in [`03-metrics-options.md`](03-metrics-options.md).)*

### 27. What this buys us next
Earned by the work in the window, not promised alongside it.
**Attribution** — closing citation → AI-referred visit → conversion. Nobody in the category has it, and we already see AI-sourced visitors arrive with unusually high intent.
**More trust signals** — returns, repeat purchase, resolution behaviour. Signal at scale without anyone writing anything.
**Syndicate *out*** — reverse the pipes once we've learned them inbound. We walk into a Walmart with inventory and a proven capability, not a pitch.
**More collection channels** — SMS provider partnerships, **review collection via WhatsApp**.
**Better widgets** — a proper rebuild, once the data layer is done.

### 28. Callback
> Same words as slide 9, now earned.
Dark slide.

---

## Assets needed

| Slide | What |
|---|---|
| **6** | *"Best sneakers for walking in London"* across engines |
| **14** | Product-review form screenshots — in `reference/screenshots/` |
| **16** | Conversational collection interface — the prototype |
