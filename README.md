# The Velvet Room — Bar Website

A dark, warm cocktail lounge website built with Next.js and Tailwind CSS.

## Pages

- **Home** — hero image, hours, policies, guest reviews, location footer
- **Reservations** — book seats by date and hour

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel via GitHub

1. Create a new repository on [github.com](https://github.com) (e.g. `velvet-room-bar`)
2. Push this project:

```bash
cd velvet-room-bar
git add .
git commit -m "Add Velvet Room bar website"
git remote add origin https://github.com/YOUR_USERNAME/velvet-room-bar.git
git push -u origin main
```

3. Go to [vercel.com](https://vercel.com) and sign up with GitHub
4. Click **Add New Project** → import your `velvet-room-bar` repo
5. Leave all settings as default → click **Deploy**
6. Your site will be live at `https://velvet-room-bar.vercel.app` (or similar)

## Update content

Edit `src/content/site.ts` to change hours, address, policies, reviews, and reservation slots.

## Custom domain (optional)

In Vercel: Project → Settings → Domains → add your domain (e.g. `thevelvetroom.co.il`)
