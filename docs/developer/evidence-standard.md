---
sidebar_position: 3
description: An evidence standard for arbitration
---

# ERC-1497: Evidence Standard

📖 **[Full ERC-1497 Documentation](https://developer.kleros.io/en/latest/erc-1497.html)**  
📜 **[EIP-1497 Proposal](https://github.com/ethereum/EIPs/issues/1497)**

## Abstract

The ERC-1497 Evidence Standard describes the standards for `MetaEvidence` and `Evidence` for dispute resolution. `Evidence` is provided by dispute participants to support their assertions. `MetaEvidence` gives context to the dispute so arbitrators can accurately and fairly evaluate it. This standard works with [ERC-792](./arbitration-standard) and references `Arbitrator` and `Arbitrable` contracts.

## Motivation

Standardizing `MetaEvidence` and `Evidence` enables interoperability between:
- **Arbitrable DApps** - Applications where disputes can arise
- **Arbitrator DApps** - Applications that resolve disputes

This standardization allows applications to:
- ✅ Switch between arbitration services easily
- ✅ Let users choose their preferred arbitrator
- ✅ Avoid custom integration work for each service
- ✅ Ensure consistent dispute presentation

**ERC-792** standardizes smart contract interactions, while **ERC-1497** standardizes interface interactions for dispute context and evidence.

## Evidence Interface

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../IArbitrator.sol";

/** @title IEvidence
 *  ERC-1497: Evidence Standard
 */
interface IEvidence {
    /**
     * @dev To be emitted when meta-evidence is submitted.
     * @param _metaEvidenceID Unique identifier of meta-evidence.
     * @param _evidence IPFS path to metaevidence, example: '/ipfs/QmbsNh1pDfqKmaySamNCnEoWQpd8E7RfpBrF3HPZS7xKVK'
     */
    event MetaEvidence(uint256 indexed _metaEvidenceID, string _evidence);

    /**
     * @dev To be raised when evidence is submitted. Should point to the resource (evidences are not to be stored on chain due to gas considerations).
     * @param _arbitrator The arbitrator of the contract.
     * @param _evidenceGroupID Unique identifier of the evidence group the evidence belongs to.
     * @param _party The address of the party submiting the evidence. Note that 0x0 refers to evidence not submitted by any party.
     * @param _evidence IPFS path to evidence, example: '/ipfs/Qmarwkf7C9RuzDEJNnarT3WZ7kem5bk8DZAzx78acJjMFH/evidence.json'
     */
    event Evidence(
        IArbitrator indexed _arbitrator,
        uint256 indexed _evidenceGroupID,
        address indexed _party,
        string _evidence
    );

    /**
     * @dev To be emitted when a dispute is created to link the correct meta-evidence to the disputeID.
     * @param _arbitrator The arbitrator of the contract.
     * @param _disputeID ID of the dispute in the Arbitrator contract.
     * @param _metaEvidenceID Unique identifier of meta-evidence.
     * @param _evidenceGroupID Unique identifier of the evidence group that is linked to this dispute.
     */
    event Dispute(
        IArbitrator indexed _arbitrator,
        uint256 indexed _disputeID,
        uint256 _metaEvidenceID,
        uint256 _evidenceGroupID
    );
}
```

## Understanding the Evidence System

The Evidence Standard addresses a fundamental need in dispute resolution: **How do arbitrators understand what they're deciding and what evidence to consider?**

### Real-World Example

Consider a freelance developer hired to build an e-commerce website:

1. **Agreement** - Client locks payment in escrow smart contract
2. **Delivery** - Developer submits completed work
3. **Dispute** - Client claims work doesn't meet requirements
4. **Resolution** - Case goes to Kleros arbitrators

**But arbitrators need context:** What were the original requirements? What did the developer deliver? What are both parties' arguments?

## Two Types of Evidence

### 1. MetaEvidence - The Context
**Purpose:** Provides the complete background and framework for the dispute

**Contains:**
- Original contract/agreement terms
- Dispute resolution criteria
- Question posed to arbitrators
- Possible ruling options
- Consequences of each ruling

**Created:** Before any dispute can arise (ensures impartiality)

### 2. Evidence - The Proof
**Purpose:** Supporting materials submitted by each party

**Contains:**
- Emails, screenshots, documents
- Code submissions, test results
- Testimonies, expert opinions
- Any material supporting a party's position

**Created:** During the dispute process

## MetaEvidence JSON Structure

MetaEvidence uses standardized JSON objects hosted off-chain (typically IPFS) and referenced on-chain via events.

### Core Fields

```json
{
  "category": "Development",
  "title": "E-commerce Website Development Dispute",
  "description": "Dispute regarding completion of website development contract",
  "question": "Did the developer complete the website according to specifications?",
  "rulingOptions": {
    "type": "single-select",
    "titles": [
      "Release payment to developer",
      "Refund payment to client"
    ],
    "descriptions": [
      "Select if the website meets the agreed specifications",
      "Select if the website fails to meet the agreed specifications"
    ]
  },
  "fileURI": "/ipfs/QmXuUER9is6n4XgiDtNnZBqPCTsJvMj1ku5gQg5EZGxfxw",
  "evidenceDisplayInterfaceURI": "https://dev-disputes.example.com/display"
}
```

### Field Explanations

#### **category**
Dispute classification for consistency and filtering
- Examples: "Development", "Insurance", "Token Listing", "Content Moderation"

#### **title** 
Brief, descriptive title for the dispute type
- Can be template-based for similar disputes

#### **description**
Detailed explanation of the dispute context
- What happened that led to the dispute?
- What should arbitrators focus on?

#### **question**
The specific question arbitrators must answer
- Should be clear and unambiguous
- Directly relates to the ruling options

#### **rulingOptions**
Defines how arbitrators can rule

**Types:**
- `single-select` - Choose one option
- `multiple-select` - Choose multiple options
- `uint` - Enter positive integer
- `int` - Enter integer (positive/negative)
- `string` - Enter text (max 32 bytes)

#### **fileURI**
Link to the primary dispute policy document
- Defines criteria for resolution
- Serves as the "law" arbitrators apply
- Should be comprehensive and unambiguous

### Pre-built Dispute Policies

Kleros provides tested dispute policies for common use cases:

#### **Kleros Scout (Content Curation)**
- **[Address Tag Registry](https://ipfs.kleros.io/ipfs/QmXuUER9is6n4XgiDtNnZBqPCTsJvMj1ku5gQg5EZGxfxw/atr-registry-policy.pdf)** - Cryptocurrency address labeling
- **[Curated Domain Names](https://ipfs.kleros.io/ipfs/QmVL3hR8E2XcnJ1PjKARqh7e5SDJM1HeKLsUYnLnUyKEWo/domain-name-dispute-resolution-policy-v1.0.pdf)** - Domain reputation management
- **[Snap Disputes](https://ipfs.kleros.io/ipfs/QmcARXVNcX8LpvjMZDgL8AQyW8q1XxwMfVTPSJ3YRvCpvx/snap-dispute-policy.pdf)** - MetaMask Snap content validation

#### **Oracle Disputes**
- **[Reality.eth Oracle Policy](https://ipfs.kleros.io/ipfs/QmfHRnNnBxxa1uD5MKP2HNrB8hWjHsrNfqaLetiEa8LfaT/reality-eth-dispute-policy.pdf)** - Prediction market resolution

#### **Governance**
- **[Court Policies](https://ipfs.kleros.io/ipfs/QmZYxRxwKMPpSMq8MJSd5QFeSUZoii7hFwXJvQn7bvnbCq/kleros-court-justice-policy.pdf)** - General court guidelines
- **[Governor Policy](https://ipfs.kleros.io/ipfs/QmVMqK7yXTXVXzLGJgT1XLJeaWD5LJhN2A2PrqMM41BbWY/kleros-governor-policy.pdf)** - DAO governance disputes

#### **Identity**
- **[Proof of Humanity v2](https://ipfs.kleros.io/ipfs/QmNSV9xXKiBtaRW1MYmFaVkqsD1Qez2ZDX1jyP21j87jxj/poh-v2-policy.pdf)** - Human identity verification

For custom policies, see our **[Policy Writing Guide](../integrations/policy-writing-guide)**.

## Advanced MetaEvidence Features

### Custom Evidence Display

The `evidenceDisplayInterfaceURI` field allows custom visualization of evidence within the arbitrator interface.

**When to use:**
- Complex financial transactions requiring visualization
- Multi-party disputes with relationship mapping
- Branded dispute experience
- Time-series data presentation

**Implementation:**
```json
{
  "evidenceDisplayInterfaceURI": "https://yourapp.com/evidence-display"
}
```

**Query parameters passed to your interface:**
- `disputeID` - Unique dispute identifier
- `chainID` - Blockchain network ID
- `arbitratorContractAddress` - Arbitrator address
- `arbitrableContractAddress` - Your contract address
- `jsonRpcUrl` - RPC endpoint for blockchain access

**Examples:**
- **[Escrow Display](https://github.com/kleros/escrow-evidence-display)** - Transaction flow visualization
- **[Reality.eth Display](https://github.com/kleros/realitio-interface)** - Oracle question context
- **[Curate Display](https://github.com/kleros/gtcr-injected-uis)** - Registry item presentation

### Dynamic MetaEvidence

The `dynamicScriptURI` field enables runtime MetaEvidence updates without gas costs.

**When to use:**
- Template-based disputes with varying parameters
- High-volume applications (gas optimization)
- Context that changes over time

**Implementation:**
```json
{
  "dynamicScriptURI": "https://yourapp.com/dynamic-meta-evidence.js"
}
```

**Script requirements:**
```javascript
// Your script must expose this function
function getMetaEvidence(params) {
  // Return JSON object that merges with base MetaEvidence
  return {
    title: `Dispute #${params.disputeID}`,
    description: `Custom description for ${params.contractAddress}`
  };
}
```

**Examples:**
- **[Reality.eth Script](https://github.com/kleros/realitio-script)** - Dynamic question context
- **[Cross-chain Script](https://github.com/kleros/cross-chain-realitio-proxy/tree/master/dynamic-script)** - Multi-network disputes

## Evidence JSON Structure

Individual evidence submissions use this format:

```json
{
  "fileURI": "/ipfs/QmWQV5ZFFhEJiW8Lm7ay2zLxC2XS4wx1b2W7FfdrLMyQQc",
  "fileHash": "QmWQV5ZFFhEJiW8Lm7ay2zLxC2XS4wx1b2W7FfdrLMyQQc",
  "fileTypeExtension": "pdf",
  "name": "Contract clarification email",
  "description": "Email from client clarifying website requirements and acceptance criteria",
  "selfHash": "QmUQMJbfiQYX7k6SWt8xMpR7g4vwtAYY1BTeJ8UY8JWRs9"
}
```

### Evidence Fields

- **fileURI** - Location of the evidence file (IPFS recommended)
- **fileHash** - Hash of the referenced file (for integrity verification)
- **fileTypeExtension** - File type (pdf, png, txt, etc.)
- **name** - Brief, descriptive title
- **description** - Detailed explanation of the evidence's relevance
- **selfHash** - Hash of the evidence JSON itself

## Implementation Guide

### 1. Implementing the Interface

```solidity
contract MyArbitrableContract is IArbitrable, IEvidence {
    IArbitrator public arbitrator;
    uint256 public metaEvidenceID;
    
    constructor(IArbitrator _arbitrator) {
        arbitrator = _arbitrator;
    }
    
    function createAgreement(string memory _metaEvidenceURI) public {
        emit MetaEvidence(metaEvidenceID, _metaEvidenceURI);
        metaEvidenceID++;
    }
    
    function submitEvidence(string memory _evidenceURI) public {
        emit Evidence(arbitrator, disputeID, msg.sender, _evidenceURI);
    }
    
    function createDispute() public payable {
        uint256 _disputeID = arbitrator.createDispute{value: msg.value}(2, "");
        emit Dispute(arbitrator, _disputeID, metaEvidenceID - 1, disputeID);
    }
}
```

### 2. MetaEvidence Best Practices

**Before Contract Creation:**
1. Write comprehensive dispute policy
2. Test policy with sample disputes
3. Pin policy to IPFS for permanence
4. Create MetaEvidence JSON referencing policy

**JSON Structure Tips:**
- Keep descriptions clear and unbiased
- Test ruling options for ambiguity
- Include examples in policy documents
- Consider arbitrator user experience

### 3. Evidence Submission Flow

**For Arbitrable Contract Developers:**
```solidity
function submitEvidence(
    uint256 _disputeID,
    string memory _evidenceURI
) external {
    require(disputes[_disputeID].status == DisputeStatus.Active, "Dispute not active");
    
    emit Evidence(
        arbitrator,
        _disputeID,
        msg.sender,
        _evidenceURI
    );
}
```

**For DApp Frontend Developers:**
```javascript
// 1. Upload evidence to IPFS
const evidenceJSON = {
  fileURI: "/ipfs/QmHashOfYourFile",
  fileHash: "QmHashOfYourFile",
  fileTypeExtension: "pdf",
  name: "Contract Terms",
  description: "Original signed contract with specifications",
  selfHash: "QmHashOfThisJSON"
};

const evidenceURI = await uploadToIPFS(JSON.stringify(evidenceJSON));

// 2. Submit evidence event
await contract.submitEvidence(disputeID, evidenceURI);
```

## Security Considerations

### Hash Verification
Evidence and MetaEvidence include hash fields to prevent tampering:

```javascript
// Verify evidence integrity
const evidenceData = await fetchFromIPFS(evidenceURI);
const computedHash = keccak256(evidenceData.file);
assert(computedHash === evidenceData.fileHash, "Evidence tampered!");
```

### IPFS Best Practices
- Pin important content to prevent disappearance
- Use reputable IPFS gateways
- Consider redundant storage solutions
- Include backup URLs when possible

### MetaEvidence Immutability
- Create MetaEvidence before disputes arise
- Never modify MetaEvidence after dispute creation
- Use dynamic scripts for legitimate parameter updates only

## Integration Examples

### Simple Arbitrable Contract
```solidity
contract SimpleEscrow is IArbitrable, IEvidence {
    enum Party { Buyer, Seller }
    enum Status { Created, Disputed, Resolved }
    
    struct Transaction {
        address buyer;
        address seller;
        uint256 amount;
        Status status;
        uint256 disputeID;
    }
    
    mapping(uint256 => Transaction) public transactions;
    uint256 public nextTxID;
    
    function createTransaction(
        address _seller,
        string memory _metaEvidenceURI
    ) external payable returns (uint256) {
        uint256 txID = nextTxID++;
        
        transactions[txID] = Transaction({
            buyer: msg.sender,
            seller: _seller,
            amount: msg.value,
            status: Status.Created,
            disputeID: 0
        });
        
        emit MetaEvidence(txID, _metaEvidenceURI);
        return txID;
    }
    
    function raiseDispute(uint256 _txID) external payable {
        Transaction storage txn = transactions[_txID];
        require(txn.status == Status.Created, "Invalid status");
        require(msg.sender == txn.buyer || msg.sender == txn.seller, "Not a party");
        
        uint256 disputeID = arbitrator.createDispute{value: msg.value}(2, "");
        txn.disputeID = disputeID;
        txn.status = Status.Disputed;
        
        emit Dispute(arbitrator, disputeID, _txID, _txID);
    }
    
    function submitEvidence(
        uint256 _txID,
        string memory _evidenceURI
    ) external {
        Transaction storage txn = transactions[_txID];
        require(txn.status == Status.Disputed, "No active dispute");
        require(msg.sender == txn.buyer || msg.sender == txn.seller, "Not a party");
        
        emit Evidence(arbitrator, _txID, msg.sender, _evidenceURI);
    }
}
```

## Resources

- **📖 [Complete ERC-1497 Specification](https://developer.kleros.io/en/latest/erc-1497.html)**
- **📜 [EIP-1497 Proposal](https://github.com/ethereum/EIPs/issues/1497)**
- **🛠️ [Evidence Display Examples](https://github.com/kleros?q=evidence&type=all)**
- **📝 [Policy Writing Guide](../integrations/policy-writing-guide)**
- **🎯 [Court Interface](https://court.kleros.io/)** - See evidence in action

## Next Steps

1. **[View Implementation Examples](./examples)** - See complete arbitrable contracts
2. **[Integration Guide](../integrations/smart-contract-integration)** - Step-by-step integration
3. **[Policy Writing Guide](../integrations/policy-writing-guide)** - Create effective dispute policies
4. **[Deployment Addresses](./deployment-addresses)** - Deploy to mainnet