---
sidebar_position: 5
description: Secure payment escrow with Kleros dispute resolution
---

# Kleros Escrow

**🤝 [Launch Kleros Escrow →](https://escrow.kleros.io)** | **⚙️ [Smart Contracts →](https://github.com/kleros/kleros-interaction/tree/master/contracts/standard/arbitration)**

Kleros Escrow is a secure and decentralized escrow platform for any exchange of goods, assets, or services involving Ethereum-based assets. Built with smart contract automation and Kleros dispute resolution, it brings traditional commerce-level trust to blockchain transactions.

## What is Kleros Escrow?

Kleros Escrow provides a secure intermediary service that holds funds in a smart contract until both parties fulfill their obligations. If disputes arise, they're resolved through Kleros Court's decentralized arbitration system with crowdsourced jurors.

![Kleros Escrow Flow](https://blog.kleros.io/content/images/2019/04/infographic-escrownew.jpg)

## How It Works

### **Simple 5-Step Process**

1. **Create Escrow** - Sender deposits funds and specifies terms
2. **Service Delivery** - Receiver provides goods/services as agreed  
3. **Confirmation** - Sender approves and releases payment
4. **Dispute Resolution** - If disagreement, Kleros Court arbitrates
5. **Final Settlement** - Funds distributed according to resolution

### **Smart Contract Security**

**Trustless Operation:**
- Funds held in audited smart contracts
- No middleman can access or freeze funds
- Automatic execution based on agreed conditions
- Transparent and verifiable transactions

## Key Features

### **Multi-Asset Support**
- **ETH** - Native Ethereum payments
- **ERC-20 tokens** - Any token from Kleros Token List
- **Custom tokens** - Add any ERC-20 manually
- **Cross-chain trading** - Exchange assets across blockchains

### **Flexible Transaction Types**

**General Service Transactions:**
- Freelance work and consulting
- Digital product delivery
- Software development
- Marketing and advertising services
- Any service-based agreement

**Cryptocurrency Transactions:**
- Cross-chain asset swaps
- OTC token trading
- NFT purchases with payment protection
- DeFi service payments

### **Advanced Features**

**Automatic Payments:**
- Set timeout for automatic fund release
- No action required if service completed satisfactorily
- Reduces need for manual intervention
- Streamlines successful transactions

**Partial Settlements:**
- Waive portions of payment for partial delivery
- Negotiate settlements before disputes
- Flexible resolution options
- Preserve working relationships

**Evidence System:**
- Upload agreement documents
- Submit proof during disputes  
- IPFS storage for evidence preservation
- Comprehensive dispute documentation

## Use Cases

### **Business Applications**

**Marketing Services:**
```
Problem: Difficulty verifying quality of social media marketing
Solution: Escrow payment released only after verified results
Benefit: Higher conversion rates and service quality
```

**Software Development:**
```
Problem: Risk of incomplete or substandard code delivery
Solution: Milestone-based escrow with code review requirements
Benefit: Ensures project completion and quality standards
```

**Freelance Work:**
```
Problem: Payment disputes for creative work and consulting
Solution: Clear terms in escrow with expert arbitration
Benefit: Fair resolution and protected payments
```

### **Trading & Commerce**

**Cross-Chain Trading:**
```
Scenario: Trading ETH for SOL tokens
Process: ETH locked in escrow, SOL sent to specified address
Resolution: Escrow releases ETH upon proof of SOL transfer
```

**Physical Goods:**
```
Example: Limited edition collectibles or hardware
Security: Payment held until delivery confirmation
Protection: Dispute resolution for damaged/missing items
```

**Digital Assets:**
```
Use Case: Domain names, intellectual property, digital art
Verification: Proof of ownership transfer required
Safety: Funds released only after confirmed transfer
```

## Getting Started

### **Prerequisites**
- Web3 wallet (MetaMask, WalletConnect)
- ETH for gas fees and transactions
- Clear agreement terms with counterparty

### **Quick Start Guide**

**For Payment Senders:**
1. **Connect wallet** to [escrow.kleros.io](https://escrow.kleros.io)
2. **Create new payment** with recipient details
3. **Deposit funds** into escrow contract
4. **Monitor progress** and approve when satisfied
5. **Handle disputes** if issues arise

**For Payment Recipients:**
1. **Receive escrow link** from payment sender
2. **Review terms** and agreement details
3. **Provide service** as specified in agreement
4. **Request payment** once work completed
5. **Participate in disputes** if necessary

## Economic Model

### **Fee Structure**
- **No platform fees** - Direct peer-to-peer transactions
- **Gas fees only** - Standard Ethereum network costs  
- **Dispute costs** - Arbitration fees only if disputes arise
- **Winner reimbursement** - Winning party gets fees refunded

### **Dispute Economics**

**Arbitration Fees:**
```
Base Cost: ~$50-200 depending on case complexity
Payment: Split between disputing parties initially
Reimbursement: Winner receives full fee refund
Penalty: Loser bears the arbitration cost
```

**Appeal Process:**
```
First Appeal: 3x base arbitration fee
Second Appeal: 9x base arbitration fee  
Final Appeal: Supreme Court with highest stakes
Economic Security: Higher costs deter frivolous disputes
```

## Security & Trust

### **Smart Contract Audits**
- **Professional audits** by leading security firms
- **Open source code** for public verification
- **Bug bounty programs** incentivizing security research
- **Formal verification** of critical contract components

### **Dispute Resolution Integrity**

**Juror Selection:**
- **Stake-weighted random selection** from PNK token holders
- **Specialized courts** for different dispute types
- **Coherence incentives** reward consistent, fair decisions
- **Appeal mechanisms** ensure thorough review

**Evidence Standards:**
- **IPFS storage** for tamper-proof evidence
- **Metadata stripping** for privacy protection
- **Structured submission** formats for clarity
- **Public audit trail** for transparency

## Advanced Usage

### **API Integration**

**For Developers:**
```javascript
// Example integration
import { KlerosEscrow } from '@kleros/escrow-sdk';

const escrow = new KlerosEscrow({
  web3Provider: window.ethereum,
  networkId: 1 // Mainnet
});

// Create escrow transaction
const transaction = await escrow.createTransaction({
  receiver: '0x...',
  amount: '1000000000000000000', // 1 ETH in wei
  token: 'ETH',
  timeout: 30 // days
});
```

**Business Integration:**
- White-label escrow solutions
- Custom dispute resolution terms
- Automated service verification
- Multi-party escrow contracts

### **Enterprise Solutions**

**B2B Services:**
- Large contract escrows with milestone releases
- Service level agreement enforcement
- Automated quality assurance checks
- Multi-signature authorization options

**Marketplace Integration:**
- Built-in escrow for online platforms
- Seller protection and buyer confidence
- Automated dispute escalation
- Reputation system integration

## Best Practices

### **Creating Effective Agreements**

**Clear Terms:**
```markdown
✅ Good: "Deliver 50 high-quality blog posts, 500+ words each, 
         within 30 days. Content must pass plagiarism check."

❌ Bad: "Write some blog posts for us."
```

**Specific Deliverables:**
- Define exactly what will be delivered
- Set measurable quality standards
- Establish clear timelines
- Include acceptance criteria

**Evidence Preparation:**
- Document all communications
- Screenshot important agreements
- Keep receipts and proof of work
- Prepare evidence package early

### **Dispute Prevention**

**Communication:**
- Regular progress updates
- Address concerns early
- Document any changes to terms
- Maintain professional correspondence

**Quality Assurance:**
- Set interim checkpoints
- Request samples or previews
- Provide feedback promptly
- Clarify requirements upfront

## Troubleshooting

### **Common Issues**

**Transaction Won't Confirm:**
- Check gas fee settings
- Verify sufficient ETH balance
- Ensure network connectivity
- Try increasing gas limit

**Dispute Process Confusion:**
- Review evidence requirements
- Check arbitration fee amounts
- Monitor payment deadlines
- Seek support in community channels

**Smart Contract Interactions:**
- Verify correct contract addresses
- Check token approvals
- Confirm transaction parameters
- Use block explorer for verification

### **Getting Support**

**Community Resources:**
- **[Discord](https://discord.gg/MhXQGCyHd9)** - #escrow channel for quick help
- **[Telegram](https://t.me/kleros)** - Community support group
- **[Forum](https://forum.kleros.io)** - Detailed technical discussions

**Documentation:**
- [Court system guide](../court/) - Understanding dispute resolution
- [Developer resources](../../developer/) - Technical integration
- [Evidence standards](../../developer/evidence-standard) - Dispute preparation

---

## Next Steps

Ready to secure your transactions with Kleros Escrow?

- 🚀 **[Start Your First Escrow →](https://escrow.kleros.io)** - Create secure transaction
- 📖 **[Complete Tutorial →](./escrow/tutorial)** - Step-by-step guide
- 🔧 **[Technical Specs →](./escrow/specifications)** - Smart contract details
- ❓ **[Get Support →](https://discord.gg/MhXQGCyHd9)** - Community help

*Transform your business transactions with blockchain-powered escrow and fair dispute resolution.*