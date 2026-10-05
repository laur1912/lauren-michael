// Hand-painted vertical stripes, like the walls in the paintings.
// Paths come from a seeded random generator so the server and browser draw the same wall.

function seeded(seed) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const fmt = ([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`;

// Catmull-Rom through the points, written as cubic Béziers.
function smooth(points) {
  let d = '';
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${fmt(c1)} ${fmt(c2)} ${fmt(p2)}`;
  }
  return d;
}

function buildStripes({ width, count, seed, wobble }) {
  const rand = seeded(seed);
  const band = width / count;
  const rows = 8;
  const paths = [];
  for (let s = 1; s < count; s += 2) {
    const x0 = s * band;
    const x1 = x0 + band;
    const left = [];
    const right = [];
    for (let r = 0; r <= rows; r++) {
      const y = -2 + (r / rows) * 104;
      left.push([x0 + (rand() - 0.5) * wobble, y]);
      right.push([x1 + (rand() - 0.5) * wobble, y]);
    }
    right.reverse();
    paths.push(
      `M${fmt(left[0])}${smooth(left)} L${fmt(right[0])}${smooth(right)} Z`
    );
  }
  return paths;
}

const cache = new Map();

/**
 * width: total wall width in viewBox units (height is always 100)
 * viewX / viewWidth: which slice of the wall this SVG shows
 */
export default function StripedWall({
  base,
  stripe,
  count = 16,
  width = 200,
  seed = 7,
  wobble = 2.2,
  viewX = 0,
  viewWidth = width,
  className,
}) {
  const key = `${width}-${count}-${seed}-${wobble}`;
  if (!cache.has(key)) cache.set(key, buildStripes({ width, count, seed, wobble }));
  const paths = cache.get(key);

  return (
    <svg
      className={className}
      viewBox={`${viewX} 0 ${viewWidth} 100`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="0" y="0" width={width} height="100" fill={base} />
      {paths.map((d, i) => (
        <path key={i} d={d} fill={stripe} />
      ))}
    </svg>
  );
}
