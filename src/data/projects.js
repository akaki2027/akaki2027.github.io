// ---------------------------------------------------------------------------
// YOUR PROJECTS GO HERE.
//
// The site reads this array. Add an object per project and it appears in the
// grid, with its tags automatically becoming filter buttons. No other file
// needs to change.
//
// Images: drop the file in `public/projects/` and set `image` to the filename
// only, e.g. 'ark-integrity.jpg' for `public/projects/ark-integrity.jpg`.
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
//   image: 'ark-integrity.jpg',            // optional
//   portrait: true,                        // optional, tall photo: splits the card
//   tags: ['Embedded Systems', 'Security'],// MUST come from `categories` in site.js
//   metric: { value: '7.2 ms', label: 'inference per frame' },
//   tech: ['C++', 'Jetson', 'TPM 2.0'],    // small chips under the blurb
//   repo: 'https://github.com/you/ark',    // optional
//   demo: 'https://...',                   // optional
//   featured: true,                        // optional, spans 2 columns
// }
//
// `metric` is the single number that best characterises the project. It must be
// a real measured or counted value from your own reports, benchmarks, or code.
// Leave it off rather than inventing one: an absent metric is honest, a made-up
// one is the thing an interviewer will catch.
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
      'A bridge box that signs CCTV footage at the moment of capture, so a recording can be proved unedited later instead of merely asserted to be. A Jetson Orin Nano intercepts the camera RTSP streams, hashes frames into a Merkle tree, and signs the roots with a key that never leaves an on-board TPM. YOLOv8n runs on the same device at 7.2 ms a frame through TensorRT, which clears the budget for eight cameras where the 43.8 ms CPU path does not. The binding constraint turned out to be the TPM rather than the GPU: it signs about 1.6 times a second, and that ceiling, not the detector, is what sets how long each evidence chunk has to be.',
    image: 'ark-integrity.jpg',
    // Tall photo: the featured card splits into image + text instead of
    // cropping it into a banner.
    portrait: true,
    metric: { value: '7.2 ms', label: 'TensorRT inference, per frame' },
    tags: ['Embedded Systems', 'Security', 'AI / ML'],
    tech: ['C++', 'Jetson Orin Nano', 'TPM 2.0', 'ECDSA P-256', 'TensorRT', 'RTSP'],
    featured: true,
  },
  {
    slug: 'orchestra',
    title: 'Orchestra',
    badge: 'Work in progress',
    blurb:
      'A self-hosted multi-agent orchestrator, open source and in active development. A planning agent turns a request into a DAG of subtasks and runs the independent branches in parallel, some on local models through Ollama and some on hosted APIs within the same run. Local inference is RAM-bound and slow, so each provider gets its own concurrency lane and a laptop model never holds up a cloud agent. Local and hosted are also different trust boundaries: every call passes one guarded provider registry that swaps PII for stable placeholders before it crosses to a hosted model, enforces local-only pinning at the API, and writes a per-run ledger of what was sent, redacted, or blocked.',
    image: 'orchestra.jpg',
    metric: { value: '43.3 s', label: 'wall time vs 78.2 s summed, 11 tasks' },
    tags: ['AI / ML', 'Software'],
    tech: ['Python', 'FastAPI', 'Ollama', 'Anthropic API', 'MCP', 'SSE'],
    repo: 'https://github.com/akaki2027/orchestra',
  },
  {
    slug: 'shani',
    title: 'Shani',
    badge: 'Work in progress',
    blurb:
      'A futures trading journal that records why a trade was taken, not just what it made. It connects to TradingView Desktop over the Chrome DevTools Protocol, so every fill is saved with a screenshot of the chart that was actually on screen, and 90 seconds later it asks what the reasoning was while it is still fresh. An LLM distils each answer into a versioned setup card, and when a matching signal fires again it surfaces that setup with its own track record. It runs on a paper broker only: live adapters are never registered unless explicitly enabled, so the path to real money does not exist at runtime.',
    tags: ['AI / ML', 'Software'],
    tech: ['Python', 'FastAPI', 'Next.js', 'Chrome DevTools Protocol', 'Anthropic API', 'Ollama'],
    repo: 'https://github.com/akaki2027/Shani-Futures-Trading-Harness',
  },
  {
    slug: 'personal-smart-locker',
    title: 'Personal Smart Locker',
    badge: 'Bare metal',
    blurb:
      'A passcode-secured locker running on a bare ATmega328P: no Arduino board, no Arduino libraries, every peripheral driven straight through the registers. Timer1 fast PWM holds the latch servo, a single ADC pin decodes a 12-key matrix keypad off a resistor ladder, and the chip sleeps between uses. Passcodes are hashed with FNV-1a before they reach EEPROM, so dumping the chip does not hand you the PIN, and the hash survives a full power loss. At 2.33 mA asleep that works out to roughly 62,800 lock cycles on one 9 V pack.',
    image: 'personal-smart-locker.png',
    metric: { value: '2.33 mA', label: 'sleep current' },
    tags: ['Embedded Systems', 'Hardware', 'Security'],
    tech: ['C', 'ATmega328P', 'AVR', 'PWM', 'ADC', 'EEPROM'],
    repo: 'https://github.com/akaki2027/Personal-Smart-Locker',
    demo: 'https://youtube.com/shorts/-GK4X4ShGR0',
    demoLabel: 'Demo video',
  },
  {
    slug: 'pathogen-classification',
    title: 'Pathogen Classification from Blood Transcriptomics',
    blurb:
      "Separates bacterial infection, viral infection, and healthy from whole-blood gene expression across 14 public GEO cohorts and 1,700+ patient samples. The classifier is not the hard part. Every cohort comes from a different lab on different hardware, so the pipeline validates leave-one-dataset-out: train on 13 studies, test on the one never seen. Four model families run over identical folds, and the result is a split rather than a single score. Healthy versus infected is close to solved at 0.949 AUROC; separating viral from bacterial is not, at 0.727, and that gap is the actual finding.",
    // Table 5 from the report: per-cohort LODO results across all 13 datasets.
    image: 'pathogen-classification.png',
    metric: { value: '0.727', label: 'AUROC, viral: the hard class' },
    tags: ['AI / ML'],
    tech: ['PyTorch', 'XGBoost', 'scikit-learn', 'pandas', 'R'],
    repo: 'https://github.com/akaki2027/Pathogen-Classification',
  },
  {
    slug: 'color-jump',
    title: 'Color Jump',
    blurb:
      "An FSM-driven arcade game on an MSP432 LaunchPad, where the player jumps along a scrolling floor and has to match its colour or fall through. The interesting problem is redrawing. The OLED sits behind SPI, so repainting the whole frame each tick makes the animation crawl. Instead every jump records the rectangle the player just vacated, and only that region plus the new position gets repainted, which keeps motion smooth on a bus that could not sustain a full refresh. A joystick-driven colour wheel swaps the player between four colours, and difficulty changes both the scoring rate and the floor's scroll speed together.",
    image: 'color-jump.jpg',
    tags: ['Embedded Systems'],
    tech: ['C', 'MSP432', 'SPI', 'FSM', 'Joystick'],
    repo: 'https://github.com/akaki2027/msp432-Color-Jump',
  },
  {
    slug: 'readability-analyzer',
    title: 'Readability Analyzer',
    blurb:
      'A Qt desktop app scoring how hard a text is to read, via Flesch Reading Ease, Flesch-Kincaid, and Gunning Fog. All three formulas rest on counting syllables, which English has no reliable rule for, so the syllabizer reduces each word to a vowel and consonant pattern and splits on that, with prefix and suffix lists catching what the pattern gets wrong. Words are matched against a 74,000-entry lexicon to drive a part-of-speech colourised view. Tokenising runs on a thread pool and files load off the UI thread, so a multi-megabyte document fills its statistics in progressively instead of freezing the window.',
    image: 'readability-analyzer.png',
    metric: { value: '74,000', label: 'word lexicon' },
    tags: ['Software'],
    tech: ['C++17', 'Qt 6', 'CMake', 'Multithreading', 'Catch2'],
    repo: 'https://github.com/akaki2027/Readability-Analyzer',
  },
]
