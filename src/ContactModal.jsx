import React, { useState, useRef, useEffect } from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Salom! Men Faol AI yordamchisiman. Ilova yoki uning yaratuvchilari haqida savollaringiz bormi?", sender: 'ai' }
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

    // Simulate AI response
    setTimeout(() => {
      let aiResponse = "Kechirasiz, bu savolga aniq javob bera olmayman. Iltimos, batafsil ma'lumot uchun kontakt formamiz orqali biz bilan bog'laning.";
      const lowerInput = userMsg.toLowerCase();
      
      if (lowerInput.includes('kim') || lowerInput.includes('yaratgan') || lowerInput.includes('asoschi') || lowerInput.includes('murod')) {
        aiResponse = "Faol dasturiga Murod Dadaboev asos solgan. Ushbu loyiha sportchilar va e-sportchilar uchun yagona qulay ekotizim yaratish maqsadida ishlab chiqilgan.";
      } else if (lowerInput.includes('nima') || lowerInput.includes('qanday') || lowerInput.includes('vazifasi') || lowerInput.includes('haqida')) {
        aiResponse = "Faol — bu sport maydonlari va kompyuter klublarini bron qilish, sport anjomlari xarid qilish, turnirlar tashkil etish va do'stlar bilan jamoa yig'ish uchun mo'ljallangan universal platforma.";
      } else if (lowerInput.includes('salom') || lowerInput.includes('assalom')) {
        aiResponse = "Assalomu alaykum! Sizga qanday yordam bera olaman?";
      } else if (lowerInput.includes('rahmat') || lowerInput.includes('tushunarli')) {
        aiResponse = "Sizga ham rahmat! Yana savollaringiz bo'lsa bemalol so'rang.";
      }

      setMessages(prev => [...prev, { text: aiResponse, sender: 'ai' }]);
    }, 800);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <div className="modal-grid">
          {/* Left Column: Contact & Info */}
          <div className="contact-info-section">
            <h2>Biz bilan bog'laning</h2>
            <p>Taklif va murojaatlaringiz bo'lsa bizga yozing yoki ijtimoiy tarmoqlarimizga o'ting.</p>
            
            <form className="contact-form" onSubmit={e => { e.preventDefault(); alert("Xabaringiz yuborildi! Tez orada siz bilan bog'lanamiz."); }}>
              <input type="text" placeholder="Ismingiz" required />
              <input type="text" placeholder="Telefon raqam yoki Telegram user" required />
              <textarea placeholder="Taklif yoki xabaringiz..." rows="3" required></textarea>
              <button type="submit" className="submit-btn">Xabarni yuborish</button>
            </form>

            <div className="company-details">
              <h3>Bizning kontaktlar:</h3>
              <p>📞 Telefon: +998 (90) 123-45-67</p>
              <p>📧 Email: info@faolapp.uz</p>
              <div className="modal-socials">
                <a href="https://t.me/Murod_22_24" target="_blank" rel="noreferrer">Telegram</a>
                <a href="https://instagram.com/murod_dadaboev1" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://www.linkedin.com/in/murod-dadaboev" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Right Column: AI Chat */}
          <div className="ai-chat-section">
            <div className="chat-header">
              <span className="ai-icon">🤖</span> Faol AI Yordamchisi
            </div>
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
                placeholder="Ilova yoki asoschi haqida so'rang..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit">➤</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
