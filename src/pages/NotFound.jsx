import { Link } from 'react-router-dom';
import { usePageMeta } from '../lib/usePageMeta.js';

export default function NotFound() {
  usePageMeta('Page not found | Alfa Refrigeration, Pune', 'This page could not be found.');
  return (
    <section className="page-hero notfound">
      <div className="container">
        <h1>We could not find that page</h1>
        <p className="page-lead">The link may be old or mistyped. Try one of these instead.</p>
        <div className="hero-actions">
          <Link to="/" className="btn btn-light">Back to home</Link>
          <Link to="/contact" className="btn btn-ghost-light">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
