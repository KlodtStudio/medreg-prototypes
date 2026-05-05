import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import StatsBlock from "@/components/StatsBlock";
import ExpertBlock from "@/components/ExpertBlock";
import FinalCTAForm from "@/components/FinalCTAForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface CategoryData {
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  services: { label: string; to: string; price?: string }[];
  faq: { q: string; a: string }[];
}

const categoriesData: Record<string, CategoryData> = {
  "registraciya-meditsinskih-izdeliy": {
    title: "Регистрация медицинских изделий в Росздравнадзоре",
    metaTitle: "Регистрация медицинских изделий — получение регистрационного удостоверения Росздравнадзора под ключ",
    metaDescription: "Регистрация медицинских изделий и получение регистрационного удостоверения (РУ) в Росздравнадзоре под ключ. Подготовка документации, организация испытаний, сопровождение процедуры. Работаем по всей России.",
    description: "Полный цикл регистрации: от прогноза сроков до получения регистрационного удостоверения. Подходит производителям и дистрибьюторам отечественных и зарубежных медицинских изделий любого класса риска.",
    services: [
      { label: "Регистрация «под ключ»", to: "/uslugi/registraciya-meditsinskih-izdeliy/pod-klyuch/", price: "от 750 000 ₽" },
      { label: "Внесение изменений в РУ", to: "/uslugi/registraciya-meditsinskih-izdeliy/izmeneniya-v-ru/", price: "от 60 000 ₽" },
      { label: "Подлежит ли изделие регистрации", to: "/uslugi/registraciya-meditsinskih-izdeliy/podlezhit-li-registracii/", price: "от 35 000 ₽" },
      { label: "Ускоренная регистрация", to: "/uslugi/registraciya-meditsinskih-izdeliy/uskorennaya/", price: "Цена по запросу" },
      { label: "Регистрация по ЕАЭС", to: "/uslugi/registraciya-meditsinskih-izdeliy/eaes/", price: "Цена по запросу" },
      { label: "Регистрация изделий для инвитродиагностики", to: "/uslugi/registraciya-meditsinskih-izdeliy/ivd/", price: "от 90 000 ₽" },
      { label: "Регистрация медицинского ПО", to: "/uslugi/registraciya-meditsinskih-izdeliy/medicinskoe-po/", price: "от 80 000 ₽" },
    ],
    faq: [
      { q: "Сколько длится регистрация?", a: "В среднем 11 месяцев, зависит от класса риска и комплектности документов." },
      { q: "Какие документы нужны?", a: "Технический файл, результаты испытаний, доказательства безопасности и эффективности." },
      { q: "Можно ли ускорить процесс?", a: "Да, при наличии полного пакета документов срок сокращается." },
      { q: "Работаете с импортными МИ?", a: "Да, сопровождаем как отечественных, так и зарубежных производителей." },
      { q: "Что если получен отказ?", a: "Анализируем причины и готовим повторную подачу с доработками." },
    ],
  },
  "vysokotehnologichnye": {
    title: "Регистрация высокотехнологичных медицинских изделий",
    metaTitle: "Высокотехнологичные медизделия — IVD и медицинское ПО",
    metaDescription: "Регистрация высокотехнологичных медицинских изделий: изделия для in vitro диагностики и медицинское программное обеспечение. Сопровождение сложных проектов с учётом специфики по всей России.",
    description: "Регистрация сложных медицинских изделий: изделий для инвитродиагностики и медицинского программного обеспечения. Сопровождаем проекты с учётом специфики высокотехнологичной продукции.",
    services: [
      { label: "Регистрация изделий для инвитродиагностики", to: "/uslugi/registraciya-meditsinskih-izdeliy/ivd/", price: "от 90 000 ₽" },
      { label: "Регистрация медицинского ПО", to: "/uslugi/registraciya-meditsinskih-izdeliy/medicinskoe-po/", price: "от 80 000 ₽" },
    ],
    faq: [
      { q: "Чем отличается регистрация IVD-изделий?", a: "Особой спецификой клинико-лабораторных испытаний и требованиями к аналитическим характеристикам." },
      { q: "Нужна ли регистрация медицинского ПО?", a: "Да, если ПО относится к медицинским изделиям по назначению — требуется РУ." },
      { q: "Помогаете с регистрацией в странах СНГ?", a: "Да, сопровождаем проекты в рамках процедуры ЕАЭС и национальных процедур стран СНГ." },
    ],
  },
  "ispytaniya-meditsinskih-izdeliy": {
    title: "Проведение испытаний медицинских изделий для регистрации",
    metaTitle: "Испытания медицинских изделий — цена, виды и проведение",
    metaDescription: "Испытания медицинских изделий для регистрации: технические, клинические и токсикологические. Организация и проведение в аккредитованной лаборатории, требования и сроки.",
    description: "Организация и сопровождение технических, клинических, ЭМС и токсикологических испытаний. Поможем подобрать лаборатории и выстроить оптимальный маршрут.",
    services: [
      { label: "Клинические испытания", to: "/uslugi/ispytaniya-meditsinskih-izdeliy/klinicheskie/", price: "от 40 000 ₽" },
      { label: "Технические испытания", to: "/uslugi/ispytaniya-meditsinskih-izdeliy/tehnicheskie/", price: "Цена по запросу" },
      { label: "ЭМС-испытания", to: "/uslugi/ispytaniya-meditsinskih-izdeliy/ems/", price: "Цена по запросу" },
      { label: "Токсикологические исследования", to: "/uslugi/ispytaniya-meditsinskih-izdeliy/toksikologicheskie/", price: "Цена по запросу" },
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
    title: "Разработка документации для регистрации медицинских изделий",
    metaTitle: "Разработка документации для регистрации медизделий от 30 000 ₽",
    metaDescription: "Разработка документации для регистрации медицинских изделий: досье, ТУ, риск-менеджмент, инструкции. Подготовка под требования Росздравнадзора. Услуга под ключ.",
    description: "Подготовка технических условий, файлов управления рисками и иной нормативной документации для регистрации и производства медицинских изделий.",
    services: [
      { label: "Разработка ТУ", to: "/uslugi/razrabotka-dokumentacii/tu/", price: "от 40 000 ₽" },
      { label: "Управление рисками", to: "/uslugi/razrabotka-dokumentacii/risk-management/", price: "Цена по запросу" },
    ],
    faq: [
      { q: "Что входит в ТУ?", a: "Технические характеристики, требования безопасности, методы контроля." },
      { q: "Сколько времени занимает разработка?", a: "Обычно от 2 до 6 недель." },
      { q: "Нужна ли регистрация ТУ?", a: "ТУ регистрировать не требуется, но они входят в регистрационное досье." },
      { q: "Что такое файл управления рисками?", a: "Документ по ГОСТ Р ИСО 14971, описывающий идентификацию и снижение рисков." },
      { q: "Можно доработать имеющуюся документацию?", a: "Да, проведём аудит и доработаем до требований." },
    ],
  },
  "smk": {
    title: "Система менеджмента качества медицинских изделий",
    metaTitle: "Менеджмент качества медицинских изделий по ISO 13485",
    metaDescription: "СМК медицинских изделий (ISO 13485) — внедрение, аудит и сопровождение инспектирования производства Росздравнадзором. Стоимость от 60 000 ₽.",
    description: "Разработка и внедрение системы менеджмента качества по ISO 13485, а также сопровождение инспектирования производства Росздравнадзором.",
    services: [
      { label: "Внедрение СМК", to: "/uslugi/smk/vnedrenie/", price: "Цена по запросу" },
      { label: "Сопровождение инспектирования производства", to: "/uslugi/smk/inspektirovanie/", price: "Цена по запросу" },
    ],
    faq: [
      { q: "Что даёт ISO 13485?", a: "Подтверждение качества процессов для производителей МИ." },
      { q: "Обязателен ли ISO 13485?", a: "Для получения РУ — требуется документация СМК." },
      { q: "Сколько длится внедрение?", a: "От 3 до 6 месяцев." },
      { q: "Что проверяют при инспекции производства?", a: "Помещения, оборудование, СМК, квалификацию персонала, соответствие заявленному техпроцессу." },
      { q: "Помогаете с подготовкой к инспекции?", a: "Да, проводим предварительный аудит и готовим документацию." },
    ],
  },
  "postregistracionnoe-obsluzhivanie": {
    title: "Сопровождение медицинских изделий после регистрации",
    metaTitle: "Пострегистрационный мониторинг медицинских изделий по РФ",
    metaDescription: "Сопровождение медицинских изделий после получения регистрационного удостоверения: постклинический мониторинг, внесение изменений в РУ, юридическая поддержка. Цены от 25 000 ₽. Работаем по всей России.",
    description: "Сопровождение медицинских изделий после получения регистрационного удостоверения: постклинический мониторинг, юридическая поддержка и внесение изменений в РУ.",
    services: [
      { label: "Внесение изменений в РУ", to: "/uslugi/postregistracionnoe-obsluzhivanie/izmeneniya-v-ru/", price: "Цена по запросу" },
      { label: "Постклинический мониторинг МИ", to: "/uslugi/postregistracionnoe-obsluzhivanie/pkm/", price: "от 20 000 ₽" },
      { label: "Юридическое сопровождение МИ", to: "/uslugi/postregistracionnoe-obsluzhivanie/yuridicheskaya-podderzhka/", price: "от 30 000 ₽" },
    ],
    faq: [
      { q: "Что такое постклинический мониторинг?", a: "Это систематический сбор и анализ данных о безопасности и эффективности изделия после регистрации." },
      { q: "Зачем нужна юридическая поддержка после получения РУ?", a: "Для сопровождения взаимодействия с регулятором, проверок и спорных ситуаций." },
      { q: "Когда нужно вносить изменения в РУ?", a: "При смене производителя, адреса, модификации изделия и других значимых изменениях." },
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
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
      </Helmet>
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

      <FinalCTAForm
        title="Не уверены, какая услуга нужна?"
        subtitle="Опишите изделие и задачу — мы подскажем правильный маршрут, что подготовить, и сориентируем по срокам и стоимости."
      />
    </Layout>
  );
};

export default ServiceCategory;
