import { useState } from "react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import FinalCTAForm from "@/components/FinalCTAForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import letter1 from "@/assets/letters/letter-1.png";
import letter2 from "@/assets/letters/letter-2.png";
import letter3 from "@/assets/letters/letter-3.png";
import letter4 from "@/assets/letters/letter-4.png";

const reviews = [
  { id: 1, src: letter1, alt: "Рекомендательное письмо Straumann" },
  { id: 2, src: letter2, alt: "Рекомендательное письмо Европа Медикал" },
  { id: 3, src: letter3, alt: "Рекомендательное письмо Aldent" },
  { id: 4, src: letter4, alt: "Рекомендательное письмо BOWA Medical" },
];

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
              <img src={r.src} alt={r.alt} className="rounded-lg border border-border w-full object-cover hover:shadow-md transition-shadow cursor-pointer" style={{ aspectRatio: "3/4" }} />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg">
          {selected && (() => {
            const review = reviews.find(r => r.id === selected);
            return review ? <img src={review.src} alt={review.alt} className="w-full rounded-lg" /> : null;
          })()}
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
