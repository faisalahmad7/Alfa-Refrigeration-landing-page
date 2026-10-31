import { Link } from 'react-router-dom';
import { LuPhone, LuClock, LuMapPin } from 'react-icons/lu';
import Logo from './Logo.jsx';
import { business } from '../data/business.js';
import { equipment } from '../data/services.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <p className="footer-motto">{business.tagline}</p>
      </div>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo variant="light" />
          <p>
            Commercial and residential refrigeration products and service in Pune, with {business.experience} years
            of experience. We specialise in Blue Star refrigeration products.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="footer-title">Explore</h2>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="footer-title">Products</h2>
          <ul className="footer-links">
            {equipment.slice(0, 6).map((e) => (
              <li key={e.id}><Link to={`/services#${e.id}`}>{e.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Visit or call</h2>
          <ul className="footer-contact">
            <li><LuPhone size={16} aria-hidden="true" /><a href={business.phoneHref}>{business.phoneDisplay}</a></li>
            <li>
              <LuClock size={16} aria-hidden="true" />
              <span>
                {business.hours.map((h) => (<span key={h.day} className="block">{h.day}: {h.time}</span>))}
              </span>
            </li>
            <li>
              <LuMapPin size={16} aria-hidden="true" />
              <address>
                {business.address.lines.map((l) => (<span className="block" key={l}>{l}</span>))}
                <span className="block">{business.address.city}, {business.address.state} {business.address.pin}</span>
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Alfa Refrigeration and Air Conditioner. All rights reserved.</p>
        <p>Blue Star is a trademark of Blue Star Limited. The Blue Star name is used here only to describe the products Alfa deals in.</p>
      </div>
    </footer>
  );
}
