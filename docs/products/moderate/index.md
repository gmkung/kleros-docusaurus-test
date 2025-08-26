---
sidebar_position: 6
description: Decentralized content moderation using Reality.eth and Kleros arbitration
---

# Moderate

Kleros Moderate is a family of content moderation bots that use Reality.eth with Kleros as an oracle for making moderation decisions. Get community-driven, transparent moderation for your social platforms.

## What is Kleros Moderate?

**Decentralized Moderation Solution** that combines:
- **Reality.eth** for crowdsourced decision-making
- **Kleros arbitration** for dispute resolution  
- **Smart contract automation** for transparent enforcement
- **Community governance** for moderation policies

## How It Works

### The Moderation Flow

1. **Content Flagged** - Community members or automated systems flag potentially problematic content
2. **Reality.eth Question** - A structured question is posed: "Does this content violate community rules?"
3. **Community Response** - Reality.eth users can answer and stake on their responses
4. **Dispute Resolution** - If challenged, the case goes to Kleros Court for final arbitration
5. **Automated Action** - Smart contracts automatically execute the moderation decision

### Key Benefits

**Transparent Process:**
- All moderation decisions are publicly auditable
- Community can see reasoning behind actions
- No hidden algorithms or biased enforcement

**Decentralized Governance:**
- Community sets the rules collectively
- No single point of control or censorship
- Democratic decision-making process

**Economic Incentives:**
- Accurate moderators earn rewards
- Bad actors face financial penalties
- Market-driven quality assurance

## Supported Platforms

### Telegram - Susie Bot

**🤖 [Susie | Kleros Moderator](https://t.me/SusieTheKlerosModeratorBot?start) 🤖**

Full-featured Telegram moderation bot with:
- **Smart moderation** - AI-assisted content filtering
- **Community governance** - Democratic rule-making
- **Flexible rules** - Customizable moderation policies
- **Federation support** - Multi-group coordination
- **Evidence system** - Detailed moderation logs
- **Appeal process** - Fair dispute resolution

### Discord - Coming Soon

**Discord integration** is under development with similar features:
- Channel-specific moderation rules
- Role-based governance systems
- Integration with existing Discord bots
- Customizable automated responses

### Future Platforms

**Planned expansions:**
- Reddit community moderation
- Twitter/X content filtering
- Custom platform integrations
- API for third-party developers

## Core Features

### Smart Rule Engine

**Flexible Policy Framework:**
```
Rule Examples:
- No spam or repeated messages
- Respectful discussion only
- No NSFW content in general channels  
- Links require admin approval
- New members have restricted permissions
```

**Dynamic Enforcement:**
- Context-aware moderation decisions
- Escalating consequences for repeat offenders
- Temporary vs. permanent sanctions
- Whitelist/blacklist management

### Evidence System

**Comprehensive Logging:**
- Screenshots of problematic content
- User interaction history
- Previous moderation actions
- Community feedback and votes

**IPFS Storage:**
- Decentralized evidence storage
- Tamper-proof moderation records
- Long-term accessibility
- Privacy-preserving redaction options

### Federation Support

**Multi-Group Coordination:**
- Shared moderation policies across groups
- Synchronized ban lists and user reputation
- Collaborative rule development
- Cross-platform communication

**Benefits for Large Communities:**
- Consistent moderation standards
- Reduced duplicate work
- Better coordination against bad actors
- Shared expertise and resources

## Getting Started

### Quick Setup (5 minutes)

1. **Add the Bot** - Invite Susie to your Telegram group
2. **Grant Admin Rights** - Enable bot to manage group settings
3. **Configure Rules** - Set up basic moderation policies
4. **Test Functionality** - Verify bot responds correctly
5. **Community Training** - Educate members about new system

### Advanced Configuration

**Custom Rule Creation:**
- Define specific community standards
- Set enforcement thresholds and penalties
- Configure appeal and dispute processes
- Integrate with existing group culture

**Federation Setup:**
- Connect with other related groups
- Establish shared governance mechanisms  
- Coordinate cross-group policies
- Share moderation resources

## Use Cases

### Community Management

**Large Discord/Telegram Groups:**
- Consistent 24/7 moderation coverage
- Democratic rule-making processes
- Transparent enforcement actions
- Reduced moderator burnout

**Gaming Communities:**
- Anti-cheat policy enforcement
- Tournament rule compliance
- Player behavior management
- Cross-server coordination

### Professional Communities

**Developer Groups:**
- Technical discussion quality control
- Job posting and recruitment rules
- Code sharing guidelines
- Professional conduct standards

**Educational Platforms:**
- Academic integrity enforcement
- Appropriate content filtering
- Student interaction monitoring
- Instructor support tools

### Content Creator Platforms

**Streamer Communities:**
- Chat moderation during live streams
- Community-driven content policies
- Subscriber engagement management
- Brand safety compliance

## Technical Architecture

### Smart Contract Integration

**Reality.eth Integration:**
```solidity
// Example moderation question structure
Question memory moderationQuestion = Question({
    question: "Does this message violate community Rule #3 (No spam)?",
    content_hash: ipfs_hash,
    arbitrator: kleros_address,
    timeout: 24 hours,
    bond: 0.1 ether
});
```

**Kleros Arbitration:**
- Specialized moderation subcourts
- Expert juror selection
- Evidence-based decision making
- Appeal mechanisms for complex cases

### Bot Infrastructure

**Scalable Architecture:**
- Multi-platform bot framework
- Real-time content analysis
- Distributed moderation processing
- High-availability deployment

**Privacy & Security:**
- End-to-end encrypted evidence storage
- Anonymous moderation reporting
- Secure multi-signature operations
- Regular security audits

## Economics & Incentives

### Moderation Rewards

**Community Moderators Earn:**
- Tokens for accurate moderation decisions
- Reputation points for consistent quality
- Priority access to governance votes
- Special recognition and badges

### Cost Structure

**Free Tier:**
- Basic moderation features
- Community-powered decisions
- Standard dispute resolution
- Up to 1,000 members

**Premium Tier:**
- Advanced AI content filtering
- Priority arbitration processing
- Custom rule development
- Unlimited group size
- Multi-platform integration

### Token Economics

**Moderation Token (MOD):**
- Governance token for policy decisions
- Staking for moderation accuracy
- Rewards for community contribution
- Access to premium features

## Community Guidelines

### Moderation Philosophy

**Core Principles:**
- **Transparency** - All decisions are publicly auditable
- **Fairness** - Equal treatment regardless of status
- **Community-Driven** - Democratic rule-making
- **Proportional Response** - Punishment fits the violation

### Best Practices

**For Community Leaders:**
- Clearly communicate rules and expectations
- Provide training for new moderators
- Regular review and update of policies
- Foster inclusive community culture

**For Community Members:**
- Report violations constructively
- Participate in governance discussions
- Respect moderation decisions
- Appeal through proper channels

## Integration Guide

### API Access

**Developer API:**
```javascript
// Example integration
const moderateAPI = new KlerosModerate({
  apiKey: 'your-api-key',
  platform: 'telegram',
  groupId: 'your-group-id'
});

// Submit content for moderation
await moderateAPI.submitForReview({
  contentType: 'message',
  content: userMessage,
  reporter: userId,
  rule: 'anti-spam'
});
```

### Custom Integrations

**Webhook Support:**
- Real-time moderation notifications
- Custom enforcement actions
- Integration with existing tools
- Automated reporting systems

## Support & Community

### Getting Help

**Official Channels:**
- **[@SusieSupport](https://t.me/SusieSupport)** - Telegram support group
- **[Kleros Discord](https://discord.gg/MhXQGCyHd9)** - #moderate channel
- **[Documentation](./susie/)** - Comprehensive guides
- **[GitHub](https://github.com/kleros)** - Technical issues and feature requests

### Contributing

**Ways to Contribute:**
- Report bugs and suggest improvements
- Contribute to rule template library
- Help with documentation and tutorials
- Participate in governance discussions
- Develop custom integrations

---

## Next Steps

Ready to implement decentralized moderation for your community?

- 🤖 **[Set up Susie for Telegram →](./susie/getting-started)** - Complete setup guide
- 📋 **[Learn about Rules →](./susie/rules)** - Moderation policy framework
- 🔗 **[Federation Setup →](./susie/federations)** - Multi-group coordination
- ❓ **[Get Support →](https://t.me/SusieSupport)** - Community help and guidance

*Transform your community moderation with transparent, democratic, and fair decision-making powered by blockchain technology.*