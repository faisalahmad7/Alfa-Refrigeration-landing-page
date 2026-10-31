const CORNER_PATHS = [
  { className: 'frost-root', d: 'M 3 35 C 5 27 10 22 16 17 C 22 12 26 7 35 3' },
  { className: 'frost-root frost-root--soft', d: 'M 7 28 C 13 29 17 25 21 19 C 24 15 27 11 32 9' },
  { className: 'frost-branch', d: 'M 11 22 L 17 24 L 22 21 L 25 16' },
  { className: 'frost-branch', d: 'M 17 16 L 18 10 L 23 5' },
  { className: 'frost-branch', d: 'M 23 11 L 29 12 L 34 8' },
  { className: 'frost-branch', d: 'M 14 19 L 8 14 L 8 9' },
  { className: 'frost-branch', d: 'M 27 7 L 29 15 L 35 19' },
  { className: 'frost-branch', d: 'M 5 29 L 12 31 L 14 36' },
  { className: 'frost-branch', d: 'M 19 13 L 25 14 L 28 19' },
];

const MIRRORS = [
  'translate(100 0) scale(-1 1)',
  'translate(0 100) scale(1 -1)',
  'translate(100 100) scale(-1 -1)',
];

export default function FrostFrame() {
  return (
    <svg className="frost-frame" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <g className="frost-corner">
        {CORNER_PATHS.map((path, index) => (
          <path
            key={path.d}
            className={path.className}
            d={path.d}
            pathLength="1"
            style={{ '--branch-delay': `${index * 65}ms` }}
          />
        ))}
      </g>
      {MIRRORS.map((transform) => (
        <g className="frost-corner" transform={transform} key={transform}>
          {CORNER_PATHS.map((path, index) => (
            <path
              key={path.d}
              className={path.className}
              d={path.d}
              pathLength="1"
              style={{ '--branch-delay': `${index * 65}ms` }}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}
