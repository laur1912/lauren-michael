// Counts lock requests so the entrance and an open window
// can both lock scrolling without unlocking each other.
let locks = 0;

export function lockScroll() {
  locks += 1;
  document.documentElement.style.overflow = 'hidden';
}

export function unlockScroll() {
  locks = Math.max(0, locks - 1);
  if (locks === 0) document.documentElement.style.overflow = '';
}
