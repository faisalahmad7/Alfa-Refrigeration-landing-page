import { Link } from 'react-router-dom';
import ProductArt from './ProductArt.jsx';

export default function PageHero({ title, lead, crumb, art, artLabel }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div className="page-hero-copy">
          <nav aria-label="Breadcrumb" className="crumbs">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{crumb ?? title}</span>
          </nav>
          <h1 className="rise">{title}</h1>
          {lead && <p className="page-lead rise" style={{ '--i': 1 }}>{lead}</p>}
        </div>
        {art && (
          <div className="page-hero-art rise" style={{ '--i': 2 }}>
            <ProductArt name={art} label={artLabel} />
          </div>
        )}
      </div>
    </section>
  );
}
