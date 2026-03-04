import { Link } from "react-router-dom";

const footerSections = [
  {
    title: "Услуги",
    links: [
      { label: "Регистрация МИ", to: "/uslugi/registraciya-meditsinskih-izdeliy/" },
      { label: "Испытания МИ", to: "/uslugi/ispytaniya-meditsinskih-izdeliy/" },
      { label: "Документация", to: "/uslugi/razrabotka-dokumentacii/" },
      { label: "Сертификация", to: "/uslugi/sertifikaciya/" },
      { label: "Лицензирование", to: "/uslugi/licenzirovanie/" },
      { label: "СМК", to: "/uslugi/smk/" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "О компании", to: "/about/" },
      { label: "Цены", to: "/ceny/" },
      { label: "Отзывы", to: "/otzyvy/" },
      { label: "Статьи", to: "/blog/" },
      { label: "FAQ", to: "/faq/" },
      { label: "Контакты", to: "/contacts/" },
    ],
  },
];

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-xl font-bold mb-4">RegMT</div>
          <p className="text-sm opacity-80">
            Регистрация, испытания и сертификация медицинских изделий. Работаем с 2015 года. Более 300 регистрационных удостоверений.
          </p>
        </div>
        {footerSections.map((sec) => (
          <div key={sec.title}>
            <div className="font-semibold mb-3">{sec.title}</div>
            <ul className="space-y-1.5 text-sm opacity-80">
              {sec.links.map((l) => (
                <li key={l.to}><Link to={l.to} className="hover:opacity-100 transition-opacity">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <div className="font-semibold mb-3">Контакты</div>
          <div className="text-sm opacity-80 space-y-1">
            <div>+7 (XXX) XXX-XX-XX</div>
            <div>info@regmt.ru</div>
            <div>г. Москва, ул. Примерная, д. 1</div>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
        <div>© {new Date().getFullYear()} RegMT. Все права защищены.</div>
        <div className="flex flex-wrap gap-4">
          <Link to="/privacy-policy/" className="hover:opacity-100">Политика конфиденциальности</Link>
          <Link to="/user-agreement/" className="hover:opacity-100">Пользовательское соглашение</Link>
          <Link to="/personal-data-consent/" className="hover:opacity-100">Согласие на обработку данных</Link>
          <Link to="/offer/" className="hover:opacity-100">Оферта</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
