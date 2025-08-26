---
id: cross-chain
title: Cross-Chain Integration
sidebar_label: Cross-Chain
description: Guide to integrating Kleros across multiple blockchain networks
---

# Cross-Chain Integration

This guide explains how to integrate Kleros across multiple blockchain networks for seamless cross-chain dispute resolution and governance.

## Overview

Kleros supports multiple blockchain networks, allowing users to participate in dispute resolution and governance regardless of which network they primarily use.

## Supported Networks

### Ethereum Mainnet
- **Chain ID**: 1
- **Status**: Production
- **Features**: Full functionality
- **Gas Token**: ETH

### Polygon (Matic)
- **Chain ID**: 137
- **Status**: Production
- **Features**: Full functionality
- **Gas Token**: MATIC

### Gnosis Chain (xDai)
- **Chain ID**: 100
- **Status**: Production
- **Features**: Full functionality
- **Gas Token**: xDAI

### Arbitrum One
- **Chain ID**: 42161
- **Status**: Beta
- **Features**: Core functionality
- **Gas Token**: ETH

### Optimism
- **Chain ID**: 10
- **Status**: Beta
- **Features**: Core functionality
- **Gas Token**: ETH

## Cross-Chain Architecture

### Hub and Spoke Model
```
                    Ethereum Mainnet (Hub)
                           |
                    ┌──────┴──────┐
                    │             │
              Polygon         Gnosis Chain
                    │             │
              ┌─────┴─────┐ ┌─────┴─────┐
              │           │ │           │
         Arbitrum    Optimism   Other L2s
```

### Bridge Integration
- **Official Bridges**: Use official network bridges
- **Third-Party Bridges**: Support for popular bridge solutions
- **Native Cross-Chain**: Direct cross-chain communication

## Implementation

### Multi-Network Configuration
```typescript
import { Kleros } from '@kleros/sdk';

const klerosConfig = {
  mainnet: {
    rpc: 'https://mainnet.infura.io/v3/YOUR_ID',
    contracts: {
      kleros: '0x988b3A538b618C7A603e1c11D82aCa8C9C5d15c9',
      pnk: '0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d'
    }
  },
  polygon: {
    rpc: 'https://polygon-rpc.com',
    contracts: {
      kleros: '0x988b3A538b618C7A603e1c11D82aCa8C9C5d15c9',
      pnk: '0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d'
    }
  },
  gnosis: {
    rpc: 'https://rpc.gnosischain.com',
    contracts: {
      kleros: '0x988b3A538b618C7A603e1c11D82aCa8C9C5d15c9',
      pnk: '0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d'
    }
  }
};

const kleros = new Kleros(klerosConfig);
```

### Cross-Chain Dispute Resolution
```typescript
class CrossChainKleros {
  private networks: Map<string, Kleros> = new Map();
  
  constructor(config: NetworkConfig) {
    Object.entries(config).forEach(([network, config]) => {
      this.networks.set(network, new Kleros(config));
    });
  }
  
  async createCrossChainDispute(
    sourceNetwork: string,
    targetNetwork: string,
    evidence: string
  ) {
    const sourceKleros = this.networks.get(sourceNetwork);
    const targetKleros = this.networks.get(targetNetwork);
    
    if (!sourceKleros || !targetKleros) {
      throw new Error('Network not supported');
    }
    
    // Create dispute on source network
    const sourceDispute = await sourceKleros.dispute.create({
      evidence,
      crossChain: true,
      targetNetwork
    });
    
    // Bridge to target network
    const bridgeResult = await this.bridgeDispute(
      sourceNetwork,
      targetNetwork,
      sourceDispute.id
    );
    
    return bridgeResult;
  }
  
  private async bridgeDispute(
    sourceNetwork: string,
    targetNetwork: string,
    disputeId: string
  ) {
    // Implementation of cross-chain bridging
    // This would integrate with bridge protocols
  }
}
```

## Bridge Solutions

### Official Network Bridges

#### Polygon Bridge
```typescript
import { PolygonBridge } from '@kleros/bridges';

const bridge = new PolygonBridge({
  ethereumProvider: ethereumProvider,
  polygonProvider: polygonProvider
});

const result = await bridge.bridgeDispute(disputeId);
```

#### Gnosis Chain Bridge
```typescript
import { GnosisBridge } from '@kleros/bridges';

const bridge = new GnosisBridge({
  ethereumProvider: ethereumProvider,
  gnosisProvider: gnosisProvider
});

const result = await bridge.bridgeDispute(disputeId);
```

### Third-Party Bridges

#### Multichain
```typescript
import { MultichainBridge } from '@kleros/bridges';

const bridge = new MultichainBridge({
  router: '0x45A01E4e04F14f7A4a6702c74187c5F6227033Aa'
});

const result = await bridge.bridgeDispute(disputeId);
```

#### Hop Protocol
```typescript
import { HopBridge } from '@kleros/bridges';

const bridge = new HopBridge({
  hopCore: '0x3d4Cc8A61c7528Fd86C55cfe061a78dCBA0485a7'
});

const result = await bridge.bridgeDispute(disputeId);
```

## Cross-Chain Governance

### Multi-Network Voting
```typescript
class CrossChainGovernance {
  async createCrossChainProposal(
    proposal: Proposal,
    networks: string[]
  ) {
    const results = await Promise.all(
      networks.map(network => 
        this.createProposalOnNetwork(network, proposal)
      )
    );
    
    return results;
  }
  
  async voteCrossChain(
    proposalId: string,
    vote: boolean,
    networks: string[]
  ) {
    const results = await Promise.all(
      networks.map(network =>
        this.voteOnNetwork(network, proposalId, vote)
      )
    );
    
    return results;
  }
}
```

### Cross-Chain Result Aggregation
```typescript
class ResultAggregator {
  async aggregateResults(
    proposalId: string,
    networks: string[]
  ): Promise<AggregatedResult> {
    const results = await Promise.all(
      networks.map(network =>
        this.getResultFromNetwork(network, proposalId)
      )
    );
    
    return this.calculateAggregatedResult(results);
  }
  
  private calculateAggregatedResult(
    results: NetworkResult[]
  ): AggregatedResult {
    // Weight results by network importance/stake
    // Return aggregated decision
  }
}
```

## Security Considerations

### Bridge Security
- **Official Bridges**: Use official network bridges when possible
- **Audit Reports**: Verify bridge security through audit reports
- **Insurance**: Consider bridge insurance for large amounts
- **Monitoring**: Monitor bridge transactions and status

### Cross-Chain Validation
```typescript
class CrossChainValidator {
  async validateCrossChainTransaction(
    sourceNetwork: string,
    targetNetwork: string,
    transactionHash: string
  ): Promise<ValidationResult> {
    // Validate transaction on source network
    const sourceValidation = await this.validateOnNetwork(
      sourceNetwork,
      transactionHash
    );
    
    // Validate bridge transaction
    const bridgeValidation = await this.validateBridge(
      sourceNetwork,
      targetNetwork,
      transactionHash
    );
    
    // Validate on target network
    const targetValidation = await this.validateOnNetwork(
      targetNetwork,
      bridgeValidation.targetHash
    );
    
    return {
      source: sourceValidation,
      bridge: bridgeValidation,
      target: targetValidation,
      valid: sourceValidation.valid && 
             bridgeValidation.valid && 
             targetValidation.valid
    };
  }
}
```

## Performance Optimization

### Parallel Processing
```typescript
class ParallelProcessor {
  async processCrossChainOperations(
    operations: CrossChainOperation[]
  ) {
    // Group operations by network
    const networkGroups = this.groupByNetwork(operations);
    
    // Process in parallel
    const results = await Promise.all(
      Object.entries(networkGroups).map(([network, ops]) =>
        this.processNetworkOperations(network, ops)
      )
    );
    
    return this.mergeResults(results);
  }
}
```

### Caching
```typescript
class CrossChainCache {
  private cache = new Map<string, any>();
  
  async getCachedData(
    network: string,
    key: string
  ): Promise<any> {
    const cacheKey = `${network}:${key}`;
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }
    
    const data = await this.fetchFromNetwork(network, key);
    this.cache.set(cacheKey, data);
    
    return data;
  }
}
```

## Testing

### Cross-Chain Test Environment
```bash
# Start local networks
docker-compose up -d ethereum
docker-compose up -d polygon
docker-compose up -d gnosis

# Deploy test contracts
npm run deploy:testnet

# Run cross-chain tests
npm run test:crosschain
```

### Test Configuration
```typescript
const testConfig = {
  networks: {
    localhost: {
      rpc: 'http://localhost:8545',
      contracts: { /* test addresses */ }
    },
    localhost_polygon: {
      rpc: 'http://localhost:8546',
      contracts: { /* test addresses */ }
    }
  }
};
```

## Monitoring

### Cross-Chain Metrics
```typescript
class CrossChainMonitor {
  async getCrossChainMetrics(): Promise<CrossChainMetrics> {
    const metrics = await Promise.all(
      this.supportedNetworks.map(network =>
        this.getNetworkMetrics(network)
      )
    );
    
    return {
      totalDisputes: metrics.reduce((sum, m) => sum + m.disputes, 0),
      totalStake: metrics.reduce((sum, m) => sum + m.totalStake, 0),
      networkBreakdown: metrics
    };
  }
}
```

## Support

For cross-chain integration support:
- [Cross-Chain Documentation](/docs/integrations/cross-chain)
- [Bridge Integration Guide](/docs/integrations/bridges)
- [Developer Discord](https://discord.gg/kleros)
- [GitHub Issues](https://github.com/kleros/kleros/issues)
