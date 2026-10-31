import { useId } from 'react';

const BRANCH_PATTERNS = [
  [
    ['root', 'M 0 43 C 2 24 13 7 35 1 C 39 0 44 0 50 0'],
    ['branch', 'M 4 31 C 13 29 18 24 22 17 L 28 9'],
    ['branch', 'M 11 13 C 18 14 22 11 26 5'],
    ['branch', 'M 19 23 C 27 24 32 20 36 13'],
    ['branch', 'M 26 9 C 32 10 37 8 42 3'],
    ['twig', 'M 15 24 L 10 19 M 15 24 L 20 22'],
    ['twig', 'M 22 17 L 20 10 M 22 17 L 28 17'],
    ['twig', 'M 28 9 L 27 3 M 28 9 L 34 8'],
    ['twig', 'M 35 1 L 37 7 M 35 1 L 42 1'],
    ['twig', 'M 36 13 L 42 14 M 36 13 L 39 8'],
  ],
  [
    ['root', 'M 0 49 C 1 29 9 12 25 4 C 32 0 40 0 48 0'],
    ['branch', 'M 3 34 C 12 32 17 27 19 19 C 21 13 25 9 32 7'],
    ['branch', 'M 9 19 C 16 18 20 14 22 7'],
    ['branch', 'M 18 27 C 26 29 33 25 37 18'],
    ['branch', 'M 28 8 C 35 12 40 9 45 4'],
    ['twig', 'M 12 31 L 8 25 M 12 31 L 18 29'],
    ['twig', 'M 19 19 L 15 13 M 19 19 L 25 17'],
    ['twig', 'M 22 7 L 20 1 M 22 7 L 28 5'],
    ['twig', 'M 37 18 L 44 19 M 37 18 L 39 12'],
    ['twig', 'M 32 7 L 33 1 M 32 7 L 39 6'],
  ],
  [
    ['root', 'M 0 38 C 5 20 16 7 32 2 C 38 0 43 0 50 0'],
    ['branch', 'M 4 28 C 12 27 17 21 21 14 C 24 10 29 7 35 6'],
    ['branch', 'M 12 15 C 18 17 24 13 27 5'],
    ['branch', 'M 20 20 C 28 23 34 20 40 12'],
    ['branch', 'M 33 3 C 38 8 43 7 48 3'],
    ['twig', 'M 8 28 L 4 22 M 8 28 L 14 26'],
    ['twig', 'M 21 14 L 18 8 M 21 14 L 27 13'],
    ['twig', 'M 27 5 L 26 0 M 27 5 L 33 4'],
    ['twig', 'M 40 12 L 47 13 M 40 12 L 42 6'],
    ['twig', 'M 35 6 L 37 1 M 35 6 L 42 5'],
  ],
  [
    ['root', 'M 0 46 C 3 27 15 10 33 3 C 40 0 45 0 50 0'],
    ['branch', 'M 4 34 C 14 31 18 25 24 16 C 27 12 31 9 38 7'],
    ['branch', 'M 12 21 C 18 21 24 17 26 9'],
    ['branch', 'M 21 25 C 29 29 36 23 40 16'],
    ['branch', 'M 34 3 C 39 8 45 7 49 4'],
    ['twig', 'M 14 29 L 10 24 M 14 29 L 20 27'],
    ['twig', 'M 24 16 L 22 10 M 24 16 L 30 14'],
    ['twig', 'M 26 9 L 24 3 M 26 9 L 32 8'],
    ['twig', 'M 40 16 L 46 18 M 40 16 L 42 10'],
    ['twig', 'M 38 7 L 40 1 M 38 7 L 45 6'],
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
            viewBox="0 0 52 52"
            key={corner}
            focusable="false"
          >
            {pattern.map(([kind, d], pathIndex) => (
              <path
                key={d}
                className={`frost-${kind}`}
                d={d}
                pathLength="1"
                style={{ '--branch-delay': `${(seed + cornerIndex * 83 + pathIndex * 67) % 520}ms` }}
              />
            ))}
          </svg>
        );
      })}
    </span>
  );
}
