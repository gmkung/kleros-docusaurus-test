---
sidebar_position: 4
description: The native governance and utility token of the Kleros ecosystem
---

# PNK Token

⛓️ [**PNK Token Contract Address on Ethereum Mainnet**](https://etherscan.io/token/0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d)

## Where to Buy PNK

### DEX Aggregators (Large Trades)
- 🔼 [Paraswap](https://paraswap.io/#/) - Best price aggregation
- 🦓 [1inch](https://1inch.exchange/#/) - Smart routing

### DEXes on L1 (Medium Trades)
- 🦄 [Uniswap](https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d)
- 🍣 [Sushiswap](https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d)
- ⚖️ [Balancer](https://balancer.exchange/#/swap)

### DEXes on L2 (Small Trades)
- 🔷 [Deversifi](https://app.deversifi.com)

### Centralized Exchanges (Fiat Trading)
- 🍃 [Bitfinex](https://www.bitfinex.com/t/PNKETH)
- 🚪 [Gate.io](https://www.gate.io/trade/PNK_USDT/?ch=en_sm_0421)
- 🆗 [OKEX](https://www.okex.com/markets/spot-info/pnk-usdt)

### Credit Card Onramp
- 🛡️ [Guardarian](https://guardarian.com)

## What is PNK?

PNK is the native token of the Kleros ecosystem, serving multiple critical functions:

- **Voting Rights:** PNK holders participate in all governance decisions on the Kleros platform, including court parameters, policy updates, and protocol upgrades.

- **Staking for Jury Selection:** Users must stake PNK to become eligible jurors. The more PNK staked, the higher the chance of selection for dispute resolution cases.

- **Economic Incentives:** Jurors who vote coherently with the majority receive rewards, while those who vote incoherently lose a portion of their stake.

- **Court Governance:** Each subcourt uses PNK for specialized governance decisions regarding policies, fees, and juror requirements.

## PNK Testnet Faucets

For testing and development purposes, you can obtain testnet PNK from these faucets. Call the `request` function to receive 10,000 PNK (limited to once per address):

- [Goerli PNK Faucet](https://goerli.etherscan.io/address/0x4B89e798B10478A839Ea0Abcf86C4B94A3C782A4/README.md#writeContract)
- [Kovan PNK Faucet](https://kovan.etherscan.io/address/0x4e95b2e0ecb3bd394e1dddd775504820a746d3bd#writeContract)

*Contact the Kleros team if you need PNK faucets on other testnets.*

## Why Kleros Needs a Native Token

### Protection Against Sybil Attacks

The primary purpose of PNK is to protect the Kleros protocol against [Sybil attacks](https://en.wikipedia.org/wiki/Sybil_attack). To flood the juror pool with malicious actors, an attacker would need to acquire at least 51% of all staked PNK tokens - a prohibitively expensive endeavor.

### Economic Security Through Scarcity

Unlike using ETH or other external tokens, PNK's limited supply creates natural economic barriers:

- **Market Liquidity Defense:** As attackers attempt to buy large amounts of PNK, the price increases and liquidity decreases, making attacks exponentially more expensive.
- **Concentrated Market:** PNK has a smaller, more concentrated market compared to ETH, meaning large purchases significantly impact price and availability.

### Attack Cost Amplification

If an attacker successfully acquires 51% of PNK and begins making obviously incorrect decisions:

1. **Reputation Damage:** The Kleros platform loses credibility
2. **Token Value Collapse:** PNK price drops significantly  
3. **Attacker Losses:** The attacker loses substantial value on their PNK holdings
4. **Economic Deterrent:** The financial loss serves as a strong disincentive

This creates a self-reinforcing security mechanism where attacking the system becomes economically irrational.

### Fork Resistance as Last Resort

In extreme scenarios, the community can fork the PNK token to exclude an attacker's holdings, similar to [Augur's ultimate appeal mechanism](https://medium.com/kleros/kleros-and-augur-keeping-people-honest-on-ethereum-through-game-theory-56210457649c). While disruptive, this provides a final line of defense unavailable with external tokens.

## Token Economics

### Total Supply
- **Current Supply:** 764,626,704 PNK
- **Supply Changes:** Only possible through community DAO governance votes
- **Distribution:** Distributed through various mechanisms including staking rewards and community allocations

### Utility Functions
1. **Court Staking** - Lock PNK to participate as a juror
2. **Governance Voting** - Vote on protocol parameters and upgrades  
3. **Fee Payments** - Pay for arbitration services in some contexts
4. **Incentive Alignment** - Reward honest behavior, penalize dishonest actions

## The Pinakion Connection

The "PNK" ticker derives from "Pinakions" - small bronze plates used in Ancient Athens. Citizens' names were inscribed on these plates and inserted into a randomizing machine (kleroterion) to select participants for juries and civil service roles.

This historical connection reflects Kleros's mission to bring democratic, randomized justice to the digital age through cryptographic methods rather than mechanical bronze plate systems.

## Getting Started with PNK

### For Jurors
1. [Acquire PNK tokens](./pnk-token) from supported exchanges
2. [Stake in Kleros Court](./products/court/) to become eligible for jury duty
3. Participate in cases and earn rewards for coherent voting

### For Governance Participants
1. Hold PNK tokens in your wallet
2. [Join governance discussions](https://forum.kleros.io) on the forum
3. [Vote on proposals](https://snapshot.org/#/kleros.eth) using your PNK balance

### For Developers
1. Review the [ERC-792 arbitration standard](./developers/arbitration-standard/erc-792)
2. Explore [integration examples](./developers/examples/)
3. Consider PNK requirements for your arbitrable contracts

---

**Learn More:**
- [Detailed Token Economics](https://medium.com/kleros/why-kleros-needs-a-native-token-5c6c6e39cdfe)
- [Governance Participation Guide](./governance)
- [Court Staking Tutorial](./products/court/staking-guide)

*PNK tokens represent more than utility - they embody the economic incentives that make decentralized justice possible.*