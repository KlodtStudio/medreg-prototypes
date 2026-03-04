import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import FinalCTAForm from "@/components/FinalCTAForm";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Button } from "@/components/ui/button";
import { allArticles } from "@/lib/articlesData";

const ITEMS_PER_PAGE = 20;

const BlogPage = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(allArticles.length / ITEMS_PER_PAGE);
  const visible = allArticles.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <Layout>
      <div className="container py-12">
        <Breadcrumbs items={[{ label: "Статьи" }]} />
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Статьи</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {visible.map((a) => (
            <Link
              key={a.id}
              to={a.to}
              className="block border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col"
            >
              <div className="h-48 flex-shrink-0">
                <ImagePlaceholder label="Изображение статьи" className="rounded-none h-full" />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="text-xs text-muted-foreground mb-2">{a.date}</span>
                <h3 className="font-semibold text-sm mb-2 line-clamp-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">{a.desc}</p>
              </div>
            </Link>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i}
                variant={page === i + 1 ? "default" : "outline"}
                size="sm"
                onClick={() => { setPage(i + 1); window.scrollTo(0, 0); }}
              >
                {i + 1}
              </Button>
            ))}
          </div>
        )}
      </div>
      <FinalCTAForm
        title="Нужна консультация по вашему медицинскому изделию?"
        subtitle="Опишите задачу и что уже готово — мы подскажем следующий шаг, список документов и сориентируем по срокам и стоимости."
      />
    </Layout>
  );
};

export default BlogPage;
