// ---------------------------------------------------------------------------
// Everything about you, in one place. Edit this file, not the components.
// ---------------------------------------------------------------------------

export const GITHUB_USERNAME = 'akaki2027'

export const site = {
  name: 'Aditya Kaki',
  initials: 'AK',
  // The big line on the landing screen. Keep it short — it's set very large.
  // `headlineAccent` renders in orange, right after `headline`.
  headline: 'I build systems',
  headlineAccent: 'you can trust.',
  // One or two sentences under the headline.
  blurb:
    'Computer engineering student at Virginia Tech working where embedded hardware meets machine learning — cryptographic video integrity, edge inference, and the unglamorous plumbing that makes both hold up under scrutiny.',
  location: 'Blacksburg, VA',
  resume: 'AdityaKaki-Resume.pdf', // lives in /public
}

export const links = {
  email: 'akaki2027@vt.edu',
  linkedin: 'https://linkedin.com/in/adityarkaki',
  github: `https://github.com/${GITHUB_USERNAME}`,
}

// The `{ }` block rendered in the About section. Keys are shown verbatim.
export const aboutObject = {
  location: '"Blacksburg, VA"',
  school: '"Virginia Tech"',
  degree: '"B.S. Computer Engineering"',
  concentration: '"Machine Learning"',
  graduating: 'May 2027',
  focus: '["Embedded Systems", "ML", "Security"]',
  currentlyBuilding: '"ARK Integrity Systems"',
}

export const aboutParagraphs = [
  "I'm a computer engineering student at Virginia Tech, concentrating in machine learning and spending most of my time a layer or two below where people usually look — firmware, hardware key storage, inference on devices that have no business running a neural network.",
  "Right now I'm building ARK Integrity Systems, a platform that cryptographically signs CCTV footage the instant it's captured, so it can't be quietly edited later and still pass as real. It's a hardware problem, a cryptography problem, and a talking-to-attorneys problem all at once, which is roughly why it's interesting.",
  "Before that I spent a summer at TITAN America turning a pile of Excel sheets and scanned engineering documents into digital infrastructure their corporate engineering team still runs on. Less glamorous, same lesson: most of the value is in the parts nobody wants to do carefully.",
]

// Shown as big numbers in the About section.
export const stats = [
  { value: '2027', label: 'Expected grad' },
  // TODO(aditya): update these two once you know the real numbers.
  { value: '10+', label: 'Projects built' },
  { value: '5+', label: 'Languages' },
]

// The filter buttons above the project grid, in the order they appear.
// A project's `tags` must come from this list — anything else won't get a button.
// Categories with no projects in them are hidden automatically, so you can add
// future ones here now and they'll appear the moment a project uses them.
export const categories = [
  'AI / ML',
  'Embedded Systems',
  'Computer Vision',
  'Hardware',
  'Security',
  'Web Dev',
  'Hackathon',
]

// Grouped for the tech section. Add or remove freely.
export const techStack = [
  { group: 'Languages', items: ['Python', 'C', 'C++', 'Java', 'Verilog'] },
  { group: 'ML & Data', items: ['PyTorch', 'scikit-learn', 'XGBoost', 'pandas', 'NumPy', 'TensorRT', 'Tesseract OCR'] },
  { group: 'Systems', items: ['Linux', 'Git', 'MATLAB', 'Quartus', 'Docker', 'CUDA'] },
  { group: 'Hardware', items: ['Jetson Orin Nano', 'TPM 2.0', 'Raspberry Pi CM4', 'Arduino', 'DE-10 Lite FPGA', 'PCB Prototyping', 'NFC/RFID'] },
]
