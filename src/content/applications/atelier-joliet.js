// Submission: Atelier Joliet, group show "Exploratory Motion" (Nov. 2026 to Jan. 2027).
// This page lives at /apply/atelier-joliet and is hidden from search engines.

import { TAGS } from '@/content/paintings';
import recharge2 from '../paintings/recharge-2/main.jpg';

export const application = {
  venue: 'Atelier Joliet',
  call: 'Group show, Exploratory Motion',
  bio: [
    'I’m Lauren Michael Parker, a Chicagoland-based painter whose figurative work turns feelings like loneliness and longing into color and patterns, mostly in oils. I’ve developed my voice through years of practice alongside workshops, classes, and courses, less “self-taught” than constantly taught by community and repetition. Much of my recent work is painted directly onto thrifted frames, with the pattern carried over the molding so the frame becomes part of the painting. In Recharge #2, a woman dances with her back to the viewer while a sheer pink wrap follows the turn of her body. I painted the fabric as a translucent layer over the checkerboard floor, so the pattern shows through it and bends with her movement. Around her, stripes and checkerboards meet at different angles, which keeps the whole surface moving.',
  ],
  works: [
    {
      slug: 'recharge-2',
      entry: 1,
      title: 'Recharge #2',
      medium: 'Oil on thrifted frame',
      size: '31 × 38 in',
      price: '$875',
      tags: [TAGS.thrifted],
      image: recharge2,
      details: [],
      alt: 'Seen from behind, a woman in a red swimsuit and sheer pink wrap dances on a green checkerboard scattered with white heels, cherries, pink flowers, a coin purse, a cocktail and a record player.',
    },
  ],
};
