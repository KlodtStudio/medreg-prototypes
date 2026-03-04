import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import StatsBlock from "@/components/StatsBlock";
import ExpertBlock from "@/components/ExpertBlock";
import FinalCTAForm from "@/components/FinalCTAForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface CategoryData {
  title: string;
  description: string;
  services: { label: string; to: string; price?: string }[];
  faq: { q: string; a: string }[];
}

const categoriesData: Record<string, CategoryData> = {
  "registraciya-meditsinskih-izdeliy": {
    title: "Регистрация медицинских изделий",
    description: "Полный цикл регистрации: от прогноза сроков до получения регистрационного удостоверения. Подходит производителям и дистрибьюторам отечественных и зарубежных медицинских изделий любого класса риска.",
    services: [
      { label: "Регистрация «под ключ»", to: "/uslugi/registraciya-meditsinskih-izdeliy/pod-klyuch/", price: "от 750 000 ₽" },
      { label: "Изменения в РУ", to: "/uslugi/registraciya-meditsinskih-izdeliy/izmeneniya-v-ru/", price: "от 60 000 ₽" },
      { label: "Это медизделие или нет?", to: "/uslugi/registraciya-meditsinskih-izdeliy/eto-medizdelie-ili-net/", price: "от 35 000 ₽" },
    ],
    faq: [
      { q: "Сколько длится регистрация?", a: "В среднем 11 месяцев, зависит от класса риска и комплектности документов." },
      { q: "Какие документы нужны?", a: "Технический файл, результаты испытаний, доказательства безопасности и эффективности." },
      { q: "Можно ли ускорить процесс?", a: "Да, при наличии полного пакета документов срок сокращается." },
      { q: "Работаете с импортными МИ?", a: "Да, сопровождаем как отечественных, так и зарубежных производителей." },
      { q: "Что если получен отказ?", a: "Анализируем причины и готовим повторную подачу с доработками." },
    ],
  },
  "ispytaniya-meditsinskih-izdeliy": {
    title: "Испытания медицинских изделий",
    description: "Организация и сопровождение технических, клинических и ЭМС-испытаний. Поможем подобрать лаборатории и выстроить оптимальный маршрут.",
    services: [
      { label: "Клинические испытания", to: "/uslugi/ispytaniya-meditsinskih-izdeliy/klinicheskie/", price: "от 40 000 ₽" },
      { label: "Технические испытания", to: "/uslugi/ispytaniya-meditsinskih-izdeliy/tehnicheskie/", price: "Цена по запросу" },
      { label: "ЭМС-испытания", to: "/uslugi/ispytaniya-meditsinskih-izdeliy/ems/", price: "Цена по запросу" },
    ],
    faq: [
      { q: "Какие испытания обязательны?", a: "Зависит от класса риска и типа МИ — определим при оценке." },
      { q: "Вы проводите испытания сами?", a: "Сопровождаем процесс: подбираем лаборатории, готовим документы, контролируем сроки." },
      { q: "Сколько длятся испытания?", a: "От 2 недель до нескольких месяцев в зависимости от типа." },
      { q: "Можно ли совместить несколько испытаний?", a: "Да, мы выстраиваем маршрут с учётом параллельных процессов." },
      { q: "Нужен ли образец изделия?", a: "Как правило — да, количество определяется программой испытаний." },
    ],
  },
  "razrabotka-dokumentacii": {
    title: "Разработка документации",
    description: "Подготовка технических условий, файлов управления рисками и иной нормативной документации для регистрации и производства медицинских изделий.",
    services: [
      { label: "Разработка ТУ", to: "/uslugi/razrabotka-dokumentacii/tu/", price: "от 40 000 ₽" },
      { label: "Риск-менеджмент", to: "/uslugi/razrabotka-dokumentacii/risk-management/", price: "Цена по запросу" },
    ],
    faq: [
      { q: "Что входит в ТУ?", a: "Технические характеристики, требования безопасности, методы контроля." },
      { q: "Сколько времени занимает разработка?", a: "Обычно от 2 до 6 недель." },
      { q: "Нужна ли регистрация ТУ?", a: "ТУ регистрировать не требуется, но они входят в регистрационное досье." },
      { q: "Что такое файл управления рисками?", a: "Документ по ГОСТ Р ИСО 14971, описывающий идентификацию и снижение рисков." },
      { q: "Можно доработать имеющуюся документацию?", a: "Да, проведём аудит и доработаем до требований." },
    ],
  },
  "sertifikaciya": {
    title: "Сертификация",
    description: "Получение деклараций и сертификатов соответствия по техническим регламентам Таможенного союза. Подберём схему и проведём по процессу.",
    services: [
      { label: "Декларация ТР ТС", to: "/uslugi/sertifikaciya/deklaraciya-tr-ts/", price: "от 150 000 ₽" },
      { label: "Сертификат ТР ТС", to: "/uslugi/sertifikaciya/sertifikat-tr-ts/", price: "Цена по запросу" },
    ],
    faq: [
      { q: "В чём разница между декларацией и сертификатом?", a: "Форма подтверждения зависит от ТР ТС и типа продукции." },
      { q: "Какой срок действия?", a: "Обычно 5 лет, зависит от выбранной схемы." },
      { q: "Нужны ли испытания?", a: "Да, в аккредитованной лаборатории." },
      { q: "Работаете по всем ТР ТС?", a: "Работаем по ТР ТС, применимым к медицинским изделиям." },
      { q: "Можно получить сертификат на серию?", a: "Да, по соответствующей схеме сертификации." },
    ],
  },
  "licenzirovanie": {
    title: "Лицензирование",
    description: "Получение лицензий на производство и техническое обслуживание медицинских изделий. Поможем подготовить предприятие к инспекции.",
    services: [
      { label: "Лицензия на производство", to: "/uslugi/licenzirovanie/proizvodstvo/", price: "Цена по запросу" },
    ],
    faq: [
      { q: "Какие лицензии нужны производителю МИ?", a: "Лицензия на производство медицинской техники." },
      { q: "Сколько длится получение лицензии?", a: "Обычно 2–4 месяца." },
      { q: "Что проверяют при инспекции?", a: "Помещения, оборудование, СМК, квалификацию персонала." },
      { q: "Помогаете с подготовкой к инспекции?", a: "Да, проводим предварительный аудит и готовим документацию." },
      { q: "Срок действия лицензии?", a: "Бессрочная, но требует поддержания условий." },
    ],
  },
  "smk": {
    title: "Система менеджмента качества",
    description: "Разработка, внедрение и аудит СМК по ISO 13485. Подготовим вашу организацию к сертификации и инспекционным проверкам.",
    services: [
      { label: "Аудит СМК", to: "/uslugi/smk/audit/", price: "Цена по запросу" },
    ],
    faq: [
      { q: "Что даёт ISO 13485?", a: "Подтверждение качества процессов для производителей МИ." },
      { q: "Обязателен ли ISO 13485?", a: "Для получения РУ — требуется документация СМК." },
      { q: "Сколько длится внедрение?", a: "От 3 до 6 месяцев." },
      { q: "Проводите внутренние аудиты?", a: "Да, помогаем провести и подготовить отчёт." },
      { q: "Можно доработать существующую СМК?", a: "Конечно, проведём аудит и укажем на несоответствия." },
    ],
  },
};

const ServiceCategory = () => {
  const { category } = useParams<{ category: string }>();
  const data = categoriesData[category || ""];

  if (!data) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Направление не найдено</h1>
          <Link to="/uslugi/" className="text-primary hover:underline">К услугам</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-12">
        <Breadcrumbs items={[{ label: "Услуги", to: "/uslugi/" }, { label: data.title }]} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h1>
        <p className="text-muted-foreground max-w-3xl mb-10">{data.description}</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {data.services.map((s) => (
            <Link key={s.to} to={s.to} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow bg-background">
              <h3 className="font-semibold text-lg mb-2">{s.label}</h3>
              {s.price && <div className="text-primary font-medium">{s.price}</div>}
            </Link>
          ))}
        </div>
      </div>

      <StatsBlock title="Цифры" />
      <ExpertBlock />

      <div className="container py-12">
        <h2 className="text-2xl font-semibold mb-6">Частые вопросы</h2>
        <Accordion type="single" collapsible className="max-w-3xl">
          {data.faq.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <FinalCTAForm />
    </Layout>
  );
};

export default ServiceCategory;
