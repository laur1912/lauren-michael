// Submission: Dragonfly Gallery, small works exhibition (deadline Oct. 25).
// This page lives at /apply/dragonfly and is hidden from search engines.

import { TAGS } from '@/content/paintings';
import cuppa from '../paintings/cuppa/main.jpg';
import year1959 from '../paintings/1959/main.jpg';

export const application = {
  venue: 'Dragonfly Gallery',
  call: 'Small works exhibition',
  // Bio for this submission only. The main site keeps its own About text.
  bio: [
    'I’m Lauren, a Chicagoland-based painter whose figurative work translates feelings like loneliness, boredom and longing into color. Working primarily in oils (and occasionally mixed media), I’ve developed my voice through years of practice alongside workshops, classes and courses—less “self-taught” than constantly taught by community and repetition. For these small works, I left the figures out of the frame and let the objects carry the feeling—what we reach for, what we use as props, and what still doesn’t fill the space.',
  ],
  works: [
    {
      slug: 'cuppa',
      entry: 1,
      title: 'Cuppa',
      medium: 'Oil on thrifted frame',
      size: '9 × 11 in',
      year: '2026',
      price: '$250',
      tags: [TAGS.thrifted],
      image: cuppa,
      details: [],
      alt: 'A lavender teacup with a slice of lemon on a navy and cream checkerboard, its steam rising in blocks of orange and rust, painted across the frame’s molding.',
    },
    {
      slug: '1959',
      entry: 2,
      title: '1959',
      medium: 'Oil on thrifted frame',
      size: '10 × 12 in',
      year: '2026',
      price: '$250',
      tags: [TAGS.thrifted],
      image: year1959,
      details: [],
      alt: 'A mint green rotary phone with its receiver off the hook on a burgundy and pink checkerboard, beside a slice of cherry lattice pie and a cigarette resting in a glass ashtray.',
    },
  ],
};
