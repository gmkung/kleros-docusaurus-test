---
sidebar_position: 2
description: Complete setup guide for Susie Telegram moderation bot
---

# Getting Started with Susie

Get your Telegram community up and running with AI-powered moderation in just a few minutes. This guide walks you through the complete setup process from invitation to advanced configuration.

## Prerequisites

Before starting, ensure you have:
- **Admin rights** in your Telegram group
- **Active group** with at least a few members
- **Clear community guidelines** you want to enforce
- **Basic understanding** of your community's moderation needs

## Step 1: Add Susie to Your Group

### **Quick Setup (Recommended)**

The fastest way to add Susie with proper permissions:

1. **Click the invitation link**: [🤖 Add Susie to Your Group](https://t.me/SusieTheKlerosModeratorBot?start=botstart)
2. **Select your group** from the Telegram list
3. **Confirm addition** - Susie will be added automatically with admin rights
4. **Skip to Step 3** - Bot activation

### **Manual Setup**

If you prefer manual control over the process:

1. **Open Telegram** app or web version
2. **Search for the bot**: `@SusieTheKlerosModeratorBot`
3. **Verify identity**: Check for the official username (avoid imposters!)
4. **Access bot profile**: Click on the search result
5. **Add to group**: Three-dot menu → "Add to group" → Select your group

:::danger Security Warning
**Only add the official bot**: `@SusieTheKlerosModeratorBot`

Other bots with similar names are imposters and may be malicious. Always verify the exact username before adding.
:::

## Step 2: Grant Admin Permissions

Susie requires administrator privileges to function properly. Without admin rights, she cannot moderate your community effectively.

### **Promote Susie to Admin**

1. **Open group settings**:
   - Tap the group name at the top
   - Select the pencil icon (Edit)

2. **Access administrator settings**:
   - Tap "Administrators"
   - Select "Add Administrator"

3. **Choose Susie**:
   - Find `@SusieTheKlerosModeratorBot` in the member list
   - Tap to select

4. **Grant permissions**:
   ```
   ✅ Delete messages - Remove rule-violating content
   ✅ Ban users - Remove problematic members
   ✅ Invite users - Manage group membership
   ✅ Pin messages - Highlight important announcements
   ✅ Add new admins - Assist with group management
   ✅ Edit group info - Update group details as needed
   ```

5. **Confirm assignment**:
   - Review selected permissions
   - Tap the checkmark icon to confirm

### **Permission Explanations**

**Essential Permissions:**
- **Delete Messages** - Core moderation functionality
- **Ban Users** - Enforce serious rule violations
- **Invite Users** - Manage whitelist and member approval

**Recommended Permissions:**
- **Pin Messages** - Announce rule updates and important notices
- **Edit Group Info** - Update group description with current rules

**Optional Permissions:**
- **Add New Admins** - Help with community growth (use with caution)

## Step 3: Activate Susie

### **Initialize the Bot**

Once Susie has admin permissions:

1. **Send activation command**:
   ```
   /start
   ```

2. **Confirm activation**:
   - Susie will respond with a welcome message
   - Default community rules will be applied
   - Basic moderation will begin immediately

3. **Test functionality**:
   - Try `/help` to see available commands
   - Use `/getrules` to view current rules
   - Check that Susie responds to commands

### **Initial Setup Confirmation**

**Success Indicators:**
- ✅ Susie responds to `/start` command
- ✅ Bot shows as admin in group member list
- ✅ `/getrules` displays default community rules
- ✅ Bot reacts to basic commands like `/help`

**Troubleshooting:**
- If Susie doesn't respond, check admin permissions
- Ensure bot wasn't accidentally blocked or restricted
- Try removing and re-adding if issues persist

## Step 4: Basic Configuration

### **Welcome Messages**

Configure how Susie greets new members:

**Enable welcome messages**:
```
/welcome
```

**Add captcha verification** (recommended for large groups):
```
/captcha
```

**Benefits of Captcha:**
- Prevents spam bot infiltration
- Ensures new members read community rules
- Reduces automated harassment attempts
- Maintains higher quality membership

### **Custom Rule Setup**

**View current rules**:
```
/getrules
```

**Set custom rules** (reply to a message containing your rules):
```
/setrules
```

**Set rules from URL**:
```
/setrules https://your-website.com/community-rules
```

### **Moderation Sensitivity**

Adjust how strictly Susie enforces rules:

**Access configuration**:
```
/config
```

**Sensitivity Options:**
- **Strict** - Low tolerance, quick action
- **Moderate** - Balanced approach (recommended)  
- **Relaxed** - Higher tolerance, fewer automated actions

## Step 5: Advanced Features

### **Evidence Collection**

Enable transparent moderation with evidence preservation:

**Activate evidence system**:
- Evidence collection is automatic
- All moderation actions are logged
- Data stored securely on IPFS
- Available for appeals and review

**Manual evidence collection**:
```
/evidence
```
*(Reply to a problematic message)*

### **Federation Setup**

Connect with other groups for coordinated moderation:

1. **Identify partner groups** using Susie
2. **Contact their administrators** about federation
3. **Exchange federation codes** through secure channels
4. **Configure shared policies** and ban lists

**Benefits of Federation:**
- Consistent moderation across related groups
- Shared reputation and user history
- Coordinated response to bad actors
- Collaborative rule development

### **Notification Management**

Configure how Susie communicates moderation actions:

**Language settings**:
```
/language en
```
*(Available: en, es, fr, de, pt, ru, zh)*

**Notification preferences**:
- Public warnings vs. private messages  
- Detailed explanations vs. simple notices
- Community involvement in decisions

## Community Training

### **Educate Your Members**

**Announce the new system**:
```markdown
📢 **Community Update**

We've added Susie, an AI moderation bot, to help maintain our community standards!

🤖 **What Susie Does:**
- Automatically detects spam and rule violations
- Issues warnings and temporary restrictions
- Maintains transparent moderation logs

📋 **Your Rights:**
- Appeal any moderation decision with /appeal
- View community rules anytime with /getrules
- Report issues with /report

❓ **Questions?** Ask admins or check /help
```

**Member Command Training**:
- `/getrules` - View community guidelines
- `/help` - List available commands  
- `/report @user reason` - Report violations
- `/appeal case_id` - Challenge moderation decisions

### **Admin Team Coordination**

**Train human moderators on**:
- How Susie's decisions supplement human judgment
- When to override automated actions
- Proper use of admin commands
- Evidence collection best practices

**Establish protocols for**:
- Complex cases requiring human review
- Appeals process and response times  
- Rule updates and community consultation
- Coordination between human and AI moderation

## Monitoring and Optimization

### **Performance Metrics**

**Track key indicators**:
- False positive rate (incorrect automated actions)
- Community satisfaction with moderation
- Reduction in manual moderation workload
- Appeal frequency and outcomes

**Regular review schedule**:
- Weekly admin team check-ins
- Monthly community feedback sessions
- Quarterly rule and configuration review

### **Continuous Improvement**

**Common adjustments**:
- **Sensitivity tuning** based on community feedback
- **Rule refinement** to address edge cases
- **Whitelist updates** for trusted members
- **Response templates** for common violations

**Community involvement**:
- Regular polls on moderation effectiveness
- Open feedback sessions for rule suggestions
- Transparent reporting on moderation statistics
- Democratic voting on major policy changes

## Troubleshooting Common Issues

### **Bot Not Responding**

**Diagnostic steps**:
1. Check if bot has admin permissions
2. Verify bot is not blocked or restricted
3. Test with simple command like `/help`
4. Contact [@SusieSupport](https://t.me/SusieSupport) if issues persist

### **Over/Under Moderation**

**Adjustment strategies**:
- Modify sensitivity settings through `/config`
- Update rule definitions for clarity
- Train community on expected behavior
- Add trusted users to whitelist

### **Appeal Process Issues**

**Common solutions**:
- Ensure evidence system is working properly
- Check that Reality.eth integration is active
- Verify community members understand appeal process
- Review Kleros Court queue for delays

## Next Steps

Once Susie is successfully configured:

- 📖 **[Learn Rule Management →](./rules)** - Advanced rule creation and editing
- 🤝 **[Set Up Federations →](./federations)** - Multi-group coordination
- 📊 **[Evidence System →](./evidence)** - Understanding dispute resolution
- 🔔 **[Notifications →](./notifications)** - Customize communication settings
- 🌍 **[Language Support →](./basics/language)** - Multi-language community setup

**Join the Community:**
- [@SusieSupport](https://t.me/SusieSupport) - Get help and share experiences
- [Kleros Discord](https://discord.gg/MhXQGCyHd9) - Connect with developers and other communities
- [Community Forum](https://forum.kleros.io) - Participate in governance discussions

*Congratulations! Your community now has transparent, fair, and effective AI-powered moderation. Welcome to the future of decentralized community management.*