---
sidebar_position: 2
description: Version control standards and Git workflow guidelines
---

# Git Workflow

We use Git for version control and follow [Conventional Commits](https://www.conventionalcommits.org) for branch names and commit messages to enforce consistency and enable automatic changelog generation.

## Branch Naming

Use short, descriptive, kebab-cased names with a conventional commits type prefix separated by a slash:

**Good Examples:**
- `feat/implement-arbitrator`
- `fix/invalid-rulings-from-arbitrator`
- `docs/update-contributing-guide`
- `refactor/optimize-evidence-handling`

**For Collaborative Work:**
When multiple people work on the same feature, create personal branches:
- `feat/implement-arbitrator/alice`
- `feat/implement-arbitrator/bob`

:::tip Branch Cleanup
Always delete merged branches locally and remotely. List merged branches with:
```bash
git branch --merged | grep -v "\*"
```
:::

## Commit Guidelines

### When to Commit

Each commit should represent a single logical change:

- **✅ Good:** Fix authentication bug in login form
- **❌ Bad:** Fix authentication bug and optimize database queries

**Best Practices:**
- Use `git add -p` to interactively stage specific portions
- Commit early and often with small, self-contained commits
- Order commits logically
- Clean up branch history before pushing upstream

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semi-colons)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```bash
feat(court): add evidence submission validation
fix(escrow): resolve payment timeout issue
docs(api): update arbitration standard documentation
refactor(curate): optimize list rendering performance
```

:::info Message Format
All words in commit messages use **present tense** except footer keywords (Closes, Fixes, etc.)
:::

## Merging Process

:::danger Critical Branches
Never rewrite history on CI/CD branches like `develop` and `main`
:::

**Pre-merge Checklist:**
- [ ] Rebase branch onto target branch for fresh commits
- [ ] Verify all commits follow these guidelines
- [ ] Ensure all CI/CD checks pass
- [ ] Code review completed and approved

:::info Rebase Communication
Always alert team members before rewriting shared branch history
:::

## Quality Standards

### Before Pushing
:::danger Test First
Always test thoroughly before pushing. Never push half-done work.
:::

### Repository Maintenance
Perform regular maintenance:
```bash
git gc          # Cleanup unnecessary files
git prune       # Remove unreachable objects  
git fsck        # Verify repository integrity
```

### Tagging
Use lightweight tags to bookmark important commits:
```bash
git tag v1.2.3-beta
git tag milestone-court-v2
```

## Workflow Examples

### Feature Development
```bash
# Start new feature
git checkout develop
git pull origin develop
git checkout -b feat/new-arbitration-method

# Work on feature with atomic commits
git add src/arbitration/
git commit -m "feat(arbitration): implement new voting mechanism"

git add tests/arbitration/
git commit -m "test(arbitration): add voting mechanism tests"

# Push and create PR
git push -u origin feat/new-arbitration-method
```

### Hotfix Process
```bash
# Critical bug fix
git checkout main
git pull origin main
git checkout -b fix/critical-security-issue

# Make minimal fix
git add src/security/
git commit -m "fix(security): patch authentication bypass"

# Push immediately
git push -u origin fix/critical-security-issue
```

## Pull Request Guidelines

### Title Format
Use conventional commit format:
```
feat(court): implement juror staking mechanism
```

### Description Template
```markdown
## Summary
Brief description of changes and motivation.

## Changes Made
- [ ] Added new arbitration method
- [ ] Updated related tests
- [ ] Updated documentation

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Breaking Changes
List any breaking changes and migration steps.

## Related Issues
Closes #123
References #456
```

### Review Process
1. **Self-review** code changes before requesting review
2. **Request specific reviewers** familiar with the code area
3. **Address feedback** promptly and thoroughly
4. **Update documentation** if functionality changes
5. **Squash commits** if requested by maintainers

## Security Considerations

### Sensitive Data
- Never commit API keys, private keys, or passwords
- Use `.gitignore` to exclude sensitive files
- Review commits for accidental secrets before pushing

### Signed Commits
Enable GPG signing for additional security:
```bash
git config --global commit.gpgsign true
git config --global user.signingkey YOUR_GPG_KEY
```

---

> **Remember:** These guidelines ensure code quality and team collaboration. When in doubt, ask for guidance rather than guessing.