import React, { useState, useRef, useEffect } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [messages, setMessages] = useState([
    { text: "Salom! Men Faol AI yordamchisiman. Ilova yoki asoschilar haqida savollaringiz bormi?", sender: 'ai' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
        aiResponse = "Faol dasturiga Murod Dadaboev asos solgan. U sport va e-sport olamini birlashtirish uchun yaratilgan qulay ekotizim.";
      } else if (lowerInput.includes('nima') || lowerInput.includes('qanday') || lowerInput.includes('vazifasi') || lowerInput.includes('haqida')) {
        aiResponse = "Faol — bu sport maydonlari, kompyuter klublarini bron qilish, turnirlar tashkil etish va sport anjomlarini xarid qilish uchun yagona platforma.";
      } else if (lowerInput.includes('salom') || lowerInput.includes('assalom')) {
        aiResponse = "Assalomu alaykum! Sizga qanday yordam bera olaman?";
      }

      setMessages(prev => [...prev, { text: aiResponse, sender: 'ai' }]);
    }, 800);
  };

  return (
    <div className="contact-page container">
      <div className="contact-page-grid">
        
        {/* Left Column: Contact Form & Socials */}
        <div className="contact-info-col">
          <h1 className="contact-title">Biz bilan bog'laning</h1>
          <p className="contact-subtitle">Taklif va murojaatlaringiz bo'lsa bizga yozing yoki ijtimoiy tarmoqlarimiz orqali kuzating.</p>
          
          <form className="contact-form-page" onSubmit={e => { e.preventDefault(); alert("Xabaringiz yuborildi!"); }}>
            <input type="text" placeholder="Ismingiz" required />
            <input type="text" placeholder="Telefon raqam yoki Telegram user" required />
            <textarea placeholder="Taklif yoki xabaringiz..." rows="4" required></textarea>
            <button type="submit" className="submit-btn-page">Xabarni yuborish</button>
          </form>

          <div className="contact-socials-page">
            <h3>Bizning tarmoqlar</h3>
            <div className="socials-wrapper-page">
              <a href="https://t.me/Murod_22_24" className="social-link-page" target="_blank" rel="noreferrer">Telegram</a>
              <a href="https://instagram.com/murod_dadaboev1" className="social-link-page" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.linkedin.com/in/murod-dadaboev" className="social-link-page" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="tel:+998901234567" className="social-link-page">📞 +998 (90) 123-45-67</a>
            </div>
          </div>
        </div>

        {/* Right Column: AI Chat */}
        <div className="ai-chat-col">
          <div className="ai-chat-container-page">
            <div className="chat-header-page">
              <span style={{fontSize: '1.2rem'}}>🤖</span> Faol AI Yordamchisi
            </div>
            <div className="chat-messages-page">
              {messages.map((msg, index) => (
                <div key={index} className={`chat-bubble-page ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <form className="chat-input-area-page" onSubmit={handleSendMessage}>
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

export default ContactPage;
