import { useEffect, useState } from 'react';
import logoImage from '../assets/alfa-logo.webp';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setLeaving(true), 1450);
    const hideTimer = window.setTimeout(() => setVisible(false), 1950);
    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`loading-screen${leaving ? ' is-leaving' : ''}`} role="status" aria-live="polite" aria-label="Loading Alfa Refrigeration">
      <div className="loading-brand">
        <img className="loading-logo" src={logoImage} alt="Alfa Refrigeration and Airconditioner" width="900" height="662" />
        <div className="loading-caption">Cold solutions · Pune</div>
        <div className="loading-progress" aria-hidden="true" />
      </div>
    </div>
  );
}
