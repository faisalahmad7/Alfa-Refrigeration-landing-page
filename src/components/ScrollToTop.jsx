import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// On page change: jump straight to the top (or to the #section in the link).
// "instant" overrides the site-wide smooth scrolling so a new page never
// visibly slides up from the footer.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView({ behavior: 'instant', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}
