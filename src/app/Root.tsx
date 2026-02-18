import { Outlet } from 'react-router';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function Root() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main" className="outline-none" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
