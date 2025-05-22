import React from 'react';
import { Link } from './Navigation';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif mb-4 text-gold-400">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-gold-300" />
                <a href="mailto:cantorlaw@pm.me" className="hover:text-gold-300 transition-colors">
                  cantorlaw@pm.me
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-gold-300" />
                <a href="tel:+15619550874" className="hover:text-gold-300 transition-colors">
                  (561) 955-0874
                </a>
              </li>
              <li className="flex items-center">
                <Linkedin size={18} className="mr-2 text-gold-300" />
                <a 
                  href="https://linkedin.com/in/ileen-cantor-736723332024" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold-300 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-4 text-gold-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about">About</Link>
              </li>
              <li>
                <Link href="/#experience">Experience</Link>
              </li>
              <li>
                <Link href="/#practice-areas">Practice Areas</Link>
              </li>
              <li>
                <Link href="/#publications">Publications</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-serif mb-4 text-gold-400">Ileen J. Cantor</h3>
            <p className="text-gray-300 mb-4">
              Preeminent AV®-rated attorney with 30+ years of extensive experience in state, federal, and
              appellate courts, specializing in appeals at all levels.
            </p>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Ileen J. Cantor. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;