import { useEffect, useState } from 'react';

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
        <svg className="loading-mark" viewBox="0 0 200 190" role="img" aria-label="Stylised Alfa A monogram">
          <defs>
            <linearGradient id="alfa-ice-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#f6fdff" />
              <stop offset=".48" stopColor="#8de4fb" />
              <stop offset="1" stopColor="#d5f7ff" />
            </linearGradient>
          </defs>
          <path className="mark-main" d="M25 164 L100 22 L175 164 M57 105 H143" />
          <path className="mark-frost" d="M100 22 L91 35 M100 22 L110 34 M100 22 L100 8 M47 123 L35 119 M47 123 L44 135 M47 123 L60 125 M153 123 L165 119 M153 123 L156 135 M153 123 L140 125 M69 164 L60 153 M69 164 L77 154 M69 164 L55 169 M131 164 L140 153 M131 164 L123 154 M131 164 L145 169" />
        </svg>
        <div className="loading-wordmark">ALFA</div>
        <div className="loading-descriptor">REFRIGERATION AND AIR CONDITIONER</div>
        <div className="loading-caption">Cold solutions · Pune</div>
        <div className="loading-progress" aria-hidden="true" />
      </div>
    </div>
  );
}
