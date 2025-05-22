import React from 'react';
import { Scale, Home, File, Award, Briefcase, Book } from 'lucide-react';

interface PracticeArea {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const practiceAreas: PracticeArea[] = [
  {
    title: "Appellate Law",
    description: "Expert representation in state and federal appeals at all levels, with a proven track record of success in appellate advocacy.",
    icon: <Scale className="w-12 h-12 text-gold-500" />
  },
  {
    title: "Real Estate Litigation",
    description: "Comprehensive legal representation in real estate disputes, title litigation, and related matters in both state and federal courts.",
    icon: <Home className="w-12 h-12 text-gold-500" />
  },
  {
    title: "Consumer Finance Litigation",
    description: "Specialized expertise in consumer financial protection statutes and litigation involving financial institutions.",
    icon: <File className="w-12 h-12 text-gold-500" />
  },
  {
    title: "Foreclosure Defense & Representation",
    description: "Extensive experience in residential and commercial foreclosures, representing both lenders and property owners.",
    icon: <Award className="w-12 h-12 text-gold-500" />
  },
  {
    title: "Commercial Litigation",
    description: "Strategic representation in complex commercial disputes, contract issues, and business litigation matters.",
    icon: <Briefcase className="w-12 h-12 text-gold-500" />
  },
  {
    title: "Legal Research & Writing",
    description: "Expert legal research, writing, and analysis services for complex legal matters and specialized cases.",
    icon: <Book className="w-12 h-12 text-gold-500" />
  }
];

const PracticeAreas: React.FC = () => {
  return (
    <section id="practice-areas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-navy-900 font-bold mb-4">Practice Areas</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            With 30+ years of experience, I offer specialized legal services in the following areas,
            with a focus on appellate representation and complex litigation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="mb-5 p-3 inline-block rounded-full bg-gold-100 group-hover:bg-gold-200 transition-colors">
                {area.icon}
              </div>
              
              <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-navy-900 text-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-serif font-bold mb-4">Ready to Discuss Your Legal Needs?</h3>
              <p className="text-gray-300 mb-4">
                I'm available for fully remote appellate work and consultation on complex litigation matters.
                Contact me today to discuss how my expertise can benefit your case.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <a 
                href="/contact" 
                className="inline-block px-6 py-3 bg-gold-500 text-navy-900 font-medium rounded-lg hover:bg-gold-400 transition-colors"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;