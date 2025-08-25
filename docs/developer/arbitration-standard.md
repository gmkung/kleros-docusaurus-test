---
sidebar_position: 2
description: A standard for Arbitrable and Arbitrator contracts
---

# ERC-792: Arbitration Standard

## Abstract

The ERC-792 Arbitration Standard describes a standard for `Arbitrable` and `Arbitrator` contracts. Every Arbitrable contract can be adjudicated by every Arbitrator contract. Arbitrator contracts give rulings and Arbitrable contracts enforce them.

## Motivation

Using two contracts allows separation between the ruling and its enforcement. This abstraction allows `Arbitrable` contract developers not to have to know the internal process of the `Arbitrator` contracts, and vice versa.

This design enables:
- **Easy switching** between different arbitration services
- **User choice** in arbitration providers  
- **Modular development** - focus on your application logic
- **Interoperability** across the Kleros ecosystem


## Arbitrable Interface

The Arbitrable interface defines how contracts receive and handle rulings:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IArbitrator.sol";

/**
 * @title IArbitrable
 * Arbitrable interface.
 * When developing arbitrable contracts, we need to:
 * - Define the action taken when a ruling is received by the contract.
 * - Allow dispute creation. For this a function must call arbitrator.createDispute{value: _fee}(_choices,_extraData);
 */
interface IArbitrable {
    /**
     * @dev To be raised when a ruling is given.
     * @param _arbitrator The arbitrator giving the ruling.
     * @param _disputeID ID of the dispute in the Arbitrator contract.
     * @param _ruling The ruling which was given.
     */
    event Ruling(IArbitrator indexed _arbitrator, uint256 indexed _disputeID, uint256 _ruling);

    /**
     * @dev Give a ruling for a dispute. Must be called by the arbitrator.
     * The purpose of this function is to ensure that the address calling it has the right to rule on the contract.
     * @param _disputeID ID of the dispute in the Arbitrator contract.
     * @param _ruling Ruling given by the arbitrator. Note that 0 is reserved for "Not able/wanting to make a decision".
     */
    function rule(uint256 _disputeID, uint256 _ruling) external;
}
```

### Key Implementation Points

1. **Ruling Event**: Must emit when receiving a ruling
2. **Rule Function**: Must validate the caller is the authorized arbitrator
3. **Ruling = 0**: Reserved for "unable to decide" cases
4. **Access Control**: Only the arbitrator should call `rule()`

## Arbitrator Interface

The Arbitrator interface defines how arbitration services operate:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IArbitrable.sol";

/**
 * @title Arbitrator
 * Arbitrator abstract contract.
 * When developing arbitrator contracts we need to:
 * - Define the functions for dispute creation (createDispute) and appeal (appeal). Don't forget to store the arbitrated contract and the disputeID (which should be unique, may nbDisputes).
 * - Define the functions for cost display (arbitrationCost and appealCost).
 * - Allow giving rulings. For this a function must call arbitrable.rule(disputeID, ruling).
 */
interface IArbitrator {
    enum DisputeStatus {
        Waiting,
        Appealable,
        Solved
    }

    /**
     * @dev To be emitted when a dispute is created.
     * @param _disputeID ID of the dispute.
     * @param _arbitrable The contract which created the dispute.
     */
    event DisputeCreation(uint256 indexed _disputeID, IArbitrable indexed _arbitrable);

    /**
     * @dev To be emitted when a dispute can be appealed.
     * @param _disputeID ID of the dispute.
     * @param _arbitrable The contract which created the dispute.
     */
    event AppealPossible(uint256 indexed _disputeID, IArbitrable indexed _arbitrable);

    /**
     * @dev To be emitted when the current ruling is appealed.
     * @param _disputeID ID of the dispute.
     * @param _arbitrable The contract which created the dispute.
     */
    event AppealDecision(uint256 indexed _disputeID, IArbitrable indexed _arbitrable);

    /**
     * @dev Create a dispute. Must be called by the arbitrable contract.
     * Must be paid at least arbitrationCost(_extraData).
     * @param _choices Amount of choices the arbitrator can make in this dispute.
     * @param _extraData Can be used to give additional info on the dispute to be created.
     * @return disputeID ID of the dispute created.
     */
    function createDispute(uint256 _choices, bytes calldata _extraData) external payable returns (uint256 disputeID);

    /**
     * @dev Compute the cost of arbitration. It is recommended not to increase it often, as it can be highly time and gas consuming for the arbitrated contracts to cope with fee augmentation.
     * @param _extraData Can be used to give additional info on the dispute to be created.
     * @return cost Amount to be paid.
     */
    function arbitrationCost(bytes calldata _extraData) external view returns (uint256 cost);

    /**
     * @dev Appeal a ruling. Note that it has to be called before the arbitrator contract calls rule.
     * @param _disputeID ID of the dispute to be appealed.
     * @param _extraData Can be used to give extra info on the appeal.
     */
    function appeal(uint256 _disputeID, bytes calldata _extraData) external payable;

    /**
     * @dev Compute the cost of appeal. It is recommended not to increase it often, as it can be highly time and gas consuming for the arbitrated contracts to cope with fee augmentation.
     * @param _disputeID ID of the dispute to be appealed.
     * @param _extraData Can be used to give additional info on the dispute to be created.
     * @return cost Amount to be paid.
     */
    function appealCost(uint256 _disputeID, bytes calldata _extraData) external view returns (uint256 cost);

    /**
     * @dev Compute the start and end of the dispute's current or next appeal period, if possible. If not known or appeal is impossible: should return (0, 0).
     * @param _disputeID ID of the dispute.
     * @return start The start of the period.
     * @return end The end of the period.
     */
    function appealPeriod(uint256 _disputeID) external view returns (uint256 start, uint256 end);

    /**
     * @dev Return the status of a dispute.
     * @param _disputeID ID of the dispute to rule.
     * @return status The status of the dispute.
     */
    function disputeStatus(uint256 _disputeID) external view returns (DisputeStatus status);

    /**
     * @dev Return the current ruling of a dispute. This is useful for parties to know if they should appeal.
     * @param _disputeID ID of the dispute.
     * @return ruling The ruling which has been given or the one which will be given if there is no appeal.
     */
    function currentRuling(uint256 _disputeID) external view returns (uint256 ruling);
}
```

## Understanding extraData

The `extraData` parameter is crucial for Kleros integration. It's a 64-byte array containing:

### Structure
1. **Subcourt ID (32 bytes)** - Which court should handle this dispute
2. **Minimum Jurors (32 bytes)** - How many jurors are required

### Examples

```solidity
// General Court with 3 jurors
bytes memory extraData = abi.encode(0, 3);

// Blockchain Technical Disputes Court with 5 jurors  
bytes memory extraData = abi.encode(1, 5);

// Curation Court with 3 jurors
bytes memory extraData = abi.encode(6, 3);
```

### Finding Subcourt IDs
- **Mainnet Courts:** [klerosboard.com/1/courts](https://klerosboard.com/1/courts)
- **Gnosis Courts:** [klerosboard.com/100/courts](https://klerosboard.com/100/courts)
- **Most Common:** General Court (ID: 0) with 3 jurors

## Dispute Lifecycle

### 1. Dispute Creation
```solidity
// Calculate cost
uint256 cost = arbitrator.arbitrationCost(extraData);

// Create dispute
uint256 disputeID = arbitrator.createDispute{value: cost}(
    numberOfChoices,
    extraData
);
```

### 2. Evidence Submission
Use [ERC-1497](./evidence-standard) for submitting evidence during the dispute.

### 3. Arbitration Process
- Jurors review evidence and vote
- Initial ruling is given
- Appeal period begins if applicable

### 4. Appeals (Optional)
```solidity
// Check if appeal is possible
(uint256 start, uint256 end) = arbitrator.appealPeriod(disputeID);
require(block.timestamp >= start && block.timestamp < end, "Not in appeal period");

// Calculate appeal cost
uint256 appealFee = arbitrator.appealCost(disputeID, extraData);

// Submit appeal
arbitrator.appeal{value: appealFee}(disputeID, extraData);
```

### 5. Final Ruling
```solidity
function rule(uint256 _disputeID, uint256 _ruling) external override {
    require(msg.sender == address(arbitrator), "Only arbitrator can rule");
    
    // Implement your business logic based on the ruling
    if (_ruling == 1) {
        // Party A wins
        // Implement consequences
    } else if (_ruling == 2) {
        // Party B wins  
        // Implement consequences
    } else {
        // No decision or tie
        // Handle accordingly
    }
    
    emit Ruling(IArbitrator(msg.sender), _disputeID, _ruling);
}
```

## Best Practices

### Gas Optimization
- Store only essential data on-chain
- Use events for detailed information
- Batch operations when possible

### Error Handling
- Always validate arbitrator address
- Handle ruling = 0 cases gracefully
- Implement proper access controls

### User Experience
- Provide clear dispute descriptions
- Show arbitration costs upfront
- Display appeal periods and costs

### Security
- Validate all external calls
- Implement reentrancy protection
- Use proper access modifiers

## Integration Examples

### Simple Two-Party Contract
```solidity
contract SimpleArbitrable is IArbitrable {
    IArbitrator public arbitrator;
    uint256 public disputeID;
    
    enum Party { None, Plaintiff, Defendant }
    
    function createDispute() external payable {
        bytes memory extraData = abi.encode(0, 3); // General court, 3 jurors
        uint256 cost = arbitrator.arbitrationCost(extraData);
        require(msg.value >= cost, "Insufficient payment");
        
        disputeID = arbitrator.createDispute{value: cost}(2, extraData);
    }
    
    function rule(uint256 _disputeID, uint256 _ruling) external override {
        require(msg.sender == address(arbitrator), "Only arbitrator");
        require(_disputeID == disputeID, "Invalid dispute");
        
        if (_ruling == 1) {
            // Plaintiff wins
        } else if (_ruling == 2) {
            // Defendant wins
        }
        
        emit Ruling(IArbitrator(msg.sender), _disputeID, _ruling);
    }
}
```

## Resources

- **📖 [Full ERC-792 Documentation](https://developer.kleros.io/en/latest/index.html)**
- **📜 [EIP-792 Proposal](https://github.com/ethereum/EIPs/issues/792)**  
- **🛠️ [Contract Templates](./examples)**
- **⚖️ [Kleros Courts](https://court.kleros.io/)**

## Next Steps

1. **[Explore Examples](./examples)** - See real implementations
2. **[Evidence Standard](./evidence-standard)** - Learn about ERC-1497
3. **[Deployment Guide](./deployment-addresses)** - Deploy to mainnet
4. **[Testing Framework](./testing)** - Test your contracts locally