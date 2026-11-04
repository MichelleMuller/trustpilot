# Deck outline — slide by slide

**28 slides, five acts.** The deck turns on one hinge, slide 9 — everything before it earns the thesis, everything after it executes it.

> **Trustpilot has won the destination. The next 12–18 months is about being wherever the consumer makes the buying decision — and the engine that gets us there is product reviews.**

*Three slides need your assets — marked **[ASSET]**.*

---

# ACT 1 — The ground moved
*Why the thing that made Trustpilot valuable is now at risk, and where the opening is.*

### 1. Cover
**Trustpilot Product Reviews — a 12–18 month strategy.** Michelle Muller. Dark slide.

### 2. Trustpilot exists because reputation couldn't travel
Mühlmann sold cables on eBay, built a strong seller rating, went independent — *"and realised he couldn't take his seller rating with him."* So he built *"something that didn't just exist on eBay, but existed in lots of other places as well."*
**Big quote slide.** One line, lots of air.

### 3. Now the problem is that reputation can't be parsed
Same sentence, one word changed. Two decades of human trust equity — 400m+ reviews, a brand every UK adult knows — built for a world where a *person* read the page. **Equity a machine can't parse doesn't convert.**
**Statement slide**, accent background.

### 4. Two sides, one mechanism **← your slide**
| **The brand wants** | **The consumer wants** |
|---|---|
| To be found when someone's deciding | To know what this is actually like |
| To be recommended, not just listed | To not be sold to |
| Visibility in the answer | An answer they can trust |
| Proof that isn't their own marketing | Someone with nothing to gain |

**The point:** these look like two jobs. They're one. The brand only gets visibility *because* the consumer can trust the source. **Independence isn't a constraint on the model. It is the model.**

### 5. Company-intent and product-intent are different queries
| We win these | We barely compete for these |
|---|---|
| "is Brooks a legit company" | "best running shoes for flat feet" |
| "is this site a scam" | "does this jacket run small" |
| "what's their return policy" | "X vs Y — which actually lasts" |

The right column is **larger, and it's where comparison happens.**

### 6. What AI says when someone asks for a product **← your slide [ASSET]**
Screenshots: *"best sneakers for walking in London"* across engines.
Callouts to write once you send them — who gets cited, what evidence the model reaches for, whether product-level review data appears at all.

### 7. Reviews used to validate the decision. Now they make it.
Seer funnel as a three-step bar: **2% awareness → 16% evaluation → 24% intent.** The obvious read — *reviews are a bottom-funnel asset* — describes the **old** journey, where consumers discovered products themselves and used reviews to confirm a choice already narrowed.

**Agentic discovery collapses that.** The model uses review data to **build the candidate set**. Agents filter → rank → format, and attributes are consumed at **filter**.

**So the 2% is the opportunity, not the 24%.**

> **The goal is that the best product for the query gets discovered and converted on.**

A quality claim, not a visibility claim — and only an independent source can make it. Which is why coverage stops being optimisation and becomes **existence**.

### 8. What converts to machine equity, and what doesn't
| Human equity | Converts? |
|---|---|
| TrustScore, review count | ✓ clean scalars — 59% and 16.6% quotation |
| Review prose | ~ lossily, and only the few retrieved |
| **Attribute ratings** | ✗ optional at collection |
| **Verification posture** | ✗ not a readable field |
| **Recency** | ✗ not surfaced, despite deciding citation |

**The bottom three rows are the strategy.**

---

# ACT 2 — The thesis
*The hinge. What we're doing, why we're the ones who can, and why it isn't done yet.*

### 9. The thesis **← the hinge of the deck**
> **Trustpilot has won the destination.**
> **The next 12–18 months is about being wherever the consumer makes the buying decision.**
> **The engine that gets us there is product reviews.**

Full-bleed statement slide, accent background. The only slide with no supporting content.
*Callback at slide 28.*

### 10. Two assets no competitor has
**The pairing** — Bazaarvoice, Yotpo, Okendo and PowerReviews have product reviews and no independent company-level trust layer. We have both. *"Is this seller legitimate"* and *"is this product any good"* from one independent source.

**The collection advantage** — every competitor sends review requests from the brand's own domain. We send from trustpilot.com. Better deliverability, higher response, and the ask reads as *"tell the world"* not *"help our marketing."* **Currently unmeasured, unpriced, unmentioned.**

### 11. The collection layer is the weak link **[ASSET — screenshots in repo]**
The live form teardown. Two generic attributes, **both optional**. Media: three empty boxes, no prompt. No verified-purchase signal. No variant capture. Manual date entry inherited from company reviews.

**We're marketing an AI-visibility outcome built on attribute-rich, verified data — on a form that collects none of it reliably.**

### 12. The category moved to collection a year ago
Bazaarvoice shipped **Talk-to-Text** and a **Visual Content Coach** in **November 2025**, explicitly for AI discoverability. Yotpo ships AI Smart Prompts.
**Richer collection isn't a novel idea — it's a year-old move we haven't answered.** Our edge isn't the idea; it's the substrate underneath it.

### 13. Where we point it: the US
US ≈ **28–30% of traffic** — our largest market. The **UK**, our mature home market, sits at *"around 5%"* penetration; the US is far below.
North America H1'26: bookings **+27%**, new business **+76%**, **organic reviews +50%** against paying customers **+11%**. *Supply growing four times faster than monetised demand.*
The rail is built: **Shopify Key Product Partner**, ~2.86m storefronts, >14% of US ecommerce.

### 14. Two motions, two cost shapes
| | **Ecommerce** | **Offerings** |
|---|---|---|
| Motion | Engineering and architecture | **Sales-push** |
| Job | The volume engine | The margin engine |
| Competition | Contested | **Uncontested** |

**Why uncontested:** every competitor is built on GTINs, catalogue feeds and retailer PDPs. **A bank account has none of those.** And in US insurance queries, ChatGPT citations to **brand homepages rose 1.4% → 12.8% in four months** — models citing brands' own words because independent evidence barely exists.

---

# ACT 3 — The bets
*Two bets. Three initiatives build coverage and authority; one converts it into something machines can read.*

### 15. Two bets
> *"Get trust signals in **very large quantity**, make them **as trusted as possible**, and get them into **as many places as possible**."*

| | **Bet 1 — Product review collection** | **Bet 2 — MCP** |
|---|---|---|
| **What it buys** | Coverage and authority | **Human equity → machine equity** |
| **Initiatives** | Collection flow · Consumer page · Syndication in | Build the MCP |

**Neither works alone.** Coverage a machine can't read is invisible. A machine-readable layer over a thin catalogue has nothing worth reading. **Both, or neither.**

### 16. Bet 1 — Coverage and authority
Three ways to get there: **collect more, surface it better, and let others bring theirs.**

Why coverage is the whole game: at company level we won by **covering the entity space** and addressing it with a key the world already uses. Absence became a signal *because* presence was the norm — ChatGPT flags a missing profile **34.4%** of the time. **At product level we have neither coverage nor identity.** And if reviews now build the candidate set, no review data means not in the set at all.

### 17. Initiative 1 — Enhance the collection flow for attribute coverage
Conversational elicitation instead of a static form. Attributes drawn out, not offered as a skippable row. Progressive: frictionless rating at the floor, depth at the ceiling. Right moment, right channel — SMS alongside email, triggered on delivery.

**And the unlock: let brands use us *alongside* what they already have.** A brand on Yotpo or Judge.me shouldn't have to rip and replace to collect through Trustpilot — they add us. **That removes the switching barrier entirely**, and it's how coverage scales fast. It also makes the free widgets and uncapped invitations (slide 22) coherent: if we're not monetising collection, we don't care who else is collecting too.

**The brand's advantage:** reviews collected through trustpilot.com convert better than reviews requested from the brand's own domain — better deliverability, and an ask that reads as *"tell the world"* rather than *"help our marketing."*

### 18. What better collection looks like **← your slide [ASSET]**
The conversational interface, side by side with the current form.
*Live demo hook: QR code to try it.*

### 19. Initiative 2 — Double down on the consumer product page
Already in flight — the job is to make it work. **PRPs need real traffic**, because traffic is what makes the pages authoritative, and authority is what gets them cited. 99.5% of our citations are organic: **won by pages that exist and rank.**

Today: restricted beta, selected categories, **no product search on trustpilot.com**, no product sitemap, discovery only through a 12-item carousel on the brand profile. Exit the beta, finish the rollout, make products findable.

### 20. Initiative 3 — Pilot syndication *to* Trustpilot **← the controversial one**
Flag it as controversial, then make the case.

We can't build Bazaarvoice's 1,750-retailer outbound network. **We become the place everyone syndicates *to*** — the Google Seller Ratings model, where Google collects nothing and became the destination.

**Pilot with a handful of partners who are also competitors.** What it buys:
- **Coverage, fast** — the binding constraint on everything
- **It cements us as the third-party destination** in the brand's mind — the neutral place their reviews go, whoever collected them
- **More data to train on** — attribute extraction, category sentiment, and the fraud models that are already our deepest moat

**Everything inbound carries a trust score and passes our fraud models.** We don't host other platforms' reviews — **we verify them.** Tiers on slide 24.

### 21. Bet 2 — Build the MCP: convert human equity into machine equity
Two decades of trust equity, in a form machines read lossily or not at all. **The MCP is the conversion layer.**

Commerce is standardising on it — **Adobe made MCP the default agent protocol for Commerce; Microsoft shipped one for Dynamics 365 at NRF 2026.** The most-cited review source on the internet has no presence on it. An agent wired into either can query catalogue, price and inventory through a standard interface, then has nowhere standard to go for trust data.

Ships: product lookup and comparison tools, **attributes as a filterable dimension**, provenance and freshness as first-class fields, **open not gated** — where Bazaarvoice's equivalent is enterprise-only.

*Good for the consumer. Good for the brand.* The agent gives a better answer because the evidence is independent; the brand is present at the moment of decision *because* the consumer can rely on it.

# ACT 4 — Trade-offs
*What this costs, and the line we won't cross.*

### 22. What we stop doing
*"Not quite SaaS… it's more about the data and the infrastructure."* **Stop funding the display and workflow layer. Fund the data layer.**
Clearest cut: **ship one free updated widget set, then freeze.**
**Honest cost:** widgets are what customers ask for in the sales call.

### 23. The line we don't cross
No incentivised reviews, and we accept losing business over it.
**Walmart, Target and Google all require incentivised reviews removed** — revenue today for inventory that can't travel tomorrow. And a brand gets more from an influencer's narrative than a bought five-star.
**"Our reviews get cited by AI because we don't allow that."**

### 24. Verified at the door
| Tier | Screened by us | Carries the score |
|---|---|---|
| Verified — first party | ✓ | ✓ |
| Verified — syndicated | ✓ | ✗ labelled, exposed to agents |
| Rejected | failed | never ingested |

Screening lets us **strip incentivised content at ingestion** rather than refusing syndication to avoid it — and pushes more adversarial variety through the models that are already our deepest moat.
**Costs named:** largest new operating cost; lower model precision on partner content at first.

---

# ACT 5 — Execution
*The plan, the measures, and what would make us stop.*

### 25. The 12–18 month roadmap
Four columns: **0–6** unlock and fix what's cheap · **6–12** collection at scale, MCP v1 · **12–18** coverage and the queryable layer · **beyond** — see next slide.
Offerings runs as a parallel low-cost track from month one.

### 26. What this buys us next
**The "later" slide.** Everything here is **earned by the work in the window**, not promised alongside it — which is what makes the roadmap credible rather than a wish list.

**More trust signals.** Return rates, repeat purchase, resolution behaviour — signal available at scale without anyone writing anything. The CEO's own stated expansion: *"we're interested in other trust signals as well."* It's also the only real answer for catalogues too thin to review.

**Syndicate *out*.** Once we've learned the matching, screening and provenance pipes from incoming syndication, we can run them in reverse — to retailer PDPs and other channels. **We earn the right to walk into a Walmart with inventory and a proven capability, not a pitch.** That's a year-two conversation, and it only exists because of Initiative 3.

**Review collection flows, expanded.** The umbrella: **better widgets**, **SMS provider partnerships**, and **review collection via WhatsApp.** Collection is the engine — these are the next channels into it, and they matter most in markets where WhatsApp *is* the messaging layer.

**Cross-brand product discovery.** Category browse and comparison across sellers. Needs the coverage from the window first — comparison over a thin catalogue is worse than none — and it's a neutrality decision the business shouldn't be asked to take alongside four delivery initiatives.

### 27. How we'll know it's working
**The impact, stated first:**
> **Product Reviews makes Trustpilot a must-have for visibility — for your brand *and* your products — in the age of AI.**

Then the measures. *(Full menu in [`03-metrics-options.md`](03-metrics-options.md); three headline numbers to pick.)*
**Kill criteria per initiative** — the slide that shows this is a plan, not a pitch.
**The unclaimed position:** nobody has closed citation → AI-referred visit → conversion. Trustpilot already observes AI-sourced visitors arrive with unusually high intent and doesn't measure it.

### 28. Callback
> **Trustpilot has won the destination. The next 12–18 months is about being wherever the consumer makes the buying decision — and the engine that gets us there is product reviews.**

Dark slide. Same words as slide 9, now earned.

---

## Assets needed from you

| Slide | What |
|---|---|
| **6** | *"Best sneakers for walking in London"* across engines — tell me what they show and I'll write the callouts |
| **11** | Product-review form screenshots — already in `reference/screenshots/` |
| **18** | Conversational collection interface — the prototype, once built |

## Open before build

- Three headline metrics for slide 27 — see [`03-metrics-options.md`](03-metrics-options.md)
- Speaker notes as a full script? *(Recommended — keeps the slides visual)*
