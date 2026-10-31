import { Link } from 'react-router-dom';

// Interim wordmark: replace with the owner's official logo file when supplied.
export function LogoMark({ size = 40 }) {
  return (
    <svg className="logo-mark" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="14" fill="currentColor" />
      <g stroke="var(--logo-glyph, #7CD3EE)" strokeWidth="3.2" strokeLinecap="round" fill="none">
        <path d="M32 11v42M13.8 21.5l36.4 21M13.8 42.5l36.4-21" />
        <path d="M27 14l5 4 5-4M27 50l5-4 5 4" />
      </g>
    </svg>
  );
}

export default function Logo({ variant = 'dark' }) {
  return (
    <Link to="/" className={`logo logo--${variant}`} aria-label="Alfa Refrigeration and Air Conditioner, home">
      <LogoMark />
      <span className="logo-text">
        <span className="logo-name">ALFA</span>
        <span className="logo-sub">Refrigeration &amp; Air Conditioner</span>
      </span>
    </Link>
  );
}
