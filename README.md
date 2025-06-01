# Portfolio Website (Angular Universal)

## Development Setup

### Prerequisites
- Node.js v18+
- npm v9+
- Angular CLI v16+

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/garyliewhl/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
Start the development server:
```bash
ng serve
```
Open http://localhost:4200 in your browser.

For SSR development:
```bash
npm run dev:ssr
```

## Deployment to GitHub Pages

### First-time Setup
1. Install deployment tool:
   ```bash
   npm install -g angular-cli-ghpages
   ```

2. Build and deploy:
   ```bash
   npm run deploy
   ```

### Important Notes
- This project uses Angular Universal (SSR)
- Built files are output to `dist/gl-portfolio/browser/`
- The deploy script automatically handles this path

## Project Structure
Key directories:
- `src/app/components/` - All Angular components
- `src/assets/images/` - Image assets
- `src/styles/` - Global styles
- `server.ts` - SSR server configuration

## Troubleshooting
- Images not showing? Verify paths include `/portfolio/` prefix
- 404 errors? Ensure correct base-href is set
- Deployment issues? Check GitHub Pages settings
- CSS budget exceeded? Some components may exceed the default 4KB budget (safe to ignore)
- Missing index.html? Built files are in browser subdirectory (normal for SSR)

## Live Site
https://garyliewhl.github.io/portfolio/