import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-navy-900 font-bold mb-4">About Ileen J. Cantor</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg" 
                alt="Professional attorney portrait" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-navy-900 opacity-20"></div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-gold-400 rounded-lg z-[-1]"></div>
          </div>
          
          <div>
            <div className="mb-6 inline-block px-4 py-1 bg-gold-100 text-gold-800 rounded-full text-sm font-medium">
              Preeminent AV®-rated Attorney
            </div>
            
            <h3 className="text-2xl font-serif text-navy-900 font-bold mb-4">
              30+ Years of Legal Excellence
            </h3>
            
            <div className="space-y-4 text-gray-700">
              <p>
                With over three decades of extensive experience in state, federal, and appellate courts, 
                I specialize in appeals at all levels, real estate and consumer finance litigation, 
                and residential and commercial foreclosures.
              </p>
              
              <p>
                My career spans diverse legal environments including private practice, government service, 
                and academic teaching. I've established creditor's rights legal precedent and successfully 
                represented clients in numerous high-stakes legal matters.
              </p>
              
              <p>
                I'm passionate about delivering exceptional legal representation with integrity, thorough 
                research, and compelling advocacy. My extensive experience allows me to navigate complex 
                legal challenges efficiently while maintaining the highest ethical standards.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4 text-center hover:border-gold-400 transition-colors">
                <div className="text-3xl font-bold text-navy-900 mb-2">30+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 text-center hover:border-gold-400 transition-colors">
                <div className="text-3xl font-bold text-navy-900 mb-2">AV</div>
                <div className="text-sm text-gray-600">Preeminent Rated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;