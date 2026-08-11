// ---------------------------------------------------------------------------
// YOUR PROJECTS GO HERE.
//
// The site reads this array. Add an object per project and it appears in the
// grid, with its tags automatically becoming filter buttons. No other file
// needs to change.
//
// Images: drop the file in `public/projects/` and set `image` to the filename
// only, e.g. 'ark-integrity.png' for `public/projects/ark-integrity.png`.
// Landscape images around 1200x750 look best. Leave `image` out and the card
// falls back to a generated monogram tile, so nothing breaks while you wait.
//
// A full example, copy this shape:
//
// {
//   slug: 'ark-integrity',                 // unique, lowercase, no spaces
//   title: 'ARK Integrity Systems',
//   badge: 'In progress',                  // optional, pill next to the title
//   blurb: 'One or two sentences. What it does and why it is hard.',
//   image: 'ark-integrity.png',            // optional
//   tags: ['Embedded Systems', 'Security'],// MUST come from `categories` in site.js
//   metric: { value: '2.33 mA', label: 'sleep current' },  // optional, real measured values only
//   tech: ['C++', 'Jetson', 'TPM 2.0'],    // small chips under the blurb
//   repo: 'https://github.com/you/ark',    // optional
//   demo: 'https://...',                   // optional
//   featured: true,                        // optional, spans 2 columns
// }
// ---------------------------------------------------------------------------

export const projects = [
  {
    // The one project without a public repo. PRODUCT.md records it as the
    // single exception to the public-repo rule: it is the venture he is
    // building, not something to browse.
    slug: 'ark-integrity',
    title: 'ARK Integrity Systems',
    badge: 'In progress',
    blurb:
      'An embedded bridge that cryptographically signs CCTV footage at the moment it is captured, so a recording can later be proved unedited. Right now it is a working prototype: an off-the-shelf camera feeding custom hardware that hashes each frame and signs it with a key held in the device itself.',
    image: 'ark-integrity.jpg',
    tags: ['Embedded Systems', 'Security', 'AI / ML'],
    tech: ['C++', 'Jetson Orin Nano', 'TPM 2.0', 'ECDSA', 'RTSP', 'TensorRT'],
    featured: true,
  },
  {
    slug: 'personal-smart-locker',
    metric: { value: '2.33 mA', label: 'sleep current' },
    title: 'Personal Smart Locker',
    badge: 'Bare metal',
    blurb:
      'A passcode-secured locker running on a bare ATmega328P: no Arduino board, no Arduino libraries, every peripheral driven straight through the registers. Timer1 fast PWM for the latch servo, one ADC pin decoding a 12-key matrix keypad, EEPROM for credentials, and power-down sleep between uses. Passcodes are hashed with FNV-1a before they are stored, so dumping the chip does not hand you the PIN. Measured at 2.33 mA asleep, about 62,800 lock cycles per battery.',
    image: 'personal-smart-locker.png',
    tags: ['Embedded Systems', 'Hardware', 'Security'],
    tech: ['C', 'ATmega328P', 'AVR', 'PWM', 'ADC', 'EEPROM'],
    repo: 'https://github.com/akaki2027/Personal-Smart-Locker',
    demo: 'https://youtube.com/shorts/-GK4X4ShGR0',
    demoLabel: 'Demo video',
  },
  {
    slug: 'pathogen-classification',
    metric: { value: '0.949', label: 'mean AUROC, healthy' },
    title: 'Pathogen Classification from Blood Transcriptomics',
    blurb:
      "Tells bacterial infection, viral infection, and healthy apart from whole-blood gene expression, across 14 public GEO cohorts and 1,700+ patient samples. The classifier isn't the hard part. Every cohort comes from a different lab with its own batch effects, so the whole pipeline validates leave-one-dataset-out: train on 13 studies, test on the one it has never seen. Four model families run head to head over the same folds, reaching AUROC above 0.94 in the strongest cohorts.",
    // Table 5 from the report: per-cohort LODO results across all 13 datasets.
    image: 'pathogen-classification.png',
    tags: ['AI / ML'],
    tech: ['PyTorch', 'XGBoost', 'scikit-learn', 'pandas', 'R'],
    repo: 'https://github.com/akaki2027/Pathogen-Classification',
  },
  {
    slug: 'color-jump',
    title: 'Color Jump',
    badge: 'Course project',
    blurb:
      "An FSM-driven arcade game on an MSP432 LaunchPad, where the player jumps along a scrolling floor and has to match its colour or fall through it. The interesting problem is redrawing: the OLED sits behind SPI, so repainting the whole frame makes the animation crawl. Instead each jump records the player's previous rectangle and only that region plus the new position gets redrawn, which keeps the motion smooth. A joystick-driven colour wheel swaps the player between four colours, and two difficulty levels change both the scoring rate and the floor's scroll speed.",
    image: 'color-jump.jpg',
    tags: ['Embedded Systems'],
    tech: ['C', 'MSP432', 'SPI', 'FSM', 'Joystick'],
  },
  {
    slug: 'readability-analyzer',
    metric: { value: '74,000', label: 'word lexicon' },
    title: 'Readability Analyzer',
    blurb:
      'A Qt desktop app that scores how hard a piece of writing is to read, using Flesch Reading Ease, Flesch-Kincaid, and Gunning Fog. All three formulas hang on counting syllables, which English has no reliable rule for, so the syllabizer reduces each word to a vowel/consonant pattern and splits on that, with prefix and suffix lists catching what the pattern misses. Words are looked up against a 74,000-word lexicon to drive a part-of-speech colorized view. Tokenizing runs on a thread pool and files load off the UI thread, so a multi-megabyte document never freezes the window.',
    image: 'readability-analyzer.png',
    tags: ['Software'],
    tech: ['C++17', 'Qt 6', 'CMake', 'Multithreading', 'Catch2'],
    repo: 'https://github.com/akaki2027/Readability-Analyzer',
  },
]
