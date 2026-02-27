import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-6 bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>
            
            <div className="flex items-center space-x-4">
              <span className="text-blue-400 text-xl font-bold">📧</span>
              <a href="mailto:dawitmulugetas23@gmail.com" className="hover:text-blue-400 transition">
                dawitmulugetas23@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-blue-400 text-xl font-bold">📞</span>
              <div>
                <p>0968871794</p>
                <p>0709700335</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-blue-400 text-xl font-bold">🔗</span>
              <a 
                href="https://www.linkedin.com/in/dawit-mulugeta-219a89364" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-blue-400 transition"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-blue-400 text-xl font-bold">📍</span>
              <p>Debre Berhan University, Ethiopia</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-300">Send me a message</h3>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="p-4 rounded-lg bg-gray-700 border-none focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea 
              placeholder="Your Message" 
              rows="5" 
              className="p-4 rounded-lg bg-gray-700 border-none focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;