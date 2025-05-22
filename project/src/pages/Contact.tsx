import React from 'react';
import ContactSection from '../components/ContactSection';

const Contact: React.FC = () => {
  // Set page title on component mount
  React.useEffect(() => {
    document.title = "Contact | Ileen J. Cantor";
  }, []);

  return (
    <main className="pt-24">
      <ContactSection />
    </main>
  );
};

export default Contact;