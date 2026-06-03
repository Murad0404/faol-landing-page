import React from 'react';
import './AboutPage.css';

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
            Loyihaning server infratuzilmasi, deploy jarayonlari va texnik muhitini tashkil etishda DevOps mutaxassisi <strong>Shaxriyor</strong> ham faol ishtirok etmoqda. Uning serverlar bilan ishlash, xavfsizlik va tizim barqarorligini ta'minlash bo‘yicha tajribasi loyiha rivojlanishiga muhim hissa qo‘shmoqda.
          </p>
          
          <p className="about-mission">
            Bugungi kunda Faol App ustida ishlash davom etmoqda va biz foydalanuvchilar uchun sport hamda xizmatlar sohasidagi eng qulay va zamonaviy platformalardan birini yaratishni maqsad qilganmiz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
