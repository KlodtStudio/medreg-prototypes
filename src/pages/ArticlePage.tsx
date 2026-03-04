import { Link } from "react-router-dom";
import { Share2 } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import FinalCTAForm from "@/components/FinalCTAForm";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const ArticlePage = () => (
  <Layout>
    <div className="container py-12">
      <Breadcrumbs items={[{ label: "Статьи", to: "/blog/" }, { label: "Как определить класс риска медицинского изделия" }]} />

      <article className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Как определить класс риска медицинского изделия</h1>
        <div className="text-sm text-muted-foreground mb-6">Опубликовано: 15 января 2025</div>

        <ImagePlaceholder label="Иллюстрация к статье" className="mb-6" />

        {/* TOC as tag pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: "what", label: "Что такое класс риска" },
            { id: "classes", label: "Классификация в России" },
            { id: "how", label: "Как определить класс" },
            { id: "examples", label: "Примеры" },
            { id: "mistakes", label: "Частые ошибки" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="prose max-w-none space-y-6">
          <h2 id="what" className="text-2xl font-semibold">Что такое класс риска</h2>
          <p className="text-muted-foreground">
            Класс риска медицинского изделия определяет уровень потенциальной опасности для пациента и пользователя. От класса зависит объём требований к регистрации: чем выше класс, тем больше испытаний и документации требуется.
          </p>

          <h2 id="classes" className="text-2xl font-semibold">Классификация в России</h2>
          <p className="text-muted-foreground">
            В Российской Федерации медицинские изделия классифицируются на 4 класса:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li><strong>Класс 1</strong> — низкий риск (бинты, шпатели, стетоскопы)</li>
            <li><strong>Класс 2а</strong> — средний риск (шприцы, катетеры, диагностические приборы)</li>
            <li><strong>Класс 2б</strong> — повышенный риск (имплантаты, ИВЛ, дефибрилляторы)</li>
            <li><strong>Класс 3</strong> — высокий риск (стенты, кардиостимуляторы, протезы клапанов)</li>
          </ul>

          <div className="border border-border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-surface">
                <tr>
                  <th className="text-left p-3 font-medium">Класс</th>
                  <th className="text-left p-3 font-medium">Уровень риска</th>
                  <th className="text-left p-3 font-medium">Примеры</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border"><td className="p-3">1</td><td className="p-3">Низкий</td><td className="p-3">Бинты, шпатели</td></tr>
                <tr className="border-t border-border"><td className="p-3">2а</td><td className="p-3">Средний</td><td className="p-3">Шприцы, диагностика</td></tr>
                <tr className="border-t border-border"><td className="p-3">2б</td><td className="p-3">Повышенный</td><td className="p-3">Имплантаты, ИВЛ</td></tr>
                <tr className="border-t border-border"><td className="p-3">3</td><td className="p-3">Высокий</td><td className="p-3">Стенты, кардиостимуляторы</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="how" className="text-2xl font-semibold">Как определить класс</h2>
          <p className="text-muted-foreground">
            Для определения класса риска используются правила классификации, утверждённые приказом Минздрава России. Основные критерии:
          </p>
          <ol className="list-decimal list-inside text-muted-foreground space-y-1">
            <li>Назначение изделия и область применения</li>
            <li>Длительность контакта с пациентом</li>
            <li>Инвазивность</li>
            <li>Наличие источника энергии</li>
            <li>Контакт с биологическими жидкостями</li>
          </ol>

          <h2 id="examples" className="text-2xl font-semibold">Примеры определения</h2>
          <p className="text-muted-foreground">
            Программное обеспечение для диагностики — может быть классифицировано как 2а или 2б в зависимости от назначения. Хирургический инструмент многократного применения — как правило, класс 1 или 2а. Имплантируемый протез — класс 2б или 3.
          </p>

          <h2 id="mistakes" className="text-2xl font-semibold">Частые ошибки</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Занижение класса для упрощения регистрации</li>
            <li>Неучёт всех функций изделия</li>
            <li>Ошибки в определении инвазивности</li>
            <li>Неправильная классификация ПО</li>
          </ul>
          <p className="text-muted-foreground">
            Ошибка в определении класса риска может привести к отказу в регистрации или необходимости полного перезапуска процесса. Рекомендуем обращаться к экспертам на раннем этапе.
          </p>
        </div>

        {/* Author + Share */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 p-6 bg-surface rounded-lg flex flex-col sm:flex-row gap-4 items-start">
            <ImagePlaceholder label="Фото автора" className="w-20 h-20 shrink-0" aspectRatio="1/1" />
            <div>
              <div className="text-sm text-muted-foreground mb-1">Автор статьи</div>
              <div className="font-semibold">Виктория Кузнецова</div>
              <p className="text-sm text-muted-foreground mt-1">В регистрации медицинских изделий с 2015 года. Более 300 регистрационных удостоверений различного класса риска и сложности.</p>
            </div>
          </div>
          <div className="flex sm:flex-col items-center gap-2 shrink-0">
            <a
              href={`https://vk.com/share.php?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-[#4680C2] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              aria-label="Поделиться ВКонтакте"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.189 1.37 1.258 2.188 1.814.617.42 1.088.328 1.088.328l2.185-.03s1.142-.071.6-.97c-.044-.074-.316-.665-1.627-1.879-1.372-1.27-1.188-1.065.465-3.263.806-1.075 1.254-1.97 1.092-2.241-.066-.105-.26-.282-1.26-.282h-2.385s-.167-.023-.291.051c-.121.073-.2.243-.2.243s-.359.957-.838 1.77c-1.01 1.716-1.414 1.808-1.58 1.702-.385-.247-.289-1.095-.289-1.676 0-1.823.276-2.582-.538-2.778-.27-.065-.469-.108-1.16-.115-.886-.01-1.636.003-2.06.21-.283.138-.5.446-.368.464.164.022.535.1.731.367.253.345.244 1.12.244 1.12s.146 2.145-.339 2.412c-.333.183-.788-.19-1.766-1.898-.461-.805-.81-1.694-.81-1.694s-.067-.165-.187-.253c-.145-.107-.348-.14-.348-.14H5.428s-.266.007-.363.123c-.087.103-.007.317-.007.317s1.687 3.938 3.596 5.924c1.749 1.82 3.737 1.701 3.737 1.701h.394z"/></svg>
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-[#1DA1F2] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              aria-label="Поделиться в Twitter"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.32 3.91A12.16 12.16 0 0 1 3 4.79a4.28 4.28 0 0 0 1.32 5.72 4.24 4.24 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.28 4.28 0 0 1-1.93.07 4.29 4.29 0 0 0 4 2.97A8.59 8.59 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.72 8.72 0 0 0 23 6.29a8.49 8.49 0 0 1-2.54.7z"/></svg>
            </a>
            <a
              href={`https://connect.ok.ru/offer?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-[#EE8208] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              aria-label="Поделиться в Одноклассниках"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 7.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm4.44 3.06a8.1 8.1 0 0 1-3.19 1.27l2.89 2.87a1.25 1.25 0 0 1-1.77 1.77L12 16.1l-2.37 2.37a1.25 1.25 0 0 1-1.77-1.77l2.89-2.87a8.1 8.1 0 0 1-3.19-1.27 1.25 1.25 0 1 1 1.38-2.08A5.6 5.6 0 0 0 12 14c1.07 0 2.1-.3 3.06-.84a1.25 1.25 0 1 1 1.38 2.08v-.68z"/></svg>
            </a>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: document.title, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              aria-label="Поделиться"
            >
              <Share2 size={18} />
            </button>
          </div>
        </div>
      </article>

      {/* Other articles */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Другие статьи</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Что изменилось в порядке регистрации МИ в 2024 году",
            "Частые ошибки при подаче документов на регистрацию",
            "Клинические испытания: когда они нужны",
          ].map((title) => (
            <Link key={title} to="/blog/" className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <ImagePlaceholder label="Изображение статьи" className="rounded-none" />
              <div className="p-4"><h3 className="font-semibold text-sm">{title}</h3></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    <FinalCTAForm
      title="Нужна консультация по вашему медицинскому изделию?"
      subtitle="Опишите задачу и что уже готово — мы подскажем следующий шаг, список документов и сориентируем по срокам и стоимости."
    />
  </Layout>
);

export default ArticlePage;
