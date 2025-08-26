---
id: deployment-addresses
title: Deployment Addresses
sidebar_label: Deployment Addresses
description: Contract addresses for Kleros deployments across different networks
---

# Deployment Addresses

This page contains the contract addresses for Kleros deployments across different blockchain networks.

## Mainnet (Ethereum)

### Core Contracts
- **Kleros**: `0x988b3A538b618C7A603e1c11D82aCa8C9C5d15c9`
- **PNK Token**: `0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d`
- **KlerosLiquid**: `0x988b3A538b618C7A603e1c11D82aCa8C9C5d15c9`
- **KlerosLiquidFactory**: `0x5CbDd86a2FA8Dc4bDdd8a8f69dBa48572EeC07FB`

### Court Contracts
- **General Court**: `0x9C1dA9A04925bDfDedf0f6421bC7EEa8305F9002`
- **Court 1**: `0x9C1dA9A04925bDfDedf0f6421bC7EEa8305F9002`
- **Court 2**: `0x9C1dA9A04925bDfDedf0f6421bC7EEa8305F9002`

### Product Contracts
- **Curate**: `0xE1dE3B7C81Beb8B5f0c6e86D85a0278B5Bf5A03`
- **Escrow**: `0x5CbDd86a2FA8Dc4bDdd8a8f69dBa48572EeC07FB`
- **Proof of Humanity**: `0x1C9886A3442aa638fD0Bc33AdF05eDE2e3fA8C8A`

## Polygon (Matic)

### Core Contracts
- **Kleros**: `0x988b3A538b618C7A603e1c11D82aCa8C9C5d15c9`
- **PNK Token**: `0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d`

### Court Contracts
- **General Court**: `0x9C1dA9A04925bDfDedf0f6421bC7EEa8305F9002`

## Gnosis Chain (xDai)

### Core Contracts
- **Kleros**: `0x988b3A538b618C7A603e1c11D82aCa8C9C5d15c9`
- **PNK Token**: `0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d`

### Court Contracts
- **General Court**: `0x9C1dA9A04925bDfDedf0f6421bC7EEa8305F9002`

## Testnets

### Goerli Testnet
- **Kleros**: `0x988b3A538b618C7A603e1c11D82aCa8C9C5d15c9`
- **PNK Token**: `0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d`

### Sepolia Testnet
- **Kleros**: `0x988b3A538b618C7A603e1c11D82aCa8C9C5d15c9`
- **PNK Token**: `0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d`

## Contract Verification

All contracts are verified on their respective block explorers:

- **Ethereum**: [Etherscan](https://etherscan.io)
- **Polygon**: [Polygonscan](https://polygonscan.com)
- **Gnosis Chain**: [GnosisScan](https://gnosisscan.io)
- **Goerli**: [Goerli Etherscan](https://goerli.etherscan.io)
- **Sepolia**: [Sepolia Etherscan](https://sepolia.etherscan.io)

## Address Format

All addresses are in checksum format for Ethereum and compatible networks. When using these addresses in your contracts or applications, make sure to use the exact format shown above.

## Network Configuration

### Ethereum Mainnet
- **Chain ID**: 1
- **RPC URL**: `https://mainnet.infura.io/v3/YOUR_PROJECT_ID`
- **Block Explorer**: `https://etherscan.io`

### Polygon
- **Chain ID**: 137
- **RPC URL**: `https://polygon-rpc.com`
- **Block Explorer**: `https://polygonscan.com`

### Gnosis Chain
- **Chain ID**: 100
- **RPC URL**: `https://rpc.gnosischain.com`
- **Block Explorer**: `https://gnosisscan.io`

## Integration Examples

### Hardhat Configuration
```javascript
module.exports = {
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 1
    },
    polygon: {
      url: "https://polygon-rpc.com",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 137
    },
    gnosis: {
      url: "https://rpc.gnosischain.com",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 100
    }
  }
};
```

### Contract Interaction
```solidity
contract KlerosIntegration {
    IKlerosLiquid public kleros;
    
    constructor() {
        // Mainnet address
        kleros = IKlerosLiquid(0x988b3A538b618C7A603e1c11D82aCa8C9C5d15c9);
    }
    
    function getCourt(uint256 _courtID) external view returns (Court memory) {
        return kleros.courts(_courtID);
    }
}
```

## Security Notes

1. **Verify Addresses**: Always verify contract addresses before using them
2. **Check Network**: Ensure you're using the correct network
3. **Test First**: Test integrations on testnets before mainnet
4. **Monitor Updates**: Contract addresses may change with upgrades

## Support

For questions about contract addresses or deployments:
- [Kleros Discord](https://discord.gg/kleros)
- [GitHub Issues](https://github.com/kleros/kleros-contracts/issues)
- [Developer Documentation](/docs/developers)
