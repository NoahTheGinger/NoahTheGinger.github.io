import React from 'react';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-navy-900 font-bold mb-4">Publications & Credentials</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Publications */}
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-gold-500">
            <h3 className="text-2xl font-serif text-navy-900 font-bold mb-6">Publications</h3>
            
            <div className="mb-8">
              <div className="flex items-start">
                <div className="w-16 h-20 bg-navy-900 flex items-center justify-center text-gold-500 mr-4 flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-navy-900 mb-1">Florida Foreclosure Law</h4>
                  <p className="text-gray-600 mb-2">Full Court Press (2016 et seq)</p>
                  <p className="text-gray-700">
                    Authored chapters on statutory claims and defenses as well as Motions for Summary Judgment in Foreclosure Cases.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-lg font-medium text-navy-900 mb-4">Additional Written Work</h4>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">•</span>
                  <span>Numerous successful appellate briefs in state and federal courts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">•</span>
                  <span>Legal memoranda on complex litigation matters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">•</span>
                  <span>Comprehensive motions and pleadings in specialized legal areas</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Credentials & Awards */}
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-gold-500">
            <h3 className="text-2xl font-serif text-navy-900 font-bold mb-6">Awards & Credentials</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-navy-900 mb-1">Martindale-Hubbard® AV Preeminent</h4>
                  <p className="text-gray-700">
                    Highest possible rating in both legal ability and ethical standings based on opinions of the Bar and Judiciary.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-navy-900 mb-1">Florida Trend Magazine, Legal Elite, 2021</h4>
                  <p className="text-gray-700">
                    Recognized in Appellate Practice category.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-navy-900 mb-1">Honoree of the Palm Beach County Homeless Coalition</h4>
                  <p className="text-gray-700">
                    Recognized for community service and contributions to the Palm Beach County area.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-6 pt-6">
              <h4 className="text-lg font-medium text-navy-900 mb-4">Professional Memberships</h4>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">•</span>
                  <span>Florida Bar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">•</span>
                  <span>U.S. District Courts (Multiple Districts)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">•</span>
                  <span>U.S. Court of Appeals for the Eleventh Circuit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">•</span>
                  <span>National Creditors Bar Association</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">•</span>
                  <span>Mortgage Bankers Association</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">•</span>
                  <span>Florida Bar Justice Teaching Institute</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;