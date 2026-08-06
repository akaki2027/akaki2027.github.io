// ---------------------------------------------------------------------------
// PERSONAL PHOTOS  ->  image files go in  public/photos/
//
// These become the scattered, draggable photo wall in the About section:
// you at work, with friends, hobbies, family, game day, travel, competitions.
//
// Project screenshots do NOT go here. Those go in public/projects/ and get
// wired up in projects.js instead.
//
// To add one:
//   1. Drop the image in  public/photos/
//   2. Add a line below: the filename, and a short caption
//
// The caption is the small label printed under the photo, so keep it to
// roughly 2 to 5 words. The order here is the order they're laid out in.
//
// Photos are cropped to 4:5 from the centre. If one crops badly, add a `focus`
// to shift the framing, e.g. `focus: 'center 25%'` to favour the top:
//
//   { file: 'gym.JPG', caption: 'Sibling lifts!', focus: 'center 30%' },
//
// Nine fills the space nicely, which is what the reference site uses. Fewer is
// fine. More just extends the wall downward.
//
// See public/photos/README.md for the full spec.
// ---------------------------------------------------------------------------

export const photos = [
  // Uncomment and edit as you add real files, or write your own lines:
  //
   { file: 'AKinLA.jpeg',       caption: 'Me in LA this past Summer!' },
   { file: 'AKandFam.JPG', caption: 'Me and the Family!' },
   { file: 'AKinGym.JPG',   caption: 'Sibling lifts!' },
   { file: 'CodeFest.JPG',    caption: 'Code Fest!' },
   { file: 'PersonalSmartLocker.JPG',    caption: 'Personal Smart Locker Project Circuit' },
   { file: 'Studying.JPG',  caption: 'Long Nights...' },
   { file: 'MegandAK.JPG', caption: 'Me and my Sister' },
  // { file: 'titan.jpg',     caption: 'Summer at TITAN America' },
  // { file: 'travel.jpg',    caption: 'Somewhere not Virginia' },
]
