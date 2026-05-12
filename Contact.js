import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('📧 Message sent! We\'ll reply within 24 hours.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-page">
      <div className="container">
        <h1>📞 Contact Us</h1>
        <div className="contact-content">
          <div className="contact-info">
            <p><strong>Email:</strong> taiwoolusegun365@gmail.com</p>
            <p><strong>Phone:</strong>+234 803 376 1870</p>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
            <textarea placeholder="Message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows="5" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
