import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ConsultationModal from "@/components/ConsultationModal";
import Layout from "@/components/Layout";
import TrustLogos from "@/components/TrustLogos";
import StatsBlock from "@/components/StatsBlock";
import FinalCTAForm from "@/components/FinalCTAForm";
import { allArticles } from "@/lib/articlesData";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import QuizRouter from "@/components/QuizRouter";
import letter1 from "@/assets/letters/letter-1.png";
import letter2 from "@/assets/letters/letter-2.png";
import letter3 from "@/assets/letters/letter-3.png";
import letter4 from "@/assets/letters/letter-4.png";

const letters = [
  { src: letter1, alt: "Рекомендательное письмо Straumann" },
  { src: letter2, alt: "Рекомендательное письмо Европа Медикал" },
  { src: letter3, alt: "Рекомендательное письмо Aldent" },
  { src: letter4, alt: "Рекомендательное письмо BOWA Medical" },
];

const slides = [
  {
    title: "Регистрация медицинских изделий в РФ «под ключ» — с прозрачным планом, сроками и управлением рисками",
    text: "Берём сложные проекты 2б/3 класса риска, ведём через испытания/экспертизу и доводим до РУ. 98% проектов — без отказа",
    to: "/uslugi/registraciya-meditsinskih-izdeliy/pod-klyuch/",
  },
  {
    title: "Изменения в РУ / регистрационном досье",
    text: "Соберём и оформим изменения без хаоса и лишних итераций.",
    to: "/uslugi/registraciya-meditsinskih-izdeliy/izmeneniya-v-ru/",
  },
  {
    title: "Испытания медицинских изделий",
    text: "Поможем выстроить маршрут испытаний и подготовить пакет документов.",
    to: "/uslugi/ispytaniya-meditsinskih-izdeliy/",
  },
  {
    title: "Сертификация / декларации",
    text: "Подскажем, что нужно именно вам, и проведём по процессу.",
    to: "/uslugi/sertifikaciya/",
  },
];

const services = [
  { title: "Регистрация «под ключ»", desc: "Полный цикл регистрации медицинского изделия — от подготовки документации до получения регистрационного удостоверения.", to: "/uslugi/registraciya-meditsinskih-izdeliy/pod-klyuch/" },
  { title: "Клинические испытания", desc: "Организация и сопровождение клинических испытаний медицинских изделий в аккредитованных центрах.", to: "/uslugi/ispytaniya-meditsinskih-izdeliy/klinicheskie/" },
  { title: "Изменения в РУ", desc: "Подготовка и подача документов для внесения изменений в действующее регистрационное удостоверение.", to: "/uslugi/registraciya-meditsinskih-izdeliy/izmeneniya-v-ru/" },
  { title: "Разработка ТУ", desc: "Разработка технических условий и нормативной документации для медицинских изделий.", to: "/uslugi/razrabotka-dokumentacii/tu/" },
  { title: "Сертификация", desc: "Оформление деклараций и сертификатов соответствия требованиям технических регламентов.", to: "/uslugi/sertifikaciya/" },
  { title: "Аудит СМК", desc: "Проверка системы менеджмента качества на соответствие требованиям стандартов и подготовка к сертификации.", to: "/uslugi/smk/audit/" },
];

const advantages = [
  {
    num: "01",
    title: "Опыт",
    desc: "Ключевые сотрудники компании в области регистрации работают годами, мы прошли через волны изменения законодательства, что позволило вырастить уникальную компетенцию быстрого приспособления к новому регулированию. Также в компании много молодых и квалифицированных специалистов. Мы ведём одновременно сотни проектов по изделиям всех видов, классов риска, в том числе для IVD диагностики.",
  },
  {
    num: "02",
    title: "Современная работа",
    desc: "Мы используем инструменты облачного продукт-менеджмента для того, чтобы процесс регистрации был прозрачным, предсказуемым и управляемым для внешнего заказчика. Клиент может отслеживать этапы своего проекта, контролировать сроки, обмениваться файлами в единой информационной среде — от заявки до получения РУ. Мы работаем в облаке, кроссплатформенно. Для вас мы на связи всегда.",
  },
  {
    num: "03",
    title: "Партнёрские испытательные центры",
    desc: "Испытания изделий являются важной и ресурсоёмкой частью процедуры. Мы давно на рынке, у нас крепкие партнёрские отношения с большинством испытательных центров. Понимание оптимального выбора подрядчика для каждого проекта и конкурентное ценообразование позволяют не снижать темпов ведения проекта и получать лучший результат в кратчайшие сроки.",
  },
  {
    num: "04",
    title: "Мы работаем для вас",
    desc: "Команда нашего центра берётся за самые нестандартные задачи. Мы получили первое в реестре РУ на зарубежное МИ по новой процедуре. Сотрудники компании становятся частью команды заказчика, потому что ваш успех — наше личное дело.",
  },
];

const cases = [
  { task: "Регистрация импортного ортопедического имплантата класса 2б", done: "Подготовили досье, провели клинические испытания, получили РУ", result: "РУ получено за 10 месяцев" },
  { task: "Внесение изменений в РУ на серию диагностических реагентов", done: "Подготовили обоснование, собрали пакет, подали заявку", result: "Изменения внесены за 3 месяца" },
  { task: "Определение статуса продукта: медизделие или нет", done: "Провели анализ, подготовили заключение с обоснованием", result: "Заключение за 5 рабочих дней" },
];

const articles = allArticles.slice(0, 3);

const IndexV2 = () => {
  const [slide, setSlide] = useState(0);
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <Layout>
      <ConsultationModal open={consultationOpen} onOpenChange={setConsultationOpen} />
      {/* Hero Slider */}
      <section className="relative bg-surface">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl min-h-[200px] md:min-h-[260px]">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{slides[slide].title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{slides[slide].text}</p>
            <div className="flex flex-wrap gap-3">
              {slide === 0 ? (
                <>
                  <Button onClick={() => document.getElementById("final-form")?.scrollIntoView({ behavior: "smooth" })}>
                    Получить дорожную карту и оценку рисков
                  </Button>
                  <Button variant="outline" onClick={() => setConsultationOpen(true)}>
                    Запросить КП / смету по этапам
                  </Button>
                </>
              ) : (
                <Button asChild><Link to={slides[slide].to}>Подробнее</Link></Button>
              )}
            </div>
            {slide === 0 && (
              <p className="text-sm text-muted-foreground mt-5">
                11 лет на рынке • 150 проектов в работе • средний срок РУ в 2025 — 11 мес (по статистике проектов)
              </p>
            )}
          </div>
          <div className="flex items-center gap-3 mt-8">
            <button onClick={() => setSlide((s) => (s - 1 + slides.length) % slides.length)} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-surface transition-colors">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setSlide(i)} className={`w-3 h-3 rounded-full transition-colors ${i === slide ? "bg-primary" : "bg-border"}`} />
              ))}
            </div>
            <button onClick={() => setSlide((s) => (s + 1) % slides.length)} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-surface transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* About block */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl text-center">
          <div className="w-16 h-1 bg-primary mx-auto mb-8" />
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Специализированный центр регистрации медицинских изделий
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-medium mb-6">
            Вывод на рынок РФ и ЕАЭС медицинских технологий
          </p>
          <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            <p>
              Компания RegMT является опорной точкой входа на рынок России и ЕАЭС для производителей и дистрибьюторов
              медицинских изделий, техники, аппаратов и программного обеспечения.
            </p>
            <p>
              Команда нашего центра помогает клиентам достичь своих целей через стратегический комплекс мер по входу на рынок:
              от разработки документации до сопровождения регистрации и получения разрешительных документов.
            </p>
            <p>
              Кроме основной специализации по регистрации медицинских изделий, мы оказываем услуги в области организации
              лицензирования производства, оформления разрешительной документации, внедрения СМК на производстве, а также
              помогаем вырасти технологическим медицинским стартапам.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">Наши услуги</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.to} className="border border-border rounded-lg p-6 bg-background flex flex-col">
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{s.desc}</p>
                <Button asChild variant="default" className="w-fit">
                  <Link to={s.to}>Подробнее</Link>
                </Button>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/uslugi/">Все услуги</Link>
            </Button>
          </div>
        </div>
      </section>

      <QuizRouter />

      {/* Why us */}
      <section className="py-16 bg-surface">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">Почему мы?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((a) => (
              <div key={a.title} className="bg-background rounded-lg p-6 border border-border">
                <div className="text-3xl font-bold text-primary/20 mb-3">{a.num}</div>
                <h3 className="font-semibold text-lg mb-3">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-background border border-border rounded-lg p-8 text-center">
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              <span className="text-primary text-3xl mr-2">"</span>
              Наши ребята — часть вашей команды
              <span className="text-primary text-3xl ml-2">"</span>
            </p>
          </div>
        </div>
      </section>

      <TrustLogos />

      {/* Recommendation letters */}
      <section className="py-16 bg-surface">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">Отзывы клиентов</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {letters.map((l) => (
              <img key={l.alt} src={l.src} alt={l.alt} className="rounded-lg border border-border w-full object-cover" style={{ aspectRatio: "3/4" }} />
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">Как мы работаем</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              { num: "01", title: "Заявка", desc: "Клиент высылает техническое описание и расписывает комплектацию изделия" },
              { num: "02", title: "Оценка", desc: "Мы считаем стоимость проекта, сроки и виды работ" },
              { num: "03", title: "Договор", desc: "Подписываем договор" },
              { num: "04", title: "Работа", desc: "Начинается работа по проекту. Проводится анализ, коррекция и разработка новой документации" },
            ].map((step, i) => (
              <div key={step.num} className="relative text-center">
                <div className="text-sm font-bold text-primary mb-2">{step.num}</div>
                <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">{i + 1}</span>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+32px)] w-[calc(100%-64px)] h-px bg-border" />
                )}
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIDDEN: StatsBlock — чтобы вернуть, раскомментируйте */}
      {/* <StatsBlock /> */}

      {/* HIDDEN: Cases — чтобы вернуть, раскомментируйте */}
      {/*
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">Кейсы</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <div key={i} className="border border-border rounded-lg p-6">
                <div className="text-xs text-muted-foreground uppercase mb-2">Задача</div>
                <p className="font-medium mb-3">{c.task}</p>
                <div className="text-xs text-muted-foreground uppercase mb-2">Что сделали</div>
                <p className="text-sm mb-3">{c.done}</p>
                <div className="text-xs text-muted-foreground uppercase mb-2">Результат</div>
                <p className="text-sm font-semibold text-primary">{c.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Articles */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">Статьи</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((a) => (
              <Link key={a.title} to={a.to} className="block border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="h-48 flex-shrink-0">
                  <ImagePlaceholder label="Изображение статьи" className="rounded-none h-full" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <span className="text-xs text-muted-foreground mb-2">{a.date}</span>
                  <h3 className="font-semibold mb-2 line-clamp-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{a.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/blog/">Все статьи</Link>
            </Button>
          </div>
        </div>
      </section>

      <FinalCTAForm />
    </Layout>
  );
};

export default IndexV2;
