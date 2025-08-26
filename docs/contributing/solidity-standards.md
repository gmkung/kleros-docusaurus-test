---
sidebar_position: 3
description: Smart contract development standards and security practices
---

# Solidity Standards

Smart contract development requires enhanced security practices due to the immutable and high-stakes nature of blockchain applications.

## Style Guide

Follow the [Official Solidity Style Guide](https://docs.soliditylang.org/en/latest/style-guide.html) with automatic enforcement through linting tools.

**Key Style Points:**
- Use `PascalCase` for contract and library names
- Use `camelCase` for function and variable names
- Use `SCREAMING_SNAKE_CASE` for constants
- Order functions: constructor, receive, fallback, external, public, internal, private
- Group functions by visibility and add whitespace between groups

## Documentation Standards

### Ethereum Natural Specification (NatSpec)

Document ALL functions using [NatSpec format](https://docs.soliditylang.org/en/latest/natspec-format.html):

```solidity
/**
 * @title Arbitrable Contract
 * @dev Implements arbitration standard ERC-792
 * @author Kleros Team
 */
contract ArbitrableExample {
    /**
     * @notice Submit evidence for a dispute
     * @dev Emits Evidence event for off-chain indexing. O(1).
     * @param _disputeID The ID of the dispute
     * @param _evidence IPFS hash of the evidence document
     * @return success Whether evidence was submitted successfully
     */
    function submitEvidence(
        uint256 _disputeID, 
        string memory _evidence
    ) external returns (bool success) {
        // Implementation
    }
}
```

### Special Documentation Requirements

#### Computational Complexity
For non-O(1) functions, specify big O complexity:
```solidity
/**
 * @dev Distributes tokens to multiple recipients. O(n) where n is recipients length.
 * @param recipients List of addresses to receive tokens
 * @param amounts Corresponding amounts for each recipient
 */
function distributeTokens(
    address[] memory recipients, 
    uint256[] memory amounts
) external {
    // Implementation with loop
}
```

#### External Trust Indicators
For functions making external calls with re-entry potential:
```solidity
/**
 * @dev Calls external arbitrator contract. UNTRUSTED.
 * @param _arbitrator The arbitrator contract address
 */
function callArbitrator(address _arbitrator) external {
    // External call implementation
}
```

#### Work in Progress Markers
```solidity
/**
 * @dev Handles complex dispute resolution logic. TODO.
 */
function complexResolution() external {
    // Incomplete implementation
}
```

## Security Best Practices

### Code Patterns

#### Checks-Effects-Interactions Pattern
Structure external functions with this 3-step pattern:

```solidity
function withdraw(uint256 amount) external {
    // 1. CHECKS - Verify authorization and conditions
    require(balances[msg.sender] >= amount, "Insufficient balance");
    require(amount > 0, "Amount must be positive");
    
    // 2. EFFECTS - Update state variables
    balances[msg.sender] -= amount;
    totalSupply -= amount;
    
    // 3. INTERACTIONS - External calls last
    payable(msg.sender).transfer(amount);
    emit Withdrawal(msg.sender, amount);
}
```

#### Avoid Magic Numbers
```solidity
// ❌ Bad - Magic numbers
uint256 penalty = disputeAmount * 5 / 100;

// ✅ Good - Named constants
uint256 constant PENALTY_PERCENTAGE = 5;
uint256 constant PERCENTAGE_DIVISOR = 100;
uint256 penalty = disputeAmount * PENALTY_PERCENTAGE / PERCENTAGE_DIVISOR;
```

### Gas Optimization

#### Mindful Gas Consumption
```solidity
// ❌ Expensive - Multiple storage reads
function inefficientFunction() external {
    require(disputes[disputeID].status == DisputeStatus.Active);
    disputes[disputeID].evidence.push(newEvidence);
    disputes[disputeID].lastActivity = block.timestamp;
}

// ✅ Efficient - Single storage read
function efficientFunction() external {
    Dispute storage dispute = disputes[disputeID];
    require(dispute.status == DisputeStatus.Active);
    dispute.evidence.push(newEvidence);
    dispute.lastActivity = block.timestamp;
}
```

#### Batch Operations
```solidity
/**
 * @dev Process multiple disputes in single transaction. O(n).
 */
function batchProcessDisputes(uint256[] memory disputeIDs) external {
    for (uint256 i = 0; i < disputeIDs.length; i++) {
        _processDispute(disputeIDs[i]);
    }
}
```

### Smart Contract Philosophy

#### Minimal Viable Functionality
```solidity
// ✅ Good - Specific to use case
contract TwoPartyArbitrable {
    address public party1;
    address public party2;
    // Implementation for exactly 2 parties
}

// ❌ Over-engineered - Generic but unused
contract MultiPartyArbitrable {
    address[] public parties; // Supports N parties but only uses 2
    // Complex implementation for unused generality
}
```

#### Frontend Heavy, Contract Light
```solidity
// ✅ Good - Let frontend handle complex logic
function submitRuling(uint256 choice) external {
    require(msg.sender == arbitrator, "Only arbitrator");
    ruling = choice;
    emit Ruling(choice);
}

// ❌ Bad - Complex validation better done off-chain
function submitRuling(uint256 choice, bytes memory proof) external {
    require(msg.sender == arbitrator, "Only arbitrator");
    // Complex proof validation consuming lots of gas
    require(validateComplexProof(proof), "Invalid proof");
    ruling = choice;
    emit Ruling(choice);
}
```

## Testing Standards

### Coverage Requirements
- **Minimum 95% test coverage** for all smart contracts
- Test all functions, including error conditions
- Use property-based testing for complex logic

### Test Structure
```javascript
describe('ArbitrableContract', () => {
  describe('submitEvidence', () => {
    it('should accept valid evidence', async () => {
      // Test implementation
    });
    
    it('should reject evidence from non-parties', async () => {
      // Test unauthorized access
    });
    
    it('should emit Evidence event', async () => {
      // Test event emission
    });
  });
});
```

### Security Testing
```javascript
// Test for reentrancy
it('should prevent reentrancy attacks', async () => {
  const maliciousContract = await MaliciousContract.deploy();
  await expect(
    arbitrable.withdraw({from: maliciousContract.address})
  ).to.be.revertedWith("Reentrancy detected");
});
```

## Deployment Standards

### Pre-deployment Checklist
- [ ] **Internal code review** completed
- [ ] **Automated tests** pass with >95% coverage
- [ ] **Security analysis** tools run (Slither, MythX)
- [ ] **Gas optimization** verified
- [ ] **External audit** completed (for mainnet)
- [ ] **Deployment scripts** tested on testnet
- [ ] **Emergency procedures** documented

### Network-Specific Considerations
```solidity
// Handle different networks appropriately
contract NetworkAware {
    uint256 public immutable CHAIN_ID;
    
    constructor() {
        CHAIN_ID = block.chainid;
    }
    
    modifier onlyMainnet() {
        require(CHAIN_ID == 1, "Mainnet only");
        _;
    }
}
```

## Common Pitfalls

### Dangerous Patterns to Avoid

#### Using `transfer()` vs `send()`
```solidity
// ❌ Risky - recipient can block with out-of-gas
recipient.transfer(amount);

// ✅ Better - controlled gas limit
bool success = recipient.send(amount);
require(success, "Transfer failed");

// ✅ Best - explicit gas limit and error handling
(bool success, ) = recipient.call{value: amount}("");
require(success, "Transfer failed");
```

#### Unprotected External Calls
```solidity
// ❌ Dangerous - unlimited gas for reentrancy
arbitrator.call(abi.encodeWithSignature("rule(uint256)", disputeID));

// ✅ Safe - limited gas
(bool success, ) = arbitrator.call{gas: 10000}(
    abi.encodeWithSignature("rule(uint256)", disputeID)
);
```

### Priority Order
When making trade-offs, prioritize in this order:
1. **Security** - Prevent vulnerabilities and unexpected behavior
2. **Gas Efficiency** - Minimize transaction costs
3. **Auditability** - Make code easily reviewable
4. **Reusability** - Generic patterns (only if not harming above)

---

> **Remember:** Smart contracts are immutable once deployed. Invest extra time in security and testing rather than rushing to deployment.