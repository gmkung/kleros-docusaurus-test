---
id: smart-contract-integration
title: Smart Contract Integration
sidebar_label: Smart Contract Integration
description: Guide to integrating smart contracts with Kleros
---

# Smart Contract Integration

This guide explains how to integrate your smart contracts with the Kleros ecosystem for decentralized dispute resolution and governance.

## Overview

Kleros provides several standards and interfaces that allow smart contracts to integrate with our dispute resolution system. The main standards are ERC-792 (Arbitration Standard) and ERC-1497 (Evidence Standard).

## ERC-792 Arbitration Standard

The ERC-792 standard defines how smart contracts can request arbitration from the Kleros court system.

### Basic Integration

```solidity
interface IArbitrable {
    function rule(uint256 _disputeID, uint256 _ruling) external;
}
```

### Implementation Example

```solidity
contract MyArbitrableContract is IArbitrable {
    IArbitrator public arbitrator;
    uint256 public disputeID;
    
    constructor(address _arbitrator) {
        arbitrator = IArbitrator(_arbitrator);
    }
    
    function createDispute(bytes calldata _evidence) external payable {
        disputeID = arbitrator.createDispute{value: msg.value}(_evidence);
    }
    
    function rule(uint256 _disputeID, uint256 _ruling) external override {
        require(msg.sender == address(arbitrator), "Only arbitrator");
        // Handle the ruling
        handleRuling(_ruling);
    }
}
```

## ERC-1497 Evidence Standard

The ERC-1497 standard provides a framework for submitting and managing evidence in arbitration cases.

### Evidence Submission

```solidity
interface IEvidence {
    function submitEvidence(uint256 _disputeID, bytes calldata _evidence) external;
}
```

## Integration Patterns

### Escrow Contracts
- Integrate with Kleros for dispute resolution
- Automatic ruling enforcement
- Evidence management

### Governance Contracts
- Dispute resolution for governance decisions
- Evidence-based decision making
- Transparent process

### Oracle Contracts
- Dispute resolution for data accuracy
- Evidence submission for data verification
- Community-driven verification

## Best Practices

1. **Gas Optimization**: Minimize gas costs in dispute creation
2. **Evidence Management**: Efficiently store and retrieve evidence
3. **Security**: Implement proper access controls
4. **Testing**: Thoroughly test integration before deployment

## Testing

Use our test suite and local development environment to test your integration:

```bash
npm install @kleros/contracts
npm test
```

## Deployment

1. Deploy your contract to the target network
2. Verify the contract on block explorers
3. Test the integration on testnets first
4. Monitor for any issues

## Support

For integration support, visit our [developer documentation](/docs/developers) or join our [developer community](https://discord.gg/kleros).
