import { useId } from 'react';

// Asymmetric ice dendrites: two main veins leave each corner and divide into
// fine angular branches. They are crystalline growth patterns, not snowflake icons.
const BRANCH_PATTERNS = [
  [
    ['root', 'M 1 1 C 15 2 25 8 39 22'],
    ['root', 'M 1 1 C 2 15 8 25 22 39'],
    ['branch', 'M 12 4 C 14 10 19 14 26 16'],
    ['branch', 'M 4 12 C 10 14 14 19 16 26'],
    ['branch', 'M 26 16 L 34 13 M 26 16 L 31 23'],
    ['branch', 'M 16 26 L 13 34 M 16 26 L 23 31'],
    ['twig', 'M 19 12 L 17 7 M 19 12 L 24 11'],
    ['twig', 'M 11 19 L 7 17 M 11 19 L 12 24'],
    ['twig', 'M 34 13 L 37 8 M 34 13 L 40 14'],
    ['twig', 'M 13 34 L 8 37 M 13 34 L 14 40'],
    ['twig', 'M 31 23 L 37 23 M 31 23 L 33 29'],
    ['twig', 'M 23 31 L 23 37 M 23 31 L 29 33'],
  ],
  [
    ['root', 'M 1 1 C 17 3 27 10 42 26'],
    ['root', 'M 1 1 C 3 17 10 27 26 42'],
    ['branch', 'M 14 5 C 16 12 21 17 29 20'],
    ['branch', 'M 5 14 C 12 16 17 21 20 29'],
    ['branch', 'M 29 20 L 37 17 M 29 20 L 35 27'],
    ['branch', 'M 20 29 L 17 37 M 20 29 L 27 35'],
    ['twig', 'M 21 15 L 20 9 M 21 15 L 27 14'],
    ['twig', 'M 15 21 L 9 20 M 15 21 L 14 27'],
    ['twig', 'M 37 17 L 41 11 M 37 17 L 44 18'],
    ['twig', 'M 17 37 L 11 41 M 17 37 L 18 44'],
    ['twig', 'M 35 27 L 42 28 M 35 27 L 37 34'],
    ['twig', 'M 27 35 L 28 42 M 27 35 L 34 37'],
  ],
  [
    ['root', 'M 1 1 C 13 1 27 9 40 20'],
    ['root', 'M 1 1 C 1 13 9 27 20 40'],
    ['branch', 'M 10 3 C 12 9 17 13 24 17'],
    ['branch', 'M 3 10 C 9 12 13 17 17 24'],
    ['branch', 'M 24 17 L 32 12 M 24 17 L 30 24'],
    ['branch', 'M 17 24 L 12 32 M 17 24 L 24 30'],
    ['twig', 'M 17 12 L 14 6 M 17 12 L 23 10'],
    ['twig', 'M 12 17 L 6 14 M 12 17 L 10 23'],
    ['twig', 'M 32 12 L 35 6 M 32 12 L 39 13'],
    ['twig', 'M 12 32 L 6 35 M 12 32 L 13 39'],
    ['twig', 'M 30 24 L 37 24 M 30 24 L 32 31'],
    ['twig', 'M 24 30 L 24 37 M 24 30 L 31 32'],
  ],
  [
    ['root', 'M 1 1 C 16 4 28 12 43 29'],
    ['root', 'M 1 1 C 4 16 12 28 29 43'],
    ['branch', 'M 13 6 C 15 13 21 18 28 22'],
    ['branch', 'M 6 13 C 13 15 18 21 22 28'],
    ['branch', 'M 28 22 L 37 19 M 28 22 L 34 30'],
    ['branch', 'M 22 28 L 19 37 M 22 28 L 30 34'],
    ['twig', 'M 19 16 L 17 10 M 19 16 L 25 15'],
    ['twig', 'M 16 19 L 10 17 M 16 19 L 15 25'],
    ['twig', 'M 37 19 L 42 13 M 37 19 L 45 21'],
    ['twig', 'M 19 37 L 13 42 M 19 37 L 21 45'],
    ['twig', 'M 34 30 L 41 31 M 34 30 L 36 37'],
    ['twig', 'M 30 34 L 31 41 M 30 34 L 37 36'],
  ],
];

function hashSeed(value) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

const CORNERS = ['tl', 'tr', 'br', 'bl'];

export default function FrostFrame() {
  const id = useId();
  const seed = hashSeed(id);

  return (
    <span className="frost-frame" aria-hidden="true">
      {CORNERS.map((corner, cornerIndex) => {
        const patternIndex = (seed + cornerIndex * 7) % BRANCH_PATTERNS.length;
        const pattern = BRANCH_PATTERNS[patternIndex];
        return (
          <svg
            className={`frost-corner frost-corner--${corner}`}
            viewBox="0 0 48 48"
            key={corner}
            focusable="false"
          >
            {pattern.map(([kind, d], pathIndex) => (
              <path
                key={d}
                className={`frost-${kind}`}
                d={d}
                pathLength="1"
                style={{ '--branch-delay': `${(seed + cornerIndex * 83 + pathIndex * 67) % 420}ms` }}
              />
            ))}
          </svg>
        );
      })}
    </span>
  );
}
