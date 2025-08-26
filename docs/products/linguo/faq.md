---
sidebar_position: 5
description: Frequently asked questions about Linguo translation platform
---

# Frequently Asked Questions

Find answers to common questions about using Linguo's decentralized translation platform.

## General Questions

### How does Linguo evaluate translator skills?

**Short answer:** Linguo is permissionless - it doesn't evaluate translator skills directly. Skills are self-declared.

**Detailed explanation:** Instead of centralized evaluation, Linguo uses crypto-economic incentives to ensure quality. Translators must stake a deposit when accepting work, and anyone can challenge poor-quality translations. This system incentivizes translators to only accept tasks they're qualified for, as they risk financial loss if their work is successfully challenged.

### How can I be sure a translator is qualified?

Linguo's quality assurance works through economic incentives:

1. **Translator deposits** - Translators stake their own money on quality
2. **7-day review period** - Anyone can identify and challenge poor work
3. **Kleros Court arbitration** - Expert jurors decide disputes
4. **Financial consequences** - Poor translators lose their deposits
5. **Reputation system** - Track record builds over time

This creates strong incentives for translators to only accept work they can complete competently.

### What translation quality standards does Linguo use?

Linguo follows the **[Common European Framework of Reference (CEFR)](https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions)** for language skill assessment.

**Skill Assessment:** Use this [self-assessment grid](https://rm.coe.int/CoERMPublicCommonSearchServices/DisplayDCTMContent?documentId=090000168045bb52) to determine your CEFR level.

## Translation Tiers

### What are the three quality tiers?

**Cost Effective (B2+ translators):**
- Basic translation quality
- Similar meaning, some nuances may be lost
- Occasional typos and minor errors acceptable
- Budget-friendly option for general content

**Standard (C1+ translators):**
- Professional translation quality  
- Nearly identical meaning preservation
- Occasional typos acceptable
- Suitable for business use

**Professional (C2 translators only):**
- Highest quality translation
- Perfect meaning and spirit preservation
- Style and nuances fully maintained
- Text reviewed before submission
- Required for critical documents

### How do skill levels affect available work?

**Translation task eligibility:**
- **B2 level and above** - Can work on Cost Effective tasks
- **C1 level and above** - Can work on Standard tasks  
- **C2 level only** - Can work on Professional tasks
- **Below B2** - Not eligible for any translation tasks

Higher skill levels can access more opportunities and typically earn higher rates.

## Language Support

### Why does Linguo mainly support English translations?

**Current limitation:** Finding specialized jurors for arbitrary language pairs (e.g., Korean ↔ Russian) is challenging for dispute resolution.

**Solution:** English serves as the "pivot language" to ensure sufficient qualified jurors for arbitration.

### How do I get translations between two non-English languages?

**Two-step process:**
1. **First translation:** Source language → English
2. **Second translation:** English → Target language

**Example:** For Korean → Russian:
1. Create Korean → English translation task
2. After completion, create English → Russian task

*Note: This requires two separate transactions and payments but ensures quality through adequate juror availability.*

## Pricing & Payments

### Why do I set minimum and maximum prices?

**Dynamic pricing system:** Price increases linearly from minimum to maximum over the specified timeframe.

**Benefits:**
- **Price discovery** - Find market rates for your content
- **Urgency control** - Higher prices attract faster completion
- **Cost optimization** - Lower starting prices for flexible deadlines

**Fixed pricing:** Set minimum and maximum to the same amount to avoid price changes.

### What happens to my deposit if a translator accepts early?

**Automatic refund:** When a translator accepts your task, you immediately receive back the difference between maximum price and current price.

**Example:**
- Maximum price: $100
- Current price when accepted: $60  
- Automatic refund: $40

This happens automatically without user action required.

### Are there limits on translation requests?

**Number of tasks:** No limit - request as many translations as needed, even simultaneously.

**Text length:** No hard limit, but considerations:
- **Optimal size:** ~4,000 words per task
- **Reviewer efficiency:** Very long texts may receive less thorough review
- **Critical translations:** Consider self-review for important content
- **Multiple translators:** No guarantee same translator handles all parts

### Can I trust the displayed word count?

**Short answer:** No! Always verify yourself.

**Why:** Linguo handles multiple languages and file formats, making accurate word counting challenging. While heuristics exist for text-based formats (TXT, PDF, JSON), the count is ultimately controlled by the requester.

**Recommendation:** Double-check word counts for pricing accuracy.

## Fees & Economics

### What are the different fees?

**Challenger Fee:**
- Deposit paid by reviewers when raising quality disputes
- Returned if challenge succeeds
- Lost if challenge fails

**Translator Fee:**
- Deposit paid by translators when accepting work
- Returned after successful completion
- Lost if work is successfully challenged

**Arbitration Fee:**
- Paid to Kleros jurors for dispute resolution
- Deducted from winner's payout
- Covers cost of decentralized arbitration

## Technical Questions

### What wallets work with Linguo?

**Supported wallets:**
- MetaMask (recommended)
- WalletConnect-compatible wallets
- Coinbase Wallet
- Trust Wallet
- Hardware wallets (Ledger, Trezor)

### Which networks does Linguo support?

**Primary networks:**
- **Ethereum Mainnet** - Main deployment
- **Gnosis Chain** - Lower fees, faster transactions

**Payment tokens:**
- ETH (Ethereum)
- xDAI (Gnosis Chain)
- PNK tokens (staking and rewards)

### How do I switch networks?

**In MetaMask:**
1. Click network dropdown
2. Select Ethereum Mainnet or Gnosis Chain
3. Confirm network switch
4. Refresh Linguo page

**Need Gnosis Chain setup?** Follow [this guide](https://www.xdaichain.com/for-users/wallets/metamask/metamask-setup) for configuration.

## Dispute Resolution

### What happens during a dispute?

**Process timeline:**
1. **Challenge submitted** with evidence by reviewer
2. **Case created** in Kleros Court specialized subcourt
3. **Juror selection** from qualified language experts
4. **Evidence review** by selected jurors
5. **Voting period** for dispute resolution
6. **Decision execution** and payment distribution

**Possible outcomes:**
- **Challenger wins:** Translator loses deposit, challenger gets reward
- **Translator wins:** Challenger loses deposit, translator gets full payment

### How are jurors qualified?

**Juror requirements:**
- **Language expertise** in the relevant language pair
- **PNK token staking** in appropriate subcourt
- **Track record** of fair and accurate decisions
- **Active participation** in the Kleros ecosystem

## Troubleshooting

### My transaction is stuck or failing

**Common solutions:**
1. **Check gas fees** - Increase if network is congested
2. **Verify balance** - Ensure sufficient ETH/xDAI for fees
3. **Clear browser cache** - Refresh page and reconnect wallet
4. **Try different browser** - Some wallets work better with specific browsers
5. **Contact support** - Join Discord for technical help

### I can't find my translation task

**Check locations:**
- **My Translations** - For requesters
- **Work as Translator** filtered by status - For translators  
- **Review Translations** - For reviewers
- **Transaction history** - Verify blockchain confirmation

### Payment issues

**Common causes:**
- Network congestion delaying transactions
- Insufficient gas fees
- Wrong network selected
- Smart contract interaction failed

**Solutions:**
- Wait for network confirmation
- Check transaction on blockchain explorer
- Retry with higher gas fees
- Switch to recommended network

## Getting Help

### Community Support

**Discord:** [Kleros Discord](https://discord.gg/MhXQGCyHd9) - #linguo channel
**Telegram:** [Kleros Community](https://t.me/kleros)
**Forum:** [forum.kleros.io](https://forum.kleros.io) for detailed discussions

### Documentation

**Platform guides:**
- [Requesting translations](./requesting-translations)
- [Working as translator](./working-as-translator)  
- [Reviewing translations](./reviewing-translations)

**Technical resources:**
- [Kleros Court documentation](../../products/court/)
- [Arbitration standards](../../developer/arbitration-standard)
- [Evidence standards](../../developer/evidence-standard)

---

## Still have questions?

**Can't find your answer?** Join our community channels:
- **Discord** for quick help and discussion
- **Telegram** for community support
- **Forum** for detailed technical questions

**Found a bug or issue?** Report it on our [GitHub repository](https://github.com/kleros) or contact the development team through Discord.

*The Linguo community is here to help you succeed with decentralized translation!*