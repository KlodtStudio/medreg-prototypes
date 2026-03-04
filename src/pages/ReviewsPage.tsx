import { useState } from "react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import FinalCTAForm from "@/components/FinalCTAForm";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const reviews = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  label: `Рекомендательное письмо ${i + 1}`,
}));

const ReviewsPage = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Layout>
      <div className="container py-12">
        <Breadcrumbs items={[{ label: "Отзывы" }]} />
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Отзывы</h1>
        <p className="text-muted-foreground mb-10">Рекомендательные письма и отзывы на фирменных бланках.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {reviews.map((r) => (
            <button key={r.id} onClick={() => setSelected(r.id)} className="text-left">
              <ImagePlaceholder label={r.label} aspectRatio="3/4" className="hover:shadow-md transition-shadow cursor-pointer" />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg">
          {selected && <ImagePlaceholder label={`Рекомендательное письмо ${selected} (полный вид)`} aspectRatio="3/4" className="w-full" />}
        </DialogContent>
      </Dialog>

      <FinalCTAForm
        title="Нужна консультация по вашему медицинскому изделию?"
        subtitle="Опишите задачу и что уже готово — мы подскажем следующий шаг, список документов и сориентируем по срокам и стоимости."
      />
    </Layout>
  );
};

export default ReviewsPage;
