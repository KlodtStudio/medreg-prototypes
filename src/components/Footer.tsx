import { Link } from "react-router-dom";
import ConsultationModal from "./ConsultationModal";

const footerServices = [
  { label: "Регистрация МИ", to: "/uslugi/registraciya-meditsinskih-izdeliy/" },
  { label: "Испытания МИ", to: "/uslugi/ispytaniya-meditsinskih-izdeliy/" },
  { label: "Документация", to: "/uslugi/razrabotka-dokumentacii/" },
  { label: "Сертификация", to: "/uslugi/sertifikaciya/" },
  { label: "Лицензирование", to: "/uslugi/licenzirovanie/" },
  { label: "СМК", to: "/uslugi/smk/" },
];

const footerCompany = [
  { label: "О компании", to: "/about/" },
  { label: "Отзывы", to: "/otzyvy/" },
  { label: "Цены", to: "/ceny/" },
  { label: "Статьи", to: "/blog/" },
  { label: "Вопрос-ответ", to: "/faq/" },
  { label: "Контакты", to: "/contacts/" },
];

const footerLegal = [
  { label: "Политика конфиденциальности", to: "/privacy-policy/" },
  { label: "Пользовательское соглашение", to: "/user-agreement/" },
  { label: "Согласие на обработку данных", to: "/personal-data-consent/" },
  { label: "Оферта", to: "/offer/" },
];

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-12">
      {/* Desktop: 4 columns / Mobile: stacked sections like medizd.ru */}

      {/* Logo + description */}
      <div className="mb-8 md:mb-0 md:float-none">
        <div className="text-xl font-bold mb-3">RegMT</div>
        <p className="text-sm opacity-80 max-w-xs">
          Регистрация, испытания и сертификация медицинских изделий. Работаем с 2015 года.
        </p>
      </div>

      {/* Links: 2 columns on mobile, 4 columns on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 border-t border-primary-foreground/20 pt-8 md:border-0 md:pt-0 md:mt-8">
        <div>
          <div className="font-semibold mb-3">Компания</div>
          <ul className="space-y-2 text-sm opacity-80">
            {footerCompany.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:opacity-100 transition-opacity">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Услуги</div>
          <ul className="space-y-2 text-sm opacity-80">
            {footerServices.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:opacity-100 transition-opacity">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="font-semibold mb-3">Наши контакты</div>
          <div className="text-sm opacity-80 space-y-3">
            <div>+7 (495) 181-75-05</div>
            <div>115114, г. Москва, Дербеневская наб., д. 7, стр. 17</div>
            <div>contact@regmt.ru</div>
            <div>Пн. – Пт.: с 9:00 до 18:00</div>
          </div>
          <div className="mt-5">
            <ConsultationModal trigger={
              <button className="px-5 py-2.5 rounded-md border border-primary-foreground/40 text-primary-foreground text-sm font-medium hover:bg-primary-foreground/10 transition-colors">
                Консультация
              </button>
            } />
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 order-last">
          <div className="font-semibold mb-3">Документы</div>
          <ul className="space-y-2 text-sm opacity-80">
            {footerLegal.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:opacity-100 transition-opacity">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-sm opacity-60">
        © {new Date().getFullYear()} RegMT. Все права защищены.
      </div>
    </div>
  </footer>
);

export default Footer;
