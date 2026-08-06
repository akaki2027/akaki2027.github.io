# public/photos/ — PERSONAL PHOTOS

Pictures of **you**. These become the scattered, draggable photo wall in the
About section: you in the lab, with friends, hobbies, family, game day, travel,
competitions.

**Project screenshots do NOT go here.** Those belong in `public/projects/`.

## How to add one

1. Drop the image file in this folder.
2. Open `src/data/photos.js` and add a line:

```js
{ file: 'lab.jpg', caption: 'In the lab at VT' },
```

`file` is just the filename, no path. The caption is the small label printed
under the photo, so keep it to roughly 2 to 5 words.

## Specs

| | |
|---|---|
| Shape | Square or portrait. They're cropped square, so keep the subject centered. |
| Size | ~800px on the long edge is plenty. |
| File size | Under ~400 KB each. Use JPG. |
| Format | `.jpg`, `.png`, or `.webp` |
| How many | 9 fills the space nicely. Fewer is fine, more just extends downward. |

## Naming

Lowercase, hyphens, no spaces: `game-day.jpg`, not `Game Day (1).JPG`.
Spaces and capitals cause broken images on GitHub Pages, which is
case-sensitive even though your Mac is not.

Until you add the first photo, the section shows a placeholder telling you this.
