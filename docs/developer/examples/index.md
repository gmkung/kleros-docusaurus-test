---
sidebar_position: 3
description: Smart contract examples implementing ERC-792 and ERC-1497 standards
---

# Arbitration Examples

Learn how to build arbitrable smart contracts through practical examples implementing the ERC-792 Arbitration and ERC-1497 Evidence standards.

## Overview

These examples demonstrate various arbitrable contract patterns used in the Kleros ecosystem. Each contract shows different approaches to integrating decentralized arbitration into your smart contract logic.

**Full Repository:** [kleros/kleros-interaction](https://github.com/kleros/kleros-interaction)

## Contract Examples

### **1. ArbitrableDeposit**
**Use Case:** Simple deposit escrow with claim mechanism  
**Pattern:** Owner-deposit, claimant-challenge model

**Key Features:**
- Owner deposits funds into the contract
- Anyone can make a claim against the deposit
- Claimant must stake a percentage of claim amount
- Disputes resolved through Kleros arbitration

**Example Implementation:**
```solidity
contract ArbitrableDeposit is Arbitrable {
    address public owner;
    address public claimant;
    uint public amount;
    uint public claimAmount;
    
    // Owner deposits funds
    function deposit() public payable onlyOwner {
        amount += msg.value;
    }
    
    // Claimant makes claim with required stake
    function makeClaim(uint _claimAmount) public onlyNotOwner {
        require(_claimAmount <= amount);
        claimant = msg.sender;
        claimAmount = _claimAmount;
        // Require claimant stake
        claimDepositAmount = (_claimAmount * claimRate) / 100;
    }
}
```

**[View Complete Contract →](./arbitrable-deposit)**

---

### **2. TwoPartyArbitrable**
**Use Case:** Bilateral agreements with dispute resolution  
**Pattern:** Two equal parties with symmetric dispute handling

**Key Features:**
- Equal treatment of both parties
- Flexible payment and timeout mechanisms
- Appeals support for complex disputes
- Evidence submission by both parties

**Example Implementation:**
```solidity
contract TwoPartyArbitrable is Arbitrable {
    address public partyA;
    address public partyB;
    uint public amountA;
    uint public amountB;
    
    enum Party { PartyA, PartyB }
    enum Status { NoDispute, WaitingPartyA, WaitingPartyB, DisputeCreated }
    
    function payArbitrationFee() public payable {
        // Symmetric fee payment for both parties
        if (msg.sender == partyA) {
            partyAFee += msg.value;
        } else if (msg.sender == partyB) {
            partyBFee += msg.value;
        }
    }
}
```

**[View Complete Contract →](./two-party-arbitrable)**

---

### **3. Rental Agreement**
**Use Case:** Property rental with deposit protection  
**Pattern:** Landlord-tenant relationship with security deposits

**Key Features:**
- Rental payments and security deposits
- Damage claim mechanisms
- Time-based rental periods
- Property condition disputes

**Example Implementation:**
```solidity
contract Rental is Arbitrable {
    address public landlord;
    address public tenant;
    uint public rent;
    uint public deposit;
    uint public rentalPeriod;
    
    function payRent() public payable onlyTenant {
        require(msg.value == rent);
        landlord.transfer(rent);
        lastPayment = now;
    }
    
    function claimDeposit(uint _damages) public onlyLandlord {
        // Landlord claims damages from deposit
        damageAmount = _damages;
        status = Status.WaitingTenant;
    }
}
```

**[View Complete Contract →](./rental-agreement)**

---

### **4. ArbitrableTransaction**
**Use Case:** Simple buyer-seller transactions  
**Pattern:** Payment escrow with delivery confirmation

**Key Features:**
- Buyer deposits payment
- Seller delivers goods/services
- Dispute resolution for non-delivery
- Timeout mechanisms for automation

**Example Implementation:**
```solidity
contract ArbitrableTransaction is Arbitrable {
    address public buyer;
    address public seller;
    uint public amount;
    uint public timeout;
    
    function payArbitrationFeeBuyer() public payable onlyBuyer {
        // Buyer initiates dispute for non-delivery
        buyerFee += msg.value;
        if (sellerFee >= arbitrationCost) {
            createDispute();
        }
    }
    
    function executeTransaction() public onlySeller {
        // Seller confirms delivery
        seller.transfer(amount);
        status = Status.Resolved;
    }
}
```

**[View Complete Contract →](./arbitrable-transaction)**

---

### **5. MultipleArbitrableTransaction**
**Use Case:** Multiple transaction management  
**Pattern:** Batch transaction handling with individual disputes

**Key Features:**
- Manage multiple transactions in one contract
- Individual dispute resolution per transaction
- Gas optimization for bulk operations
- Shared arbitrator configuration

**Example Implementation:**
```solidity
contract MultipleArbitrableTransaction is Arbitrable {
    struct Transaction {
        address buyer;
        address seller;
        uint amount;
        Status status;
        uint disputeID;
    }
    
    Transaction[] public transactions;
    
    function createTransaction(address _seller) public payable {
        transactions.push(Transaction({
            buyer: msg.sender,
            seller: _seller,
            amount: msg.value,
            status: Status.NoDispute,
            disputeID: 0
        }));
    }
}
```

**[View Complete Contract →](./multiple-arbitrable-transaction)**

---

### **6. MultipleArbitrableTokenTransaction**
**Use Case:** ERC-20 token escrow with disputes  
**Pattern:** Token-based transactions with arbitration

**Key Features:**
- ERC-20 token support instead of ETH
- Token approval mechanisms
- Multiple token type support
- Token-specific dispute handling

**Example Implementation:**
```solidity
contract MultipleArbitrableTokenTransaction is Arbitrable {
    using SafeERC20 for IERC20;
    
    struct Transaction {
        address buyer;
        address seller;
        IERC20 token;
        uint amount;
        Status status;
    }
    
    function createTransaction(
        address _seller,
        IERC20 _token,
        uint _amount
    ) public {
        _token.safeTransferFrom(msg.sender, address(this), _amount);
        // Create transaction with token escrow
    }
}
```

**[View Complete Contract →](./multiple-arbitrable-token-transaction)**

---

## Implementation Patterns

### **Standard Arbitrable Pattern**

All arbitrable contracts follow this basic structure:

```solidity
import "@kleros/erc-792/contracts/Arbitrable.sol";

contract MyArbitrableContract is Arbitrable {
    // 1. Define contract-specific state
    enum Status { NoDispute, WaitingPartyA, WaitingPartyB, DisputeCreated, Resolved }
    Status public status;
    
    // 2. Define ruling outcomes
    uint8 constant PARTY_A_WINS = 1;
    uint8 constant PARTY_B_WINS = 2;
    
    // 3. Implement fee payment functions
    function payArbitrationFeeByPartyA() public payable {
        // Handle Party A fee payment
    }
    
    function payArbitrationFeeByPartyB() public payable {
        // Handle Party B fee payment  
    }
    
    // 4. Implement ruling execution
    function executeRuling(uint _disputeID, uint _ruling) internal override {
        // Execute the arbitrator's decision
        if (_ruling == PARTY_A_WINS) {
            // Transfer funds to Party A
        } else if (_ruling == PARTY_B_WINS) {
            // Transfer funds to Party B
        }
    }
    
    // 5. Implement timeout functions
    function timeOutByPartyA() public {
        // Handle Party A timeout scenario
    }
}
```

### **Common Features Across Examples**

**Fee Management:**
- Both parties pay arbitration fees
- Fees are refunded to the winning party
- Timeout mechanisms for non-payment

**Evidence Submission:**
- Parties can submit evidence during disputes
- Evidence stored on IPFS via ERC-1497
- Structured evidence formats for clarity

**Status Management:**
- Clear state transitions from creation to resolution
- Timeouts for automated resolution
- Dispute creation and management

**Security Patterns:**
- Reentrancy protection
- Access control modifiers
- Input validation and bounds checking

## Development Guide

### **Getting Started**

1. **Choose Base Pattern:**
   - Simple escrow → ArbitrableTransaction
   - Deposit protection → ArbitrableDeposit  
   - Equal parties → TwoPartyArbitrable
   - Bulk operations → MultipleArbitrableTransaction

2. **Install Dependencies:**
```bash
npm install @kleros/erc-792
npm install @openzeppelin/contracts
```

3. **Import Required Contracts:**
```solidity
import "@kleros/erc-792/contracts/Arbitrable.sol";
import "@kleros/erc-792/contracts/IArbitrator.sol";
import "@kleros/erc-792/contracts/erc-1497/IEvidence.sol";
```

### **Testing Your Contract**

**Unit Testing:**
```javascript
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyArbitrableContract", function () {
    it("Should create transaction correctly", async function () {
        const contract = await MyArbitrableContract.deploy(
            arbitrator.address,
            arbitratorExtraData,
            timeout
        );
        
        await contract.createTransaction(seller.address, {
            value: ethers.utils.parseEther("1.0")
        });
        
        expect(await contract.amount()).to.equal(ethers.utils.parseEther("1.0"));
    });
});
```

**Integration Testing:**
- Test with mock arbitrator contracts
- Simulate dispute resolution flows
- Test timeout scenarios
- Verify evidence submission

### **Deployment Checklist**

- [ ] Contract thoroughly tested on testnets
- [ ] Arbitrator address configured correctly
- [ ] Timeout values appropriate for use case
- [ ] Gas limits tested for all functions
- [ ] Security audit completed
- [ ] Meta-evidence uploaded to IPFS
- [ ] Frontend integration tested

## Best Practices

### **Security Considerations**

**Reentrancy Protection:**
```solidity
modifier nonReentrant() {
    require(!locked, "Reentrancy protection");
    locked = true;
    _;
    locked = false;
}
```

**Access Control:**
```solidity
modifier onlyParties() {
    require(msg.sender == buyer || msg.sender == seller, "Only parties allowed");
    _;
}
```

**State Validation:**
```solidity
modifier inStatus(Status _status) {
    require(status == _status, "Invalid contract status");
    _;
}
```

### **Gas Optimization**

- Pack structs efficiently
- Use events for off-chain data
- Batch operations when possible
- Optimize dispute creation costs

### **User Experience**

- Clear error messages
- Progress indicators for multi-step processes
- Automatic timeout handling
- Intuitive evidence submission

## Next Steps

Ready to build your arbitrable contract?

1. **[Study the Standards →](../arbitration-standard)** - Understand ERC-792 and ERC-1497
2. **[Review Examples →](./arbitrable-deposit)** - Explore specific implementations  
3. **[Test Integration →](../integration-guides/)** - Build with Kleros arbitration
4. **[Deploy Contracts →](./deployment-addresses)** - Use official contract addresses
5. **[Get Support →](https://discord.gg/MhXQGCyHd9)** - Join the developer community

*Build the future of decentralized dispute resolution with battle-tested arbitrable contract patterns.*