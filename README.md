# Portfolio — Aditya Kaki

Personal site. React + Vite + Tailwind, deployed free on GitHub Pages.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
```

---

## Adding a project

Everything lives in **`src/data/projects.js`**. Add an object to the array and the
card appears — no component changes needed. Its `tags` automatically become filter
buttons above the grid.

```js
{
  slug: 'ark-integrity',                  // unique, lowercase, no spaces
  title: 'ARK Integrity Systems',
  badge: 'In progress',                   // optional pill on the image
  blurb: 'Cryptographically signs CCTV footage at capture so it cannot be quietly edited later.',
  image: 'ark-integrity.png',             // optional — see below
  tags: ['Embedded Systems', 'Security'], // drives the filter buttons
  tech: ['C++', 'Jetson', 'TPM 2.0'],     // small chips under the blurb
  repo: 'https://github.com/you/ark',     // optional
  demo: 'https://...',                    // optional
  featured: true,                         // optional — card spans 2 columns
}
```

### Images

Drop the file into **`public/projects/`** and set `image` to the filename only.
`public/projects/ark-integrity.png` → `image: 'ark-integrity.png'`.

- Landscape, roughly **1200×750**, looks best. Featured cards are wider (2.4:1).
- Keep files under ~300 KB — use JPG for screenshots, PNG only when you need
  transparency.
- Leave `image` off entirely and the card falls back to a generated monogram tile,
  so a missing image never breaks the layout.

While `projects.js` is empty, the Projects section shows a "being packaged up"
placeholder that links to GitHub. It disappears on its own once you add the first
project.

## Editing everything else

**`src/data/site.js`** holds the headline, bio, stats, tech stack, experience, and
links. The components read from it — you shouldn't need to touch `src/components/`
for normal content changes.

Two things in there are marked `TODO` and need your input:

- `GITHUB_USERNAME` — currently a placeholder, used for every GitHub link on the site.
- The last two entries in `stats` (projects built, languages) are estimates.

The résumé served at `/AdityaKaki-Resume.pdf` is `public/AdityaKaki-Resume.pdf`.
Replace that file to update it.

---

## Deploying to GitHub Pages

One-time setup:

1. Create a **public** repo named `<your-username>.github.io`.
2. Push this project to it (`main` branch).
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

That's it. `.github/workflows/deploy.yml` builds and deploys on every push to
`main`, so from then on publishing is just `git push`. The site lands at
`https://<your-username>.github.io` — free, always on, HTTPS included.

### If you use a project repo instead

If the repo is named something else (e.g. `portfolio`), the site lives at a
subpath and Vite needs to know. Open `vite.config.js` and change:

```js
const base = '/portfolio/'   // repo name, slashes on both sides
```

### Custom domain

Buy a domain, add a `public/CNAME` file containing just the domain, point a DNS
`CNAME` record at `<your-username>.github.io`, then set the domain under
Settings → Pages. Keep `base` as `/` when using a custom domain.

---

## Notes

- `public/.nojekyll` stops GitHub from running Jekyll over the build output —
  without it, files starting with `_` get silently dropped.
- Dark mode follows the OS by default, is toggleable in the header, and persists
  in `localStorage`. A small inline script in `index.html` applies it before first
  paint so there's no white flash.
- Animations respect `prefers-reduced-motion`.
