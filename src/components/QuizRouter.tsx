import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft, ChevronRight, Send, MessageCircle, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    question: "Определились с классом риска?",
    hint: "Если класс риска пока не определён — ничего страшного, уточним на консультации.",
    options: [
      "Да, определились",
      "Нет, не уверен(а)",
      "Нужно определить (помогите разобраться)",
    ],
  },
  {
    question: "Страна производителя?",
    options: [
      "Россия",
      "Иностранный производитель",
      "Ещё не определились",
    ],
  },
  {
    question: "Что нужно сейчас?",
    options: [
      "Регистрация «под ключ»",
      "Внесение изменений в РУ",
      "Организация испытаний",
      "Подлежит ли изделие регистрации",
      "Другая задача / другая услуга",
    ],
  },
];

const OTHER_TASK = "Другая задача / другая услуга";

const QuizRouter = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>([null, null, null]);
  const [contactForm, setContactForm] = useState({
    name: "",
    contact: "",
    email: "",
    description: "",
    otherTask: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 3;
  const isQuizDone = currentStep === totalSteps;
  const isSuccess = submitted;

  const selectAnswer = (option: string) => {
    const next = [...answers];
    next[currentStep] = option;
    setAnswers(next);
  };

  const canGoNext = answers[currentStep] !== null;

  const goNext = () => {
    if (currentStep < totalSteps) setCurrentStep((s) => s + 1);
  };

  const goBack = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  const handleSubmit = () => {
    if (!contactForm.contact || !agreed) return;
    // In production, send data to backend
    console.log("Quiz submitted:", { answers, contactForm });
    setSubmitted(true);
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers([null, null, null]);
    setContactForm({ name: "", contact: "", email: "", description: "", otherTask: "" });
    setAgreed(false);
    setSubmitted(false);
  };

  const showOtherField = answers[2] === OTHER_TASK;

  // Success screen
  if (isSuccess) {
    return (
      <section id="route-quiz" className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto border border-border rounded-xl shadow-sm bg-background p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Send className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Спасибо! Приняли заявку.</h3>
            <p className="text-muted-foreground mb-8">
              Мы изучим ответы и свяжемся с вами в течение 1 рабочего дня.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <a href="https://t.me/regmt" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Написать в Telegram
                </a>
              </Button>
              <Button variant="outline" onClick={reset}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Вернуться на страницу
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="route-quiz" className="py-16">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Быстро подскажем правильный маршрут</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ответьте на 3 вопроса — и мы подскажем, с чего начать, какие этапы будут в вашем случае и какие риски стоит учесть.
          </p>
        </div>

        <div className="max-w-2xl mx-auto border border-border rounded-xl shadow-sm bg-background p-6 md:p-10">
          {/* Progress */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-sm font-medium text-muted-foreground">
              Шаг {Math.min(currentStep + 1, totalSteps + 1)} из {totalSteps + 1}
            </span>
            <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / (totalSteps + 1)) * 100}%` }}
              />
            </div>
          </div>

          {/* Quiz steps */}
          {!isQuizDone && (
            <div>
              <h3 className="text-lg font-semibold mb-5">{steps[currentStep].question}</h3>
              <div className="grid gap-3">
                {steps[currentStep].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => selectAnswer(option)}
                    className={cn(
                      "w-full text-left px-5 py-4 rounded-lg border-2 transition-all text-sm md:text-base",
                      answers[currentStep] === option
                        ? "border-primary bg-primary/5 font-medium"
                        : "border-border hover:border-primary/40 hover:bg-muted/50"
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {steps[currentStep].hint && (
                <p className="text-xs text-muted-foreground mt-4">{steps[currentStep].hint}</p>
              )}
              <div className="flex justify-between mt-8">
                <Button variant="ghost" onClick={goBack} disabled={currentStep === 0}>
                  <ChevronLeft className="w-4 h-4 mr-1" /> Назад
                </Button>
                <Button onClick={goNext} disabled={!canGoNext}>
                  Далее <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          )}

          {/* Contact step */}
          {isQuizDone && (
            <div>
              <h3 className="text-lg font-semibold mb-5">Куда отправить ответ по вашему изделию?</h3>

              <div className="grid gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Имя</label>
                  <Input
                    placeholder="Как к вам обращаться?"
                    value={contactForm.name}
                    onChange={(e) => setContactForm((f) => ({ ...f, name: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">
                    Телефон <span className="text-destructive">*</span>
                  </label>
                  <Input
                    placeholder="+7…"
                    value={contactForm.contact}
                    onChange={(e) => setContactForm((f) => ({ ...f, contact: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Email</label>
                  <Input
                    placeholder="email@example.com"
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm((f) => ({ ...f, email: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Коротко об изделии</label>
                  <Textarea
                    placeholder="Название, тип, назначение…"
                    rows={2}
                    value={contactForm.description}
                    onChange={(e) => setContactForm((f) => ({ ...f, description: e.target.value }))}
                  />
                </div>

                {showOtherField && (
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Опишите задачу (1–2 предложения)</label>
                    <Textarea
                      placeholder="Расскажите кратко…"
                      rows={2}
                      value={contactForm.otherTask}
                      onChange={(e) => setContactForm((f) => ({ ...f, otherTask: e.target.value }))}
                    />
                  </div>
                )}

                <div className="flex items-start gap-2 mt-2">
                  <Checkbox
                    id="quiz-consent"
                    checked={agreed}
                    onCheckedChange={(v) => setAgreed(v === true)}
                    className="mt-0.5"
                  />
                  <label htmlFor="quiz-consent" className="text-sm text-muted-foreground leading-snug cursor-pointer">
                    Я согласен(на) на обработку персональных данных
                  </label>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Button variant="ghost" onClick={goBack}>
                  <ChevronLeft className="w-4 h-4 mr-1" /> Назад
                </Button>
                <Button onClick={handleSubmit} disabled={!contactForm.contact || !agreed}>
                  Получить ответ
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Ответим в течение 1 рабочего дня. Без спама.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizRouter;
