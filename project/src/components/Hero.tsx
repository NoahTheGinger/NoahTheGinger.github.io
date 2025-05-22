import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from './Navigation';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-navy-900 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/534331/pexels-photo-534331.jpeg')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            <span className="text-gold-400">Appellate Excellence</span><br />
            With 30+ Years of Experience
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Preeminent AV®-rated attorney specializing in appeals at all levels, real estate and consumer finance litigation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/#practice-areas" 
              className="bg-gold-500 text-navy-900 px-8 py-4 rounded text-lg font-medium inline-flex items-center hover:bg-gold-400 transition-colors"
            >
              Practice Areas
              <ArrowRight size={20} className="ml-2" />
            </Link>
            
            <Link 
              href="/contact"
              className="border-2 border-white bg-transparent px-8 py-4 rounded text-lg font-medium inline-flex items-center hover:bg-white hover:text-navy-900 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-300 mb-2">Scroll Down</span>
        <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;