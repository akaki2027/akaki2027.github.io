# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: engineering recruiters and hiring managers evaluating Aditya Kaki for
**new-grad full-time roles starting 2027** (B.S. Computer Engineering, Machine
Learning concentration, Virginia Tech, expected May 2027).

Their situation: screening many candidates quickly, often on a laptop, often
with his résumé and GitHub profile open alongside. Their job is to decide
whether he can actually build and ship systems rather than only complete
coursework, and whether to advance him.

Secondary, not yet confirmed as a design constraint: engineers and collaborators
who arrive from a repo or a shared link.

## Product Purpose

A personal portfolio: one page that presents his engineering work with enough
verifiable evidence that a reader can check the claims rather than take them on
faith. Success is a recruiter advancing him or reaching out.

## Positioning

**Machine learning running on real hardware.** Inference and cryptography on
edge devices, not ML in a notebook and not embedded work without a model in it.

Confirmed as the lane that leads. Neighboring student portfolios can credibly
claim ML *or* embedded; few can show both operating on the same device with
measured results. ARK Integrity Systems is the clearest expression of this
(TPM-backed signing plus CUDA/TensorRT YOLOv8 inference on a Jetson Orin Nano),
and the Personal Smart Locker and Pathogen Classification work flank it.

## Operating Context

Read briefly, often on a phone, frequently as one of many tabs. Readers click
through to GitHub repos and to the résumé PDF, both served from the site. The
site is the hub; the repos and the résumé are where verification happens.

## Capabilities and Constraints

- **Static only.** Deployed free to GitHub Pages via GitHub Actions on push to
  `main`. No backend, so contact is links (`mailto:`, LinkedIn, GitHub), never a
  server-backed form. A form would require a third-party service.
- **Content is data-driven.** `src/data/site.js` (bio, stats, tech, categories),
  `src/data/projects.js`, `src/data/photos.js`. Images live in
  `public/projects/` and `public/photos/`; each folder has a README with specs.
  Adding content should not require touching `src/components/`.
- **Project inclusion rule:** a project card requires a **public GitHub repo**.
  ARK Integrity Systems is the single exception, presented as the venture he is
  building rather than a browsable project.
- **Filenames must be lowercase with hyphens.** GitHub Pages is case-sensitive
  and macOS is not, so capitals and spaces work locally and 404 in production.
- **Undecided:** custom domain (currently `<username>.github.io`); whether Color
  Jump keeps its card, since its repo is a private course repo and therefore
  fails the inclusion rule above.

## Brand Commitments

Volunteered by Aditya and binding on future work:

- **Obsidian gold palette**, ported deliberately from his own ARK Integrity
  Systems product: gold `oklch(0.78 0.085 92)` on a warm near-black
  `oklch(0.14 0.004 84)`, with the neutral ramp rebuilt on hue 84 so the greys
  carry the accent's warmth. Light mode uses a deepened gold for contrast.
- **Name-led hero.** His name alone, followed by a typewriter line cycling
  "I am an Engineer / an ML Engineer / an AI enthusiast / an embedded systems
  nerd / a Hokie."
- **No em dashes** anywhere in copy.
- **Structural reference:** nissiotoo.com (name, typewriter line, filterable
  project cards, draggable personal photo wall).
- **Honesty about authorship.** No screenshot or asset from anyone else is
  presented as his work. A course handout's reference screenshots were
  explicitly rejected on these grounds.

## Evidence on Hand

Real and verifiable:

- Public repos: `akaki2027/Personal-Smart-Locker`,
  `akaki2027/Pathogen-Classification`, `akaki2027/Readability-Analyzer`.
- Measured results, from his own reports: locker at 2.33 mA sleep current and
  ~62,800 lock cycles per battery; pathogen classification at mean AUROC
  0.949 / 0.865 / 0.727 across 13 leave-one-dataset-out cohorts.
- YouTube demo videos for the locker.
- Résumé at `public/AdityaKaki-Resume.pdf`.
- Four project card images, all genuine: the locker's own block diagram, a
  rendered results table from the pathogen report, a hardware photo of his
  MSP432 running Color Jump, and a screenshot of his own Readability build.
- Eight personal photos in `public/photos/`.
- Unused source material: ECE 2564 reports for Maze Game and Color Mix.

Absences that future work must not fabricate:

- No testimonials, customers, revenue, or deployment claims for ARK. Customer
  discovery conversations happened; no customers are confirmed.
- No employers beyond the TITAN America internship (May–Aug 2025).
- No awards, hackathon placements, or publications currently established for
  this site.
- The "10+ projects built" stat is his own estimate, not a counted figure.

## Product Principles

1. **Evidence over adjectives.** Every claim should be checkable: a repo, a demo
   video, a measured number. Prefer "2.33 mA asleep" to "power-efficient."
2. **Lead with the hard part.** Describe why something was difficult and what
   the non-obvious decision was, not merely what the thing is.
3. **Show the intersection.** Where it is true, pair the ML and the hardware in
   the same sentence; that pairing is the position.
4. **Never present another person's work as his.**
5. **State gaps honestly.** A missing image, a private repo, or an unfinished
   project is disclosed, not disguised.

## Accessibility & Inclusion

No audience-specific requirement was established, but the current build meets
WCAG AA contrast in both light and dark themes (accent-on-background measured at
9.95:1 dark and 4.69:1 light) and honors `prefers-reduced-motion` by disabling
the marquee, scroll animation, and typewriter. Future work must preserve both.
