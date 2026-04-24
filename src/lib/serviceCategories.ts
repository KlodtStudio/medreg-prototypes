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
    ],
  },
  {
    label: "Регистрация различных видов медицинских изделий",
    to: "/uslugi/vysokotehnologichnye/",
    children: [
      { label: "Регистрация изделий для инвитродиагностики", to: "/uslugi/vysokotehnologichnye/ivd/" },
      { label: "Регистрация медицинского ПО", to: "/uslugi/vysokotehnologichnye/medicinskoe-po/" },
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
    label: "Разработка документации",
    to: "/uslugi/razrabotka-dokumentacii/",
    children: [
      { label: "Разработка ТУ", to: "/uslugi/razrabotka-dokumentacii/tu/" },
      { label: "Риск-менеджмент", to: "/uslugi/razrabotka-dokumentacii/risk-management/" },
    ],
  },
  {
    label: "СМК и производство",
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
      { label: "Постклинический мониторинг", to: "/uslugi/postregistracionnoe-obsluzhivanie/pkm/" },
      { label: "Юридическая поддержка", to: "/uslugi/postregistracionnoe-obsluzhivanie/yuridicheskaya-podderzhka/" },
    ],
  },
];
