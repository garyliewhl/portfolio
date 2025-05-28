# Portfolio Website

## Development Setup

### Prerequisites
- Node.js v16+
- npm v8+
- Angular CLI v15+

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

## Deployment to GitHub Pages

### First-time Setup
1. Install deployment tool:
   ```bash
   npm install -g angular-cli-ghpages
   ```

2. Build and deploy:
   ```bash
   ng build --configuration production --base-href /portfolio/
   npx angular-cli-ghpages --dir=dist/portfolio/browser
   ```

### Updating the Site
For subsequent updates:
```bash
ng build --configuration production --base-href /portfolio/
npx angular-cli-ghpages --dir=dist/portfolio/browser
```

## Project Structure
Key directories:
- `src/app/components/` - All Angular components
- `src/assets/images/` - Image assets
- `src/styles/` - Global styles

## Troubleshooting
- Images not showing? Verify paths include `/portfolio/` prefix
- 404 errors? Ensure correct base-href is set
- Deployment issues? Check GitHub Pages settings

## Live Site
https://garyliewhl.github.io/portfolio/