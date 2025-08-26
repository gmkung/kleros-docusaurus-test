---
id: dispute-process
title: Dispute Process
sidebar_label: Dispute Process
description: Complete guide to the Kleros dispute resolution process
---

# Dispute Process

This guide explains the complete dispute resolution process in the Kleros court system, from initial submission to final resolution.

## Overview

The Kleros dispute resolution process is designed to be fair, transparent, and efficient. It uses a combination of evidence submission, juror voting, and appeal mechanisms to reach consensus on disputes.

## Dispute Lifecycle

### 1. Dispute Creation
- **Submission**: Party submits dispute with evidence and fee
- **Court Assignment**: Dispute assigned to appropriate court
- **Notification**: All parties notified of dispute creation
- **Evidence Period**: Initial evidence submission window opens

### 2. Evidence Collection
- **Initial Evidence**: Parties submit supporting evidence
- **Counter-Evidence**: Opposing parties can submit rebuttals
- **Supplementary Evidence**: Additional evidence as needed
- **Evidence Review**: Jurors examine all submitted evidence

### 3. Juror Selection
- **Random Drawing**: Jurors randomly selected based on stake
- **Selection Probability**: Higher stake = higher selection chance
- **Jury Size**: Varies by court and dispute complexity
- **Notification**: Selected jurors notified of assignment

### 4. Voting Period
- **Vote Commitment**: Jurors submit encrypted votes
- **Vote Period**: Typically 3-7 days for voting
- **Evidence Review**: Jurors carefully examine all evidence
- **Decision Making**: Jurors vote based on evidence and policy

### 5. Vote Revelation
- **Automatic Revelation**: Votes revealed after voting period
- **Majority Decision**: Outcome determined by majority vote
- **Coherence Check**: Juror votes compared to majority
- **Reward Calculation**: Rewards and penalties calculated

### 6. Appeal Period
- **Appeal Window**: Parties can appeal the decision
- **Appeal Cost**: Higher cost for each appeal round
- **Larger Jury**: Appeal rounds use larger juries
- **Final Decision**: Eventually becomes too expensive to appeal

## Detailed Process Steps

### Dispute Submission
```solidity
// Example dispute creation
function createDispute(
    bytes calldata _evidence,
    uint256 _fee
) external payable returns (uint256 disputeID) {
    require(msg.value >= _fee, "Insufficient fee");
    
    disputeID = arbitrator.createDispute{value: _fee}(_evidence);
    
    emit DisputeCreated(disputeID, msg.sender, _evidence);
    
    return disputeID;
}
```

### Evidence Submission
```solidity
// Example evidence submission
function submitEvidence(
    uint256 _disputeID,
    bytes calldata _evidence
) external {
    require(disputes[_disputeID].status == DisputeStatus.Evidence);
    
    evidence[_disputeID].push(_evidence);
    
    emit EvidenceSubmitted(_disputeID, msg.sender, _evidence);
}
```

### Juror Voting
```solidity
// Example juror voting
function vote(
    uint256 _disputeID,
    uint256 _ruling
) external {
    require(isJuror(_disputeID, msg.sender), "Not a juror");
    require(!hasVoted(_disputeID, msg.sender), "Already voted");
    
    votes[_disputeID][msg.sender] = _ruling;
    
    emit VoteSubmitted(_disputeID, msg.sender, _ruling);
}
```

## Court Policies

### General Court Policy
- **Evidence Standards**: Clear, verifiable evidence required
- **Timeline Requirements**: Strict adherence to deadlines
- **Communication Rules**: Professional conduct expected
- **Decision Criteria**: Evidence-based decision making

### Specialized Court Policies
- **Technical Courts**: Technical expertise required
- **Language Courts**: Language proficiency standards
- **Service Courts**: Industry-specific guidelines
- **Curation Courts**: Content quality standards

## Evidence Guidelines

### Acceptable Evidence Types
- **Documents**: PDFs, images, text files
- **Screenshots**: Web pages, applications, communications
- **Timestamps**: Blockchain transactions, logs
- **Witness Statements**: Third-party verification
- **Expert Opinions**: Professional assessments

### Evidence Quality Standards
- **Authenticity**: Verifiable and genuine
- **Relevance**: Directly related to dispute
- **Clarity**: Clear and understandable
- **Completeness**: Comprehensive coverage of issue
- **Timeliness**: Current and relevant

### Evidence Submission Best Practices
1. **Organize**: Present evidence in logical order
2. **Label**: Clearly identify each piece of evidence
3. **Explain**: Provide context for each submission
4. **Verify**: Ensure evidence is authentic and verifiable
5. **Summarize**: Include summary of key points

## Voting Process

### Vote Commitment Phase
- **Encrypted Voting**: Votes hidden during voting period
- **No Coordination**: Jurors cannot see others' votes
- **Evidence Review**: Thorough examination of all evidence
- **Policy Application**: Apply court policies consistently

### Vote Revelation Phase
- **Automatic Process**: Votes revealed automatically
- **Majority Determination**: Outcome based on majority
- **Coherence Calculation**: Individual vote accuracy measured
- **Reward Distribution**: Rewards and penalties calculated

### Voting Guidelines
- **Evidence-Based**: Base decisions on submitted evidence
- **Policy-Focused**: Follow court policies and guidelines
- **Objective Analysis**: Avoid personal bias and emotions
- **Thorough Review**: Examine all evidence carefully

## Appeal Process

### Appeal Mechanics
- **Appeal Window**: Limited time to file appeal
- **Cost Escalation**: Each round costs more than previous
- **Jury Expansion**: Larger juries for appeal rounds
- **Finality**: Eventually becomes prohibitively expensive

### Appeal Considerations
- **Cost-Benefit**: Weigh appeal costs against potential gains
- **Evidence Strength**: Assess strength of appeal case
- **Policy Support**: Ensure appeal aligns with court policy
- **Timing**: File appeal within required window

### Appeal Timeline
1. **Initial Ruling**: First court decision
2. **Appeal Period**: Window to file appeal
3. **Appeal Round**: Larger jury reviews case
4. **Final Decision**: Appeal outcome or further rounds
5. **Resolution**: Case finally resolved

## Rewards and Penalties

### Juror Rewards
- **Correct Votes**: Earn rewards for accurate decisions
- **Case Fees**: Share of dispute fees
- **Coherence Bonus**: Additional rewards for consistent accuracy
- **Appeal Rewards**: Extra fees for appeal participation

### Juror Penalties
- **Incorrect Votes**: Risk losing part of stake
- **Alpha Parameter**: Determines penalty amount
- **Stake Redistribution**: Penalties distributed to correct voters
- **No Total Loss**: Never lose entire stake

### Reward Calculation
```solidity
// Example reward calculation
function calculateReward(
    uint256 _disputeID,
    address _juror
) external view returns (uint256 reward) {
    if (isCoherent(_disputeID, _juror)) {
        reward = baseReward + coherenceBonus + appealReward;
    } else {
        reward = 0; // No reward for incoherent votes
    }
    
    return reward;
}
```

## Timeline and Deadlines

### Standard Timeline
- **Evidence Period**: 3-7 days
- **Voting Period**: 3-7 days
- **Appeal Window**: 3-5 days
- **Total Duration**: 9-21 days (without appeals)

### Appeal Timeline
- **First Appeal**: 3-5 days
- **Second Appeal**: 3-5 days
- **Third Appeal**: 3-5 days
- **Final Resolution**: Varies by appeal rounds

### Deadline Management
- **Set Reminders**: Use calendar and notification tools
- **Monitor Progress**: Check dispute status regularly
- **Plan Ahead**: Allow time for evidence preparation
- **Stay Informed**: Monitor court updates and policy changes

## Best Practices

### For Dispute Submitters
1. **Clear Documentation**: Provide comprehensive evidence
2. **Policy Compliance**: Follow court policies exactly
3. **Timely Submission**: Meet all deadlines
4. **Professional Conduct**: Maintain respectful communication

### For Jurors
1. **Evidence Review**: Examine all evidence thoroughly
2. **Policy Application**: Follow court policies consistently
3. **Objective Analysis**: Avoid personal bias
4. **Timely Voting**: Submit votes within deadlines

### For All Participants
1. **Communication**: Maintain open and professional dialogue
2. **Documentation**: Keep records of all interactions
3. **Policy Understanding**: Know and follow court rules
4. **Community Engagement**: Participate in policy discussions

## Troubleshooting

### Common Issues
- **Evidence Rejection**: Ensure evidence meets quality standards
- **Voting Errors**: Verify you're voting in correct period
- **Appeal Failures**: Check appeal requirements and deadlines
- **Technical Problems**: Contact support for technical issues

### Getting Help
- **Documentation**: Review court policies and guidelines
- **Community**: Join Discord and forum discussions
- **Support**: Contact Kleros support team
- **Resources**: Use available tutorials and guides

## Conclusion

The Kleros dispute resolution process provides a fair, transparent, and efficient way to resolve disputes. By understanding the process and following best practices, participants can achieve successful outcomes and contribute to the ecosystem's growth.

For more information, visit the [Kleros Court](https://court.kleros.io) and join the [community discussions](https://discord.gg/kleros).
