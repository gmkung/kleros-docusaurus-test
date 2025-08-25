---
sidebar_position: 2
description: Frequently Asked Questions about Kleros
---

# Frequently Asked Questions

## General

### Can you really trust a decision made by anonymous people on the Internet?

Satoshi Nakamoto taught us that a number of anonymous computers who do not trust each can still reach consensus, provided incentives are correctly structured. Kleros extends this principle to human decision-making. A number of anonymous jurors who do not trust each other can reach consensus on a right decision, provided incentives are correctly structured.

Since decisions made in Kleros affect the allocation of resources, there is an incentive for parties to try to bribe or intimidate the tribunal. Pseudonymity is intended to protect jurors from bribing attempts, intimidation, and retaliation. It favors their functional independence (ability to freely give their judgement). It also simplifies the process of users becoming jurors and avoids the costs of identity verification. By providing a secure environment and simplifying the selection process, Kleros greatly enlarges the pool of potential jurors. This results in lower arbitration costs and the democratization of access to justice.

To learn more about the incentive system, read our [white paper](https://kleros.io/whitepaper.pdf).

### How long has Kleros been operating?

Kleros Court has been live since 2018 on Ethereum mainnet, and it has handled and ruled on more than a thousand different cases and has a community of more than 760 active jurors staking in 23 different courts (Source: [KlerosBoard](http://klerosboard.com)). 

Kleros Court has ruled fairly on several controversial cases where millions of dollars were at stake (see [Famous Kleros Cases](/products/court/famous-cases)). It is trusted as an unbiased and transparent arbitration layer by multiple DApps across different fields including:

- Prediction Markets
- Insurance 
- Decentralized Exchanges (DEX)
- Sybil-Resistance
- Marketplaces

Check all current integrations [here](/integrations/live-integrations).

### What is the PNK token supply?

The current total supply is **764,626,704 PNK**. The supply can only be modified by the Kleros community through a DAO governance vote.

### Does a party who wants to have a case adjudicated need to hold PNK?

No, only jurors need PNK in order to be drawn. Parties don't even need to know what the Kleros token is.

### Is the identity of jurors revealed?

Since decisions made in Kleros affect the allocation of resources, there is an incentive for parties to try to bribe or intimidate the tribunal. Anonymity is intended to protect jurors from intimidation and retaliation. It also simplifies the process of users becoming jurors and avoids the costs of identity verification. 

By providing a secure environment and simplifying the selection process, Kleros greatly enlarges the pool of potential jurors. This results in lower arbitration costs and the democratization of access to justice.

### What is Kleros token allocation?

- **Team Members**: 18%
- **First Round of Token Sale**: 16%
- **Airdrop**: 4%
- **Subsequent Rounds and Juror Incentive Program**: 50%
- **Kleros Cooperative Development Reserve**: 12%

### Could Kleros become a platform used by mainstream online retailers?

Yes, by adopting Kleros, any mainstream e-commerce platform could enjoy a fast, affordable, and transparent dispute resolution method. 

If you want to learn more, watch this talk ["When Decentralized Protocols Meet the Real World"](https://youtu.be/ssdgdV_fngI) or [contact us](/products/enterprise).

### How does the appeal system work? Doesn't this favor wealthy parties?

Anyone can appeal a dispute ruling in Kleros. Most of the time both sides will be asked to contribute fees for the next round of voting to ensure jurors are rewarded and that the winning side is reimbursed of its paid fees.

We have made several design choices to ensure fair outcomes even when parties have different resources:

1. **Appeal fees can be "crowdfunded"** - Anyone can contribute a portion of either side's appeal fees, potentially with many small contributions adding up to cover the whole fee.

2. **Crowdfunders are rewarded** - Those who pay part of the fees of the side that ultimately wins are financially rewarded.

People are incentivized to look at current appealed cases to spot obvious incorrect rulings and help crowdfund the other side to earn rewards. This has proven effective to deter wealthy parties from trying to win just by appealing several times.

Learn more about [crowdfunded appeals](https://blog.kleros.io/kleros-decentralized-token-listing-appeal-fees/).

### Can someone perform a 51% attack on Kleros Court?

For a "whale" attacker to flood the juror pool and control the court, they would need to buy enough PNK to be selected as a juror for the same case enough times to change the outcome. Generally, this means attacks need 51% of the total staked tokens.

**Why 51% attacks are economically impractical:**

1. **Market liquidity dries up** - As the attacker buys PNK, it becomes scarce and each additional PNK costs more. The attacker may not find 51% of PNK for sale at any given time.

2. **Community response** - If an attacker manages to buy a majority and commits obvious miscarriages of justice, Kleros would lose credibility and PNK value would decrease, causing the attacker substantial losses.

3. **Fork defense** - As a last resort, the community could fork the system to remove the attacker's holdings, similar to Augur's ultimate appeal mechanism.

### How can I verify the dispute resolution process hasn't been tampered with?

Kleros is committed to full transparency:

- All cases are completely open and can be monitored by anyone with internet access
- The entire history of cases is published on-chain for reference
- All cryptoeconomic research is public
- The code is open source
- A fully working version of Kleros could be replicated by anyone with blockchain technical skills

### Can Kleros handle complex cases beyond simple binary decisions?

Yes! Kleros can handle:
- Multiple choice questions
- Numerical/scalar outcomes (e.g., "What is the number of electoral college votes won by Biden in the 2020 election?")

We generally recommend binary choices to avoid vote-splitting and allow small juries (potentially just one juror) to arrive at useful results.

For complex multi-factorial cases, [Pendulum arbitration](https://en.wikipedia.org/wiki/Pendulum_arbitration) can be used to ask juries to choose between multiple sets of outcomes.

## For Jurors

### Can appeals be managed outside of Kleros?

Yes, it's possible to create an arbitrable smart contract that uses Kleros for first instance disputes and allows appeals to be handled outside of Kleros.

### Can I use a smart contract account to stake?

Jurors should not stake using smart contract accounts in **courts where hiddenVotes are enabled** because the frontend cannot verify the signature. 

Courts with hiddenVotes enabled:
- **General Court on Gnosis Chain**
- **Spanish General Court on both Ethereum Mainnet and Gnosis Chain**

### Can I recuse myself from a case without penalty?

Jurors drawn for a dispute must participate and cannot recuse themselves. However, they can vote "Refuse to Arbitrate" under specific conditions (see below).

Allowing recusal would disrupt the balance of dispute resolution costs and could compromise the integrity of outcomes in complex cases.

### When should I vote "Refuse to Arbitrate"?

Vote "Refuse to Arbitrate" when:

- **General Court guidelines indicate so** - For example, when both parties have engaged in immoral activities (like assassination market disputes)
- **Specific court guidelines indicate so** - For example, in translation courts when parties fail to specify disputed parts in large content
- **The applicable policy indicates so**

Always review court guidelines and applicable policies on the case details page before voting.

### How do you ensure jurors are impartial?

The random selection procedure makes it extremely hard to be selected as a juror for a case you're involved in. Even if this happens, the appeal system allows correcting the ruling.

While complete elimination of bias is impossible in any system, Kleros minimizes bias through:
- Random selection
- Economic incentives for honest voting
- Appeal mechanisms
- Transparency requirements

### How do you verify juror expertise if they're pseudonymous?

Kleros uses **economic self-selection**:

- Jurors choose which subcourts to participate in
- Users with proper expertise make money over time
- Users without adequate expertise lose money and exit

This works similarly to Wikipedia - users without expertise may participate but will likely be sanctioned economically.

### How is evidence presented and managed?

Evidence presentation depends on dispute type:
- Freelancing disputes require different evidence than insurance or payment disputes
- Kleros provides a backend for jurors to arbitrate disputes
- Anyone can develop their own frontend interface
- E-commerce platforms can build interfaces that tap into Kleros' juror network

### How do you handle language barriers?

Kleros has subcourts specializing in different languages. For example:
- "Website dispute court in English"  
- "Website dispute court in Spanish"
- "Website dispute court in French"

### How do you ensure jurors review evidence instead of voting randomly?

Through **economic incentives**:
- Jurors who vote randomly are more likely to vote incoherently with the majority
- Incoherent voters lose their staked tokens
- Dishonest jurors lose money over time and leave the court

### Are jurors required to provide justification for their votes?

Yes, jurors must provide justification in the form of short text. Justifications are revealed to disputing parties and other jurors after voting is complete.

### What are the time limits for disputes?

Each subcourt has a specific time period for jurors to submit decisions. Jurors are notified of pending cases needing resolution.

### What happens if jurors don't respond within the time frame?

Jurors who don't rule before the deadline are penalized by:
- Losing some of their staked tokens
- Not receiving the arbitration fee

### Are jurors incentivized to create more disputes for more cases?

No. Voting incoherently to incite appeals only risks losing more money. Since PNK and Kleros are economically independent from other DAOs, jurors cannot directly cause more rulings to come to Kleros Court.

If proper juror activity leads to more partners trusting disputes to Kleros, this should be seen as positive for the ecosystem.

## Legal & Regulatory

### How does Kleros handle legal interpretation without judges?

Similar to how online forum moderators follow predefined rules, jurors follow previously defined rules that instruct them on handling legal nuances. In early stages, Kleros focuses on simpler cases where legal nuances are less important.

### What are the main legal and regulatory hurdles?

Because of its innovative cryptoeconomic approach, Kleros is not recognized as traditional arbitration under international agreements. This could limit adoption in mainstream regulated use cases.

However, this shouldn't obstacle adoption in crypto industry use cases. As Kleros proves effective in these areas, we expect growing interest in mainstream applications and eventual recognition by arbitration associations.

**Key points:**
- Kleros is an 'opt-in' system
- Enforcement is automatic and pre-accepted by contracting parties
- Recognition will likely grow with proven track record

---

## Still have questions?

- Join our [Discord](https://discord.gg/MhXQGCyHd9) for real-time support
- Visit our [Telegram](https://t.me/kleros) for community discussions  
- Check out our [Forum](https://forum.kleros.io) for governance discussions
- Read our [Blog](https://blog.kleros.io) for the latest updates

Ready to get started? Check out our [Juror Tutorial](/products/court/juror-tutorial) or explore our [Developer Documentation](/developers/getting-started/).