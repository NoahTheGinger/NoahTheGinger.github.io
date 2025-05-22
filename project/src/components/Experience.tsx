import React from 'react';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "LOGS Legal Group, LLP",
    position: "Senior Associate/Lead Litigation and Appellate Attorney",
    period: "2009 - 2024",
    description: [
      "Led all appellate work and guided other foreclosure lawyers with case law and litigation issues",
      "Conducted legal research, prepared motions, appellate briefs, and petitions for writs",
      "Litigated in federal and state courts on behalf of mortgage loan servicers and investors",
      "Established creditor's rights legal precedent"
    ]
  },
  {
    company: "The Law Office of Ileen J. Cantor",
    position: "Solo Practitioner",
    period: "2005 - 2009",
    description: [
      "Practiced in a broad range of civil and criminal matters",
      "Represented parties as a Broward County court-appointed lawyer in trial and appellate cases",
      "Served as of counsel to firms engaged in diverse state and federal litigation"
    ]
  },
  {
    company: "Department of Children Family Services, State of Florida",
    position: "Supervisory Attorney",
    period: "2001 - 2004",
    description: [
      "Supervised child welfare legal services and attorneys covering a six-county region",
      "Worked with a team to oversee the downsizing and placements for Landmark residents",
      "Successfully petitioned the Third District Court of Appeal for a writ of certiorari"
    ]
  },
  {
    company: "Nova Southeastern University Fishler College of Education",
    position: "Adjunct Professor",
    period: "1995 - 2002",
    description: [
      "Designed and taught a graduate level course of School Law for Administrators"
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-navy-900 font-bold mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            My extensive career spans multiple legal domains, providing me with diverse experience in appellate, 
            real estate, and consumer finance litigation.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gold-300"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <div 
                    className={`bg-white p-6 rounded-lg shadow-lg border-l-4 border-gold-500 md:mx-6 relative
                      ${index % 2 === 0 ? 'md:mr-0' : 'md:ml-0'}`}
                  >
                    <h3 className="text-xl font-bold text-navy-900 mb-1">{exp.position}</h3>
                    <h4 className="text-lg font-medium text-navy-700 mb-2">{exp.company}</h4>
                    <p className="text-sm text-gold-700 mb-4">{exp.period}</p>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-gold-500 mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-6 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-gold-500 border-4 border-white"></div>
                </div>
                
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="/resume.pdf" 
            className="inline-flex items-center px-6 py-3 border-2 border-navy-900 text-navy-900 font-medium rounded-lg hover:bg-navy-900 hover:text-white transition-colors"
          >
            View Full Resume
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;