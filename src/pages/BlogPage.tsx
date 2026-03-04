import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import FinalCTAForm from "@/components/FinalCTAForm";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Button } from "@/components/ui/button";

const allArticles = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: [
    "Как определить класс риска медицинского изделия",
    "Что изменилось в порядке регистрации МИ в 2024 году",
    "Частые ошибки при подаче документов на регистрацию",
    "Клинические испытания: когда они нужны и как проходят",
    "Чем отличается декларация от сертификата ТР ТС",
    "Как подготовить технические условия для МИ",
    "ISO 13485: что нужно знать производителю",
    "Регистрация программного обеспечения как МИ",
    "Изменения в РУ: пошаговая инструкция",
    "ЭМС-испытания: требования и подводные камни",
    "Лицензирование производства МИ в 2024 году",
    "Как выбрать лабораторию для испытаний МИ",
    "Риск-менеджмент по ISO 14971: основы",
    "Регистрация IVD-изделий: особенности",
    "Инспектирование производства: к чему готовиться",
    "Технический файл: структура и содержание",
    "Маркировка медицинских изделий: требования",
    "Пострегистрационный мониторинг: зачем и как",
    "ЕАЭС vs национальная регистрация: сравнение",
    "Тренды регуляторики МИ в 2025 году",
  ][i],
  to: i === 0 ? "/blog/kak-opredelit-klass-riska/" : "/blog/",
}));

const ITEMS_PER_PAGE = 9;

const BlogPage = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(allArticles.length / ITEMS_PER_PAGE);
  const visible = allArticles.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <Layout>
      <div className="container py-12">
        <Breadcrumbs items={[{ label: "Статьи" }]} />
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Статьи</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {visible.map((a) => (
            <Link key={a.id} to={a.to} className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <ImagePlaceholder label="Изображение статьи" className="rounded-none" />
              <div className="p-4">
                <h3 className="font-semibold text-sm">{a.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i}
              variant={page === i + 1 ? "default" : "outline"}
              size="sm"
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
        </div>
      </div>
      <FinalCTAForm />
    </Layout>
  );
};

export default BlogPage;
