const ROOTS = [
  { kind: 'trunk', d: 'M 3 5 C 52 5 62 34 96 47 S 148 68 178 105 S 236 138 292 154 S 354 184 405 212' },
  { kind: 'trunk soft', d: 'M 4 24 C 55 24 76 55 108 78 S 166 106 197 143 S 246 173 294 195' },
  { kind: 'branch', d: 'M 52 7 C 58 27 76 34 102 34 L 129 18 L 153 18' },
  { kind: 'branch', d: 'M 96 47 C 102 22 125 13 144 4' },
  { kind: 'branch', d: 'M 96 47 C 110 62 111 84 104 104 L 82 126' },
  { kind: 'branch', d: 'M 148 68 C 164 43 187 36 212 39 L 237 25' },
  { kind: 'branch', d: 'M 148 68 C 155 92 177 105 202 105 L 225 91' },
  { kind: 'branch', d: 'M 178 105 C 204 89 222 91 243 105 L 260 129' },
  { kind: 'branch', d: 'M 197 143 C 218 128 240 132 258 150 L 271 176' },
  { kind: 'branch', d: 'M 236 138 C 252 117 276 113 296 122 L 317 107' },
  { kind: 'branch', d: 'M 246 173 C 270 164 291 173 309 193 L 316 218' },
  { kind: 'branch', d: 'M 294 154 C 317 138 340 144 359 161 L 382 162' },
  { kind: 'branch', d: 'M 354 184 C 375 175 397 182 415 199' },
  { kind: 'twig', d: 'M 129 18 L 126 4 M 129 18 L 145 28' },
  { kind: 'twig', d: 'M 82 126 L 62 128 M 82 126 L 80 145' },
  { kind: 'twig', d: 'M 212 39 L 214 20 M 212 39 L 231 46' },
  { kind: 'twig', d: 'M 225 91 L 245 79 M 225 91 L 244 99' },
  { kind: 'twig', d: 'M 271 176 L 288 165 M 271 176 L 271 196' },
  { kind: 'twig', d: 'M 317 107 L 317 88 M 317 107 L 337 114' },
  { kind: 'twig', d: 'M 382 162 L 397 148 M 382 162 L 404 173' }
];

const MIRRORS = [
  'translate(1000 0) scale(-1 1)',
  'translate(0 600) scale(1 -1)',
  'translate(1000 600) scale(-1 -1)'
];

function BranchGroup({ transform, corner = 'tl' }) {
  return (
    <g className={`frost-root-group frost-root-group--${corner}`} transform={transform}>
      {ROOTS.map((root, index) => (
        <path
          key={`${root.d}-${index}`}
          className={`frost-line ${root.kind.split(' ').map((kind) => `frost-line--${kind}`).join(' ')}`}
          d={root.d}
          pathLength="1"
          style={{ '--frost-delay': `${index < 2 ? 0 : 210 + index * 58}ms` }}
        />
      ))}
    </g>
  );
}

export default function FrostFrame() {
  return (
    <svg className="frost-frame" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <BranchGroup corner="tl" />
      <BranchGroup transform={MIRRORS[0]} corner="tr" />
      <BranchGroup transform={MIRRORS[1]} corner="bl" />
      <BranchGroup transform={MIRRORS[2]} corner="br" />
    </svg>
  );
}
