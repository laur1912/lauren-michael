// HOW TO ADD A PAINTING
// 1. Make a folder: src/content/paintings/<slug>/
// 2. Put the full photo in it as main.jpg, and close-ups as detail-1.jpg, detail-2.jpg...
// 3. Import them below and add an entry to the list. Order here = order on the wall.

import recharge2 from './paintings/recharge-2/main.jpg';
import recharge from './paintings/recharge/main.jpg';
import goHome from './paintings/i-just-want-to-go-home/main.jpg';
import daisyJ from './paintings/daisy-j/main.jpg';
import beenADay from './paintings/its-been-a-day/main.jpg';
import girlStuff from './paintings/girl-stuff/main.jpg';
import curated from './paintings/curated/main.jpg';
import girlStuff2 from './paintings/girl-stuff-2/main.jpg';
import readingMagazine from './paintings/reading-magazine/main.jpg';
import readingNewspaper from './paintings/reading-newspaper/main.jpg';
import readingBook from './paintings/reading-book/main.jpg';

// Example of adding close-ups once you have them:
// import rechargeDetail1 from './paintings/recharge/detail-1.jpg';
// ...then in the entry: details: [rechargeDetail1],

// The two series. A painting can carry one or both tags.
export const TAGS = {
  thrifted: 'Thrifted Frame Paintings',
  reading: 'Women Reading',
};

export const paintings = [
  {
    slug: 'recharge-2',
    title: 'Recharge #2',
    medium: 'Oil on thrifted frame',
    size: '31 × 38 in',
    tags: [TAGS.thrifted],
    image: recharge2,
    details: [],
    alt: 'Seen from behind, a woman in a red swimsuit and sheer pink wrap sits on a green checkerboard scattered with white heels, cherries, pink flowers, a coin purse, a cocktail and a record player.',
  },
  {
    slug: 'recharge',
    title: 'Recharge',
    medium: 'Oil on thrifted frame',
    size: '26 × 37 in',
    tags: [TAGS.thrifted],
    image: recharge,
    details: [],
    alt: 'A woman gazes upward against a navy and grey diamond checkerboard, surrounded by orange stars, a crescent moon, string lights, a cup of lemon tea, magnolias, a key and a sleeping orange cat.',
  },
  {
    slug: 'i-just-want-to-go-home',
    title: 'I just want to go home',
    medium: 'Oil on thrifted frame',
    size: '26 × 38 in',
    tags: [TAGS.thrifted],
    image: goHome,
    details: [],
    alt: 'A woman holds a glass of rosé over one eye against lilac stripes and a purple checkerboard, with a vinyl record, pocket watch, flowers, cutlery, baguettes and lavender roses.',
  },
  {
    slug: 'daisy-j',
    title: 'Daisy J.',
    medium: 'Oil on thrifted frame',
    size: '17 × 22 in',
    tags: [TAGS.thrifted],
    image: daisyJ,
    details: [],
    alt: 'A woman in blue glasses and a headscarf poses against a navy and periwinkle checkerboard with peach flowers, framed by orange and blue chevrons.',
  },
  {
    slug: 'its-been-a-day',
    title: 'It’s been a day',
    medium: 'Oil on thrifted frame',
    size: '19 × 23 in',
    tags: [TAGS.thrifted],
    image: beenADay,
    details: [],
    alt: 'A red-haired woman in a trench coat holds a blue umbrella beneath striped clouds, above a peach and orange scalloped flower pattern.',
  },
  {
    slug: 'girl-stuff',
    title: 'Girl stuff',
    medium: 'Oil on thrifted frame',
    size: '19 × 26 in',
    tags: [TAGS.thrifted],
    image: girlStuff,
    details: [],
    alt: 'A woman rests her chin on folded arms beside a wine bottle while a black cat looms over her against periwinkle and cream stripes.',
  },
  {
    slug: 'curated',
    title: 'Curated',
    medium: 'Oil on thrifted frame',
    size: '23 × 28 in',
    tags: [TAGS.thrifted],
    image: curated,
    details: [],
    alt: 'A woman in a white shirt and pearls fans herself against navy and white stripes, with a yellow clutch, a perfume bottle, a martini and yellow roses.',
  },
  {
    slug: 'girl-stuff-2',
    title: 'Girl Stuff #2',
    medium: 'Oil on thrifted frame',
    size: '20 × 25 in',
    tags: [TAGS.thrifted],
    image: girlStuff2,
    details: [],
    alt: 'A woman with pink hair leans on her hand against sage stripes, with a wall clock, teacup, playing cards, an open book and red tulips, in a black frame.',
  },
  // TODO: real titles, sizes and medium for the Women Reading series.
  {
    slug: 'reading-magazine',
    title: 'Reading (magazine)',
    medium: 'Oil on canvas',
    size: '',
    tags: [TAGS.reading],
    image: readingMagazine,
    details: [],
    alt: 'A woman in a mauve shirt reads a magazine on a teal armchair against a striped wall scattered with typewriter letters.',
  },
  {
    slug: 'reading-newspaper',
    title: 'Reading (newspaper)',
    medium: 'Oil on canvas',
    size: '',
    tags: [TAGS.reading],
    image: readingNewspaper,
    details: [],
    alt: 'A woman in a blue head towel reads a newspaper in a green chair beside a side table holding tea and a martini.',
  },
  {
    slug: 'reading-book',
    title: 'Reading (book)',
    medium: 'Oil on canvas',
    size: '',
    tags: [TAGS.reading],
    image: readingBook,
    details: [],
    alt: 'A woman in a white robe curls up in an armchair reading a book, with a laundry basket beside her in soft blue light.',
  },
];
