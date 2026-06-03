import React, { useState } from 'react';
import ContactModal from './ContactModal';
import './App.css';

// Premium Inline SVGs for perfect layout and zero dependency issues
const AppStoreIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 22C14.32 22.05 13.89 21.24 12.37 21.24C10.84 21.24 10.37 21.97 9.1 22C7.81 22.05 6.8 20.72 5.96 19.5C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.1 16.67C20.08 16.74 19.67 18.11 18.71 19.5ZM15.97 4.17C16.63 3.37 17.07 2.28 16.95 1C15.99 1.04 14.83 1.64 14.14 2.45C13.53 3.16 13 4.27 13.15 5.52C14.21 5.6 15.31 4.97 15.97 4.17Z"/>
  </svg>
);

const PlayStoreIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.609 2.031c-.164.172-.259.458-.259.818v18.299c0 .36.095.646.259.818l.061.059L13.84 11.96v-.219L3.67 1.972l-.061.059zM17.244 15.39l-3.404-3.4v-.22l3.405-3.4.072.042 4.024 2.287c1.15.65 1.15 1.72 0 2.37l-4.024 2.287-.073.034zM13.84 11.74L3.67 1.972c.328-.328.864-.328 1.485.025l8.685 4.936v4.807zM13.84 12.18l8.685 4.936c-.62.353-1.157.353-1.485.025L13.84 12.18z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.76L14.97 16.59C14.85 17.16 14.51 17.3 14.04 17.03L11.5 15.15L10.27 16.33C10.13 16.47 10.02 16.59 9.75 16.59L9.93 13.98L14.68 9.68C14.89 9.5 14.63 9.4 14.35 9.58L8.47 13.28L5.94 12.49C5.39 12.32 5.38 11.94 6.06 11.68L15.93 7.87C16.39 7.7 16.79 7.98 16.64 8.76Z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const SoccerFieldLines = () => (
  <div className="soccer-field-lines">
    <svg className="field-svg" viewBox="0 0 1440 2600" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Midfield Line & Circle (Section 3 region) */}
      <line x1="0" y1="1250" x2="1440" y2="1250" stroke="white" strokeWidth="2.5" strokeDasharray="8 8" opacity="0.25"/>
      <circle cx="720" cy="1250" r="180" stroke="white" strokeWidth="2.5" opacity="0.25"/>
      <circle cx="720" cy="1250" r="10" fill="white" opacity="0.3"/>

      {/* Penalty Box / Goal Area (Footer region - aligned to the absolute bottom) */}
      <rect x="320" y="2200" width="800" height="400" stroke="white" strokeWidth="2.5" opacity="0.25"/>
      <rect x="490" y="2400" width="460" height="205" stroke="white" strokeWidth="2.5" opacity="0.25"/>
      <circle cx="720" cy="2330" r="5" fill="white" opacity="0.3"/>
      <path d="M 580,2200 A 160,160 0 0,0 860,2200" stroke="white" strokeWidth="2.5" opacity="0.25" fill="none"/>
      
      {/* Top corners decoration */}
      <path d="M 0,80 A 80,80 0 0,0 80,0" stroke="white" strokeWidth="2" opacity="0.15" fill="none"/>
      <path d="M 1360,0 A 80,80 0 0,0 1440,80" stroke="white" strokeWidth="2" opacity="0.15" fill="none"/>
    </svg>
  </div>
);

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="app">
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      {/* Vector Soccer Lines Overlay */}
      <SoccerFieldLines />

      <header className="header">
        <div className="header-glow-overlay"></div>
        <div className="container header-container">
          <a href="#" className="logo">
            <img src="/assets/faol_full_logo.png" alt="Faol Logo" className="logo-full-img" />
          </a>
          <nav className="nav-pill">
            <a href="#" className="nav-link active">Home</a>
            <a href="#about" className="nav-link inactive">Biz haqimizda</a>
            <a href="#contact" className="nav-link inactive" onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); }}>Kontakt</a>
          </nav>
          <a href="#download" className="cta-button">Get Started</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-glow-overlay"></div>
        <div className="container hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">Sizning sport dunyoingiz</h1>
            <p className="hero-subtitle">
              Sport maydonlari va kompyuter klublarini bron qiling, mahsulotlar xarid qiling va professional trenerlar bilan bogʻlaning. Doʻstlaringiz bilan jamoa tuzing, futbol hamda cyber sport turnirlarini uyushtiring va gʻalabalarga erishing.
            </p>
            <img src="/assets/player_kick.png" alt="Sport Player" className="hero-player-img" />
          </div>
          <div className="hero-media-container">
            <div className="hero-media">
              <img src="/assets/faol_phones.png" alt="Faol App Mockups" className="hero-mockup-img" />
            </div>
            <div className="download-buttons" id="download">
              <a href="https://apple.co/3faol" className="app-btn" target="_blank" rel="noopener noreferrer">
                <div className="app-btn-icon"><img src="/assets/icon_apple.png" alt="App Store Icon" className="btn-icon-img" /></div>
                <div className="app-btn-text">
                  <span>Download</span>
                  <span>App Store</span>
                </div>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.faol" className="app-btn" target="_blank" rel="noopener noreferrer">
                <div className="app-btn-icon"><img src="/assets/icon_play.png" alt="Google Play Icon" className="btn-icon-img" /></div>
                <div className="app-btn-text">
                  <span>Download</span>
                  <span>Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section: Adventure in Space */}
      <section className="adventure-section" id="about">
        <div className="container adventure-grid">
          <div className="adventure-icons">
            <img src="/assets/adventure_icons_new.png" alt="Faol App 3D Icons Collection" className="icons-grid-img" />
          </div>
          <div className="adventure-content">
            <h2 className="section-title">FAOL — sport uchun yaratilgan yagona ekotizim</h2>
            <ul className="feature-list">
              <li>Futbol va boshqa sport maydonlarini onlayn bron qilish</li>
              <li>Kompyuter klublarini topish va band qilish</li>
              <li>Sport mahsulotlarini xarid qilish</li>
              <li>Turnirlar tashkil etish va qatnashish</li>
              <li>Do'stlar bilan jamoalar tuzish</li>
              <li>Professional trenerlar bilan bog'lanish</li>
              <li>Yaqin atrofdagi sport obyektlarini xaritada topish</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature Section: Create Anytime, Anywhere */}
      <section className="create-anytime-section">
        <div className="container">
          <div className="create-header">
            <h2 className="section-title">Sport. Jamoa. G'alaba.</h2>
            <p className="section-text">
              FAOL orqali maydon bron qiling, mahsulot xarid qiling, trener toping va do'stlaringiz bilan turnirlar tashkil eting. Sport olamidagi barcha imkoniyatlar bir platformada jamlangan.
            </p>
            <div className="download-buttons">
              <a href="https://apple.co/3faol" className="app-btn" target="_blank" rel="noopener noreferrer">
                <div className="app-btn-icon"><img src="/assets/icon_apple.png" alt="App Store Icon" className="btn-icon-img" /></div>
                <div className="app-btn-text">
                  <span>Download</span>
                  <span>App Store</span>
                </div>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.faol" className="app-btn" target="_blank" rel="noopener noreferrer">
                <div className="app-btn-icon"><img src="/assets/icon_play.png" alt="Google Play Icon" className="btn-icon-img" /></div>
                <div className="app-btn-text">
                  <span>Download</span>
                  <span>Google Play</span>
                </div>
              </a>
            </div>
          </div>
          <div className="create-mockups-container">
            {/* The three high fidelity screens (Faol, Market, Yo'lda) */}
            <img src="/assets/three_mockups_new_official.png" alt="Faol App Features Mockup" className="three-mockups-img" />
            <img src="/assets/ball_blur_bottom.png" alt="Ball Decor" className="bottom-ball-decor" />
            <div className="mockups-shadow"></div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer" id="contact">
        <img src="/assets/user_field_bg.png" className="footer-field-bg" alt="Field Background" />
        <div className="container footer-container">
          <div className="footer-copyright">
            © 2026 Faol app Sport Dunyosi. <br />
            <span style={{ fontSize: '0.9rem', opacity: 0.85 }}>Founder: <strong>Murod Dadaboev</strong></span>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/murod-dadaboev" className="social-btn" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href="https://t.me/Murod_22_24" className="social-btn" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
              <TelegramIcon />
            </a>
            <a href="https://instagram.com/murod_dadaboev1" className="social-btn" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
