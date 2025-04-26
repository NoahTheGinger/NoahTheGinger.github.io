# Noah Cantor Personal Portfolio

![Deployment Status](https://github.com/NoahTheGinger/NoahTheGinger.github.io/actions/workflows/deploy.yml/badge.svg)

Personal portfolio website for Noah Cantor, featuring a responsive design, interactive timeline, project showcase, and bilingual support.

## 🚀 Features

- **Responsive Design**: Mobile-first approach ensuring optimal viewing on all devices
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Bilingual Support**: Toggle between English and Spanish translations
- **Interactive Timeline**: Career progression displayed using TimelineJS
- **Project Showcase**: GitHub integration displaying project details with live commit data
- **Blog Platform**: Static site generator for Markdown-based blog posts
- **Easter Egg**: Konami code triggers a special Promptimizer demo
- **Accessibility**: WCAG AA compliant with proper color contrast

## 🧩 Project Structure

```text
/
├── .github/workflows/     # GitHub Actions workflows for CI/CD
├── public/                # Static assets and files
│   ├── assets/            # Images, icons, and other assets
│   ├── playground/        # Special interactive features
│   ├── static/            # Static files like the resume PDF
│   └── CNAME              # Custom domain configuration
├── src/
│   ├── components/        # Reusable UI components
│   ├── layouts/           # Page layouts and templates
│   ├── pages/             # All pages and API endpoints
│   ├── styles/            # Global CSS and style utilities
│   ├── utils/             # Helper functions and utilities
│   └── i18n/              # Internationalization resources
└── package.json          # Project dependencies and scripts
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run deploy`          | Builds and deploys to GitHub Pages               |

## 🔄 Deployment

This site automatically deploys to GitHub Pages on push to the main branch. The deployment process:

1. Builds the site using Astro
2. Runs Lighthouse performance tests (must score ≥ 90)
3. Deploys to the `gh-pages` branch
4. Invalidates CDN cache for immediate updates

The site is accessible at both:
- [noahtheginger.me](https://noahtheginger.me)
- [NoahTheGinger.github.io](https://NoahTheGinger.github.io)

## 🧠 Technologies Used

- [Astro](https://astro.build) - Core static site generator
- [TailwindCSS](https://tailwindcss.com) - Utility-first CSS framework
- [TimelineJS](https://timeline.knightlab.com) - Interactive timeline visualization
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- [GitHub API](https://docs.github.com/en/rest) - Project data integration
