import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link } from './Navigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy-900 shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-serif text-white font-semibold">
            Ileen J. Cantor
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/#about">About</Link>
            <Link href="/#experience">Experience</Link>
            <Link href="/#practice-areas">Practice Areas</Link>
            <Link href="/#publications">Publications</Link>
            <Link href="/contact" className="px-5 py-2 bg-gold-500 text-navy-900 rounded hover:bg-gold-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-navy-900 z-40 md:hidden pt-20">
          <nav className="flex flex-col items-center space-y-6 pt-8">
            <Link 
              href="/#about" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-lg font-medium hover:text-gold-400 transition-colors flex items-center"
            >
              About <ChevronRight size={16} className="ml-1" />
            </Link>
            <Link 
              href="/#experience" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-lg font-medium hover:text-gold-400 transition-colors flex items-center"
            >
              Experience <ChevronRight size={16} className="ml-1" />
            </Link>
            <Link 
              href="/#practice-areas" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-lg font-medium hover:text-gold-400 transition-colors flex items-center"
            >
              Practice Areas <ChevronRight size={16} className="ml-1" />
            </Link>
            <Link 
              href="/#publications" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-lg font-medium hover:text-gold-400 transition-colors flex items-center"
            >
              Publications <ChevronRight size={16} className="ml-1" />
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-3 bg-gold-500 text-navy-900 rounded hover:bg-gold-400 transition-colors text-lg font-medium"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;