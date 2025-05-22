import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // In a real application, you would send this data to a server
    // For demo purposes, just showing success state
    setSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 5000);
  };
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-navy-900 font-bold mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            I'm available for fully remote appellate work and consultation on complex litigation matters.
            Feel free to reach out to discuss how my expertise can benefit your case.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-navy-900 text-white p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-serif font-bold mb-6 text-gold-400">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-gold-400 mt-1 mr-4" />
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <a href="mailto:cantorlaw@pm.me" className="text-gray-300 hover:text-gold-300 transition-colors">
                      cantorlaw@pm.me
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-gold-400 mt-1 mr-4" />
                  <div>
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <a href="tel:+15619550874" className="text-gray-300 hover:text-gold-300 transition-colors">
                      (561) 955-0874
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-gold-400 mt-1 mr-4" />
                  <div>
                    <h4 className="text-lg font-medium mb-1">Location</h4>
                    <p className="text-gray-300">
                      Boca Raton, FL 33433<br />
                      <span className="text-gold-300">(Remote services available nationwide)</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-700">
                <h4 className="text-lg font-medium mb-4">Availability</h4>
                <p className="text-gray-300 mb-4">
                  I offer flexible scheduling for remote consultations and am committed to prompt communication.
                </p>
                <p className="text-sm text-gray-400">
                  Typical response time: Within 24 hours
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-serif text-navy-900 font-bold mb-6">Send a Message</h3>
              
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-medium text-navy-900 mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-600">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                        placeholder="Your email"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                        placeholder="Your phone (optional)"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="Appellate Representation">Appellate Representation</option>
                        <option value="Real Estate Litigation">Real Estate Litigation</option>
                        <option value="Consumer Finance Litigation">Consumer Finance Litigation</option>
                        <option value="Foreclosure Matter">Foreclosure Matter</option>
                        <option value="Other Legal Service">Other Legal Service</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      placeholder="Please describe your legal matter or inquiry..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-start">
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        className="h-4 w-4 text-gold-500 focus:ring-gold-400 border-gray-300 rounded mt-1"
                        required
                      />
                      <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                        I understand that the information submitted will be used to respond to my inquiry and 
                        will be handled in accordance with applicable privacy laws and attorney-client privilege guidelines.
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-navy-900 text-white font-medium rounded-lg hover:bg-navy-800 transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;