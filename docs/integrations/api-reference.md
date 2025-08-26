---
id: api-reference
title: API Reference
sidebar_label: API Reference
description: Complete API reference for Kleros integrations
---

# API Reference

This page provides a complete reference for the Kleros API, including all endpoints, parameters, and response formats.

## Base URL

- **Production**: `https://api.kleros.io`
- **Testnet**: `https://api-testnet.kleros.io`
- **Staging**: `https://api-staging.kleros.io`

## Authentication

### API Key Authentication
```http
Authorization: Bearer YOUR_API_KEY
```

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

#### Get Dispute by ID
```http
GET /v1/disputes/{disputeId}
```

#### Create Dispute
```http
POST /v1/disputes
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

## SDK Examples

### JavaScript/TypeScript
```typescript
import { KlerosAPI } from '@kleros/sdk';

const api = new KlerosAPI({
  apiKey: 'your-api-key',
  network: 'mainnet'
});

const disputes = await api.disputes.getAll({
  court: 1,
  status: 'active'
});
```

## Support

For API support:
- [Developer Discord](https://discord.gg/kleros)
- [API Status](https://status.kleros.io)
- [Support Email](mailto:api@kleros.io)
