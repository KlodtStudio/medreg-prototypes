const stats = [
  { value: "40", label: "сотрудников" },
  { value: "150+", label: "проектов" },
  { value: "98%", label: "без отказов" },
  { value: "11 мес.", label: "средний срок" },
];

const StatsBlock = ({ title = "Опыт, который снижает риски" }: { title?: string }) => (
  <section className="py-16 bg-surface">
    <div className="container">
      {title && <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">{title}</h2>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{s.value}</div>
            <div className="text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBlock;
