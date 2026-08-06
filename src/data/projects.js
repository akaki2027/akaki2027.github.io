// ---------------------------------------------------------------------------
// YOUR PROJECTS GO HERE.
//
// The site reads this array. Add an object per project and it appears in the
// grid, with its tags automatically becoming filter buttons. No other file
// needs to change.
//
// Images: drop the file in `public/projects/` and set `image` to the filename
// only — e.g. 'ark-integrity.png' for `public/projects/ark-integrity.png`.
// Landscape images around 1200x750 look best. Leave `image` out and the card
// falls back to a generated monogram tile, so nothing breaks while you wait.
//
// A full example, copy this shape:
//
// {
//   slug: 'ark-integrity',                 // unique, lowercase, no spaces
//   title: 'ARK Integrity Systems',
//   badge: 'In progress',                  // optional — pill shown next to the title
//   blurb: 'One or two sentences. What it does and why it is hard.',
//   image: 'ark-integrity.png',            // optional
//   tags: ['Embedded Systems', 'Security'],// MUST come from `categories` in site.js
//   tech: ['C++', 'Jetson', 'TPM 2.0'],    // small chips under the blurb
//   repo: 'https://github.com/you/ark',    // optional
//   demo: 'https://...',                   // optional
//   featured: true,                        // optional — spans 2 columns
// }
// ---------------------------------------------------------------------------

export const projects = [
  {
    slug: 'pathogen-classification',
    title: 'Pathogen Classification from Blood Transcriptomics',
    blurb:
      "Tells bacterial infection, viral infection, and healthy apart from whole-blood gene expression, across 14 public GEO cohorts and 1,700+ patient samples. The classifier isn't the hard part — every cohort comes from a different lab with its own batch effects, so the whole pipeline validates leave-one-dataset-out: train on 13 studies, test on the one it has never seen. Four model families run head to head over the same folds, reaching AUROC above 0.94 in the strongest cohorts.",
    // image: 'pathogen-classification.png',  // add once you send the screenshot
    tags: ['AI / ML'],
    tech: ['PyTorch', 'XGBoost', 'scikit-learn', 'pandas', 'R'],
    repo: 'https://github.com/akaki2027/ECE4824-Pathogen-Classification',
    featured: true,
  },
]
