import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ChevronDown, ChevronRight } from "lucide-react";
import ConsultationModal from "./ConsultationModal";
import SearchDropdown from "./SearchDropdown";

const serviceCategories = [
  {
    label: "Регистрация медицинских изделий",
    to: "/uslugi/registraciya-meditsinskih-izdeliy/",
    children: [
      { label: "Регистрация «под ключ»", to: "/uslugi/registraciya-meditsinskih-izdeliy/pod-klyuch/" },
      { label: "Изменения в РУ", to: "/uslugi/registraciya-meditsinskih-izdeliy/izmeneniya-v-ru/" },
      { label: "Это медизделие или нет?", to: "/uslugi/registraciya-meditsinskih-izdeliy/eto-medizdelie-ili-net/" },
    ],
  },
  {
    label: "Испытания медицинских изделий",
    to: "/uslugi/ispytaniya-meditsinskih-izdeliy/",
    children: [
      { label: "Клинические испытания", to: "/uslugi/ispytaniya-meditsinskih-izdeliy/klinicheskie/" },
      { label: "Технические испытания", to: "/uslugi/ispytaniya-meditsinskih-izdeliy/tehnicheskie/" },
      { label: "ЭМС-испытания", to: "/uslugi/ispytaniya-meditsinskih-izdeliy/ems/" },
    ],
  },
  {
    label: "Разработка документации",
    to: "/uslugi/razrabotka-dokumentacii/",
    children: [
      { label: "Разработка ТУ", to: "/uslugi/razrabotka-dokumentacii/tu/" },
      { label: "Риск-менеджмент", to: "/uslugi/razrabotka-dokumentacii/risk-management/" },
    ],
  },
  {
    label: "Сертификация",
    to: "/uslugi/sertifikaciya/",
    children: [
      { label: "Декларация ТР ТС", to: "/uslugi/sertifikaciya/deklaraciya-tr-ts/" },
      { label: "Сертификат ТР ТС", to: "/uslugi/sertifikaciya/sertifikat-tr-ts/" },
    ],
  },
  {
    label: "Лицензирование",
    to: "/uslugi/licenzirovanie/",
    children: [
      { label: "Лицензия на производство", to: "/uslugi/licenzirovanie/proizvodstvo/" },
    ],
  },
  {
    label: "СМК",
    to: "/uslugi/smk/",
    children: [
      { label: "Аудит СМК", to: "/uslugi/smk/audit/" },
    ],
  },
];

const mainMenu = [
  { label: "Цены", to: "/ceny/" },
  { label: "Вопрос-ответ", to: "/faq/" },
  { label: "Статьи", to: "/blog/" },
  { label: "Отзывы", to: "/otzyvy/" },
  { label: "О компании", to: "/about/" },
  { label: "Контакты", to: "/contacts/" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<number | null>(null);

  return (
    <header className="sticky top-0 z-40 bg-background border-b border-border">
      <div className="container flex items-center justify-between h-16 gap-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-primary shrink-0">RegMT</Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          <div
            className="relative"
            onMouseEnter={() => setDesktopServicesOpen(true)}
            onMouseLeave={() => setDesktopServicesOpen(false)}
          >
            <Link to="/uslugi/" className="flex items-center gap-1 hover:text-primary transition-colors">
              Услуги <ChevronDown size={14} />
            </Link>
            {desktopServicesOpen && (
              <div className="absolute top-full left-0 bg-background border border-border rounded-lg shadow-lg p-4 w-72 z-50">
                {serviceCategories.map((cat) => (
                  <div key={cat.to} className="group relative">
                    <Link
                      to={cat.to}
                      className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-surface text-sm transition-colors"
                      onClick={() => setDesktopServicesOpen(false)}
                    >
                      {cat.label} <ChevronRight size={14} className="text-muted-foreground" />
                    </Link>
                    <div className="hidden group-hover:block absolute left-full top-0 bg-background border border-border rounded-lg shadow-lg p-3 w-64 z-50">
                      {cat.children.map((ch) => (
                        <Link
                          key={ch.to}
                          to={ch.to}
                          className="block py-1.5 px-2 rounded hover:bg-surface text-sm transition-colors"
                          onClick={() => setDesktopServicesOpen(false)}
                        >
                          {ch.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {mainMenu.map((item) => (
            <Link key={item.to} to={item.to} className="hover:text-primary transition-colors">{item.label}</Link>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-4 text-sm shrink-0">
          <div className="text-muted-foreground">
            <div>+7 (XXX) XXX-XX-XX</div>
            <div>info@regmt.ru</div>
          </div>
          <ConsultationModal />
          <SearchDropdown />
        </div>

        {/* Mobile right */}
        <div className="flex lg:hidden items-center gap-3">
          <Link to="/search/" aria-label="Поиск"><Search size={20} className="text-muted-foreground" /></Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Меню">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background max-h-[80vh] overflow-y-auto">
          <nav className="container py-4 space-y-1 text-sm">
            {/* Services */}
            <button
              className="flex items-center justify-between w-full py-2 font-medium"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Услуги <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 space-y-1">
                <Link to="/uslugi/" className="block py-1.5 text-primary font-medium" onClick={() => setMobileOpen(false)}>Все услуги</Link>
                {serviceCategories.map((cat, idx) => (
                  <div key={cat.to}>
                    <button
                      className="flex items-center justify-between w-full py-1.5"
                      onClick={() => setMobileSubOpen(mobileSubOpen === idx ? null : idx)}
                    >
                      {cat.label}
                      <ChevronDown size={14} className={`transition-transform ${mobileSubOpen === idx ? "rotate-180" : ""}`} />
                    </button>
                    {mobileSubOpen === idx && (
                      <div className="pl-4 space-y-1">
                        <Link to={cat.to} className="block py-1 text-primary" onClick={() => setMobileOpen(false)}>Обзор</Link>
                        {cat.children.map((ch) => (
                          <Link key={ch.to} to={ch.to} className="block py-1" onClick={() => setMobileOpen(false)}>{ch.label}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            {mainMenu.map((item) => (
              <Link key={item.to} to={item.to} className="block py-2" onClick={() => setMobileOpen(false)}>{item.label}</Link>
            ))}
            <div className="pt-4 border-t border-border space-y-1 text-muted-foreground">
              <div>+7 (XXX) XXX-XX-XX</div>
              <div>info@regmt.ru</div>
            </div>
            <div className="pt-2">
              <ConsultationModal />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
