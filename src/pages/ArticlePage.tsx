import { Link } from "react-router-dom";
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
        <div className="text-sm text-muted-foreground mb-8">Опубликовано: 15 января 2025</div>

        {/* TOC */}
        <nav className="bg-surface rounded-lg p-4 mb-8">
          <div className="font-semibold mb-2">Содержание</div>
          <ul className="space-y-1 text-sm">
            <li><a href="#what" className="text-primary hover:underline">Что такое класс риска</a></li>
            <li><a href="#classes" className="text-primary hover:underline">Классификация в России</a></li>
            <li><a href="#how" className="text-primary hover:underline">Как определить класс</a></li>
            <li><a href="#examples" className="text-primary hover:underline">Примеры</a></li>
            <li><a href="#mistakes" className="text-primary hover:underline">Частые ошибки</a></li>
          </ul>
        </nav>

        <ImagePlaceholder label="Иллюстрация к статье" className="mb-8" />

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

        {/* Author */}
        <div className="mt-12 p-6 bg-surface rounded-lg flex flex-col sm:flex-row gap-4 items-start">
          <ImagePlaceholder label="Фото автора" className="w-20 h-20 shrink-0" aspectRatio="1/1" />
          <div>
            <div className="text-sm text-muted-foreground mb-1">Автор статьи</div>
            <div className="font-semibold">Виктория Кузнецова</div>
            <p className="text-sm text-muted-foreground mt-1">В регистрации медицинских изделий с 2015 года. Более 300 регистрационных удостоверений различного класса риска и сложности.</p>
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
