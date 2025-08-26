---
sidebar_position: 1
description: Welcome to the contribution guide for all software pertaining to Kleros
---

# Contributing to Kleros

## How to Contribute

The purpose of these guidelines is to serve as a living contribution and collaboration guide for all our projects. Everyone, not just Kleros team members, is welcome to participate in development and improvement of the ecosystem.

We are always looking to enhance and improve our processes so we can decentralize justice faster! 🚀

## Contribution Areas

### **🛠️ Core Development**
- **Smart contracts** - Arbitrator and arbitrable implementations
- **Frontend applications** - Court, Curate, Escrow interfaces
- **SDKs and tools** - Developer libraries and utilities
- **Documentation** - Guides, tutorials, and API references

### **🎨 Design & UX**
- **User interface design** - App mockups and prototypes
- **User experience** - Flow optimization and usability testing
- **Brand assets** - Icons, illustrations, marketing materials
- **Accessibility** - Making Kleros inclusive for all users

### **📝 Documentation**
- **Technical writing** - Developer guides and tutorials
- **Translation** - Multi-language support
- **Video content** - Educational and onboarding materials
- **Community resources** - FAQs, troubleshooting guides

### **🧪 Testing & QA**
- **Bug reporting** - Issue identification and reproduction
- **Security auditing** - Smart contract and application security
- **Performance testing** - Scalability and optimization
- **User acceptance testing** - Real-world usage validation

### **🌍 Community**
- **Community management** - Forum moderation, Discord support
- **Education** - Workshops, meetups, conference talks
- **Partnerships** - Business development and integrations
- **Research** - Mechanism design, economics, governance

## Development Workflow

### **General Process**
Our development follows industry best practices for security and quality:

1. **Issue Creation** - Identify and document problems or features
2. **Planning** - Technical design and specification
3. **Implementation** - Code development with peer review
4. **Testing** - Automated and manual quality assurance
5. **Deployment** - Staged rollout with monitoring
6. **Maintenance** - Ongoing support and improvements

### **Smart Contract Workflow**
Given the high-stakes nature of blockchain applications, we follow enhanced security protocols:

1. **Specification** - Detailed technical requirements
2. **Implementation** - Secure coding practices
3. **Testing** - Comprehensive test coverage (>95%)
4. **Internal Audit** - Peer review and security analysis
5. **External Audit** - Professional security assessment
6. **Deployment** - Gradual rollout with monitoring
7. **Maintenance** - Ongoing security monitoring

## Code Standards

### **Solidity (Smart Contracts)**
- **Style Guide** - Follow [Solidity Style Guide](https://docs.soliditylang.org/en/latest/style-guide.html)
- **Security** - Implement [Smart Contract Security Checklist](./smart-contract-security)
- **Testing** - Minimum 95% test coverage
- **Documentation** - Complete NatSpec comments

### **JavaScript/TypeScript**
- **Formatter** - Prettier with standard configuration
- **Linting** - ESLint with security plugins
- **Testing** - Jest for unit tests, Cypress for e2e
- **Documentation** - JSDoc for public APIs

### **Python**
- **Style** - PEP 8 compliance via Black formatter
- **Linting** - Pylint and Flake8
- **Testing** - Pytest with coverage reporting
- **Documentation** - Sphinx-compatible docstrings

### **Git Workflow**
- **Commit Messages** - [Conventional Commits](https://www.conventionalcommits.org/)
- **Branch Naming** - `feature/description`, `fix/issue-number`
- **Pull Requests** - Required reviews, passing CI/CD
- **Release** - Semantic versioning (SemVer)

## Key Repositories

### **Core Protocol**
- **[kleros/kleros](https://github.com/kleros/kleros)** - Core arbitrator smart contracts
- **[kleros/kleros-interaction](https://github.com/kleros/kleros-interaction)** - Arbitrable contracts and integrations
- **[kleros/archon](https://github.com/kleros/archon)** - JavaScript SDK for arbitration standards

### **Applications**
- **[kleros/court](https://github.com/kleros/court)** - Court interface for jurors
- **[kleros/curate](https://github.com/kleros/curate)** - Token curated registries
- **[kleros/escrow](https://github.com/kleros/escrow)** - Secure payment escrow
- **[kleros/proof-of-humanity-web](https://github.com/kleros/proof-of-humanity-web)** - PoH registration interface

### **Tools & Infrastructure**
- **[kleros/subgraph](https://github.com/kleros/subgraph)** - Graph Protocol indexing
- **[kleros/openzeppelin-solidity](https://github.com/kleros/openzeppelin-solidity)** - Security-focused contract library
- **[kleros/kleros-docs](https://github.com/kleros/kleros-docs)** - Documentation and guides

## Getting Started

### **1. Choose Your Contribution**
- **New to blockchain?** → Start with [documentation improvements](https://github.com/kleros/kleros-docs)
- **Frontend developer?** → Contribute to [court interface](https://github.com/kleros/court)
- **Smart contract expert?** → Review [arbitrable contracts](https://github.com/kleros/kleros-interaction)
- **Designer?** → Join our [design discussions](https://discord.gg/MhXQGCyHd9)

### **2. Set Up Development Environment**
```bash
# Clone the repository
git clone https://github.com/kleros/[repository-name]
cd [repository-name]

# Install dependencies
npm install  # or yarn install

# Run tests
npm test

# Start development server
npm run start
```

### **3. Join the Community**
- **Discord** - [discord.gg/MhXQGCyHd9](https://discord.gg/MhXQGCyHd9)
- **Telegram** - [t.me/kleros](https://t.me/kleros)
- **GitHub** - Follow repositories for updates
- **Forum** - [forum.kleros.io](https://forum.kleros.io) for governance discussions

### **4. Submit Your First Contribution**
1. **Find an issue** - Look for "good first issue" labels
2. **Fork the repository** - Create your own copy
3. **Create a branch** - `git checkout -b feature/your-feature`
4. **Make changes** - Follow code style guidelines
5. **Test thoroughly** - Ensure all tests pass
6. **Submit pull request** - Include detailed description
7. **Respond to feedback** - Collaborate with reviewers

## Contribution Guidelines

### **Pull Request Process**
1. **Update documentation** - Keep README and docs current
2. **Add tests** - Cover new functionality
3. **Follow style guide** - Maintain code consistency
4. **Sign commits** - Use GPG signing for security
5. **Request reviews** - Get feedback from maintainers

### **Issue Reporting**
When reporting bugs or requesting features:

1. **Search existing issues** - Avoid duplicates
2. **Use templates** - Follow issue templates when provided
3. **Include context** - Environment, steps to reproduce
4. **Provide examples** - Code snippets, screenshots
5. **Label appropriately** - Help with categorization

### **Security Considerations**
- **Never commit sensitive data** - API keys, private keys, passwords
- **Report security issues privately** - Use security@kleros.io
- **Follow secure coding practices** - Input validation, access control
- **Update dependencies regularly** - Address known vulnerabilities

## Recognition & Rewards

### **Contributor Recognition**
- **GitHub contributions** - Visible on repository activity
- **Community shoutouts** - Recognition in Discord, Twitter
- **Conference opportunities** - Speaking at events, workshops
- **Kleros swag** - Branded merchandise for active contributors

### **Bounty Programs**
- **Bug bounties** - Rewards for security vulnerability reports
- **Feature bounties** - Compensation for implementing requested features
- **Documentation bounties** - Payments for high-quality documentation
- **Translation bounties** - Rewards for multi-language support

### **Career Opportunities**
Active contributors may be considered for:
- **Full-time positions** - Join the core Kleros team
- **Consulting roles** - Paid advisory positions
- **Partnership opportunities** - Integration support and collaboration

## License & Code of Conduct

### **License**
All Kleros projects are open source under [MIT License](https://opensource.org/licenses/MIT) unless specified otherwise. By contributing, you agree to license your contributions under the same terms.

### **Code of Conduct**
We are committed to providing a welcoming and inclusive environment:

- **Be respectful** - Value diverse perspectives and experiences
- **Be collaborative** - Work together toward common goals
- **Be inclusive** - Welcome newcomers and help them succeed
- **Be constructive** - Provide helpful feedback and suggestions

Violations of the code of conduct should be reported to conduct@kleros.io.

## Support & Resources

### **Getting Help**
- **Documentation** - [docs.kleros.io](https://docs.kleros.io)
- **Discord support** - #dev-support channel
- **Office hours** - Weekly developer calls
- **Email support** - dev@kleros.io for technical questions

### **Learning Resources**
- **Kleros whitepaper** - [kleros.io/assets/whitepaper.pdf](https://kleros.io/assets/whitepaper.pdf)
- **ERC-792 standard** - [Arbitration Standard](https://eips.ethereum.org/EIPS/eip-792)
- **ERC-1497 standard** - [Evidence Standard](https://eips.ethereum.org/EIPS/eip-1497)
- **Smart contract security** - [Security best practices](./smart-contract-security)

---

> **The golden rule is that there are no golden rules.**
> 
> *— George Bernard Shaw*

The guidelines in this document should be followed as much as possible, but shouldn't override common sense. When in doubt, ask the community or maintainers for guidance.

**Ready to contribute?** Start by exploring our [GitHub repositories](https://github.com/kleros) and joining our [Discord community](https://discord.gg/MhXQGCyHd9)!