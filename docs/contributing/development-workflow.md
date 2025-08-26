---
sidebar_position: 4
description: Task tracking, project lifecycle, and development processes
---

# Development Workflow

Our development workflow emphasizes transparency, quality, and collaboration while keeping tooling simple and accessible.

## Project Management

### GitHub-Centric Approach

We minimize external tools by leveraging GitHub's built-in project management features:

| **Issues** | **Projects** | **Milestones** |
|------------|--------------|----------------|
| Track specific tasks and bugs | Long-term goals and epics | Time-controlled sprints |
| Detailed technical requirements | Cross-repository coordination | Release planning |
| Discussion and collaboration | Progress visualization | Deadline management |

### Repository Organization

**Core Protocol:**
- [`kleros/kleros`](https://github.com/kleros/kleros) - Core arbitrator contracts
- [`kleros/kleros-interaction`](https://github.com/kleros/kleros-interaction) - Arbitrable contracts
- [`kleros/archon`](https://github.com/kleros/archon) - JavaScript SDK

**Applications:**
- [`kleros/court`](https://github.com/kleros/court) - Juror interface
- [`kleros/curate`](https://github.com/kleros/curate) - Token curated registries
- [`kleros/escrow`](https://github.com/kleros/escrow) - Payment escrow
- [`kleros/proof-of-humanity-web`](https://github.com/kleros/proof-of-humanity-web) - Identity verification

## Issue Management

### Label System

#### **Priority Labels** (Required)
- **Critical 🔥** - Security issues, production outages
- **High** - Important features, significant bugs
- **Medium** - Standard development work
- **Low** - Nice-to-have improvements, minor issues

#### **Status Labels** (Required)
- **Available** - Ready for assignment
- **In Progress** - Actively being worked on
- **Review Needed** - Awaiting code review
- **Blocked** - Waiting on external dependency
- **On Hold** - Intentionally paused
- **Abandoned** - No longer being pursued
- **Proposal** - Needs approval before work begins

#### **Type Labels** (Required)
- **Bug 🐛** - Something isn't working correctly
- **Enhancement ✨** - New features or improvements
- **Documentation 📚** - Documentation updates
- **Maintenance 🚧** - Code cleanup, refactoring
- **Question ❔** - Seeking clarification or help

#### **Optional Labels**
- **duplicate 2️⃣** - Duplicate of another issue
- **starter 🍼** - Good for new contributors
- **security 🔐** - Security-related changes

### Issue Template

```markdown
## Description
Brief description of the issue or feature request.

## Steps to Reproduce (for bugs)
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

## Expected Behavior
What should happen.

## Actual Behavior
What actually happens.

## Environment
- OS: [e.g. iOS]
- Browser: [e.g. Chrome, Safari]
- Version: [e.g. 22]
- Network: [e.g. Mainnet, Gnosis Chain]

## Additional Context
Screenshots, logs, or other relevant information.
```

## Development Lifecycle

### 1. Planning Phase

**Issue Creation:**
- Clear, descriptive title
- Detailed requirements or bug reproduction
- Appropriate labels (priority, type, status)
- Acceptance criteria for features

**Discussion:**
- Technical approach discussion
- Resource estimation
- Assignment to developer
- Addition to project/milestone

### 2. Implementation Phase

**Branch Creation:**
```bash
git checkout develop
git pull origin develop
git checkout -b feat/new-feature-name
```

**Development:**
- Follow coding standards
- Write tests alongside code
- Regular commits with clear messages
- Update documentation as needed

**Self-Review:**
- Test functionality thoroughly
- Run linting and formatting tools
- Check test coverage
- Review code changes before PR

### 3. Review Phase

**Pull Request Creation:**
- Descriptive title and summary
- Link to related issues
- Include screenshots for UI changes
- Mark as draft if not ready for review

**Code Review Process:**
1. **Automated checks** - Linting, tests, builds
2. **Peer review** - Code quality, logic, security
3. **Functional testing** - Manual verification
4. **Approval** - Sign-off from required reviewers

**Addressing Feedback:**
- Respond to all review comments
- Make requested changes promptly
- Re-request review after updates
- Maintain professional, collaborative tone

### 4. Deployment Phase

**Pre-merge Checklist:**
- [ ] All CI/CD checks pass
- [ ] Required reviews obtained
- [ ] Branch is up-to-date with target
- [ ] Documentation updated
- [ ] Breaking changes documented

**Deployment:**
- Merge to develop branch
- Automated testing in staging
- Production deployment (if applicable)
- Post-deployment monitoring

## Continuous Integration

### Automated Checks

**Code Quality:**
```yaml
# Example GitHub Actions workflow
name: Quality Checks
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Lint code
        run: npm run lint
      - name: Run tests
        run: npm run test:coverage
      - name: Check types
        run: npm run type-check
```

**Smart Contract Specific:**
- Solidity compilation
- Gas usage analysis
- Security vulnerability scanning
- Test coverage reporting

### Quality Gates

**Minimum Requirements:**
- All tests must pass
- Code coverage ≥ 95% for smart contracts
- No linting errors
- Successful build/compilation
- Security scan passes

## Release Management

### Versioning Strategy

Follow [Semantic Versioning](https://semver.org/):
- **MAJOR** - Breaking changes
- **MINOR** - New features (backward compatible)
- **PATCH** - Bug fixes (backward compatible)

**Examples:**
- `1.0.0` - Initial stable release
- `1.1.0` - New feature addition
- `1.1.1` - Bug fix
- `2.0.0` - Breaking changes

### Release Process

**Pre-release:**
1. Create release branch: `release/v1.2.0`
2. Update version numbers
3. Update CHANGELOG.md
4. Final testing and bug fixes
5. Create release PR to main

**Release:**
1. Merge release PR
2. Create and push git tag: `v1.2.0`
3. Deploy to production
4. Create GitHub release with notes
5. Merge main back to develop

**Post-release:**
- Monitor for issues
- Hotfix process if critical bugs found
- Retrospective and process improvements

## Best Practices

### Communication
- **Clear issue descriptions** with context and requirements
- **Regular updates** on issue progress
- **Proactive communication** about blockers or delays
- **Collaborative problem-solving** through discussions

### Code Quality
- **Test-driven development** where appropriate
- **Regular refactoring** to maintain code health
- **Documentation** updates alongside code changes
- **Security-first mindset** especially for smart contracts

### Collaboration
- **Constructive code reviews** focusing on improvement
- **Knowledge sharing** through documentation and discussions
- **Mentoring new contributors** with patience and guidance
- **Inclusive environment** welcoming diverse perspectives

---

> **Success Metric:** A healthy development workflow enables teams to deliver high-quality software efficiently while maintaining security and user trust.