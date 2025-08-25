---
description: Test your technical knowledge of Kleros arbitration integration
---

import InteractiveQuiz from '@site/src/components/Quiz/InteractiveQuiz';

# Developer Knowledge Quiz

<InteractiveQuiz
  title="Developer Knowledge Quiz"
  description="Test your understanding of Kleros smart contract integration, arbitration standards, and technical implementation before building with Kleros."
  passingScore={8}
  questions={[
    {
      id: 1,
      question: "Which Ethereum standard does Kleros implement for arbitration?",
      options: [
        { id: "a", text: "ERC-20 (Token Standard)" },
        { id: "b", text: "ERC-721 (NFT Standard)" },
        { id: "c", text: "ERC-792 (Arbitration Standard)" },
        { id: "d", text: "ERC-1155 (Multi-Token Standard)" }
      ],
      correctAnswer: "c",
      explanation: "ERC-792 is the arbitration standard that defines the interface between arbitrable contracts and arbitrators like Kleros. It standardizes dispute creation, ruling enforcement, and appeal processes."
    },
    {
      id: 2,
      question: "What is ERC-1497 used for in Kleros?",
      options: [
        { id: "a", text: "Token transfers and payments" },
        { id: "b", text: "Evidence submission and management" },
        { id: "c", text: "Jury selection algorithms" },
        { id: "d", text: "Gas fee optimization" }
      ],
      correctAnswer: "b",
      explanation: "ERC-1497 is the Evidence Standard that provides a standardized way to submit, organize, and reference evidence in arbitration cases."
    },
    {
      id: 3,
      question: "What must an arbitrable contract implement to work with Kleros?",
      options: [
        { id: "a", text: "Only the IArbitrable interface" },
        { id: "b", text: "IArbitrable interface and dispute fee handling" },
        { id: "c", text: "Custom jury selection logic" },
        { id: "d", text: "Built-in appeal mechanisms" }
      ],
      correctAnswer: "b",
      explanation: "Contracts must implement the IArbitrable interface for communication with arbitrators and handle dispute fees properly to cover arbitration costs."
    },
    {
      id: 4,
      question: "How should a contract handle arbitration fees?",
      options: [
        { id: "a", text: "Pay fees after the dispute is resolved" },
        { id: "b", text: "Collect fees from users and pay arbitrator upfront" },
        { id: "c", text: "Let users pay arbitrator directly" },
        { id: "d", text: "Fees are always free in Kleros" }
      ],
      correctAnswer: "b",
      explanation: "Arbitrable contracts should collect arbitration fees from disputing parties and pay the arbitrator when creating disputes to ensure jurors are compensated."
    },
    {
      id: 5,
      question: "What happens when rule() is called on your arbitrable contract?",
      options: [
        { id: "a", text: "The contract should immediately execute the ruling" },
        { id: "b", text: "The contract should store the ruling and optionally execute it" },
        { id: "c", text: "The contract should forward the ruling to users" },
        { id: "d", text: "The contract should validate the ruling first" }
      ],
      correctAnswer: "b",
      explanation: "When rule() is called, contracts should store the final ruling and execute the decision (transfer funds, change state, etc.) according to the dispute outcome."
    },
    {
      id: 6,
      question: "Which function creates a dispute in Kleros?",
      options: [
        { id: "a", text: "createDispute(bytes calldata _extraData, string calldata _metaevidence)" },
        { id: "b", text: "arbitrateDispute(uint256 _disputeID, uint256 _ruling)" },
        { id: "c", text: "createDispute(uint256 _choices, bytes calldata _extraData)" },
        { id: "d", text: "newDispute(address _arbitrable, uint256 _fee)" }
      ],
      correctAnswer: "c",
      explanation: "The createDispute function in the IArbitrator interface takes the number of choices and extra data (like court selection) to create a new dispute."
    },
    {
      id: 7,
      question: "What should _choices parameter be for a typical binary dispute?",
      options: [
        { id: "a", text: "0 (for no choices)" },
        { id: "b", text: "1 (for one choice)" },
        { id: "c", text: "2 (for yes/no)" },
        { id: "d", text: "3 (including 'Refuse to Arbitrate')" }
      ],
      correctAnswer: "c",
      explanation: "For binary disputes, use 2 choices. Kleros automatically adds 'Refuse to Arbitrate' as option 0, so ruling 1 and 2 represent the two sides of your dispute."
    },
    {
      id: 8,
      question: "How should you handle appeal periods in your contract?",
      options: [
        { id: "a", text: "Implement custom appeal logic" },
        { id: "b", text: "Appeals are handled automatically by Kleros" },
        { id: "c", text: "Block all contract functions during appeals" },
        { id: "d", text: "Let users appeal directly to Kleros" }
      ],
      correctAnswer: "b",
      explanation: "Appeals are managed by the Kleros arbitrator contract. Your arbitrable contract doesn't need custom appeal logic - just respond to the final rule() call."
    },
    {
      id: 9,
      question: "What is the purpose of MetaEvidence in arbitration?",
      options: [
        { id: "a", text: "Storing dispute rulings on-chain" },
        { id: "b", text: "Providing context and policies for dispute resolution" },
        { id: "c", text: "Calculating arbitration fees dynamically" },
        { id: "d", text: "Selecting appropriate jurors for disputes" }
      ],
      correctAnswer: "b",
      explanation: "MetaEvidence provides jurors with context about what they're arbitrating, including policies, rules, and descriptions of the dispute subject matter."
    },
    {
      id: 10,
      question: "Which court should most technical blockchain disputes use?",
      options: [
        { id: "a", text: "General Court (ID: 0)" },
        { id: "b", text: "Curation Court (ID: 1)" },
        { id: "c", text: "Technical Court (specific ID varies)" },
        { id: "d", text: "Any court - they're all the same" }
      ],
      correctAnswer: "c",
      explanation: "Different courts have different expertise requirements. Technical blockchain disputes should use courts with jurors who understand blockchain technology, smart contracts, and DeFi concepts."
    }
  ]}
/>

## Next Steps After the Quiz

### 🚀 Ready to Build? Start Your Integration:
1. **[Review Code Examples](/developers/examples/)** - Study working implementations
2. **[Check Deployment Addresses](/developers/deployment-addresses)** - Get contract addresses
3. **[Read Integration Guide](/integrations/dispute-resolution/smart-contract-integration)** - Detailed implementation
4. **[Join Developer Discord](https://discord.gg/MhXQGCyHd9)** - Get technical support

### 📖 Need More Study? Review These Resources:
- **[ERC-792 Standard](/developers/arbitration-standard/erc-792)** - Core arbitration interface
- **[ERC-1497 Evidence](/developers/arbitration-standard/erc-1497)** - Evidence submission standard
- **[Arbitrable Proxy](/developers/arbitration-standard/arbitrable-proxy)** - Advanced pattern
- **[Integration Examples](/developers/examples/)** - Real contract implementations

### 🔧 Technical Resources:
- **[GitHub Repository](https://github.com/kleros)** - Open source contracts and tools
- **[Smart Contract Docs](/developers/getting-started/)** - Technical documentation  
- **[Policy Writing Guide](/integrations/policy-writing-guide)** - Create clear dispute policies
- **[Testnet Addresses](/developers/deployment-addresses)** - For testing and development

### 💬 Developer Support:
- **[Discord #developers](https://discord.gg/MhXQGCyHd9)** - Real-time technical help
- **[GitHub Issues](https://github.com/kleros)** - Report bugs or request features
- **[Forum](https://forum.kleros.io)** - Detailed technical discussions
- **[Stack Overflow](https://stackoverflow.com/questions/tagged/kleros)** - Q&A with community

## Basic Integration Example

```solidity
contract MyArbitrableContract is IArbitrable {
    IArbitrator public arbitrator;
    uint256 public arbitratorExtraData;
    
    struct Dispute {
        uint256 arbitratorDisputeID;
        address requester;
        // Your dispute-specific data
    }
    
    function createDispute() external payable {
        uint256 cost = arbitrator.arbitrationCost(arbitratorExtraData);
        require(msg.value >= cost, "Insufficient fee");
        
        uint256 disputeID = arbitrator.createDispute{value: cost}(
            2, // Binary choice
            arbitratorExtraData
        );
        
        // Store dispute data...
    }
    
    function rule(uint256 _disputeID, uint256 _ruling) external override {
        require(msg.sender == address(arbitrator));
        // Execute ruling logic...
    }
}
```

## Key Implementation Tips

- ✅ Always check arbitration costs before creating disputes
- ✅ Handle fee refunds for overpayments properly
- ✅ Emit events for frontend integration
- ✅ Consider multi-party disputes and complex ruling logic
- ✅ Test thoroughly on testnets before mainnet deployment

---

*Remember: Smart contract integration with Kleros affects real user funds and disputes. Test extensively and follow security best practices.*