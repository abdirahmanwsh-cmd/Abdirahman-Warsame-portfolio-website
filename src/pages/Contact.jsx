import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'Abdirahman.wsh@gmail.com'
      },
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      alert('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => {
      alert('Failed to send message. Please email me directly at Abdirahman.wsh@gmail.com');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">Get In Touch</h1>
        <p className="text-center text-gray-600 mb-16 text-lg">Let's discuss your next project</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-3xl mr-4">📧</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <a href="mailto:Abdirahman.wsh@gmail.com" className="text-blue-600 hover:underline">Abdirahman.wsh@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-3xl mr-4">💼</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/abdirahman-warsame-" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/abdirahman-warsame-</a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-3xl mr-4">💻</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">GitHub</h4>
                  <a href="https://github.com/abdirahmanwsh-cmd" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/abdirahmanwsh-cmd</a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-3xl mr-4">📱</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">WhatsApp</h4>
                  <a href="https://wa.me/254724367516" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">+254 724 367 516</a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-3xl mr-4">📍</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Location</h4>
                  <p className="text-gray-600">Available for remote work</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105 disabled:transform-none"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
