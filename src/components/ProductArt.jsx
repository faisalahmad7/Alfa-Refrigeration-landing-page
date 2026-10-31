// Original, art-directed renders of the equipment Alfa deals in.
// These are illustrations (lit vector scenes), NOT photographs and NOT Blue Star product images.
// Swap for real business / permitted manufacturer photos when available (see docs/ASSET_SOURCING.md).
// Gradients live once in <ArtDefs /> (mounted in App) and are referenced by id.

export function ArtDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="a-steel" x1="0" x2="1">
          <stop offset="0" stopColor="#7b8996" />
          <stop offset=".22" stopColor="#dfe6ec" />
          <stop offset=".4" stopColor="#ffffff" />
          <stop offset=".62" stopColor="#b4c0ca" />
          <stop offset="1" stopColor="#6f7d8a" />
        </linearGradient>
        <linearGradient id="a-white" x1="0" x2="1">
          <stop offset="0" stopColor="#c3cfd9" />
          <stop offset=".3" stopColor="#f7fafc" />
          <stop offset=".7" stopColor="#e3eaf0" />
          <stop offset="1" stopColor="#aab8c4" />
        </linearGradient>
        <linearGradient id="a-navy" x1="0" x2="1">
          <stop offset="0" stopColor="#0a2038" />
          <stop offset=".35" stopColor="#1c4165" />
          <stop offset=".7" stopColor="#12304f" />
          <stop offset="1" stopColor="#071a2e" />
        </linearGradient>
        <linearGradient id="a-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e9f9ff" />
          <stop offset=".55" stopColor="#a9dcef" />
          <stop offset="1" stopColor="#5fa8c6" />
        </linearGradient>
        <linearGradient id="a-dark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#10283f" />
          <stop offset="1" stopColor="#061321" />
        </linearGradient>
        <linearGradient id="a-sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset=".35" stopColor="#fff" stopOpacity=".42" />
          <stop offset=".5" stopColor="#fff" stopOpacity="0" />
          <stop offset=".75" stopColor="#fff" stopOpacity=".16" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="a-bottle" x1="0" x2="1">
          <stop offset="0" stopColor="#4aa6cf" stopOpacity=".75" />
          <stop offset=".35" stopColor="#bdeaf8" stopOpacity=".95" />
          <stop offset="1" stopColor="#3a8cb6" stopOpacity=".8" />
        </linearGradient>
        <radialGradient id="a-floor" cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#020b14" stopOpacity=".55" />
          <stop offset="1" stopColor="#020b14" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="a-glow" cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#6fe0ff" stopOpacity=".55" />
          <stop offset="1" stopColor="#6fe0ff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="a-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0d2a47" />
          <stop offset="1" stopColor="#06182b" />
        </linearGradient>
        <linearGradient id="a-floorplane" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#173b5c" />
          <stop offset="1" stopColor="#061424" />
        </linearGradient>
        <linearGradient id="a-beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bfeaff" stopOpacity=".35" />
          <stop offset="1" stopColor="#bfeaff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const Shadow = ({ rx = 90 }) => <ellipse cx="120" cy="282" rx={rx} ry="9" fill="url(#a-floor)" />;
const Sheen = ({ x, y, w, h, r = 6 }) => (
  <rect x={x} y={y} width={w} height={h} rx={r} fill="url(#a-sheen)" pointerEvents="none" />
);
const Led = ({ cx, cy, r = 3 }) => (
  <g>
    <circle cx={cx} cy={cy} r={r * 4} fill="url(#a-glow)" />
    <circle cx={cx} cy={cy} r={r} fill="#7fe6ff" />
  </g>
);

const bottleColours = ['#2b78a8', '#e9f4f9', '#4cb3c9', '#1f5f8c', '#cfe3ee', '#3d8fbd'];

function Visi() {
  const shelves = [78, 124, 170, 216];
  return (
    <g>
      <Shadow rx={78} />
      <rect x="56" y="14" width="128" height="264" rx="9" fill="url(#a-navy)" />
      <rect x="64" y="22" width="112" height="30" rx="4" fill="#dffaff" />
      <rect x="64" y="22" width="112" height="30" rx="4" fill="url(#a-glow)" opacity=".6" />
      <rect x="64" y="56" width="112" height="196" rx="4" fill="url(#a-glass)" />
      {shelves.map((y, si) => (
        <g key={y}>
          {bottleColours.map((c, i) => (
            <rect key={i} x={68 + i * 18} y={y - 30} width="12" height="30" rx="4" fill={c} opacity=".92" />
          ))}
          {bottleColours.map((c, i) => (
            <rect key={`n${i}`} x={72 + i * 18} y={y - 36} width="4" height="8" rx="1.5" fill={c} opacity=".9" />
          ))}
          <rect x="64" y={y} width="112" height="4" fill="#fff" opacity=".7" />
          {si === 3 && null}
        </g>
      ))}
      <rect x="64" y="56" width="112" height="196" rx="4" fill="none" stroke="#0a2038" strokeWidth="3" />
      <Sheen x={64} y={56} w={112} h={196} r={4} />
      <rect x="166" y="86" width="5" height="120" rx="2.5" fill="url(#a-steel)" />
      <rect x="64" y="256" width="112" height="14" rx="3" fill="#06182b" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={i} x={70 + i * 13} y="259" width="8" height="8" rx="1" fill="#143453" />
      ))}
      <rect x="66" y="270" width="14" height="8" rx="2" fill="#030d17" />
      <rect x="160" y="270" width="14" height="8" rx="2" fill="#030d17" />
    </g>
  );
}

function Freezer() {
  return (
    <g>
      <Shadow rx={104} />
      <path d="M26 150 L214 150 L226 120 L38 120 Z" fill="url(#a-white)" />
      <path d="M26 150 L214 150 L226 120 L38 120 Z" fill="url(#a-sheen)" />
      <rect x="22" y="148" width="196" height="124" rx="8" fill="url(#a-white)" />
      <rect x="22" y="148" width="196" height="9" rx="4" fill="#9fb0bf" opacity=".55" />
      <rect x="70" y="128" width="100" height="9" rx="4.5" fill="url(#a-steel)" />
      <rect x="36" y="170" width="168" height="78" rx="6" fill="#dbe5ec" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
        <rect key={i} x={46 + i * 13.5} y="176" width="5" height="66" rx="2.5" fill="#b5c4d0" />
      ))}
      <circle cx="198" cy="160" r="6" fill="#0a2038" />
      <Led cx={198} cy={160} r={2.2} />
      <rect x="40" y="270" width="26" height="9" rx="3" fill="#25384a" />
      <rect x="174" y="270" width="26" height="9" rx="3" fill="#25384a" />
      <Sheen x={22} y={148} w={196} h={124} r={8} />
    </g>
  );
}

function IceMachine() {
  return (
    <g>
      <Shadow rx={88} />
      <rect x="46" y="64" width="148" height="214" rx="9" fill="url(#a-steel)" />
      <rect x="54" y="72" width="132" height="30" rx="4" fill="#1b3652" />
      <rect x="62" y="80" width="40" height="14" rx="3" fill="#06182b" />
      <Led cx={116} cy={87} r={3} />
      <Led cx={130} cy={87} r={3} />
      <circle cx="170" cy="87" r="7" fill="#0a2038" />
      <rect x="54" y="112" width="132" height="146" rx="5" fill="url(#a-dark)" />
      {Array.from({ length: 28 }).map((_, i) => {
        const col = i % 7;
        const row = Math.floor(i / 7);
        return (
          <rect
            key={i}
            className="ice-cube"
            style={{ '--cube-delay': `${(i * 137) % 1900}ms` }}
            x={60 + col * 17 + (row % 2) * 6}
            y={206 + row * 12 - (col % 3) * 3}
            width="13"
            height="11"
            rx="3"
            fill="#e8f9ff"
            opacity={0.5 + ((i * 7) % 5) * 0.1}
          />
        );
      })}
      <circle className="ice-spark ice-spark--one" cx="76" cy="226" r="2" fill="#fff" />
      <circle className="ice-spark ice-spark--two" cx="160" cy="238" r="1.6" fill="#fff" />
      <rect x="54" y="112" width="132" height="146" rx="5" fill="url(#a-sheen)" />
      <rect x="50" y="262" width="140" height="10" rx="3" fill="#7d8b97" />
      <rect x="56" y="272" width="16" height="8" rx="2" fill="#25384a" />
      <rect x="168" y="272" width="16" height="8" rx="2" fill="#25384a" />
    </g>
  );
}

function Cooler() {
  return (
    <g>
      <Shadow rx={60} />
      <rect x="80" y="30" width="80" height="248" rx="10" fill="url(#a-white)" />
      <rect x="80" y="30" width="80" height="62" rx="10" fill="url(#a-steel)" />
      <rect x="92" y="42" width="56" height="22" rx="4" fill="#0f2a44" />
      <Led cx={104} cy={53} r={2.6} />
      <rect x="116" y="49" width="24" height="3" rx="1.5" fill="#7fe6ff" opacity=".8" />
      <rect x="116" y="55" width="16" height="3" rx="1.5" fill="#7fe6ff" opacity=".5" />
      <rect x="96" y="104" width="48" height="58" rx="6" fill="#12304f" />
      <circle cx="108" cy="114" r="3" fill="#35c3e8" />
      <circle cx="132" cy="114" r="3" fill="#aab8c4" />
      <path d="M104 124h12v6l-3 5h-6l-3-5z" fill="url(#a-steel)" />
      <path d="M124 124h12v6l-3 5h-6l-3-5z" fill="url(#a-steel)" />
      <path className="water-stream" d="M110 135 C109 140 112 143 110 149" fill="none" stroke="#72d8f5" strokeWidth="2" strokeLinecap="round" />
      <circle className="water-drop" cx="110" cy="148" r="2.2" fill="#86e5ff" />
      <path className="water-ripple" d="M101 154 Q110 150 119 154" fill="none" stroke="#72d8f5" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="94" y="164" width="52" height="9" rx="3" fill="url(#a-steel)" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={i} x="94" y={206 + i * 7} width="52" height="3" rx="1.5" fill="#b3c2ce" />
      ))}
      <Sheen x={80} y={30} w={80} h={248} r={10} />
      <rect x="86" y="276" width="14" height="6" rx="2" fill="#25384a" />
      <rect x="140" y="276" width="14" height="6" rx="2" fill="#25384a" />
    </g>
  );
}

function Dispenser() {
  return (
    <g>
      <Shadow rx={62} />
      <path d="M104 38 Q104 20 120 20 Q136 20 136 38 L136 54 Q158 66 158 92 L158 136 L82 136 L82 92 Q82 66 104 54 Z" fill="url(#a-bottle)" />
      <rect x="104" y="14" width="32" height="10" rx="4" fill="#eaf6fb" />
      <path d="M96 84 Q120 92 144 84" stroke="#fff" strokeWidth="2" fill="none" opacity=".7" />
      <rect x="80" y="134" width="80" height="144" rx="9" fill="url(#a-white)" />
      <rect x="80" y="134" width="80" height="22" rx="8" fill="url(#a-steel)" />
      <rect x="92" y="166" width="56" height="52" rx="5" fill="#12304f" />
      <circle cx="104" cy="176" r="2.6" fill="#35c3e8" />
      <circle cx="136" cy="176" r="2.6" fill="#aab8c4" />
      <path d="M100 186h12v6l-3 5h-6l-3-5z" fill="url(#a-steel)" />
      <path d="M128 186h12v6l-3 5h-6l-3-5z" fill="url(#a-steel)" />
      <path className="water-stream water-stream--dispenser" d="M106 197 C105 201 108 205 106 210" fill="none" stroke="#72d8f5" strokeWidth="2" strokeLinecap="round" />
      <circle className="water-drop water-drop--dispenser" cx="106" cy="208" r="2.1" fill="#86e5ff" />
      <path className="water-ripple water-ripple--dispenser" d="M98 214 Q106 211 114 214" fill="none" stroke="#72d8f5" strokeWidth="1.3" strokeLinecap="round" />
      <rect x="90" y="220" width="60" height="8" rx="3" fill="url(#a-steel)" />
      <rect x="112" y="142" width="16" height="3" rx="1.5" fill="#7fe6ff" opacity=".85" />
      <rect x="86" y="276" width="14" height="6" rx="2" fill="#25384a" />
      <rect x="140" y="276" width="14" height="6" rx="2" fill="#25384a" />
      <Sheen x={80} y={134} w={80} h={144} r={9} />
    </g>
  );
}

function Fridge() {
  return (
    <g>
      <Shadow rx={92} />
      <rect x="42" y="18" width="156" height="258" rx="9" fill="url(#a-steel)" />
      <rect x="50" y="26" width="140" height="22" rx="4" fill="#14304d" />
      <Led cx={66} cy={37} r={2.4} />
      <rect x="82" y="33" width="34" height="8" rx="2" fill="#7fe6ff" opacity=".85" />
      <rect x="50" y="54" width="68" height="212" rx="4" fill="url(#a-steel)" stroke="#8a97a3" strokeWidth="1" />
      <rect x="122" y="54" width="68" height="212" rx="4" fill="url(#a-steel)" stroke="#8a97a3" strokeWidth="1" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={55 + i * 15} y="60" width="1.4" height="200" fill="#fff" opacity=".35" />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <rect key={`b${i}`} x={127 + i * 15} y="60" width="1.4" height="200" fill="#fff" opacity=".35" />
      ))}
      <rect x="104" y="100" width="6" height="110" rx="3" fill="#33485c" />
      <rect x="130" y="100" width="6" height="110" rx="3" fill="#33485c" />
      <circle cx="58" cy="278" r="5" fill="#101e2c" />
      <circle cx="182" cy="278" r="5" fill="#101e2c" />
      <Sheen x={42} y={18} w={156} h={258} r={9} />
    </g>
  );
}

function Split() {
  return (
    <g>
      <ellipse cx="120" cy="158" rx="104" ry="9" fill="url(#a-floor)" />
      <rect x="16" y="62" width="208" height="72" rx="18" fill="url(#a-white)" />
      <rect x="16" y="62" width="208" height="30" rx="16" fill="#fff" opacity=".55" />
      <rect x="30" y="108" width="180" height="12" rx="6" fill="#9cb0bf" />
      <rect x="32" y="112" width="176" height="4" rx="2" fill="#37506a" />
      <circle cx="196" cy="82" r="3" fill="#0a2038" />
      <Led cx={196} cy={82} r={1.8} />
      <Sheen x={16} y={62} w={208} h={72} r={18} />
      <g className="cooling-air" fill="none" stroke="#8cdff7" strokeWidth="2" strokeLinecap="round">
        <path d="M192 139 C154 132 116 144 82 139" />
        <path d="M204 149 C160 143 126 155 94 150" />
      </g>
      <ellipse cx="120" cy="282" rx="60" ry="8" fill="url(#a-floor)" />
      <rect x="62" y="186" width="116" height="92" rx="8" fill="url(#a-white)" />
      <circle cx="120" cy="232" r="38" fill="#12304f" />
      <g className="fan-rotor">
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M120 232 L${120 + 34 * Math.cos((i * 2 * Math.PI) / 3 - 1)} ${232 + 34 * Math.sin((i * 2 * Math.PI) / 3 - 1)} A34 34 0 0 1 ${120 + 34 * Math.cos(((i + 0.55) * 2 * Math.PI) / 3 - 1)} ${232 + 34 * Math.sin(((i + 0.55) * 2 * Math.PI) / 3 - 1)} Z`} fill="#5f7d96" opacity=".85" />
        ))}
      </g>
      <circle cx="120" cy="232" r="7" fill="#dfe8ee" />
      <circle cx="120" cy="232" r="38" fill="none" stroke="#c9d6e0" strokeWidth="3" />
      <Sheen x={62} y={186} w={116} h={92} r={8} />
    </g>
  );
}

function Window() {
  return (
    <g>
      <Shadow rx={100} />
      <rect x="22" y="86" width="196" height="150" rx="10" fill="url(#a-white)" />
      <rect x="22" y="86" width="196" height="150" rx="10" fill="none" stroke="#9db0bf" strokeWidth="2" />
      <rect x="34" y="98" width="172" height="26" rx="5" fill="#12304f" />
      <Led cx={50} cy={111} r={2.4} />
      <rect x="66" y="106" width="44" height="10" rx="2" fill="#7fe6ff" opacity=".85" />
      <circle cx="184" cy="111" r="8" fill="#e5ecf1" stroke="#7b8c9a" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={i} x="38" y={140 + i * 10} width="164" height="5" rx="2.5" fill="#b8c7d3" />
      ))}
      <Sheen x={22} y={86} w={196} h={150} r={10} />
    </g>
  );
}

const PRODUCTS = {
  visi: Visi,
  freezer: Freezer,
  ice: IceMachine,
  cooler: Cooler,
  dispenser: Dispenser,
  fridge: Fridge,
  split: Split,
  window: Window,
};

// Single product on a soft lit backdrop. Alt text is supplied by the caller.
export default function ProductArt({ name, label, className = '' }) {
  const P = PRODUCTS[name] ?? Visi;
  return (
    <svg
      className={`product-art ${className}`}
      viewBox="0 0 240 300"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : 'true'}
      focusable="false"
    >
      <ellipse cx="120" cy="150" rx="118" ry="120" fill="url(#a-glow)" opacity=".28" />
      <P />
    </svg>
  );
}

// Hero scene: a lit showroom lineup. Decorative composition of the same equipment.
export function ShowroomScene({ className = '' }) {
  const item = (Comp, x, y, s) => (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <Comp />
    </g>
  );
  return (
    <svg
      className={`showroom ${className}`}
      viewBox="0 0 720 600"
      role="img"
      aria-label="Illustration of a refrigeration showroom: a glass-door visi cooler, commercial refrigerator, ice machine, deep freezer and water cooler"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <rect width="720" height="600" fill="url(#a-wall)" />
      {/* wall panel lines */}
      <g stroke="#cfeeff" strokeOpacity=".06">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={i} x1={i * 80} y1="0" x2={i * 80} y2="420" />
        ))}
        <line x1="0" y1="140" x2="720" y2="140" />
        <line x1="0" y1="280" x2="720" y2="280" />
      </g>
      {/* ceiling light beams */}
      {[150, 360, 570].map((x) => (
        <path key={x} d={`M${x - 20} 0 L${x + 20} 0 L${x + 110} 430 L${x - 110} 430 Z`} fill="url(#a-beam)" opacity=".5" />
      ))}
      <rect y="420" width="720" height="180" fill="url(#a-floorplane)" />
      <rect y="418" width="720" height="3" fill="#7fd6f5" opacity=".35" />
      {/* floor reflection hints */}
      <g opacity=".18">
        {item(Visi, 40, 438, 1.5)}
      </g>
      {/* equipment */}
      {item(Visi, 30, 56, 1.5)}
      {item(Fridge, 300, 120, 1.28)}
      {item(IceMachine, 520, 196, 0.98)}
      {item(Freezer, 232, 322, 1.0)}
      {item(Cooler, 470, 330, 0.8)}
      <ellipse cx="360" cy="570" rx="340" ry="26" fill="url(#a-floor)" opacity=".5" />
    </svg>
  );
}
