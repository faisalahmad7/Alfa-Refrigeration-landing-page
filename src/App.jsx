import { Route, Routes } from 'react-router-dom';
import { ArtDefs } from './components/ProductArt.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import StickyActions from './components/StickyActions.jsx';
import SectionDotNav from './components/SectionDotNav.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Services from './pages/Services.jsx';

export default function App() {
  return (
    <>
      <LoadingScreen />
      <ArtDefs />
      <ScrollToTop />
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <StickyActions />
      <SectionDotNav />
    </>
  );
}
