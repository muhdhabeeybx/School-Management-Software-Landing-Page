import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <span className="text-2xl font-semibold text-black">SableBoxx</span>
            <p className="mt-4 text-black/60">
              Modern school management for Nigerian institutions.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-black mb-4">Quick Links</h4>
            <div className="space-y-3">
              <Link to="/features" className="block text-black/60 hover:text-black transition-colors">Features</Link>
              <Link to="/pricing" className="block text-black/60 hover:text-black transition-colors">Pricing</Link>
              {/* <Link to="/about" className="block text-black/60 hover:text-black transition-colors">About</Link> */}
              <Link to="/faq" className="block text-black/60 hover:text-black transition-colors">FAQ</Link>
              {/* <Link to="/request-demo" className="block text-black/60 hover:text-black transition-colors">Get Started</Link> */}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-black mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:hello@sableboxx.com" className="flex items-center gap-2 text-black/60 hover:text-black transition-colors">
                <Mail className="size-4" />
                hello@sableboxx.com
              </a>
              <a href="tel:08108699059" className="flex items-center gap-2 text-black/60 hover:text-black transition-colors">
                <Phone className="size-4" />
                0810 869 9059
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-black/10 mt-12 pt-8 text-center text-black/40 text-sm">
          © {year} SableBoxx. All rights reserved.
        </div>
      </div>
    </footer>
  );
}