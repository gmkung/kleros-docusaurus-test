# Deployment to GitHub Pages

## Quick Setup Instructions

### 1. Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and create a new repository
2. Name it: `kleros-docusaurus-test`
3. Make it **public** (required for GitHub Pages)
4. **Don't** initialize with README, .gitignore, or license (we already have these)

### 2. Push to GitHub

Run these commands in your terminal:

```bash
# Add the GitHub repository as remote origin
git remote add origin https://github.com/gmkung/kleros-docusaurus-test.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. This will automatically detect the Docusaurus setup

### 4. Automatic Deployment

GitHub will automatically:
- Detect this is a Docusaurus project
- Set up GitHub Actions workflow
- Build and deploy to GitHub Pages
- Your site will be available at: `https://gmkung.github.io/kleros-docusaurus-test/`

## Alternative: Manual Deployment

If you prefer manual deployment using Docusaurus built-in command:

```bash
# Build the site
yarn build

# Deploy to GitHub Pages (requires GIT_USER environment variable)
GIT_USER=gmkung yarn deploy
```

## Configuration Details

The site is already configured for GitHub Pages:

- **URL**: `https://gmkung.github.io`
- **Base URL**: `/kleros-docusaurus-test/`
- **Organization**: `gmkung`
- **Project**: `kleros-docusaurus-test`

## Updating the Site

To update the site after making changes:

```bash
# Make your changes
# Commit them
git add .
git commit -m "Update documentation"

# Push to GitHub
git push

# GitHub Actions will automatically rebuild and deploy
```

## Custom Domain (Optional)

To use a custom domain like `docs.kleros.io`:

1. In repository settings, under Pages, add your custom domain
2. Update `docusaurus.config.ts`:
   ```ts
   url: 'https://docs.kleros.io',
   baseUrl: '/',
   ```
3. Commit and push the changes

## Troubleshooting

- **Build fails**: Check the Actions tab on GitHub for error details
- **404 errors**: Ensure baseUrl is correct in config
- **Images not loading**: Check that images are in the `static/` folder
- **Quiz not working**: Ensure React components are properly imported

## Site Status

✅ **Ready for deployment**
✅ **Interactive quizzes functional**
✅ **Responsive design**
✅ **Kleros branding applied**
✅ **All content migrated**

Your Kleros documentation site is production-ready!