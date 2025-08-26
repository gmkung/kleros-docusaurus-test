---
id: deployment
title: Deployment Guide
sidebar_label: Deployment
description: Complete deployment guide for Kleros integrations
---

# Deployment Guide

This guide covers deploying Kleros integrations to various networks, including mainnet, testnets, and local development environments.

## Overview

Deployment is the final step in bringing your Kleros integration to production. This guide covers deployment strategies, tools, and best practices for different networks and environments.

## Deployment Networks

### Mainnet (Production)
- **Network**: Ethereum Mainnet
- **Chain ID**: 1
- **Status**: Production ready
- **Gas Token**: ETH
- **Security**: High security requirements

### Testnets
- **Goerli**: Ethereum testnet (deprecated)
- **Sepolia**: Ethereum testnet (recommended)
- **Polygon Mumbai**: Polygon testnet
- **Gnosis Chiado**: Gnosis testnet

### Local Development
- **Hardhat Network**: Local development and testing
- **Ganache**: Local blockchain simulation
- **Anvil**: Foundry local network

## Deployment Tools

### Hardhat Deployment
```bash
npm install --save-dev hardhat-deploy hardhat-deploy-ethers
```

**Configuration:**
```javascript
// hardhat.config.js
require('hardhat-deploy');
require('hardhat-deploy-ethers');

module.exports = {
  solidity: "0.8.19",
  networks: {
    mainnet: {
      url: process.env.MAINNET_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 1,
      verify: {
        etherscan: {
          apiKey: process.env.ETHERSCAN_API_KEY
        }
      }
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 11155111
    }
  }
};
```

**Deployment Script:**
```javascript
// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  // Deploy Arbitrable contract
  const Arbitrable = await ethers.getContractFactory("Arbitrable");
  const arbitrable = await Arbitrable.deploy();
  await arbitrable.deployed();

  console.log("Arbitrable deployed to:", arbitrable.address);

  // Verify contract on Etherscan
  if (hre.network.name !== "hardhat") {
    await hre.run("verify:verify", {
      address: arbitrable.address,
      constructorArguments: []
    });
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

### Foundry Deployment
```bash
# Install Foundry
curl -L https://foundry.paradigm.xyz | bash
foundryup

# Deploy contract
forge create --rpc-url $RPC_URL --private-key $PRIVATE_KEY src/Arbitrable.sol:Arbitrable
```

**Deployment Script:**
```solidity
// script/Deploy.s.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import "../src/Arbitrable.sol";

contract DeployScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        Arbitrable arbitrable = new Arbitrable();
        console.log("Arbitrable deployed at:", address(arbitrable));

        vm.stopBroadcast();
    }
}
```

## Environment Configuration

### Environment Variables
```bash
# .env
# Network RPC URLs
MAINNET_RPC_URL=https://mainnet.infura.io/v3/YOUR_PROJECT_ID
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_PROJECT_ID
POLYGON_RPC_URL=https://polygon-rpc.com

# Private Keys
PRIVATE_KEY=your_private_key_here
DEPLOYER_PRIVATE_KEY=deployer_private_key_here

# API Keys
ETHERSCAN_API_KEY=your_etherscan_api_key
POLYGONSCAN_API_KEY=your_polygonscan_api_key

# Contract Addresses
KLEROS_ADDRESS=0x988b3A538b618C7A603e1c11D82aCa8C9C5d15c9
PNK_ADDRESS=0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d
```

### Network Configuration
```typescript
// config/networks.ts
export const networkConfig = {
  mainnet: {
    chainId: 1,
    rpc: process.env.MAINNET_RPC_URL,
    contracts: {
      kleros: '0x988b3A538b618C7A603e1c11D82aCa8C9C5d15c9',
      pnk: '0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d'
    },
    blockExplorer: 'https://etherscan.io'
  },
  sepolia: {
    chainId: 11155111,
    rpc: process.env.SEPOLIA_RPC_URL,
    contracts: {
      kleros: '0x...',
      pnk: '0x...'
    },
    blockExplorer: 'https://sepolia.etherscan.io'
  },
  polygon: {
    chainId: 137,
    rpc: process.env.POLYGON_RPC_URL,
    contracts: {
      kleros: '0x988b3A538b618C7A603e1c11D82aCa8C9C5d15c9',
      pnk: '0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d'
    },
    blockExplorer: 'https://polygonscan.com'
  }
};
```

## Deployment Process

### Pre-Deployment Checklist
1. **Code Review**: Complete code review and testing
2. **Security Audit**: Security audit completed (if required)
3. **Test Coverage**: >90% test coverage achieved
4. **Gas Optimization**: Gas usage optimized
5. **Documentation**: Documentation updated
6. **Environment Setup**: Target environment configured

### Deployment Steps
```bash
# 1. Build contracts
npm run build

# 2. Run tests
npm test

# 3. Deploy to testnet
npm run deploy:sepolia

# 4. Verify contracts
npm run verify:sepolia

# 5. Test on testnet
npm run test:integration:sepolia

# 6. Deploy to mainnet
npm run deploy:mainnet

# 7. Verify mainnet contracts
npm run verify:mainnet
```

### Automated Deployment
```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    tags:
      - 'v*'

jobs:
  deploy:
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
    
    - name: Deploy to Sepolia
      run: npm run deploy:sepolia
      env:
        PRIVATE_KEY: ${{ secrets.PRIVATE_KEY }}
        SEPOLIA_RPC_URL: ${{ secrets.SEPOLIA_RPC_URL }}
    
    - name: Verify contracts
      run: npm run verify:sepolia
      env:
        ETHERSCAN_API_KEY: ${{ secrets.ETHERSCAN_API_KEY }}
```

## Contract Verification

### Etherscan Verification
```bash
# Hardhat verification
npx hardhat verify --network mainnet CONTRACT_ADDRESS

# Foundry verification
forge verify-contract CONTRACT_ADDRESS src/Arbitrable.sol:Arbitrable \
  --chain-id 1 \
  --etherscan-api-key $ETHERSCAN_API_KEY
```

### Verification Script
```javascript
// scripts/verify.js
const hre = require("hardhat");

async function main() {
  const contractAddress = "0x..."; // Deployed contract address
  
  try {
    await hre.run("verify:verify", {
      address: contractAddress,
      constructorArguments: []
    });
    console.log("Contract verified successfully");
  } catch (error) {
    if (error.message.includes("Already Verified")) {
      console.log("Contract already verified");
    } else {
      console.error("Verification failed:", error);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

## Post-Deployment

### Contract Initialization
```javascript
// scripts/initialize.js
async function initializeContracts() {
  const arbitrable = await ethers.getContractAt("Arbitrable", contractAddress);
  
  // Set arbitrator
  await arbitrable.setArbitrator(klerosAddress);
  
  // Set court
  await arbitrable.setCourt(1);
  
  // Set fees
  await arbitrable.setDisputeFee(ethers.utils.parseEther("0.1"));
  
  console.log("Contracts initialized successfully");
}
```

### Configuration Update
```typescript
// Update configuration with deployed addresses
export const deployedAddresses = {
  mainnet: {
    arbitrable: '0x...',
    arbitrator: '0x...',
    court: '0x...'
  },
  sepolia: {
    arbitrable: '0x...',
    arbitrator: '0x...',
    court: '0x...'
  }
};
```

## Monitoring and Maintenance

### Deployment Monitoring
```typescript
class DeploymentMonitor {
  async monitorDeployment(contractAddress: string, network: string) {
    // Monitor contract deployment
    const deployment = await this.getDeploymentStatus(contractAddress);
    
    // Monitor contract initialization
    const initialization = await this.getInitializationStatus(contractAddress);
    
    // Monitor first transactions
    const transactions = await this.getFirstTransactions(contractAddress);
    
    return {
      deployment,
      initialization,
      transactions
    };
  }
}
```

### Health Checks
```typescript
class HealthChecker {
  async checkContractHealth(contractAddress: string) {
    const checks = [
      this.checkContractCode(contractAddress),
      this.checkContractBalance(contractAddress),
      this.checkContractPermissions(contractAddress),
      this.checkIntegrationHealth(contractAddress)
    ];
    
    const results = await Promise.all(checks);
    return this.aggregateResults(results);
  }
}
```

## Security Considerations

### Private Key Management
- **Environment Variables**: Store private keys in environment variables
- **Hardware Wallets**: Use hardware wallets for mainnet deployments
- **Multi-Sig**: Implement multi-signature for critical operations
- **Access Control**: Limit access to deployment keys

### Contract Security
- **Access Controls**: Implement proper access controls
- **Pausability**: Consider pausable contracts for emergencies
- **Upgradability**: Plan for contract upgrades if needed
- **Audit**: Complete security audit before mainnet deployment

## Troubleshooting

### Common Issues
1. **Gas Estimation Failed**: Check contract constructor parameters
2. **Verification Failed**: Ensure contract source matches deployed bytecode
3. **Transaction Failed**: Check gas limits and network conditions
4. **Contract Not Found**: Verify deployment transaction success

### Debug Commands
```bash
# Check deployment status
npx hardhat run scripts/check-deployment.js --network mainnet

# Debug transaction
npx hardhat run scripts/debug-tx.js --network mainnet

# Check contract state
npx hardhat run scripts/check-state.js --network mainnet
```

## Best Practices

1. **Test First**: Always test on testnets before mainnet
2. **Verify Contracts**: Verify all contracts on block explorers
3. **Monitor Deployments**: Monitor deployment process and results
4. **Document Everything**: Document deployment steps and addresses
5. **Security First**: Prioritize security in deployment process
6. **Backup Plans**: Have backup deployment strategies ready
7. **Team Coordination**: Coordinate deployments with team members

## Support

For deployment support:
- [Deployment Documentation](/docs/developers/deployment)
- [Deployment Examples](https://github.com/kleros/deployment-examples)
- [Developer Discord](https://discord.gg/kleros)
- [Deployment Team](mailto:deployment@kleros.io)
