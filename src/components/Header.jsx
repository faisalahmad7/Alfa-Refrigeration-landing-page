import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LuMenu, LuX, LuPhone, LuClock, LuMapPin } from 'react-icons/lu';
import Logo from './Logo.jsx';
import { WhatsAppButton } from './ActionButtons.jsx';
import { business } from '../data/business.js';
import { WA_GENERAL } from '../lib/contact.js';

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('menu-open');
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container header-inner">
        <Logo variant="light" />

        <nav className={`main-nav${open ? ' is-open' : ''}`} id="site-nav" aria-label="Main">
          <ul>
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="nav-mobile-cta">
            <a className="btn btn-primary btn-block" href={business.phoneHref}>
              <LuPhone size={18} aria-hidden="true" /> Call {business.phoneDisplay}
            </a>
            <WhatsAppButton className="btn btn-whatsapp btn-block" message={WA_GENERAL} />
          </div>
        </nav>

        <div className="header-cta">
          <a className="header-phone" href={business.phoneHref}>
            <LuPhone size={16} aria-hidden="true" />
            <span>{business.phoneDisplay}</span>
          </a>
          <WhatsAppButton className="btn btn-whatsapp btn-sm" message={WA_GENERAL} label="WhatsApp" />
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <LuX size={24} aria-hidden="true" /> : <LuMenu size={24} aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
