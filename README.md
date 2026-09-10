# Green Valley Public School — Static React Website

A complete responsive school website built with React + Vite. It is intentionally static and requires no database or backend.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## What to edit first

Open:

`src/data/school.js`

Update:
- School name
- Address
- Phone
- Email
- Principal
- Notices
- Events
- Facilities
- Gallery images

## Deployment

This project can be deployed as a static site on Cloudflare Pages, GitHub Pages, Netlify, or similar static hosting.

For Cloudflare Pages, connect the GitHub repository and use:
- Build command: `npm run build`
- Output directory: `dist`

## Notes

The enquiry form is intentionally a demo form. It does not send data anywhere. When the project needs real enquiries, connect it to a form service or backend.
