
import React from 'react';
import { Mail, Instagram, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-gradient-to-b from-white to-purple-50 relative py-[15px] md:py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Ready to Transform Your Salon?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions about SalonAI? Speak with our salon specialists and discover how we can help streamline your operations and boost your revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sales Contact */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-purple-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-4 flex items-center justify-center">
                <Mail className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Sales Team</h3>
              <p className="text-gray-600 mb-4">Book a Demo & Get Started</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:sales@salonai.com" className="flex items-center text-gray-700 hover:text-purple-600">
                  <Mail className="w-5 h-5 mr-2" />
                  sales@salonai.com
                </a>
                <a href="tel:+1-555-SALON-AI" className="flex items-center text-gray-700 hover:text-purple-600">
                  <Phone className="w-5 h-5 mr-2" />
                  (555) SALON-AI
                </a>
              </div>
            </div>
          </div>

          {/* Support Contact */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-purple-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full mb-4 flex items-center justify-center">
                <Instagram className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Customer Success</h3>
              <p className="text-gray-600 mb-4">Get Help & Support</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:support@salonai.com" className="flex items-center text-gray-700 hover:text-purple-600">
                  <Mail className="w-5 h-5 mr-2" />
                  support@salonai.com
                </a>
                <a 
                  href="https://instagram.com/salonai" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-purple-600"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Follow @SalonAI
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
