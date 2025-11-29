## Odkodowani – podcast website

Static promotional website for the **Odkodowani** podcast, prepared for deployment on Vercel.

### Tech stack

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS**

### Running locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000` in your browser.

### Analytics

In the `app/layout.tsx` file, paste your Cloudflare Web Analytics token in this place:

```tsx
data-cf-beacon='{"token": "YOUR_CLOUDFLARE_WEB_ANALYTICS_TOKEN"}'
```

After deploying to Vercel, the site will be ready to collect basic visit statistics.

### Deployment to Vercel

#### Option 1: Deploy via Vercel CLI (Quickest)

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Deploy from your project directory:
   ```bash
   vercel
   ```

3. Follow the prompts:
   - Login to your Vercel account (or create one)
   - Confirm project settings (Vercel will auto-detect Next.js)
   - Deploy!

4. For production deployment:
   ```bash
   vercel --prod
   ```

#### Option 2: Deploy via Vercel Dashboard (Recommended for CI/CD)

1. Push your code to GitHub, GitLab, or Bitbucket

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your repository

5. Vercel will auto-detect Next.js settings - just click "Deploy"

6. Your site will be live in minutes!

#### Option 3: Deploy via GitHub Integration (Best for automatic deployments)

1. Push your code to a GitHub repository

2. Go to [vercel.com](https://vercel.com) → Dashboard → Add New Project

3. Import your GitHub repository

4. Configure project settings (usually auto-detected):
   - Framework Preset: Next.js
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

5. Click "Deploy"

6. Every push to your main branch will automatically trigger a new deployment!

**Note:** Vercel automatically detects Next.js projects and configures everything for you. No additional configuration files needed.

