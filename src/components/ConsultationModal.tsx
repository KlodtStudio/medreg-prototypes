import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ConsultationModal = ({ trigger }: { trigger?: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) setSubmitted(false); }}>
      <DialogTrigger asChild>
        {trigger || <Button>Консультация</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Консультация</DialogTitle>
        </DialogHeader>
        {submitted ? (
          <div className="text-center py-6">
            <p className="font-semibold text-lg mb-2">Спасибо!</p>
            <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <Input placeholder="Имя" />
            <Input placeholder="Телефон *" required />
            <Textarea placeholder="Коротко опишите изделие" rows={3} />
            <div className="text-sm text-muted-foreground">Файл (опционально): <input type="file" className="ml-2" /></div>
            <Button type="submit" className="w-full">Отправить</Button>
            <p className="text-xs text-muted-foreground text-center">Без рассылок и рекламы.</p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;
