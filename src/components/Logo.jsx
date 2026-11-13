import { Link } from 'react-router-dom';
import logoImage from '../assets/alfa-logo.webp';

// The full Alfa logo (with the "Refrigeration & Airconditioner" line).
// variant="nav" gives it the sizing used in the header.
export default function Logo({ variant = 'dark' }) {
  return (
    <Link
      to="/"
      className={`logo logo--${variant}`}
      aria-label="Alfa Refrigeration and Air Conditioner, home"
    >
      <img
        className="logo-img"
        src={logoImage}
        alt="Alfa Refrigeration and Airconditioner"
        width="900"
        height="662"
        decoding="async"
      />
    </Link>
  );
}
