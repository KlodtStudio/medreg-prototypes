export interface ServiceChild {
  label: string;
  to: string;
}

export interface ServiceCategory {
  label: string;
  to: string;
  children: ServiceChild[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    label: "Регистрация медицинских изделий",
    to: "/uslugi/registraciya-meditsinskih-izdeliy/",
    children: [
      { label: "Регистрация «под ключ»", to: "/uslugi/registraciya-meditsinskih-izdeliy/pod-klyuch/" },
      { label: "Внесение изменений в РУ", to: "/uslugi/registraciya-meditsinskih-izdeliy/izmeneniya-v-ru/" },
      { label: "Подлежит ли изделие регистрации", to: "/uslugi/registraciya-meditsinskih-izdeliy/podlezhit-li-registracii/" },
      { label: "Ускоренная регистрация", to: "/uslugi/registraciya-meditsinskih-izdeliy/uskorennaya/" },
      { label: "Регистрация по ЕАЭС", to: "/uslugi/registraciya-meditsinskih-izdeliy/eaes/" },
      { label: "Регистрация изделий для инвитродиагностики", to: "/uslugi/registraciya-meditsinskih-izdeliy/ivd/" },
      { label: "Регистрация медицинского ПО", to: "/uslugi/registraciya-meditsinskih-izdeliy/medicinskoe-po/" },
    ],
  },
  {
    label: "Испытания медицинских изделий",
    to: "/uslugi/ispytaniya-meditsinskih-izdeliy/",
    children: [
      { label: "Клинические испытания", to: "/uslugi/ispytaniya-meditsinskih-izdeliy/klinicheskie/" },
      { label: "Технические испытания", to: "/uslugi/ispytaniya-meditsinskih-izdeliy/tehnicheskie/" },
      { label: "ЭМС-испытания", to: "/uslugi/ispytaniya-meditsinskih-izdeliy/ems/" },
      { label: "Токсикологические исследования", to: "/uslugi/ispytaniya-meditsinskih-izdeliy/toksikologicheskie/" },
    ],
  },
  {
    label: "Разработка документации для регистрации медизделий",
    to: "/uslugi/razrabotka-dokumentacii/",
    children: [
      { label: "Разработка ТУ", to: "/uslugi/razrabotka-dokumentacii/tu/" },
      { label: "Управление рисками", to: "/uslugi/razrabotka-dokumentacii/risk-management/" },
    ],
  },
  {
    label: "Система менеджмента качества (СМК) медицинских изделий",
    to: "/uslugi/smk/",
    children: [
      { label: "Внедрение СМК", to: "/uslugi/smk/vnedrenie/" },
      { label: "Сопровождение инспектирования производства", to: "/uslugi/smk/inspektirovanie/" },
    ],
  },
  {
    label: "Пострегистрационное обслуживание",
    to: "/uslugi/postregistracionnoe-obsluzhivanie/",
    children: [
      { label: "Внесение изменений в РУ", to: "/uslugi/postregistracionnoe-obsluzhivanie/izmeneniya-v-ru/" },
      { label: "Постклинический мониторинг МИ", to: "/uslugi/postregistracionnoe-obsluzhivanie/pkm/" },
      { label: "Юридическое сопровождение МИ", to: "/uslugi/postregistracionnoe-obsluzhivanie/yuridicheskaya-podderzhka/" },
    ],
  },
];
