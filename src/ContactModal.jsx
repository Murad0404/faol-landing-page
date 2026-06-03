import React, { useState, useRef, useEffect } from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Salom! Men Faol AI yordamchisiman. Ilova haqida nimalarni bilmoqchisiz?", sender: 'ai' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!isOpen) return null;

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
    setInputValue('');

    setTimeout(() => {
      let aiResponse = "Kechirasiz, aniq javob topolmadim. Iltimos tepadagi formamiz orqali bog'laning.";
      const lowerInput = userMsg.toLowerCase();
      
      if (lowerInput.includes('kim') || lowerInput.includes('yaratgan') || lowerInput.includes('asoschi') || lowerInput.includes('murod')) {
        aiResponse = "Faol dasturiga Murod Dadaboev asos solgan. U sport va e-sport olamini birlashtirish uchun yaratilgan.";
      } else if (lowerInput.includes('nima') || lowerInput.includes('qanday') || lowerInput.includes('vazifasi') || lowerInput.includes('haqida')) {
        aiResponse = "Faol — bu sport maydonlari, kompyuter klublarini bron qilish va sport anjomlarini xarid qilish uchun yagona ekotizim.";
      } else if (lowerInput.includes('salom') || lowerInput.includes('assalom')) {
        aiResponse = "Assalomu alaykum! Savollaringiz bormi?";
      }

      setMessages(prev => [...prev, { text: aiResponse, sender: 'ai' }]);
    }, 800);
  };

  return (
    <div className="panel-overlay" onClick={onClose}>
      <div className="panel-container" onClick={e => e.stopPropagation()}>
        
        <div className="panel-header">
          <h2>Kontaktlar</h2>
          <button className="panel-close" onClick={onClose}>&times;</button>
        </div>

        <div className="panel-content">
          
          {/* Section 1: Contact Form */}
          <div className="panel-section">
            <h3 className="panel-section-title">✍️ Bizga yozing</h3>
            <form className="contact-form" onSubmit={e => { e.preventDefault(); alert("Xabaringiz yuborildi!"); }}>
              <input type="text" placeholder="Ismingiz" required />
              <input type="text" placeholder="Telefon yoki Telegram" required />
              <textarea placeholder="Taklif yoki xabaringiz..." rows="3" required></textarea>
              <button type="submit" className="submit-btn">Yuborish</button>
            </form>
          </div>

          {/* Section 2: Social Links */}
          <div className="panel-section">
            <h3 className="panel-section-title">🌐 Bizning tarmoqlar</h3>
            <div className="socials-wrapper">
              <a href="https://t.me/Murod_22_24" className="social-link" target="_blank" rel="noreferrer">Telegram</a>
              <a href="https://instagram.com/murod_dadaboev1" className="social-link" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.linkedin.com/in/murod-dadaboev" className="social-link" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="tel:+998901234567" className="social-link">📞 +998 (90) 123-45-67</a>
            </div>
          </div>

          {/* Section 3: AI Chat */}
          <div className="panel-section">
            <h3 className="panel-section-title">🤖 Faol AI bilan suhbat</h3>
            <div className="ai-chat-container">
              <div className="chat-header">Faol AI</div>
              <div className="chat-messages">
                {messages.map((msg, index) => (
                  <div key={index} className={`chat-bubble ${msg.sender}`}>
                    {msg.text}
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
              <form className="chat-input-area" onSubmit={handleSendMessage}>
                <input 
                  type="text" 
                  placeholder="Ilova haqida so'rang..." 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">➤</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactModal;
