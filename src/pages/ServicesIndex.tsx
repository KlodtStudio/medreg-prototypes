import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import FinalCTAForm from "@/components/FinalCTAForm";
import { serviceCategories } from "@/lib/serviceCategories";

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
        {serviceCategories.map((d) => (
          <div key={d.to} className="border border-border rounded-lg p-6 bg-background">
            <Link to={d.to} className="text-xl font-semibold hover:text-primary transition-colors">{d.label}</Link>
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
