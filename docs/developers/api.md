---
id: api
title: API Guide
sidebar_label: API
description: Complete API guide for Kleros developers
---

# API Guide

This guide provides comprehensive information about the Kleros API, including endpoints, authentication, and integration examples.

## Overview

The Kleros API provides programmatic access to the Kleros ecosystem, allowing developers to interact with disputes, governance, and other platform features.

## Base URLs

- **Production**: `https://api.kleros.io`
- **Testnet**: `https://api-testnet.kleros.io`
- **Staging**: `https://api-staging.kleros.io`

## Authentication

### API Key Authentication
```http
Authorization: Bearer YOUR_API_KEY
```

### Getting an API Key
1. Visit [Kleros Developer Portal](https://developer.kleros.io)
2. Create an account
3. Generate an API key
4. Store securely in environment variables

### Rate Limiting
- **Free Tier**: 100 requests per hour
- **Pro Tier**: 10,000 requests per hour
- **Enterprise Tier**: 100,000 requests per hour

## Core Endpoints

### Disputes

#### Get All Disputes
```http
GET /v1/disputes
```

**Query Parameters:**
- `court` (optional): Court ID filter
- `status` (optional): Status filter (active, resolved, appealed)
- `limit` (optional): Number of results (default: 20, max: 100)
- `offset` (optional): Pagination offset (default: 0)

**Example Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "123",
      "court": 1,
      "status": "active",
      "evidence": "Evidence data",
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "total": 100,
    "limit": 20,
    "offset": 0,
    "hasMore": true
  }
}
```

#### Get Dispute by ID
```http
GET /v1/disputes/{disputeId}
```

#### Create Dispute
```http
POST /v1/disputes
```

**Request Body:**
```json
{
  "court": 1,
  "evidence": "Evidence data",
  "fee": "1000000000000000000"
}
```

### Courts

#### Get All Courts
```http
GET /v1/courts
```

#### Get Court by ID
```http
GET /v1/courts/{courtId}
```

### Governance

#### Get All Proposals
```http
GET /v1/governance/proposals
```

#### Get Proposal by ID
```http
GET /v1/governance/proposals/{proposalId}
```

### Users

#### Get User Profile
```http
GET /v1/users/{address}
```

#### Get User Stakes
```http
GET /v1/users/{address}/stakes
```

## Analytics Endpoints

### Dispute Analytics
```http
GET /v1/analytics/disputes/metrics
```

**Query Parameters:**
- `period` (required): Time period (1d, 7d, 30d, 90d, 1y)
- `court` (optional): Court ID filter
- `type` (optional): Dispute type filter

### Governance Analytics
```http
GET /v1/analytics/governance/metrics
```

## WebSocket Endpoints

### Real-Time Updates
```javascript
const ws = new WebSocket('wss://api.kleros.io/ws');

ws.onopen = () => {
  ws.send(JSON.stringify({
    action: 'subscribe',
    events: ['dispute.created', 'dispute.resolved']
  }));
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Event received:', data);
};
```

**Available Events:**
- `dispute.created`
- `dispute.resolved`
- `dispute.appealed`
- `governance.proposal.created`
- `governance.proposal.executed`
- `user.staked`
- `user.unstaked`

## SDK Examples

### JavaScript/TypeScript
```typescript
import { KlerosAPI } from '@kleros/sdk';

const api = new KlerosAPI({
  apiKey: 'your-api-key',
  network: 'mainnet'
});

// Get disputes
const disputes = await api.disputes.getAll({
  court: 1,
  status: 'active'
});

// Create dispute
const dispute = await api.disputes.create({
  court: 1,
  evidence: 'Evidence data',
  fee: '1000000000000000000'
});

// Subscribe to events
api.subscribe('dispute.created', (data) => {
  console.log('New dispute:', data);
});
```

### Python
```python
from kleros import KlerosAPI

api = KlerosAPI(
    api_key='your-api-key',
    network='mainnet'
)

# Get disputes
disputes = api.disputes.get_all(
    court=1,
    status='active'
)

# Create dispute
dispute = api.disputes.create(
    court=1,
    evidence='Evidence data',
    fee='1000000000000000000'
)
```

### cURL Examples
```bash
# Get all disputes
curl -H "Authorization: Bearer YOUR_API_KEY" \
     "https://api.kleros.io/v1/disputes?court=1&status=active"

# Create dispute
curl -X POST \
     -H "Authorization: Bearer YOUR_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"court": 1, "evidence": "Evidence data", "fee": "1000000000000000000"}' \
     "https://api.kleros.io/v1/disputes"

# Get court information
curl -H "Authorization: Bearer YOUR_API_KEY" \
     "https://api.kleros.io/v1/courts/1"
```

## Error Handling

### Error Response Format
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid parameters provided"
  }
}
```

### Common Error Codes
- `VALIDATION_ERROR`: Invalid request parameters
- `AUTHENTICATION_ERROR`: Invalid or missing API key
- `RATE_LIMIT_EXCEEDED`: Rate limit exceeded
- `NOT_FOUND`: Resource not found
- `INTERNAL_ERROR`: Server error

## Rate Limiting

### Rate Limit Headers
```http
X-RateLimit-Limit: 10000
X-RateLimit-Remaining: 9995
X-RateLimit-Reset: 1640995200
```

### Handling Rate Limits
```typescript
class RateLimitHandler {
  private retryAfter = 0;
  
  async makeRequest(requestFn: () => Promise<any>): Promise<any> {
    try {
      return await requestFn();
    } catch (error) {
      if (error.code === 'RATE_LIMIT_EXCEEDED') {
        this.retryAfter = error.retryAfter || 60;
        await this.wait(this.retryAfter * 1000);
        return await requestFn();
      }
      throw error;
    }
  }
  
  private wait(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
```

## Pagination

### Pagination Headers
```http
X-Total-Count: 1000
X-Page-Count: 50
X-Current-Page: 1
X-Per-Page: 20
```

### Pagination Helper
```typescript
class PaginationHelper {
  async getAllPages<T>(
    requestFn: (offset: number, limit: number) => Promise<PaginatedResponse<T>>
  ): Promise<T[]> {
    const allData: T[] = [];
    let offset = 0;
    const limit = 100;
    
    while (true) {
      const response = await requestFn(offset, limit);
      allData.push(...response.data);
      
      if (!response.pagination.hasMore) {
        break;
      }
      
      offset += limit;
    }
    
    return allData;
  }
}
```

## Best Practices

1. **API Key Security**: Store API keys securely
2. **Rate Limiting**: Implement proper rate limiting handling
3. **Error Handling**: Handle errors gracefully
4. **Caching**: Cache responses when appropriate
5. **Monitoring**: Monitor API usage and performance
6. **Documentation**: Keep API integration documentation updated

## Support

For API support:
- [API Documentation](https://docs.kleros.io/api)
- [Developer Discord](https://discord.gg/kleros)
- [API Status](https://status.kleros.io)
- [Support Email](mailto:api@kleros.io)
