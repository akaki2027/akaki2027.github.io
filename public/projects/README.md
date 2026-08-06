# public/projects/ — PROJECT IMAGES

Screenshots, demo shots, and hardware photos for the cards in the Projects
section. One image per project.

**Personal photos do NOT go here.** Those belong in `public/photos/`.

## How to add one

1. Drop the image file in this folder.
2. Open `src/data/projects.js` and set `image` on that project:

```js
{
  slug: 'ark-integrity',
  title: 'ARK Integrity Systems',
  image: 'ark-integrity.png',   // <- just the filename
  ...
}
```

Leave `image` off entirely and the card renders a monogram tile instead, so a
project without a picture never breaks the layout.

## Specs

| | |
|---|---|
| Shape | Landscape. Regular cards crop to 16:10, `featured: true` cards to 2.4:1. |
| Size | ~1200 x 750 |
| File size | Under ~300 KB. JPG for screenshots, PNG only if you need transparency. |
| Format | `.jpg`, `.png`, or `.webp` |

Because featured cards crop much wider, keep the important part of the image
centered so it survives both crops.

## Naming

Match the project's `slug` so the pairing is obvious. The exact filenames the
site is currently looking for:

| Project | Drop in this file | Status |
|---|---|---|
| Personal Smart Locker | `personal-smart-locker.png` | done, using the repo's block diagram |
| Pathogen Classification | `pathogen-classification.png` | needed |
| Readability Analyzer | `readability-analyzer.png` | needed |

Adding the file is not enough on its own: also uncomment the `image:` line for
that project in `src/data/projects.js`.

Lowercase, hyphens, no spaces. GitHub Pages is case-sensitive even though your
Mac is not, so `ARK-Integrity.PNG` will 404 in production while working fine
locally.

## Two images for one project?

The card shows one. If you want a second, say so and I'll add a small strip of
thumbnails under the card. Right now `image` takes a single filename.
