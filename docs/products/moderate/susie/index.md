---
sidebar_position: 1
description: Susie - AI-powered Telegram moderation bot with Kleros arbitration
---

# Susie Bot

🤖 **[Susie | Kleros Moderator](https://t.me/SusieTheKlerosModeratorBot?start)** 🤖

Susie is an intelligent Telegram moderation bot that combines AI content filtering with decentralized dispute resolution through Kleros arbitration. Perfect for communities that want transparent, fair, and automated moderation.

## What Makes Susie Special?

### **Intelligent Moderation**
- **AI-powered content analysis** for spam, harassment, and policy violations
- **Context-aware decisions** that understand conversation flow
- **Multi-language support** for global communities
- **Customizable sensitivity** levels for different content types

### **Decentralized Dispute Resolution**
- **Reality.eth integration** for community-driven decisions
- **Kleros Court arbitration** for complex moderation disputes
- **Transparent appeal process** with public evidence
- **Economic incentives** for fair and accurate moderation

### **Community Governance**
- **Democratic rule-making** through community votes
- **Flexible policy framework** adaptable to any community
- **Federation support** for multi-group coordination
- **Member participation rewards** for quality contributions

## Key Features

### **Smart Content Filtering**
- **Spam detection** - Prevents repetitive and promotional messages
- **Language filtering** - Customizable profanity and hate speech blocking  
- **Link management** - Automatic link verification and whitelist/blacklist
- **Media control** - Image, video, and document moderation
- **New member protection** - Anti-raid and verification systems

### **Flexible Rule Engine**
- **Custom rule creation** - Write policies specific to your community
- **Graduated penalties** - Warning → Mute → Kick → Ban progression
- **Time-based restrictions** - Temporary mutes and bans
- **Exception management** - Whitelist trusted members and content

### **Evidence & Transparency**
- **Comprehensive logging** - All moderation actions recorded on IPFS
- **Public audit trail** - Community can review all decisions
- **Appeal process** - Members can challenge unfair actions
- **Evidence submission** - Screenshots and context preservation

### **Multi-Group Coordination**
- **Federation networks** - Coordinate policies across related groups
- **Shared ban lists** - Prevent troublemakers from group-hopping
- **Cross-group reputation** - Build trust through consistent behavior
- **Collaborative governance** - Joint rule development and enforcement

## Getting Started

### **Step 1: Add Susie to Your Group**

**Quick Add (Recommended):**
1. Click [this link](https://t.me/SusieTheKlerosModeratorBot?start=botstart) 
2. Select your Telegram group from the list
3. Susie will be added automatically with proper permissions

**Manual Add:**
1. Open Telegram and search for `@SusieTheKlerosModeratorBot`
2. View Susie's profile → 3-dot menu → "Add to group"
3. Choose your group and add Susie

:::warning Verify Bot Identity
Only add the official bot with username `@SusieTheKlerosModeratorBot`. Other similar bots are imposters and potentially malicious.
:::

### **Step 2: Grant Admin Rights**

Susie needs admin permissions to function properly:

1. **Go to group settings** - Tap group name → Edit
2. **Select "Administrators"** → "Add Administrator"  
3. **Choose Susie** from the member list
4. **Grant all admin rights** as shown below:
   - ✅ Delete messages
   - ✅ Ban users  
   - ✅ Invite users
   - ✅ Pin messages
   - ✅ Add new admins
5. **Confirm** by tapping the checkmark

### **Step 3: Start Moderation**

**Activate Susie:**
```
/start
```

This command initializes Susie's moderation system and applies default community rules to your group.

**Congratulations!** 🎉 Susie is now actively moderating your community.

## Essential Commands

### **For Administrators**

**Basic Setup:**
- `/start` - Initialize Susie's moderation system
- `/setrules <message>` - Set custom rules (reply to a message)
- `/setrules <url>` - Set rules from external URL
- `/config` - Access advanced configuration options

**Moderation Controls:**
- `/warn @user <reason>` - Issue warning to user
- `/mute @user <duration>` - Temporarily mute user
- `/ban @user <reason>` - Permanently ban user  
- `/unban @user` - Lift ban from user
- `/purge <count>` - Delete recent messages

**Rule Management:**
- `/addrule <rule text>` - Add new community rule
- `/removerule <number>` - Remove specific rule
- `/editrule <number> <new text>` - Modify existing rule

### **For All Members**

**Information Commands:**
- `/getrules` - View current community rules
- `/help` - Display available commands
- `/report @user <reason>` - Report problematic behavior
- `/appeal <case_id>` - Appeal moderation decision

**Community Participation:**
- `/vote <case_id> <yes/no>` - Vote on community disputes
- `/reputation @user` - Check user's community standing

## Configuration Options

### **Basic Settings**

**Sensitivity Levels:**
- **Strict** - Low tolerance for rule violations
- **Moderate** - Balanced approach (recommended)
- **Relaxed** - Higher tolerance, fewer automated actions

**Action Preferences:**
- **Warn first** - Always issue warnings before penalties
- **Auto-escalate** - Automatic progression: warn → mute → ban
- **Manual review** - Admin approval required for major actions

### **Advanced Features**

**New Member Management:**
```
/config newcomers
- Require verification for new members
- Restrict permissions for first 24 hours  
- Auto-delete first message if spam detected
- Welcome message customization
```

**Content Filtering:**
```
/config filtering
- Custom keyword blacklist/whitelist
- Link domain restrictions
- Media content policies
- Language detection settings
```

**Federation Setup:**
```
/config federation
- Connect to other groups in your network
- Share ban lists and user reputation
- Coordinate joint moderation policies
- Cross-group communication channels
```

## Rule Templates

### **Standard Community Rules**

Susie starts with [default community rules](https://cdn.kleros.link/ipfs/Qme3Qbj9rKUNHUe9vj9rqCLnTVUCWKy2YfveQF8HiuWQSu/Kleros%20Moderate%20Community%20Rules.pdf) that work for most groups:

1. **Respect all members** - No harassment, hate speech, or personal attacks
2. **No spam or self-promotion** - Keep discussions relevant and valuable
3. **Use appropriate language** - Avoid excessive profanity or offensive content
4. **No illegal content** - Comply with laws and platform terms of service
5. **Listen to moderators** - Respect admin decisions and appeals process

### **Custom Rule Examples**

**Gaming Community:**
```
1. No cheating discussions or tool sharing
2. LFG posts only in designated channels
3. No real money trading of game items
4. Spoilers must be tagged appropriately
5. Streaming promotion requires approval
```

**Professional Network:**
```
1. Keep discussions professional and constructive
2. Job postings must include salary ranges
3. No spam or excessive self-promotion
4. Respect intellectual property and NDAs
5. Help newcomers and share knowledge generously
```

**Study Group:**
```
1. Academic integrity - no assignment sharing
2. Questions encouraged, help others learn
3. Stay on topic for course materials
4. No harassment of any community member
5. Cite sources when sharing external content
```

### **Rule Writing Best Practices**

**Clear and Specific:**
```
✅ Good: "No promotional links without admin approval"
❌ Bad: "Don't spam"
```

**Actionable Guidelines:**
```
✅ Good: "Use @username when asking specific questions"  
❌ Bad: "Be helpful"
```

**Include Context:**
```
✅ Good: "Off-topic discussions welcome in #general after 6 PM EST"
❌ Bad: "Stay on topic"
```

## Dispute Resolution Process

### **When Disputes Arise**

**Automatic Escalation:**
1. **AI Decision** - Susie makes initial moderation decision
2. **Member Appeal** - Affected user can challenge the decision
3. **Community Vote** - Group members vote on the appeal via Reality.eth
4. **Kleros Arbitration** - If disputed, case goes to expert jurors

### **Evidence Collection**

**What Gets Recorded:**
- Screenshots of the problematic content
- User interaction history and previous warnings
- Community votes and feedback
- Admin decisions and reasoning

**IPFS Storage:**
- All evidence stored on decentralized network
- Tamper-proof record of moderation actions
- Long-term accessibility for appeals
- Privacy protection for sensitive content

### **Appeal Process**

**For Community Members:**
1. **Submit Appeal** - Use `/appeal <case_id>` command
2. **Provide Evidence** - Upload supporting materials
3. **Community Review** - Members vote on the appeal
4. **Resolution** - Decision executed automatically

**For Administrators:**
1. **Review Cases** - Monitor ongoing disputes
2. **Provide Context** - Add admin perspective to cases
3. **Policy Updates** - Adjust rules based on outcomes

## Economics & Rewards

### **Community Incentives**

**Quality Moderators Earn:**
- **PNK tokens** for accurate moderation votes
- **Reputation points** for consistent fair decisions  
- **Special badges** for community contributions
- **Priority access** to new features

### **Cost Structure**

**Free Tier Includes:**
- Basic AI moderation for up to 1,000 members
- Standard dispute resolution through Reality.eth
- Community governance features
- Basic analytics and reporting

**Premium Features:**
- Advanced AI content analysis
- Priority Kleros arbitration processing  
- Custom rule development assistance
- Detailed analytics and insights
- Multi-group federation management

## Troubleshooting

### **Common Issues**

**Susie Not Responding:**
- Check bot has admin permissions
- Verify bot hasn't been blocked
- Try `/start` command to reactivate
- Contact support if issues persist

**False Positives:**
- Adjust AI sensitivity in settings
- Add trusted users to whitelist
- Review and update rule definitions
- Train community on appeal process

**Integration Problems:**
- Ensure proper bot username verification
- Check Telegram API rate limits
- Review group privacy settings
- Update bot to latest version

### **Getting Help**

**Support Channels:**
- **[@SusieSupport](https://t.me/SusieSupport)** - Official Telegram support group
- **[Kleros Discord](https://discord.gg/MhXQGCyHd9)** - #moderate channel for technical help
- **[Documentation](https://docs.kleros.io)** - Comprehensive guides and tutorials

**Community Resources:**
- **Best practices** shared by experienced admins
- **Rule templates** for different community types  
- **Case studies** of successful moderation setups
- **Regular updates** on new features and improvements

---

## Next Steps

Ready to transform your Telegram community moderation?

- 🚀 **[Add Susie Now →](https://t.me/SusieTheKlerosModeratorBot?start=botstart)** - Quick setup link
- 📖 **[Setup Guide →](./getting-started)** - Detailed configuration walkthrough
- 📋 **[Rule Templates →](./rules)** - Pre-made rules for different communities
- 🔗 **[Federation Setup →](./federations)** - Multi-group coordination
- 📊 **[Evidence System →](./evidence)** - Understanding the dispute process

*Join thousands of communities using Susie for transparent, fair, and effective moderation powered by blockchain technology.*