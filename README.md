# Kleros Documentation

[![Deploy to GitHub Pages](https://github.com/guangmiankung/kleros-docs-docusaurus/actions/workflows/deploy.yml/badge.svg)](https://github.com/guangmiankung/kleros-docs-docusaurus/actions/workflows/deploy.yml)

A comprehensive, modern documentation website for Kleros built with [Docusaurus](https://docusaurus.io/). Features interactive quizzes, responsive design, and complete Kleros branding.

## 🌟 Features

- **📚 Complete Documentation Migration** - All content from original GitBook format
- **🎯 Interactive Quiz System** - Role-specific quizzes with scoring and feedback
- **🎨 Kleros Branding** - Custom purple theme matching Kleros design system
- **📱 Responsive Design** - Mobile-optimized for all devices
- **⚡ Fast Performance** - Built with modern React and Docusaurus v3
- **🔍 Search Ready** - Optimized for search functionality
- **🌐 Multi-language Ready** - Prepared for internationalization

## 🚀 Live Site

**Production**: https://gmkung.github.io/kleros-docusaurus-test/

## 📖 Documentation Sections

### Core Documentation
- **Introduction** - Overview of Kleros and getting started paths
- **FAQ** - Comprehensive 71-question FAQ covering all aspects  
- **Governance** - KIP process and community participation
- **PNK Token** - Token economics, buying guides, and technical details
- **Media Coverage** - Industry recognition and press coverage

### Products
- **Kleros Court** - Core arbitration protocol and juror system
- **Juror Tutorial** - Complete step-by-step guide for new jurors
- **Famous Cases** - 6 landmark cases with detailed analysis

### Interactive Quizzes 🎯
- **Juror Quiz** - 10 questions on court participation and responsibilities
- **Developer Quiz** - 10 technical questions on integration and smart contracts
- **Proof of Humanity Quiz** - 10 questions on registration and verification

Each quiz includes:
- ✅ Interactive answer selection
- ✅ Real-time progress tracking  
- ✅ Automatic scoring and feedback
- ✅ Detailed explanations for all answers
- ✅ Personalized next steps based on performance

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- Yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/gmkung/kleros-docusaurus-test.git
cd kleros-docusaurus-test

# Install dependencies
yarn install
```

### Local Development

```bash
yarn start
```

This starts a local development server at `http://localhost:3000` with hot reloading.

### Build for Production

```bash
yarn build
```

Generates static content into the `build` directory ready for deployment.

### Testing the Build

```bash
yarn serve
```

Serves the production build locally for testing.

## 🚀 Deployment

### Automatic Deployment (Recommended)

1. **Push to GitHub** - Changes to `main` branch automatically trigger deployment
2. **GitHub Actions** - Builds and deploys to GitHub Pages automatically  
3. **Live Updates** - Site updates within minutes of pushing changes

### Manual Deployment

```bash
GIT_USER=gmkung yarn deploy
```

### Custom Domain Setup

To use a custom domain (e.g., `docs.kleros.io`):

1. Update `docusaurus.config.ts`:
   ```ts
   url: 'https://docs.kleros.io',
   baseUrl: '/',
   ```
2. Configure domain in GitHub Pages settings
3. Commit and push changes

## 🎨 Customization

### Theme Colors
The site uses Kleros brand colors defined in `src/css/custom.css`:
- Primary: `#4D00B4` (Kleros Purple)
- Font: `Open Sans` (Kleros Brand Font)

### Adding Content
- **New pages**: Add to `docs/` directory
- **Update sidebar**: Modify `sidebars.ts`
- **Blog posts**: Add to `blog/` directory
- **Static assets**: Place in `static/` directory

### Quiz System
Interactive quizzes use the `InteractiveQuiz` component:

```tsx
<InteractiveQuiz
  title="Quiz Title"
  description="Quiz description"
  passingScore={8}
  questions={[...]}
/>
```

## 📁 Project Structure

```
kleros-docs-docusaurus/
├── docs/                   # Documentation pages
│   ├── products/          # Product-specific docs
│   └── quizzes/           # Interactive quizzes
├── src/
│   ├── components/        # React components
│   │   └── Quiz/          # Interactive quiz system
│   └── css/               # Custom styling
├── static/                # Static assets
├── blog/                  # Blog posts
├── .github/workflows/     # GitHub Actions
└── docusaurus.config.ts   # Main configuration
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature-name`
3. **Make your changes** and test locally
4. **Commit with descriptive messages**
5. **Push to your fork**: `git push origin feature-name`
6. **Open a Pull Request**

### Content Guidelines
- Follow existing markdown formatting patterns
- Test interactive features locally
- Ensure responsive design on mobile
- Update navigation if adding new sections

## 📊 Site Analytics

The site is prepared for analytics integration:
- Google Analytics ready
- Custom event tracking for quiz completions
- Performance monitoring setup

## 🔧 Troubleshooting

### Common Issues

**Build Failures**
- Check GitHub Actions tab for detailed error logs
- Ensure all markdown links are valid
- Verify React components are properly imported

**Quiz Not Loading**
- Check browser console for JavaScript errors
- Verify TypeScript compilation
- Ensure React hooks are used correctly

**Styling Issues**
- Check CSS module imports
- Verify Kleros color variables are defined
- Test responsive breakpoints

### Getting Help
- **GitHub Issues** - Report bugs or request features
- **Discussions** - Ask questions or share ideas
- **Discord** - Join the Kleros community for real-time help

## 📄 License

This project documentation is open source. The Kleros protocol and trademarks belong to Kleros Cooperative.

## 🏗️ Built With

- **[Docusaurus](https://docusaurus.io/)** - Modern static site generator
- **[React](https://reactjs.org/)** - Interactive components
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[GitHub Pages](https://pages.github.com/)** - Hosting and deployment
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD pipeline

---

**🎯 Ready to contribute to decentralized justice documentation?** Start by exploring the [live site](https://gmkung.github.io/kleros-docusaurus-test/) and taking one of our interactive quizzes!
