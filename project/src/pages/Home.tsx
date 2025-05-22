import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import PracticeAreas from '../components/PracticeAreas';
import Publications from '../components/Publications';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  // Set page title on component mount
  React.useEffect(() => {
    document.title = "Ileen J. Cantor | Appellate Attorney";
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <PracticeAreas />
      <Publications />
      <ContactSection />
    </main>
  );
};

export default Home;