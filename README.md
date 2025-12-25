# Natural Capital ReBank - Corporate Website

A premium Next.js website for Natural Capital ReBank, showcasing the company's blockchain-powered natural capital tokenization platform.

## Overview

NCRB transforms natural capital credits and ecosystem services into transparent, liquid digital instruments for institutional investors. This website presents our investment opportunity, platform capabilities, and market vision.

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Deployment**: Optimized for Vercel

## Design System

The website uses a premium climate-fintech aesthetic inspired by the Natural Capital Stablecoin dApp:

### Color Palette
- **Green tones**: Environmental/Growth (#10b981, #059669, #065f46)
- **Blue tones**: Trust/Stability (#3b82f6, #2563eb, #111827)
- **Teal/Cyan**: Water/Ocean (#0d9488, #0891b2)
- **Neutrals**: Gray scale for text and backgrounds

### Typography
- **Font**: Inter (Google Fonts)
- **Scale**: Responsive type scale from 0.75rem to 4.5rem

### Components
- Reusable components: Navigation, Footer, Button, Card
- Custom animations: float, fadeInUp, slideIn, shimmer
- Glassmorphism effects for premium feel

## Site Structure

### Pages
1. **Home** (`/`) - Hero, problem-opportunity, solution snapshot, investment CTA
2. **Problem & Market** (`/problem-market`) - Natural capital crisis, carbon market challenges, TAM
3. **Solution** (`/solution`) - Platform overview, capabilities, use cases (Coming Soon)
4. **Products** (`/products`) - Phase 1-3 roadmap, product suite (Coming Soon)
5. **For Investors** (`/investors`) - Investment thesis, economics, risks, exits
6. **Team** (`/team`) - Founding team, advisory board, governance (Coming Soon)
7. **Technology** (`/technology`) - Tokenization architecture (Coming Soon)
8. **Resources** (`/resources`) - Thought leadership, articles (Coming Soon)
9. **Contact** (`/contact`) - Multi-stakeholder contact forms, global offices

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Linting

```bash
npm run lint
```

## Content Updates

The website content is based on the NCRB Deal Book (December 2024). Key messaging includes:

- **Value Proposition**: "Tokenizing nature into an investable asset class"
- **Market Opportunity**: $10T natural capital TAM, $2.7T at-risk value
- **Investment**: $1M seed round targeting 8-12x returns over 3-5 years
- **Products**: BaaS, tokenization platform, investment vehicles, stablecoins (roadmap)

## Project Structure

```
ncrb-website/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout with navigation & footer
│   ├── globals.css           # Global styles & animations
│   ├── problem-market/       # Problem & Market page
│   ├── solution/             # Solution page (placeholder)
│   ├── products/             # Products page (placeholder)
│   ├── investors/            # Investor page
│   ├── team/                 # Team page (placeholder)
│   ├── technology/           # Technology page (placeholder)
│   ├── resources/            # Resources page (placeholder)
│   └── contact/              # Contact page
├── components/
│   ├── Navigation.tsx        # Header navigation
│   ├── Footer.tsx            # Footer with links
│   ├── Button.tsx            # Reusable button component
│   └── Card.tsx              # Reusable card component
├── public/
│   └── images/
│       └── ncrb-logo.png     # Company logo
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## Next Steps

### Content Development
- [ ] Complete Solution page with platform architecture
- [ ] Build out Products & Roadmap page with phase details
- [ ] Add Team bios and governance framework
- [ ] Create Technology deep-dive page
- [ ] Populate Resources with articles and whitepapers

### Features
- [ ] Implement contact form backend (email integration)
- [ ] Add downloadable investment deck (PDF)
- [ ] Integrate analytics (Google Analytics / Plausible)
- [ ] Add partner logo section
- [ ] Implement blog/news section

### Enhancement
- [ ] Add page transitions and scroll animations
- [ ] Implement dark mode toggle
- [ ] Create case study templates
- [ ] Add investor data room access portal
- [ ] Optimize images and performance

## Deployment

### Vercel (Recommended)

The project includes GitHub Actions workflows for automated deployment to Vercel.

#### Initial Setup

1. **Create Vercel Project**
   - Push code to GitHub repository
   - Import project in [Vercel dashboard](https://vercel.com/new)
   - Deploy with default Next.js settings

2. **Configure GitHub Secrets**

   Add the following secrets to your GitHub repository (Settings → Secrets and variables → Actions):

   - `VERCEL_TOKEN` - Create at [Vercel Tokens](https://vercel.com/account/tokens)
   - `VERCEL_ORG_ID` - Found in Vercel Organization Settings
   - `VERCEL_PROJECT_ID` - Found in Vercel Project Settings
   - `VERCEL_SCOPE` - Your team slug or username (found in Vercel dashboard URL: `vercel.com/<SCOPE>/...`)

3. **Automated Deployments**

   The workflows will automatically deploy:
   - **Development**: Pushes to `dev` or `develop` branches → Preview deployment
   - **Production**: Pushes to `main` or `master` branches → Production deployment

#### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

**Google Analytics (Optional):**

To enable Google Analytics tracking:

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Get your GA4 Measurement ID from [Google Analytics](https://analytics.google.com/)
   - Create a GA4 property if you don't have one
   - Copy your Measurement ID (format: `G-XXXXXXXXXX`)

3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

4. For Vercel deployment, add the environment variable in project settings

**Vercel Deployment (GitHub Actions):**

Required GitHub repository secrets for automated deployments:

- `VERCEL_TOKEN` - Vercel API authentication token
- `VERCEL_ORG_ID` - Your Vercel organization ID
- `VERCEL_PROJECT_ID` - Your Vercel project ID
- `VERCEL_SCOPE` - Your team slug or username

**Future Environment Variables:**
- `EMAIL_API_KEY` - Contact form backend
- `CMS_API_URL` - Content management system

## License

© 2024 Natural Capital ReBank. All rights reserved.

## Contact

For website updates or technical questions, contact the NCRB development team.
