---
id: testing
title: Testing Guide
sidebar_label: Testing
description: Comprehensive testing guide for Kleros integrations
---

# Testing Guide

This guide covers testing strategies and best practices for Kleros integrations, including unit tests, integration tests, and testing tools.

## Overview

Testing is crucial for ensuring the reliability and security of your Kleros integration. This guide covers various testing approaches and tools available for testing Kleros contracts and applications.

## Testing Types

### Unit Testing
- **Contract Functions**: Test individual smart contract functions
- **Edge Cases**: Test boundary conditions and error cases
- **Gas Optimization**: Measure gas usage for different operations
- **Security**: Test access controls and permission systems

### Integration Testing
- **Contract Interactions**: Test how contracts work together
- **External Dependencies**: Test integration with Kleros contracts
- **Network Interactions**: Test on testnets and local networks
- **API Integration**: Test application-level integrations

### End-to-End Testing
- **User Workflows**: Test complete user journeys
- **Cross-Chain Operations**: Test multi-network functionality
- **Performance**: Test under load and stress conditions
- **User Experience**: Test UI/UX flows

## Testing Tools

### Hardhat Testing
```bash
npm install --save-dev hardhat @nomiclabs/hardhat-ethers ethers
```

**Configuration:**
```javascript
// hardhat.config.js
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      forking: {
        url: process.env.MAINNET_RPC_URL,
        blockNumber: 15000000
      }
    }
  }
};
```

**Test Example:**
```javascript
// test/Arbitrable.test.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Arbitrable Contract", function () {
  let arbitrable;
  let arbitrator;
  let owner;
  let user;

  beforeEach(async function () {
    [owner, user] = await ethers.getSigners();
    
    const Arbitrable = await ethers.getContractFactory("Arbitrable");
    arbitrable = await Arbitrable.deploy();
    await arbitrable.deployed();
  });

  it("Should create dispute", async function () {
    const evidence = "Test evidence";
    const fee = ethers.utils.parseEther("1");
    
    await arbitrable.createDispute(evidence, { value: fee });
    
    expect(await arbitrable.disputeCount()).to.equal(1);
  });

  it("Should handle ruling correctly", async function () {
    // Test ruling handling
  });
});
```

### Foundry Testing
```bash
forge install foundry-rs/forge-std
```

**Test Example:**
```solidity
// test/Arbitrable.t.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import "../src/Arbitrable.sol";

contract ArbitrableTest is Test {
    Arbitrable public arbitrable;
    address public arbitrator = address(1);
    address public user = address(2);

    function setUp() public {
        arbitrable = new Arbitrable(arbitrator);
    }

    function testCreateDispute() public {
        string memory evidence = "Test evidence";
        uint256 fee = 1 ether;
        
        vm.prank(user);
        vm.deal(user, fee);
        
        arbitrable.createDispute{value: fee}(evidence);
        
        assertEq(arbitrable.disputeCount(), 1);
    }

    function testRulingHandling() public {
        // Test ruling handling
    }
}
```

## Testing Kleros Contracts

### Local Testing Environment
```bash
# Start local network with Kleros contracts
docker-compose up -d

# Deploy test contracts
npm run deploy:local

# Run tests
npm test
```

### Test Configuration
```typescript
// test.config.ts
export const testConfig = {
  networks: {
    localhost: {
      rpc: 'http://localhost:8545',
      contracts: {
        kleros: '0x...',
        pnk: '0x...'
      }
    },
    goerli: {
      rpc: process.env.GOERLI_RPC_URL,
      contracts: {
        kleros: '0x...',
        pnk: '0x...'
      }
    }
  }
};
```

### Mock Contracts
```solidity
// contracts/mocks/MockArbitrator.sol
contract MockArbitrator {
    mapping(uint256 => uint256) public rulings;
    
    function createDispute(bytes calldata _extraData) 
        external 
        payable 
        returns (uint256 disputeID) 
    {
        disputeID = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender)));
        return disputeID;
    }
    
    function rule(uint256 _disputeID, uint256 _ruling) external {
        rulings[_disputeID] = _ruling;
    }
}
```

## Testing Scenarios

### Dispute Resolution Testing
```typescript
describe('Dispute Resolution', () => {
  it('should create dispute successfully', async () => {
    const evidence = 'Test evidence';
    const fee = ethers.utils.parseEther('1');
    
    const tx = await arbitrable.createDispute(evidence, { value: fee });
    const receipt = await tx.wait();
    
    expect(receipt.status).to.equal(1);
  });

  it('should handle ruling correctly', async () => {
    // Create dispute
    const disputeId = await createTestDispute();
    
    // Simulate ruling
    await arbitrator.rule(disputeId, 1);
    
    // Verify ruling was handled
    expect(await arbitrable.getRuling(disputeId)).to.equal(1);
  });

  it('should reject invalid rulings', async () => {
    const disputeId = await createTestDispute();
    
    // Try to rule from non-arbitrator address
    await expect(
      arbitrable.connect(user).rule(disputeId, 1)
    ).to.be.revertedWith('Only arbitrator');
  });
});
```

### Governance Testing
```typescript
describe('Governance', () => {
  it('should create proposal successfully', async () => {
    const proposal = {
      title: 'Test Proposal',
      description: 'Test Description',
      actions: []
    };
    
    const tx = await governance.createProposal(proposal);
    const receipt = await tx.wait();
    
    expect(receipt.status).to.equal(1);
  });

  it('should handle voting correctly', async () => {
    const proposalId = await createTestProposal();
    
    // Vote for proposal
    await governance.vote(proposalId, true);
    
    // Verify vote was recorded
    expect(await governance.hasVoted(proposalId, user.address)).to.be.true;
  });
});
```

### Cross-Chain Testing
```typescript
describe('Cross-Chain Operations', () => {
  it('should bridge dispute to target network', async () => {
    const sourceNetwork = 'ethereum';
    const targetNetwork = 'polygon';
    const evidence = 'Test evidence';
    
    // Create dispute on source network
    const sourceDispute = await sourceKleros.createDispute(evidence);
    
    // Bridge to target network
    const bridgeResult = await bridgeManager.bridgeDispute(
      sourceNetwork,
      targetNetwork,
      sourceDispute.id
    );
    
    expect(bridgeResult.success).to.be.true;
    expect(bridgeResult.targetDisputeId).to.not.be.undefined;
  });
});
```

## Performance Testing

### Load Testing
```typescript
import { LoadTester } from '@kleros/test-tools';

const loadTester = new LoadTester({
  requests: 1000,
  concurrency: 10,
  timeout: 30000
});

describe('Performance Tests', () => {
  it('should handle high dispute volume', async () => {
    const results = await loadTester.test(async () => {
      return await arbitrable.createDispute('Test evidence', { value: fee });
    });
    
    expect(results.successRate).to.be.greaterThan(0.95);
    expect(results.averageResponseTime).to.be.lessThan(5000);
  });
});
```

### Gas Testing
```typescript
describe('Gas Optimization', () => {
  it('should optimize dispute creation gas usage', async () => {
    const evidence = 'Test evidence';
    const fee = ethers.utils.parseEther('1');
    
    const tx = await arbitrable.createDispute(evidence, { value: fee });
    const receipt = await tx.wait();
    
    // Gas should be under reasonable limit
    expect(receipt.gasUsed).to.be.lessThan(500000);
  });
});
```

## Security Testing

### Access Control Testing
```typescript
describe('Access Control', () => {
  it('should restrict dispute creation to authorized users', async () => {
    const evidence = 'Test evidence';
    const fee = ethers.utils.parseEther('1');
    
    // Try to create dispute from unauthorized address
    await expect(
      arbitrable.connect(unauthorizedUser).createDispute(evidence, { value: fee })
    ).to.be.revertedWith('Unauthorized');
  });

  it('should prevent unauthorized ruling modifications', async () => {
    const disputeId = await createTestDispute();
    
    // Try to modify ruling from non-arbitrator address
    await expect(
      arbitrable.connect(user).modifyRuling(disputeId, 2)
    ).to.be.revertedWith('Only arbitrator');
  });
});
```

### Reentrancy Testing
```typescript
describe('Reentrancy Protection', () => {
  it('should prevent reentrancy attacks', async () => {
    const maliciousContract = await deployMaliciousContract();
    
    // Try to exploit reentrancy vulnerability
    await expect(
      maliciousContract.attack(arbitrable.address)
    ).to.be.revertedWith('ReentrancyGuard: reentrant call');
  });
});
```

## Test Data Management

### Fixtures
```typescript
// test/fixtures/disputes.ts
export const disputeFixtures = {
  validEvidence: 'Valid evidence for testing',
  invalidEvidence: '',
  highFee: ethers.utils.parseEther('10'),
  lowFee: ethers.utils.parseEther('0.1'),
  
  createTestDispute: async (arbitrable: any, evidence?: string, fee?: any) => {
    const defaultEvidence = evidence || disputeFixtures.validEvidence;
    const defaultFee = fee || disputeFixtures.highFee;
    
    const tx = await arbitrable.createDispute(defaultEvidence, { value: defaultFee });
    const receipt = await tx.wait();
    
    // Extract dispute ID from events
    const event = receipt.events?.find(e => e.event === 'DisputeCreated');
    return event?.args?.disputeId;
  }
};
```

### Test Utilities
```typescript
// test/utils/testHelpers.ts
export class TestHelpers {
  static async increaseTime(seconds: number) {
    await ethers.provider.send('evm_increaseTime', [seconds]);
    await ethers.provider.send('evm_mine', []);
  }
  
  static async setNextBlockTimestamp(timestamp: number) {
    await ethers.provider.send('evm_setNextBlockTimestamp', [timestamp]);
  }
  
  static async impersonateAccount(address: string) {
    await ethers.provider.send('hardhat_impersonateAccount', [address]);
    return ethers.provider.getSigner(address);
  }
}
```

## Continuous Integration

### GitHub Actions
```yaml
# .github/workflows/test.yml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Run coverage
      run: npm run coverage
    
    - name: Upload coverage
      uses: codecov/codecov-action@v3
```

### Coverage Reporting
```bash
# Install coverage tools
npm install --save-dev solidity-coverage

# Run coverage
npm run coverage

# Generate report
npx hardhat coverage
```

## Best Practices

1. **Test Coverage**: Aim for >90% test coverage
2. **Edge Cases**: Test boundary conditions and error cases
3. **Gas Optimization**: Monitor gas usage in tests
4. **Security**: Test access controls and security features
5. **Integration**: Test with real Kleros contracts on testnets
6. **Performance**: Test under load conditions
7. **Documentation**: Document test scenarios and expected behavior

## Support

For testing support:
- [Testing Documentation](/docs/developers/testing)
- [Test Examples](https://github.com/kleros/test-examples)
- [Developer Discord](https://discord.gg/kleros)
- [Testing Team](mailto:testing@kleros.io)
