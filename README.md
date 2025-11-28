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

