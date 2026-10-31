const CORNER = [
  { kind: 'trunk', d: 'M 2 43 C 2 29 2 16 2 2 C 16 2 29 2 43 2' },
  { kind: 'branch', d: 'M 2 30 C 9 29 13 25 17 19 C 19 15 21 12 26 10' },
  { kind: 'branch', d: 'M 2 20 C 8 20 11 16 13 11 L 17 6' },
  { kind: 'branch', d: 'M 12 2 C 12 9 16 13 23 15 L 29 17' },
  { kind: 'branch', d: 'M 25 2 C 25 7 29 10 35 11' },
  { kind: 'branch', d: 'M 2 36 C 9 36 13 32 17 28 L 22 24' },
  { kind: 'twig', d: 'M 9 22 L 7 16 M 9 22 L 15 21' },
  { kind: 'twig', d: 'M 17 19 L 16 13 M 17 19 L 23 19' },
  { kind: 'twig', d: 'M 13 11 L 8 9 M 13 11 L 14 5' },
  { kind: 'twig', d: 'M 23 15 L 21 9 M 23 15 L 29 13' },
  { kind: 'twig', d: 'M 17 28 L 12 26 M 17 28 L 18 34' },
  { kind: 'twig', d: 'M 35 11 L 34 6 M 35 11 L 41 13' },
];
const MIRRORS = ['translate(100 0) scale(-1 1)','translate(0 100) scale(1 -1)','translate(100 100) scale(-1 -1)'];

export default function FrostFrame() {
  return (
    <svg className="frost-frame" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      {[null, ...MIRRORS].map((transform, corner) => (
        <g className="frost-corner" transform={transform || undefined} key={corner}>
          {CORNER.map((path, index) => (
            <path key={path.d} className={\`frost-\${path.kind}\`} d={path.d} pathLength="1"
              style={{ '--branch-delay': \`\${corner * 45 + index * 58}ms\` }} />
          ))}
        </g>
      ))}
    </svg>
  );
}
