# Quality Enterprises Website

Next.js 14 (App Router), TypeScript, Tailwind CSS, React Three Fiber, Framer Motion.

## Run locally
1. Install Node.js 18.18 or newer from nodejs.org.
2. In this folder: `npm install`
3. Copy `.env.example` to `.env.local` and fill it in (see below).
4. `npm run dev` then open http://localhost:3000
5. Before deploying: `npm run build`

## Edit company details
Everything editable is in `lib/site.ts`: email, address, phone contacts, service text, "why choose us" text, gallery photos.
- Phone numbers were read from the signboard photo. **Verify them.**
- Text marked `[Edit: ...]` is a placeholder to confirm or remove.
- WhatsApp: set `whatsapp` (digits with country code, e.g. `91XXXXXXXXXX`) only once the official number is confirmed. The button then appears on the Contact page.
- GST number is deliberately not shown on the site.

## Contact form (Resend)
1. Create a free account at resend.com and create an API key.
2. Verify a sending domain in Resend (needed to send to your Gmail from your own address).
3. Set environment variables: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `NEXT_PUBLIC_SITE_URL`.
Until these are set, the form shows "Email service is not configured yet."

## GitHub
```
git init && git add . && git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USER/quality-enterprises.git
git push -u origin main
```

## Deploy on Vercel
1. vercel.com > Add New > Project > import the GitHub repo.
2. Add the four environment variables above.
3. Deploy. Then set `NEXT_PUBLIC_SITE_URL` to your final domain and redeploy (used by sitemap and metadata).

## Third-party services needed
Resend (email), Vercel (hosting), GitHub (code). Google Fonts load at build time.
