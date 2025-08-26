---
id: application-integration
title: Application Integration
sidebar_label: Application Integration
description: Guide to integrating applications with Kleros
---

# Application Integration

This guide explains how to integrate your applications with the Kleros ecosystem using our APIs and SDKs.

## Overview

Kleros provides comprehensive APIs and SDKs that allow applications to interact with our dispute resolution system, governance platform, and other services.

## Available APIs

### REST API
- **Base URL**: `https://api.kleros.io`
- **Authentication**: API key required for some endpoints
- **Rate Limiting**: 1000 requests per hour per API key

### GraphQL API
- **Endpoint**: `https://api.kleros.io/graphql`
- **Real-time**: Subscription support for live updates
- **Flexible**: Query only the data you need

## SDKs

### JavaScript/TypeScript
```bash
npm install @kleros/sdk
```

```typescript
import { Kleros } from '@kleros/sdk';

const kleros = new Kleros({
  network: 'mainnet',
  provider: provider
});

// Get court information
const court = await kleros.court.getCourt(1);
```

### Python
```bash
pip install kleros-sdk
```

```python
from kleros import Kleros

kleros = Kleros(network='mainnet', provider=provider)
court = kleros.court.get_court(1)
```

## Integration Examples

### Dispute Resolution
```typescript
// Create a dispute
const dispute = await kleros.dispute.create({
  evidence: 'Evidence data',
  court: 1,
  fee: '1000000000000000000' // 1 ETH
});

// Submit evidence
await kleros.evidence.submit(dispute.id, 'Additional evidence');
```

### Governance
```typescript
// Get proposals
const proposals = await kleros.governance.getProposals();

// Vote on proposal
await kleros.governance.vote(proposalId, true, '1000000000000000000');
```

### Oracle
```typescript
// Request data
const request = await kleros.oracle.requestData('BTC/USD');

// Get result
const result = await kleros.oracle.getResult(request.id);
```

## Webhooks

Set up webhooks to receive real-time updates:

```typescript
kleros.webhooks.subscribe('dispute.created', (data) => {
  console.log('New dispute:', data);
});
```

## Error Handling

```typescript
try {
  const result = await kleros.dispute.create(disputeData);
} catch (error) {
  if (error.code === 'INSUFFICIENT_FUNDS') {
    // Handle insufficient funds
  } else if (error.code === 'INVALID_COURT') {
    // Handle invalid court
  }
}
```

## Testing

Use our sandbox environment for testing:

```typescript
const kleros = new Kleros({
  network: 'testnet',
  sandbox: true
});
```

## Rate Limiting

Implement proper rate limiting in your applications:

```typescript
class RateLimitedKleros {
  private requestCount = 0;
  private lastReset = Date.now();
  
  async makeRequest() {
    if (this.requestCount >= 1000) {
      const now = Date.now();
      if (now - this.lastReset < 3600000) { // 1 hour
        throw new Error('Rate limit exceeded');
      }
      this.requestCount = 0;
      this.lastReset = now;
    }
    
    this.requestCount++;
    return await this.kleros.makeRequest();
  }
}
```

## Best Practices

1. **Caching**: Cache frequently accessed data
2. **Error Handling**: Implement comprehensive error handling
3. **Monitoring**: Monitor API usage and performance
4. **Security**: Keep API keys secure
5. **Testing**: Test with sandbox environment first

## Support

For integration support:
- [API Documentation](https://docs.kleros.io/api)
- [Developer Discord](https://discord.gg/kleros)
- [GitHub Issues](https://github.com/kleros/kleros-sdk/issues)
