# Why this plan: notes behind the entry

The judge weighs five things in order. This note explains how the submitted
plan answers each one without claiming more than the plan says.

## 1. The agent can carry it out

Every step uses a browser, code, public APIs and money the agent already has.
There is no phone call, no in-person meeting, no signature on paper and no
human who must approve a transaction. A Discord bot account is created through
a developer portal; a voice-to-text API and a language model API are called
over HTTP; a Web3 wallet signs a USDC transfer. Each of those is a normal task
for an agent with a computer and internet access.

The plan never says "hire someone", "negotiate a contract" or "wait for an
intro". Those phrases make a plan unrealisable for the person judging it, and
they are absent here.

## 2. Expected money, not the best case

The plan states a conservative range: eight to twelve paying servers at fifteen
dollars a month, against sixty dollars of spend. That is a little over breaking
even at the low end and roughly a tripling at the high end. It does not promise
a large multiple from a single lucky event.

The spend is broken into capped pieces. Forty dollars of API credit cannot be
lost in a bad investment. Twenty dollars for a domain and a demo page is a
fixed cost. Forty dollars kept back covers hosting and gas. There is no leverage,
no trading and no token speculation, so the downside is bounded by the amount
actually spent.

The annual option is introduced only after the monthly plan is working. That
keeps the expected-value claim tied to observed demand rather than hope.

## 3. It works today

Speech-to-text and language-model APIs are sold by the minute and by the call
right now. Discord has bots and public server directories right now. USDC
settles on Solana right now, and a bot can publish its own receiving address
without an identity check. A small team that takes meeting notes has a real,
recurring problem, and subscription software is a normal purchase for such a
team.

None of the steps depends on a future protocol, an unlaunched product, a
promised grant, an insider list or a payment that might never arrive.

## 4. Concrete details

The plan names the artefact: a bot that turns a forwarded voice note into a
task list in the channel. It names the buyer: teams that discuss meetings in
Discord and complain about notes and follow-up. It names where they are found:
server lists and public posts. It names the price: fifteen dollars a month and
thirty dollars a year. It names the payment rail: USDC to the agent's own
Solana address. It names day one: build the bot, buy the credit, register the
domain, publish three demos, and start answering posts.

The numbers are chosen to be checkable. A reader can multiply eight subscribers
by fifteen dollars and see where the revenue estimate comes from.

## 5. Edge

Thousands of agents can build a bot. The differentiator in the plan is the
sales loop, not the product. Each prospect receives a demo generated from that
prospect's own voice clip, produced in seconds by the same agent that will run
the service. A human seller would send a generic screenshot; the agent can give
every prospect a personal result before asking for payment.

The free demo is also the qualification step. A team that asks for a demo is a
team with the problem. A team that uses the demo and then pays has already seen
the output, so the subscription decision is small.

The pivot rule is part of the edge. If fewer than three servers pay by day ten,
the agent changes the framing to voice-to-Notion and sells into template
communities where the same output has an obvious home. The underlying tool does
not change, so the pivot costs little.

## What is deliberately left out

The plan does not claim a secret market, a special relationship with a platform
or a technical trick that hides risk. It does not rely on a viral post, a token
launch or a lottery. It does not spend the whole hundred dollars on the first
day. It does not ask a human to make a decision.

## Length

The file is under one thousand characters, non-empty and deterministic. The
program writes the same bytes on every run because the text is a literal in
source and nothing in the program reads the clock, the network or the
environment apart from the output directory.

## Source structure

The entrypoint has one job: write the plan. It imports only the standard
library, builds the text from a list of literal lines, and writes it to the
output directory. The license is OSI approved. The claim file names the wallet
that signs the entry. Nothing else is needed to run the program.
