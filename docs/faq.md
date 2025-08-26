---
sidebar_position: 5
description: Frequently asked questions about Kleros and decentralized justice
---

# Frequently Asked Questions

## General Questions

### What is Kleros?

Kleros is a decentralized dispute resolution protocol that uses blockchain technology and game theory to provide fair, fast, and affordable arbitration services. It acts as a decentralized third party capable of providing decisions on disputes ranging from simple to highly complex.

### How does Kleros work?

Kleros uses a system of randomly selected jurors who stake PNK tokens to participate in dispute resolution. These jurors review evidence, vote on outcomes, and are incentivized to vote honestly through economic rewards and penalties.

### Why should I trust a decentralized system over traditional courts?

Kleros offers several advantages:
- **Transparency**: All decisions and evidence are publicly verifiable
- **Speed**: Cases resolved in days rather than months or years
- **Cost**: Significantly cheaper than traditional arbitration
- **Accessibility**: Available 24/7 across all jurisdictions
- **Fairness**: Economic incentives ensure impartial decisions

## For Jurors

### How do I become a juror?

To become a juror:
1. [Acquire PNK tokens](./pnk-token)
2. [Stake your PNK in Kleros Court](./products/court/)
3. Wait to be randomly selected for cases
4. Follow the [Juror Tutorial](./products/court/juror-tutorial) to understand the process

### How much can I earn as a juror?

Juror earnings depend on:
- Amount of PNK staked
- Number of cases you're selected for
- Court fees and volume
- Voting coherence with other jurors

Active jurors typically earn 10-20% APY on their staked PNK, though returns can vary significantly based on court activity.

### What happens if I vote incorrectly?

If you vote incoherently (differently from the majority), you lose a portion of your staked PNK tokens. This economic penalty incentivizes careful consideration of evidence and honest voting.

### How does the appeal system work? Doesn't this favor wealthy parties?

The appeal system requires exponentially increasing fees for each round, making frivolous appeals economically irrational. While parties with more resources can afford more appeals, the exponential cost structure and larger jury sizes in later rounds make it extremely expensive to "buy" a favorable outcome. This actually protects against wealthy parties gaming the system.

### Can I specialize in certain types of cases?

Yes! Kleros has specialized subcourts for different dispute types:
- General Court
- Blockchain Non-Technical  
- Blockchain Technical
- English Language
- Marketing Services
- Curation
- And more...

Each subcourt has specific requirements and policies you must understand before staking.

## For Developers

### How do I integrate Kleros into my smart contract?

Integration involves:
1. Making your contract implement the [ERC-792 arbitration standard](./developers/arbitration-standard/erc-792)
2. Adding dispute creation and ruling execution logic
3. Following the [Smart Contract Integration Guide](./integrations/smart-contract-integration)
4. Testing with our [deployment addresses](./developers/deployment-addresses)

[Check out our examples →](./developers/examples/)

### What are the costs of using Kleros?

Costs include:
- **Arbitration fees**: Paid to jurors (varies by court)
- **Gas fees**: For blockchain transactions
- **Appeal deposits**: If you want to appeal a decision

Current arbitration fees range from ~$50-500 depending on the subcourt and complexity.

### Can Kleros work on other blockchains besides Ethereum?

Yes! Kleros is deployed on multiple networks:
- Ethereum Mainnet (full features)
- Gnosis Chain (lower costs)
- Polygon (scaling solution)
- And expanding to more chains

## For Businesses

### What types of disputes can Kleros handle?

Kleros can arbitrate any dispute with objective criteria:
- ✅ **Payment disputes** - Service delivery, quality issues
- ✅ **Content moderation** - Policy violations, spam detection
- ✅ **Identity verification** - KYC, proof of humanity
- ✅ **Data curation** - Token listings, registry validation
- ✅ **Insurance claims** - Parametric insurance, DeFi protocols
- ✅ **Intellectual property** - Copyright, trademark disputes
- ❌ **Subjective preferences** - Artistic taste, personal opinions

### Is Kleros legally recognized?

Kleros arbitration awards can be legally enforceable when:
- Parties agree to Kleros arbitration in their contract
- The jurisdiction recognizes blockchain-based arbitration
- The dispute falls within Kleros's scope

We recommend consulting with legal counsel for specific jurisdictions and use cases.

### How do I know if my use case is a good fit?

Your use case is likely a good fit if:
- Disputes have clear, objective resolution criteria
- Evidence can be presented digitally
- Both parties can agree to use Kleros arbitration
- The transaction value justifies arbitration costs
- You need faster resolution than traditional courts

[Explore our integration use cases →](./integrations/industry-use-cases)

## About PNK Token

### What is PNK used for?

PNK serves multiple purposes:
- **Juror staking** - Required to participate in dispute resolution
- **Governance voting** - Protocol decisions and parameter updates
- **Fee payments** - Some arbitration services accept PNK
- **Economic security** - Protects against attacks through token scarcity

[Learn more about PNK →](./pnk-token)

### Where can I buy PNK tokens?

PNK is available on:
- **DEXes**: Uniswap, Sushiswap, Balancer
- **CEXes**: Bitfinex, Gate.io, OKEX
- **Aggregators**: Paraswap, 1inch

[Complete buying guide →](./pnk-token#where-to-buy-pnk)

### How is PNK different from other governance tokens?

Unlike typical governance tokens, PNK has direct utility:
- **Active participation required** - Must stake to earn rewards
- **Economic skin in the game** - Wrong decisions result in losses
- **Anti-Sybil protection** - Token scarcity prevents attacks
- **Continuous utility** - Used in every dispute, not just governance votes

## Technical Questions

### What standards does Kleros implement?

Kleros implements and promotes several standards:
- **[ERC-792](./developers/arbitration-standard/erc-792)**: Arbitration standard for smart contracts
- **[ERC-1497](./developers/evidence-standard)**: Evidence display standard
- **Court policies**: Detailed guidelines for each subcourt

### How random is juror selection?

Juror selection uses verifiable randomness based on:
- Blockchain block hashes
- Cryptographic commit-reveal schemes
- Proportional selection based on stake

The process is transparent and auditable on-chain.

### What prevents jurors from colluding?

Several mechanisms prevent collusion:
- **Random selection** - Jurors don't know who else is selected
- **Hidden voting** - Votes are concealed until the reveal phase
- **Economic incentives** - Majority voting rewards, minority penalties
- **Appeal mechanism** - Wrong decisions can be challenged

## Security & Trust

### Has Kleros been audited?

Yes, Kleros smart contracts have undergone multiple security audits by leading firms. However, like all DeFi protocols, users should understand the risks involved.

### What happens if Kleros is attacked or compromised?

Kleros has multiple layers of protection:
- **Economic security** - Attacks are prohibitively expensive
- **Governance recovery** - Community can update parameters
- **Fork resistance** - PNK token can be forked if necessary
- **Appeal system** - Wrong decisions can be corrected

### Can the Kleros team control outcomes?

No. The Kleros team cannot:
- Control juror selection
- Influence voting outcomes  
- Modify cases or evidence
- Override community governance

The protocol is fully decentralized and governed by PNK token holders.

## Getting Help

### Where can I get support?

- **[Discord](https://discord.gg/MhXQGCyHd9)** - Real-time community support
- **[Telegram](https://t.me/kleros)** - General discussions
- **[Forum](https://forum.kleros.io)** - Detailed technical questions
- **[GitHub](https://github.com/kleros)** - Developer issues and contributions

### How do I report bugs or issues?

- **Smart contract bugs**: Report via our bug bounty program
- **Application issues**: GitHub issues or Discord
- **Documentation problems**: GitHub pull requests welcome
- **Security vulnerabilities**: Contact security@kleros.io

---

**Still have questions?** Join our [Discord](https://discord.gg/MhXQGCyHd9) community for real-time support, or browse our [detailed documentation](./intro) for more information.

*The Kleros community is here to help you understand and successfully use decentralized justice.*