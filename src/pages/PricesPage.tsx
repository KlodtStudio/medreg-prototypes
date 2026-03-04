import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import FinalCTAForm from "@/components/FinalCTAForm";

interface PriceRow {
  name: string;
  price: string;
  to?: string;
}

interface PriceSection {
  title: string;
  to: string;
  rows: PriceRow[];
}

const priceSections: PriceSection[] = [
  {
    title: "Регистрация медицинских изделий",
    to: "/uslugi/registraciya-meditsinskih-izdeliy/",
    rows: [
      { name: "Регистрация «под ключ» (класс 1)", price: "от 750 000 ₽", to: "/uslugi/registraciya-meditsinskih-izdeliy/pod-klyuch/" },
      { name: "Регистрация «под ключ» (класс 2а–2б)", price: "от 900 000 ₽", to: "/uslugi/registraciya-meditsinskih-izdeliy/pod-klyuch/" },
      { name: "Регистрация «под ключ» (класс 3)", price: "от 1 200 000 ₽", to: "/uslugi/registraciya-meditsinskih-izdeliy/pod-klyuch/" },
      { name: "Изменения в РУ (простые)", price: "от 60 000 ₽", to: "/uslugi/registraciya-meditsinskih-izdeliy/izmeneniya-v-ru/" },
      { name: "Изменения в РУ (существенные)", price: "от 150 000 ₽", to: "/uslugi/registraciya-meditsinskih-izdeliy/izmeneniya-v-ru/" },
      { name: "Это медизделие или нет? (заключение)", price: "от 35 000 ₽", to: "/uslugi/registraciya-meditsinskih-izdeliy/eto-medizdelie-ili-net/" },
    ],
  },
  {
    title: "Испытания медицинских изделий",
    to: "/uslugi/ispytaniya-meditsinskih-izdeliy/",
    rows: [
      { name: "Клинические испытания (сопровождение)", price: "от 40 000 ₽", to: "/uslugi/ispytaniya-meditsinskih-izdeliy/klinicheskie/" },
      { name: "Разработка протокола КИ", price: "от 80 000 ₽", to: "/uslugi/ispytaniya-meditsinskih-izdeliy/klinicheskie/" },
      { name: "Технические испытания", price: "Цена по запросу", to: "/uslugi/ispytaniya-meditsinskih-izdeliy/tehnicheskie/" },
      { name: "ЭМС-испытания", price: "Цена по запросу", to: "/uslugi/ispytaniya-meditsinskih-izdeliy/ems/" },
    ],
  },
  {
    title: "Разработка документации",
    to: "/uslugi/razrabotka-dokumentacii/",
    rows: [
      { name: "Разработка ТУ", price: "от 40 000 ₽", to: "/uslugi/razrabotka-dokumentacii/tu/" },
      { name: "Риск-менеджмент (файл управления рисками)", price: "Цена по запросу", to: "/uslugi/razrabotka-dokumentacii/risk-management/" },
    ],
  },
  {
    title: "Сертификация",
    to: "/uslugi/sertifikaciya/",
    rows: [
      { name: "Декларация ТР ТС", price: "от 150 000 ₽", to: "/uslugi/sertifikaciya/deklaraciya-tr-ts/" },
      { name: "Сертификат ТР ТС", price: "Цена по запросу", to: "/uslugi/sertifikaciya/sertifikat-tr-ts/" },
    ],
  },
  {
    title: "Лицензирование",
    to: "/uslugi/licenzirovanie/",
    rows: [
      { name: "Лицензия на производство", price: "Цена по запросу", to: "/uslugi/licenzirovanie/proizvodstvo/" },
    ],
  },
  {
    title: "Система менеджмента качества",
    to: "/uslugi/smk/",
    rows: [
      { name: "Аудит СМК", price: "Цена по запросу", to: "/uslugi/smk/audit/" },
    ],
  },
];

const PricesPage = () => (
  <Layout>
    <div className="container py-12">
      <Breadcrumbs items={[{ label: "Цены" }]} />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Цены</h1>
      <p className="text-muted-foreground max-w-3xl mb-10">
        Стоимость зависит от класса риска, состава документации и объёма испытаний. Ниже — ориентиры. Точный расчёт дадим после короткого разбора изделия.
      </p>

      <div className="space-y-8 mb-12">
        {priceSections.map((section) => (
          <div key={section.title} className="border border-border rounded-lg overflow-hidden">
            {/* Section header */}
            <div className="bg-surface px-4 py-3 md:px-6 md:py-4">
              <Link
                to={section.to}
                className="font-semibold text-primary hover:underline"
              >
                {section.title}
              </Link>
            </div>

            {/* Rows */}
            <div className="divide-y divide-border">
              {section.rows.map((row, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 md:px-6 md:py-4 gap-1 sm:gap-4"
                >
                  <div className="text-sm">
                    {row.to ? (
                      <Link to={row.to} className="hover:text-primary transition-colors">
                        {row.name}
                      </Link>
                    ) : (
                      row.name
                    )}
                  </div>
                  <div className="text-sm font-medium text-primary whitespace-nowrap">
                    {row.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <FinalCTAForm
      title="Нужна консультация по вашему медицинскому изделию?"
      subtitle="Опишите задачу и что уже готово — мы подскажем следующий шаг, список документов и сориентируем по срокам и стоимости."
    />
  </Layout>
);

export default PricesPage;
