import React from 'react';
import './AboutPage.css';

const LinkedInIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const AboutPage = () => {
  return (
    <div className="about-page container">
      <div className="about-content-wrapper">
        <h1 className="about-title">Biz haqimizda</h1>
        <div className="about-text-content">
          <p>
            <strong>Faol App</strong> — sport maydonlari, kompyuter klublari, trenerlar va turli xizmatlarni yagona platformada birlashtirish maqsadida yaratilayotgan zamonaviy raqamli loyiha.
          </p>
          
          <p>
            Loyiha asoschisi <strong>Murod Dadaboyev</strong> bo‘lib, u bir necha yildan buyon grafik dizayn, UI/UX dizayn va dasturiy ta'minot ishlab chiqish sohalarida faoliyat yuritib kelmoqda. Faol App loyihasi Murodning sport va xizmatlar sohasidagi mavjud muammolarni kuzatishi natijasida paydo bo‘lgan g‘oyadan boshlangan.
          </p>
          
          <p>
            Loyihaning dizayn konsepsiyasi, foydalanuvchi tajribasi (UI/UX), brending, interfeyslar va mahsulot strategiyasi bevosita Murod tomonidan ishlab chiqilgan. Grafik dizayner sifatidagi tajribasi loyihaning vizual identifikatsiyasini yaratishda, UI/UX dizayner sifatidagi bilimlari esa foydalanuvchilar uchun qulay va intuitiv tizim yaratishda muhim rol o‘ynadi.
          </p>
          
          <p>
            Faol App ustida ishlash jarayonida loyiha nafaqat oddiy bronlash tizimi, balki sport va faol hayot tarziga oid xizmatlarni birlashtiruvchi to‘liq ekotizim sifatida shakllanmoqda. Platforma orqali foydalanuvchilar sport maydonlarini bron qilishlari, kompyuter klublarini topishlari, professional trenerlar bilan bog‘lanishlari va kelajakda boshqa ko‘plab xizmatlardan foydalanishlari mumkin bo‘ladi.
          </p>
          
          <p>
            Loyihaning server infratuzilmasi, deploy jarayonlari va texnik muhitini tashkil etishda DevOps mutaxassisi <strong>Shaxriyor Jabborov</strong> ham faol ishtirok etmoqda. Uning serverlar bilan ishlash, xavfsizlik va tizim barqarorligini ta'minlash bo‘yicha tajribasi loyiha rivojlanishiga muhim hissa qo‘shmoqda.
          </p>
          
          <p className="about-mission">
            Bugungi kunda Faol App ustida ishlash davom etmoqda va biz foydalanuvchilar uchun sport hamda xizmatlar sohasidagi eng qulay va zamonaviy platformalardan birini yaratishni maqsad qilganmiz.
          </p>
        </div>

        {/* Team Section */}
        <div className="about-team-section">
          <div className="team-card">
            <div className="team-avatar">
              <img src="/assets/murod.png" alt="Murod Dadaboyev" />
            </div>
            <div className="team-info">
              <h3>Murod Dadaboyev</h3>
              <p>Founder & UI/UX Designer</p>
              <div className="team-links">
                <a href="https://www.linkedin.com/in/murod-dadaboev" target="_blank" rel="noopener noreferrer" className="team-icon-link" title="LinkedIn">
                  <LinkedInIcon />
                </a>
                <a href="https://murod.site/" target="_blank" rel="noopener noreferrer" className="team-link-btn">murod.site</a>
              </div>
            </div>
          </div>

          <div className="team-card">
            <div className="team-avatar">
              <img src="/assets/shaxriyor.png" alt="Shaxriyor Jabborov" />
            </div>
            <div className="team-info">
              <h3>Shaxriyor Jabborov</h3>
              <p>DevOps Specialist</p>
              <div className="team-links">
                <a href="https://www.linkedin.com/in/shaxriyor" target="_blank" rel="noopener noreferrer" className="team-icon-link" title="LinkedIn">
                  <LinkedInIcon />
                </a>
                <a href="https://shaxa.dev" target="_blank" rel="noopener noreferrer" className="team-link-btn">shaxa.dev</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
