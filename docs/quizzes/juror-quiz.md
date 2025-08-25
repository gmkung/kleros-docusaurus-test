---
description: Test your knowledge of Kleros Court and juror responsibilities
---

import InteractiveQuiz from '@site/src/components/Quiz/InteractiveQuiz';

# Juror Knowledge Quiz

<InteractiveQuiz
  title="Juror Knowledge Quiz"
  description="Test your understanding of the Kleros Court system before becoming a juror. This quiz covers essential concepts every juror should know."
  passingScore={8}
  questions={[
    {
      id: 1,
      question: "What is required to become a Kleros juror?",
      options: [
        { id: "a", text: "Personal identification documents and background check" },
        { id: "b", text: "PNK tokens, MetaMask wallet, and ETH for gas fees" },
        { id: "c", text: "Legal degree or arbitration certification" },
        { id: "d", text: "Approval from existing jurors" }
      ],
      correctAnswer: "b",
      explanation: "Kleros is pseudonymous and requires no personal information or credentials. You only need PNK to stake, a MetaMask wallet to interact with the system, and ETH to pay transaction fees."
    },
    {
      id: 2,
      question: "When should a juror vote 'Refuse to Arbitrate'?",
      options: [
        { id: "a", text: "When they don't understand the case" },
        { id: "b", text: "When both parties seem equally right" },
        { id: "c", text: "When court guidelines indicate it's required (illegal content, etc.)" },
        { id: "d", text: "When they want to avoid responsibility" }
      ],
      correctAnswer: "c",
      explanation: "'Refuse to Arbitrate' should only be used when court policies explicitly require it - such as cases involving illegal activities, immoral content, or when specific court guidelines mandate refusal."
    },
    {
      id: 3,
      question: "What happens to jurors who vote incoherently (against the majority)?",
      options: [
        { id: "a", text: "They receive a warning for their first offense" },
        { id: "b", text: "They lose part of their staked PNK to coherent jurors" },
        { id: "c", text: "They are permanently banned from the court" },
        { id: "d", text: "Nothing happens - all votes are equally valid" }
      ],
      correctAnswer: "b",
      explanation: "The economic incentive system redistributes tokens from incoherent jurors to coherent ones. This encourages honest, careful voting and discourages random decisions."
    },
    {
      id: 4,
      question: "When you stake in a specialized court (e.g., Curation), what else happens automatically?",
      options: [
        { id: "a", text: "You're only staked in that specific court" },
        { id: "b", text: "You're automatically staked in all parent courts up to General Court" },
        { id: "c", text: "You must stake separately in each court you want to join" },
        { id: "d", text: "You can only vote in that one court type" }
      ],
      correctAnswer: "b",
      explanation: "This hierarchical staking is necessary for the appeal system. When cases are appealed, they move up the court tree, requiring jurors from parent courts."
    },
    {
      id: 5,
      question: "How are jurors selected for disputes?",
      options: [
        { id: "a", text: "First-come, first-served basis" },
        { id: "b", text: "Random selection weighted by PNK stake" },
        { id: "c", text: "Court administrators choose the most qualified" },
        { id: "d", text: "Jurors volunteer for specific cases" }
      ],
      correctAnswer: "b",
      explanation: "Selection uses cryptographically secure randomness, but the probability of being chosen is proportional to your PNK stake in the relevant court."
    },
    {
      id: 6,
      question: "What should jurors do during the evidence period?",
      options: [
        { id: "a", text: "Vote immediately based on initial impressions" },
        { id: "b", text: "Wait until the last day to review everything" },
        { id: "c", text: "Review all evidence and court policies carefully" },
        { id: "d", text: "Only read evidence from the side they initially support" }
      ],
      correctAnswer: "c",
      explanation: "Jurors should thoroughly review all submitted evidence, court guidelines, and applicable policies before making their decision. This leads to better outcomes and coherent voting."
    },
    {
      id: 7,
      question: "How do appeals work in Kleros?",
      options: [
        { id: "a", text: "The same jurors vote again with new evidence" },
        { id: "b", text: "A larger jury is selected from parent courts" },
        { id: "c", text: "Court administrators review the decision" },
        { id: "d", text: "Appeals are not possible in Kleros" }
      ],
      correctAnswer: "b",
      explanation: "Appeals involve a significantly larger jury (typically 3x more jurors) selected from parent courts, making manipulation increasingly difficult and decisions more reliable."
    },
    {
      id: 8,
      question: "What is the primary purpose of PNK tokens in the Kleros system?",
      options: [
        { id: "a", text: "Payment for court services" },
        { id: "b", text: "Sybil attack prevention and jury selection" },
        { id: "c", text: "Transaction fees for blockchain operations" },
        { id: "d", text: "Purchasing evidence and legal documents" }
      ],
      correctAnswer: "b",
      explanation: "PNK's main purpose is preventing Sybil attacks by requiring economic stake for participation, while also enabling proportional random selection for juries."
    },
    {
      id: 9,
      question: "Can someone with 51% of PNK tokens easily control all court decisions?",
      options: [
        { id: "a", text: "Yes, they would automatically win every case" },
        { id: "b", text: "No, due to randomness they might not be selected" },
        { id: "c", text: "No, market mechanisms and community defenses prevent this" },
        { id: "d", text: "Yes, but only in smaller courts" }
      ],
      correctAnswer: "c",
      explanation: "Acquiring 51% of PNK becomes increasingly expensive as tokens become scarce, attacks damage PNK value (hurting the attacker), and the community can fork as a last resort."
    },
    {
      id: 10,
      question: "What factors should jurors consider when choosing which courts to stake in?",
      options: [
        { id: "a", text: "Only the highest reward amounts" },
        { id: "b", text: "Courts with the most active disputes" },
        { id: "c", text: "Their expertise, court activity, and minimum stake requirements" },
        { id: "d", text: "Courts where their friends are staking" }
      ],
      correctAnswer: "c",
      explanation: "Successful jurors choose courts where they have relevant expertise (leading to coherent voting), sufficient activity for selection opportunities, and manageable stake requirements."
    }
  ]}
/>

## Next Steps After the Quiz

### 🎯 Scored Well? Start Your Juror Journey:
1. **[Buy PNK](/pnk-token#where-to-buy-pnk)** - Get your tokens ready
2. **[Choose Courts](https://court.kleros.io)** - Select courts matching your expertise  
3. **[Stake PNK](/products/court/juror-tutorial#step-4-stake-your-pnk)** - Begin participating
4. **[Join Community](https://discord.gg/MhXQGCyHd9)** - Connect with other jurors

### 📚 Need More Study? Review These Resources:
- **[Juror Tutorial](/products/court/juror-tutorial)** - Complete step-by-step guide
- **[Kleros FAQ](/faq)** - Common questions answered
- **[Court Overview](/products/court/)** - Understanding the system
- **[PNK Token Guide](/pnk-token)** - Economic incentives explained

### 💬 Questions or Concerns?
- **[Discord Support](https://discord.gg/MhXQGCyHd9)** - Get help from the community
- **[Telegram Chat](https://t.me/kleros)** - Join ongoing discussions  
- **[Forum](https://forum.kleros.io)** - Detailed technical discussions
- **[Documentation](/faq)** - Comprehensive guides and FAQs

---

*Remember: Being a Kleros juror is a responsibility that affects real disputes and people's lives. Take time to understand the system fully before participating.*