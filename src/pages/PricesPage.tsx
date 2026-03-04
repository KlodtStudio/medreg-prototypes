import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import FinalCTAForm from "@/components/FinalCTAForm";

const prices = [
  { name: "Регистрация «под ключ»", price: "от 750 000 ₽" },
  { name: "Это медизделие или нет?", price: "от 35 000 ₽" },
  { name: "Клинические испытания", price: "от 40 000 ₽" },
  { name: "Изменения в РУ", price: "от 60 000 ₽" },
  { name: "Согласование/разработка ТУ", price: "от 40 000 ₽" },
  { name: "Консультация", price: "от 35 000 ₽" },
  { name: "Сертификация (декларация/сертификат ТР ТС)", price: "от 150 000 ₽" },
  { name: "Технические испытания", price: "Цена по запросу" },
  { name: "ЭМС-испытания", price: "Цена по запросу" },
  { name: "Инспектирование производства", price: "Цена по запросу" },
  { name: "Лицензирование производства", price: "Цена по запросу" },
  { name: "Аудит СМК", price: "Цена по запросу" },
  { name: "Риск-менеджмент", price: "Цена по запросу" },
];

const PricesPage = () => (
  <Layout>
    <div className="container py-12">
      <Breadcrumbs items={[{ label: "Цены" }]} />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Цены</h1>
      <p className="text-muted-foreground max-w-3xl mb-10">
        Стоимость зависит от класса риска, состава документации и объёма испытаний. Ниже — ориентиры. Точный расчёт дадим после короткого разбора изделия.
      </p>
      <div className="border border-border rounded-lg overflow-hidden mb-12">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 font-medium">Услуга</th>
              <th className="text-left p-4 font-medium">Стоимость</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((row, i) => (
              <tr key={i} className="border-t border-border">
                <td className="p-4">{row.name}</td>
                <td className="p-4 font-medium text-primary whitespace-nowrap">{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <FinalCTAForm
      title="Нужна консультация по вашему медицинскому изделию?"
      subtitle="Опишите задачу и что уже готово — мы подскажем следующий шаг, список документов и сориентируем по срокам и стоимости."
    />
  </Layout>
);

export default PricesPage;
