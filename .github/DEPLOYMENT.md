# NCRB Website Deployment Guide

This document explains how to deploy the Natural Capital ReBank website to Vercel using GitHub Actions.

## Prerequisites

Before deploying, you need to set up the following secrets in your GitHub repository:

### Required GitHub Secrets

1. **VERCEL_TOKEN** - Your Vercel authentication token
   - Get this from: https://vercel.com/account/tokens
   - Create a new token with deployment permissions

2. **VERCEL_ORG_ID** - Your Vercel organization/team ID
   - Run `vercel whoami` in your local terminal (after `npm i -g vercel`)
   - Or find it in Vercel dashboard settings

3. **VERCEL_PROJECT_ID** - Your Vercel project ID
   - Link your project: `vercel link` in the project directory
   - The project ID will be in `.vercel/project.json`
   - Or find it in Vercel project settings

### Setting Up Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each secret:
   - Name: `VERCEL_TOKEN`, Value: `<your-token>`
   - Name: `VERCEL_ORG_ID`, Value: `<your-org-id>`
   - Name: `VERCEL_PROJECT_ID`, Value: `<your-project-id>`

## Deployment Workflows

### Development Deployment

**Trigger:** Push to `dev` or `develop` branch, or manual dispatch

**Workflow file:** `.github/workflows/deploy-vercel-development.yml`

**What it does:**
- Checks out the repository
- Sets up Node.js 20
- Installs Vercel CLI
- Pulls Vercel environment configuration for preview
- Builds the Next.js project
- Deploys to Vercel preview environment
- Comments deployment URL on pull requests

**To deploy:**
```bash
git checkout dev
git add .
git commit -m "Your changes"
git push origin dev
```

### Production Deployment

**Trigger:** Push to `main` or `master` branch, or manual dispatch

**Workflow file:** `.github/workflows/deploy-vercel-production.yml`

**What it does:**
- Checks out the repository
- Sets up Node.js 20
- Installs Vercel CLI
- Pulls Vercel environment configuration for production
- Builds the Next.js project with production optimizations
- Deploys to Vercel production environment
- Creates deployment success notification

**To deploy:**
```bash
git checkout main
git merge dev  # Merge your dev changes
git push origin main
```

## Manual Deployment

You can also trigger deployments manually from GitHub Actions:

1. Go to your repository on GitHub
2. Navigate to **Actions** tab
3. Select the workflow you want to run:
   - "Deploy to Vercel Development" for preview
   - "Deploy to Vercel Production" for production
4. Click **Run workflow**
5. Select the branch
6. Click **Run workflow**

## Local Vercel Setup

To link your local project to Vercel:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Link your project (run in project directory)
vercel link

# Deploy from local
vercel deploy              # Preview deployment
vercel deploy --prod       # Production deployment
```

## Environment Variables

If you need environment variables for your deployment:

1. Add them to Vercel dashboard:
   - Go to your project settings
   - Navigate to **Environment Variables**
   - Add variables for Production, Preview, or Development

2. Or add them via CLI:
   ```bash
   vercel env add <NAME>
   ```

## Vercel Configuration

The deployment configuration is defined in `vercel.json`:

- **Framework:** Next.js
- **Build command:** `npm run build`
- **Output directory:** `.next`
- **Region:** US East (iad1)
- **Security headers:** Included for XSS, clickjacking protection
- **Cache headers:** Optimized for static assets

## Troubleshooting

### Build Failures

If your deployment fails:

1. Check the GitHub Actions logs for errors
2. Ensure all dependencies are in `package.json`
3. Test the build locally: `npm run build`
4. Verify Vercel secrets are correctly set

### Secret Issues

If authentication fails:

1. Verify all three secrets are set in GitHub
2. Regenerate VERCEL_TOKEN if needed
3. Double-check VERCEL_ORG_ID and VERCEL_PROJECT_ID

### Environment Variables Missing

If your app needs environment variables:

1. Add them to Vercel project settings
2. Make sure they're available for the correct environment (production/preview)
3. Redeploy after adding variables

## Rollback

To rollback a deployment:

1. Go to Vercel dashboard
2. Navigate to **Deployments**
3. Find the previous working deployment
4. Click **⋯** → **Promote to Production**

Or via CLI:
```bash
vercel rollback
```

## Custom Domains

To add a custom domain:

1. Go to Vercel project settings
2. Navigate to **Domains**
3. Add your domain (e.g., `ncrb.com`)
4. Follow DNS configuration instructions
5. Wait for DNS propagation (up to 48 hours)

## Monitoring

Monitor your deployments:

- **Vercel Dashboard:** Real-time deployment status
- **GitHub Actions:** Build and deployment logs
- **Vercel Analytics:** Performance metrics (if enabled)

## Support

For issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Review [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- Contact team lead for access issues
