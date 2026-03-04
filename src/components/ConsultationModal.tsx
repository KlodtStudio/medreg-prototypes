import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const ConsultationModal = ({ trigger }: { trigger?: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) { setSubmitted(false); setAgreed(false); } }}>
      <DialogTrigger asChild>
        {trigger || <Button>Консультация</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-8">
        <DialogHeader className="mb-2">
          <DialogTitle className="text-2xl font-bold text-center uppercase">Закажите консультацию</DialogTitle>
          <p className="text-center text-muted-foreground mt-1">Наш менеджер свяжется с Вами.</p>
        </DialogHeader>
        {submitted ? (
          <div className="text-center py-8">
            <p className="font-semibold text-lg mb-2">Спасибо!</p>
            <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <form className="space-y-5 mt-2" onSubmit={(e) => { e.preventDefault(); if (agreed) setSubmitted(true); }}>
            <Input placeholder="Ваше имя" className="h-11" />
            <Input placeholder="Ваш телефон" required className="h-11" />
            <div className="text-sm text-muted-foreground text-center space-y-1">
              <p>Есть документация на изделие?</p>
              <p>Добавьте файл</p>
              <input type="file" className="text-sm mt-1" />
            </div>
            <Button
              type="submit"
              disabled={!agreed}
              className="w-full h-11 text-base font-semibold"
            >
              Заказать консультацию
            </Button>
            <div className="flex items-start gap-2.5 pt-1">
              <Checkbox
                id="consent"
                checked={agreed}
                onCheckedChange={(v) => setAgreed(v === true)}
                className="mt-0.5"
              />
              <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                Нажимая кнопку «Заказать», я даю своё согласие на обработку моих персональных данных в соответствии с{" "}
                <Link
                  to="/privacy-policy"
                  className="underline text-primary hover:text-primary/80"
                  onClick={() => setOpen(false)}
                >
                  Политикой конфиденциальности
                </Link>.
              </label>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;
