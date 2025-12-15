# Contributing to Finora

Thank you for your interest in contributing to Finora! This document provides guidelines and instructions for contributing.

## 🎯 Design Philosophy

Before contributing, please understand our design principles:

- **Premium Aesthetic**: Think "Apple" × "Linear" - not generic admin panels
- **Dark Mode First**: All UI must work in dark mode (`bg-[#0A0A0A]`)
- **Data Density**: Balance high information density with readability
- **Micro-Interactions**: Add smooth transitions to interactive elements
- **Glassmorphism**: Use subtle borders (`border-white/5`) and transparent surfaces

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/0xmilon/finora-fintech-dashboard.git`
3. Install dependencies: `bun install`
4. Create a branch: `git checkout -b feature/your-feature-name`

## 📝 Development Guidelines

### Code Style

- **File Naming**: Use kebab-case for all files (`my-component.html`)
- **Components**: Place in `src/components/` directory
- **HTML Structure**: Use semantic HTML with TailwindCSS classes
- **Icons**: Always use Lucide Icons with `data-lucide="icon-name"`

### Component Guidelines

1. **Borders**: Use `1px` borders with low opacity (`border-white/5` or `border-white/10`)
2. **Cards**: Use `rounded-3xl` or `rounded-2xl` with `border border-white/5 bg-[#0A0A0A]`
3. **Buttons**: 
   - Primary: `bg-white text-black`
   - Secondary: `bg-surface-100 hover:bg-surface-200 text-gray-400 hover:text-white`
4. **Numbers**: Use `tabular-nums` for currency/numbers
5. **Hover States**: Every interactive element MUST have a hover state

### Responsive Design

- Use `hidden md:flex` or similar for responsive hiding
- Test on mobile, tablet, and desktop
- Maintain data density on all screen sizes

### Build Process

Always run the build after making changes:

```bash
bun build.ts
```

The build script:
- Processes HTML includes
- Compiles TailwindCSS
- Bundles TypeScript

## 🐛 Reporting Bugs

When reporting bugs, please include:

1. **Description**: Clear description of the bug
2. **Steps to Reproduce**: Detailed steps to reproduce the issue
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Screenshots**: If applicable
6. **Environment**: Browser, OS, etc.

## ✨ Feature Requests

For feature requests:

1. Check if the feature already exists or is planned
2. Open an issue with the `enhancement` label
3. Describe the feature and its use case
4. Explain how it fits with Finora's design philosophy

## 📦 Pull Request Process

1. **Update Documentation**: Update README.md if needed
2. **Follow Code Style**: Ensure your code follows the guidelines
3. **Test Your Changes**: Build and test locally
4. **Write Clear Commits**: Use descriptive commit messages
5. **Update Version**: Bump version if needed (following semver)

### PR Checklist

- [ ] Code follows the design guidelines
- [ ] Build passes (`bun build.ts`)
- [ ] Mobile responsive
- [ ] Hover states added to interactive elements
- [ ] No double borders
- [ ] Documentation updated if needed

## 🎨 Design Contributions

If you're contributing design improvements:

- Maintain the dark mode aesthetic
- Keep the premium, Linear-esque feel
- Use the design tokens from `tailwind.config.js`
- Ensure consistency with existing components

## 📚 Resources

- [AGENTS.md](AGENTS.md) - Detailed project guidelines
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/icons)
- [Bun Documentation](https://bun.sh/docs)

## 💬 Questions?

Feel free to open an issue for questions or discussions. We're here to help!

Thank you for contributing to Finora! 🚀

