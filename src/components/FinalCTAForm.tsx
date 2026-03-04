import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FinalCTAForm = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className="py-16 bg-surface" id="final-form">
        <div className="container max-w-2xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Спасибо!</h2>
          <p className="text-muted-foreground">Мы получили вашу заявку и свяжемся с вами в ближайшее время.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-surface" id="final-form">
      <div className="container max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
          Нужен прогноз по срокам и рискам именно по вашему изделию?
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Оставьте заявку. Разберём ваш кейс и предложим рабочий маршрут без лишних итераций.
        </p>
        <form
          className="space-y-4"
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
        >
          <Input placeholder="Имя" />
          <Input placeholder="Телефон *" required />
          <Input placeholder="Email" type="email" />
          <Textarea placeholder="Описание изделия" rows={3} />
          <div className="text-sm text-muted-foreground">Файл (опционально): <input type="file" className="ml-2" /></div>
          <Button type="submit" className="w-full">Получить прогноз</Button>
          <p className="text-xs text-muted-foreground text-center">Без рассылок и рекламы.</p>
        </form>
      </div>
    </section>
  );
};

export default FinalCTAForm;
