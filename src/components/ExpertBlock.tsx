import ImagePlaceholder from "./ImagePlaceholder";

const ExpertBlock = () => (
  <section className="py-16">
    <div className="container">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">Эксперт</h2>
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-start">
        <ImagePlaceholder label="Фото: Виктория Кузнецова" className="w-48 h-48 shrink-0" aspectRatio="1/1" />
        <div>
          <h3 className="text-xl font-semibold mb-2">Виктория Кузнецова</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>В регистрации медицинских изделий с 2015 года</li>
            <li>Более 300 регистрационных удостоверений различного класса риска и сложности</li>
            <li>Регистрация отечественных разработок и сопровождение мировых брендов</li>
            <li>Регулярное профильное обучение и повышение квалификации</li>
            <li>Участие в Международном форуме обращения медицинских изделий</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ExpertBlock;
