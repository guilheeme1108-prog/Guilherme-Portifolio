import React, { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';

const GithubIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const InstagramIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

// Using functional WhatsApp link icon replacement
const WhatsAppIcon = ({ size, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phoneNumber = "5579999601514";
    const text = `Olá Guilherme! 👋\n\nMeu nome é *${formData.name}*.\nMeu e-mail para contato é: ${formData.email}\n\n*Mensagem:*\n${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');
    
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-container contact-section">
      <div className="section-header">
        <h2 className="neon-text mono-text">05. &lt;Contato /&gt;</h2>
        <div className="line-separator"></div>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3 className="mono-text">Vamos criar algo grandioso juntos.</h3>
          <p className="text-secondary">
            Estou disponível para novas oportunidades, projetos freelance e desafios técnicos. 
            Me chame nas redes ou mande um e-mail!
          </p>
          
          <div className="social-links interactive">
            <a href="https://github.com/guilheeme1108-prog" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <GithubIcon size={28} />
            </a>
            <a href="https://instagram.com/seixas_gui" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <InstagramIcon size={28} />
            </a>
            <a href="https://wa.me/5579999601514" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
              <WhatsAppIcon size={28} />
            </a>
          </div>
        </div>

        <form className="contact-form interactive neon-border" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="mono-text">{'<Nome />'}</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
              placeholder="Seu nome"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="mono-text">{'<Email />'}</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
              placeholder="seu@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="mono-text">{'<Mensagem />'}</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required 
              rows="4"
              placeholder="Sua mensagem..."
            ></textarea>
          </div>
          <button type="submit" className="cta-button primary with-icon w-full">
            <Send size={20} />
            .enviarMensagem()
          </button>
        </form>
      </div>
      
      <footer className="footer mono-text text-secondary">
        <p>Desenvolvido com 💚 <span className="neon-text">Guilherme Seixas</span> &copy; {new Date().getFullYear()}</p>
      </footer>
    </section>
  );
};

export default Contact;
