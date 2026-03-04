import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import StatsBlock from "@/components/StatsBlock";
import ExpertBlock from "@/components/ExpertBlock";
import TrustLogos from "@/components/TrustLogos";
import FinalCTAForm from "@/components/FinalCTAForm";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const AboutPage = () => (
  <Layout>
    <div className="container py-12">
      <Breadcrumbs items={[{ label: "О компании" }]} />
      <h1 className="text-3xl md:text-4xl font-bold mb-6">О компании</h1>
      <div className="max-w-3xl space-y-4 text-muted-foreground mb-12">
        <p>
          RegMT — компания, специализирующаяся на регистрации, испытаниях и сертификации медицинских изделий. Мы работаем с 2015 года и за это время помогли получить более 300 регистрационных удостоверений различного класса риска и сложности.
        </p>
        <p>
          В нашей команде 40 специалистов: регуляторные эксперты, инженеры, специалисты по качеству. Мы сопровождаем проекты как отечественных производителей, так и мировых брендов — Straumann, Zimmer, Johnson & Johnson, Bio-Rad, Baxter и других.
        </p>
        <p>
          Наш подход — прозрачная работа «под ключ»: от прогноза сроков и рисков до получения результата. Мы ведём проекты с планом, контрольными точками и системой управления задачами.
        </p>
      </div>
    </div>

    <StatsBlock title="Цифры" />
    <ExpertBlock />
    <TrustLogos />

    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl font-semibold text-center mb-8">Рекомендательные письма</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((n) => (
            <ImagePlaceholder key={n} label={`Рекомендательное письмо ${n}`} aspectRatio="3/4" />
          ))}
        </div>
      </div>
    </section>

    <FinalCTAForm
      title="Нужна консультация по вашему медицинскому изделию?"
      subtitle="Опишите задачу и что уже готово — мы подскажем следующий шаг, список документов и сориентируем по срокам и стоимости."
    />
  </Layout>
);

export default AboutPage;
