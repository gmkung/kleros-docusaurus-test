---
id: analytics
title: Analytics Integration
sidebar_label: Analytics
description: Guide to integrating analytics and data insights with Kleros
---

# Analytics Integration

This guide explains how to integrate analytics and data insights with the Kleros ecosystem for comprehensive monitoring and reporting.

## Overview

Kleros provides comprehensive analytics capabilities that allow you to monitor, analyze, and report on various aspects of the ecosystem including disputes, governance, and user activity.

## Available Analytics

### Dispute Analytics
- **Volume Metrics**: Total disputes, disputes per period, dispute types
- **Resolution Metrics**: Resolution time, success rates, appeal rates
- **Court Performance**: Court efficiency, juror participation, stake distribution
- **Economic Metrics**: Total value locked, fee distribution, reward rates

### Governance Analytics
- **Proposal Metrics**: Proposal volume, voting participation, approval rates
- **Voter Behavior**: Voter turnout, voting patterns, delegation analysis
- **Treasury Metrics**: Fund allocation, spending patterns, budget utilization

### User Analytics
- **User Engagement**: Active users, user retention, user growth
- **Staking Behavior**: Stake distribution, staking duration, unstaking patterns
- **Participation Rates**: Juror participation, governance participation, reward claiming

## API Endpoints

### Analytics API
```typescript
import { AnalyticsAPI } from '@kleros/sdk';

const analytics = new AnalyticsAPI({
  apiKey: 'your-api-key',
  network: 'mainnet'
});

// Get dispute analytics
const disputeAnalytics = await analytics.disputes.getMetrics({
  period: '30d',
  court: 1,
  type: 'all'
});

// Get governance analytics
const governanceAnalytics = await analytics.governance.getMetrics({
  period: '7d',
  proposalType: 'all'
});

// Get user analytics
const userAnalytics = await analytics.users.getMetrics({
  period: '90d',
  metric: 'engagement'
});
```

### Real-Time Data
```typescript
// Subscribe to real-time updates
analytics.subscribe('dispute.created', (data) => {
  console.log('New dispute:', data);
});

analytics.subscribe('governance.proposal.created', (data) => {
  console.log('New proposal:', data);
});

analytics.subscribe('user.staked', (data) => {
  console.log('User staked:', data);
});
```

## Dashboard Integration

### Embeddable Widgets
```html
<!-- Dispute Volume Chart -->
<div id="kleros-dispute-chart" 
     data-network="mainnet" 
     data-period="30d">
</div>

<!-- Governance Participation -->
<div id="kleros-governance-participation" 
     data-network="mainnet" 
     data-proposal-type="all">
</div>

<!-- User Activity -->
<div id="kleros-user-activity" 
     data-network="mainnet" 
     data-metric="engagement">
</div>

<script src="https://cdn.kleros.io/widgets.js"></script>
```

### Custom Dashboard
```typescript
import { DashboardBuilder } from '@kleros/sdk';

const dashboard = new DashboardBuilder({
  theme: 'dark',
  refreshInterval: 30000 // 30 seconds
});

// Add dispute metrics
dashboard.addWidget('dispute-volume', {
  type: 'line-chart',
  dataSource: 'disputes.volume',
  config: {
    title: 'Dispute Volume',
    xAxis: 'time',
    yAxis: 'count'
  }
});

// Add governance metrics
dashboard.addWidget('governance-participation', {
  type: 'bar-chart',
  dataSource: 'governance.participation',
  config: {
    title: 'Governance Participation',
    xAxis: 'proposal',
    yAxis: 'voters'
  }
});

// Add user metrics
dashboard.addWidget('user-growth', {
  type: 'area-chart',
  dataSource: 'users.growth',
  config: {
    title: 'User Growth',
    xAxis: 'time',
    yAxis: 'users'
  }
});

// Render dashboard
dashboard.render('#dashboard-container');
```

## Data Export

### CSV Export
```typescript
// Export dispute data
const disputeData = await analytics.disputes.export({
  format: 'csv',
  period: '90d',
  filters: {
    court: [1, 2, 3],
    status: ['active', 'resolved']
  }
});

// Export governance data
const governanceData = await analytics.governance.export({
  format: 'csv',
  period: '30d',
  filters: {
    proposalType: 'all',
    status: 'active'
  }
});
```

### JSON Export
```typescript
// Export user data
const userData = await analytics.users.export({
  format: 'json',
  period: '365d',
  filters: {
    activity: 'active',
    stake: 'min:1000'
  }
});
```

### API Integration
```typescript
// Custom data processing
class CustomAnalytics {
  async getCustomMetrics() {
    const disputes = await analytics.disputes.getMetrics({
      period: '30d'
    });
    
    const governance = await analytics.governance.getMetrics({
      period: '30d'
    });
    
    const users = await analytics.users.getMetrics({
      period: '30d'
    });
    
    // Process and combine data
    return this.processMetrics(disputes, governance, users);
  }
  
  private processMetrics(disputes: any, governance: any, users: any) {
    // Custom processing logic
    return {
      totalActivity: disputes.total + governance.total + users.total,
      averageResolutionTime: disputes.averageResolutionTime,
      participationRate: governance.participationRate
    };
  }
}
```

## Reporting

### Automated Reports
```typescript
import { ReportGenerator } from '@kleros/sdk';

const reportGenerator = new ReportGenerator({
  schedule: 'weekly',
  format: 'pdf',
  recipients: ['team@company.com']
});

// Weekly dispute report
reportGenerator.addReport('weekly-disputes', {
  title: 'Weekly Dispute Report',
  dataSource: 'disputes.weekly',
  charts: ['volume', 'resolution-time', 'court-performance'],
  summary: true
});

// Monthly governance report
reportGenerator.addReport('monthly-governance', {
  title: 'Monthly Governance Report',
  dataSource: 'governance.monthly',
  charts: ['participation', 'proposal-status', 'voting-patterns'],
  summary: true
});

// Start report generation
reportGenerator.start();
```

### Custom Reports
```typescript
class CustomReportGenerator {
  async generateCustomReport(
    type: string,
    period: string,
    filters: any
  ) {
    const data = await this.gatherData(type, period, filters);
    const analysis = await this.analyzeData(data);
    const insights = await this.generateInsights(analysis);
    
    return {
      summary: this.createSummary(insights),
      charts: this.createCharts(data),
      recommendations: this.createRecommendations(insights)
    };
  }
  
  private async gatherData(type: string, period: string, filters: any) {
    // Gather relevant data based on type and filters
  }
  
  private async analyzeData(data: any) {
    // Perform data analysis
  }
  
  private async generateInsights(analysis: any) {
    // Generate insights from analysis
  }
}
```

## Alerting

### Custom Alerts
```typescript
import { AlertManager } from '@kleros/sdk';

const alertManager = new AlertManager({
  webhook: 'https://your-app.com/webhook',
  email: 'alerts@company.com'
});

// Dispute volume alert
alertManager.addAlert('high-dispute-volume', {
  condition: 'disputes.volume > 100',
  period: '1h',
  message: 'High dispute volume detected',
  severity: 'warning'
});

// Low participation alert
alertManager.addAlert('low-governance-participation', {
  condition: 'governance.participation < 0.1',
  period: '24h',
  message: 'Low governance participation',
  severity: 'critical'
});

// Start monitoring
alertManager.start();
```

### Threshold Monitoring
```typescript
class ThresholdMonitor {
  private thresholds = new Map<string, number>();
  
  setThreshold(metric: string, value: number) {
    this.thresholds.set(metric, value);
  }
  
  async checkThresholds() {
    for (const [metric, threshold] of this.thresholds) {
      const currentValue = await this.getCurrentValue(metric);
      
      if (this.isThresholdExceeded(metric, currentValue, threshold)) {
        await this.triggerAlert(metric, currentValue, threshold);
      }
    }
  }
  
  private isThresholdExceeded(
    metric: string,
    current: number,
    threshold: number
  ): boolean {
    // Check if threshold is exceeded based on metric type
    return current > threshold;
  }
}
```

## Performance Optimization

### Caching
```typescript
class AnalyticsCache {
  private cache = new Map<string, { data: any; timestamp: number }>();
  private ttl = 5 * 60 * 1000; // 5 minutes
  
  async getCachedData(key: string): Promise<any> {
    const cached = this.cache.get(key);
    
    if (cached && Date.now() - cached.timestamp < this.ttl) {
      return cached.data;
    }
    
    return null;
  }
  
  setCachedData(key: string, data: any) {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }
}
```

### Data Aggregation
```typescript
class DataAggregator {
  async aggregateMetrics(
    metrics: string[],
    period: string
  ): Promise<AggregatedMetrics> {
    const results = await Promise.all(
      metrics.map(metric => this.getMetric(metric, period))
    );
    
    return this.combineMetrics(results);
  }
  
  private combineMetrics(metrics: any[]): AggregatedMetrics {
    // Combine multiple metrics into aggregated view
    return {
      total: metrics.reduce((sum, m) => sum + m.total, 0),
      average: metrics.reduce((sum, m) => sum + m.average, 0) / metrics.length,
      trends: this.calculateTrends(metrics)
    };
  }
}
```

## Security and Privacy

### Data Access Control
```typescript
class DataAccessControl {
  private userPermissions = new Map<string, string[]>();
  
  setUserPermissions(userId: string, permissions: string[]) {
    this.userPermissions.set(userId, permissions);
  }
  
  canAccessData(userId: string, dataType: string): boolean {
    const permissions = this.userPermissions.get(userId);
    return permissions ? permissions.includes(dataType) : false;
  }
  
  async getFilteredData(
    userId: string,
    dataType: string,
    filters: any
  ): Promise<any> {
    if (!this.canAccessData(userId, dataType)) {
      throw new Error('Access denied');
    }
    
    // Apply user-specific filters
    const userFilters = this.getUserFilters(userId, dataType);
    const combinedFilters = this.mergeFilters(filters, userFilters);
    
    return this.fetchData(dataType, combinedFilters);
  }
}
```

## Support

For analytics integration support:
- [Analytics API Documentation](/docs/api/analytics)
- [Dashboard Examples](https://github.com/kleros/analytics-examples)
- [Developer Discord](https://discord.gg/kleros)
- [Analytics Team](mailto:analytics@kleros.io)
