import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import FinalCTAForm from "@/components/FinalCTAForm";

const directions = [
  {
    title: "Регистрация медицинских изделий",
    to: "/uslugi/registraciya-meditsinskih-izdeliy/",
    children: [
      { label: "Регистрация «под ключ»", to: "/uslugi/registraciya-meditsinskih-izdeliy/pod-klyuch/" },
      { label: "Изменения в РУ", to: "/uslugi/registraciya-meditsinskih-izdeliy/izmeneniya-v-ru/" },
      { label: "Это медизделие или нет?", to: "/uslugi/registraciya-meditsinskih-izdeliy/eto-medizdelie-ili-net/" },
    ],
  },
  {
    title: "Испытания медицинских изделий",
    to: "/uslugi/ispytaniya-meditsinskih-izdeliy/",
    children: [
      { label: "Клинические испытания", to: "/uslugi/ispytaniya-meditsinskih-izdeliy/klinicheskie/" },
      { label: "Технические испытания", to: "/uslugi/ispytaniya-meditsinskih-izdeliy/tehnicheskie/" },
      { label: "ЭМС-испытания", to: "/uslugi/ispytaniya-meditsinskih-izdeliy/ems/" },
    ],
  },
  {
    title: "Разработка документации",
    to: "/uslugi/razrabotka-dokumentacii/",
    children: [
      { label: "Разработка ТУ", to: "/uslugi/razrabotka-dokumentacii/tu/" },
      { label: "Риск-менеджмент", to: "/uslugi/razrabotka-dokumentacii/risk-management/" },
    ],
  },
  {
    title: "Сертификация",
    to: "/uslugi/sertifikaciya/",
    children: [
      { label: "Декларация ТР ТС", to: "/uslugi/sertifikaciya/deklaraciya-tr-ts/" },
      { label: "Сертификат ТР ТС", to: "/uslugi/sertifikaciya/sertifikat-tr-ts/" },
    ],
  },
  {
    title: "Лицензирование",
    to: "/uslugi/licenzirovanie/",
    children: [
      { label: "Лицензия на производство", to: "/uslugi/licenzirovanie/proizvodstvo/" },
    ],
  },
  {
    title: "СМК",
    to: "/uslugi/smk/",
    children: [
      { label: "Аудит СМК", to: "/uslugi/smk/audit/" },
    ],
  },
];

const ServicesIndex = () => (
  <Layout>
    <div className="container py-12">
      <Breadcrumbs items={[{ label: "Услуги" }]} />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Услуги</h1>
      <p className="text-muted-foreground max-w-3xl mb-10">
        Выберите направление — и мы подскажем оптимальный маршрут именно под ваше изделие: что нужно подготовить, какие этапы пройти и где обычно возникают риски.
        Работаем «под ключ» и ведём проекты прозрачно: с планом, сроками и контролем задач в системе управления.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {directions.map((d) => (
          <div key={d.to} className="border border-border rounded-lg p-6 bg-background">
            <Link to={d.to} className="text-xl font-semibold hover:text-primary transition-colors">{d.title}</Link>
            <ul className="mt-3 space-y-1">
              {d.children.map((ch) => (
                <li key={ch.to}>
                  <Link to={ch.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">→ {ch.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <FinalCTAForm
      title="Не уверены, какая услуга нужна?"
      subtitle="Опишите изделие и задачу — мы подскажем правильный маршрут, что подготовить, и сориентируем по срокам и стоимости."
    />
  </Layout>
);

export default ServicesIndex;
