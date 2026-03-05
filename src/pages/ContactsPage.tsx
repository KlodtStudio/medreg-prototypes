import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import FinalCTAForm from "@/components/FinalCTAForm";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const ContactsPage = () => (
  <Layout>
    <div className="container py-12">
      <Breadcrumbs items={[{ label: "Контакты" }]} />
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Контакты</h1>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Телефон</div>
            <div className="font-medium">+7 (495) 181-75-05</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Email</div>
            <div className="font-medium">contact@regmt.ru</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Адрес</div>
            <div className="font-medium">115114, г. Москва, Дербеневская наб., д. 7, стр. 17</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Режим работы</div>
            <div className="font-medium">Пн–Пт: 9:00–18:00</div>
          </div>
        </div>
        <ImagePlaceholder label="Карта (плейсхолдер)" className="min-h-[300px]" />
      </div>
    </div>
    <FinalCTAForm
      title="Нужна консультация по вашему медицинскому изделию?"
      subtitle="Опишите задачу и что уже готово — мы подскажем следующий шаг, список документов и сориентируем по срокам и стоимости."
    />
  </Layout>
);

export default ContactsPage;
