const clients = [
  "Straumann", "Zimmer", "Johnson & Johnson", "Bio-Rad", "Baxter",
  "Клиент (производитель)", "Клиент (дистрибьютор)", "Клиент (стартап)",
  "Клиент (фарма)", "Клиент (IT-мед)",
];

const TrustLogos = () => (
  <section className="py-12">
    <div className="container">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Нам доверяют</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {clients.map((name) => (
          <div key={name} className="bg-surface rounded-lg border border-border flex items-center justify-center h-20 px-4">
            <span className="text-sm text-muted-foreground text-center">{name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustLogos;
