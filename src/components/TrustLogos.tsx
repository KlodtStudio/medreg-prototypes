import straumannLogo from "@/assets/logos/straumann.png";
import zimmerLogo from "@/assets/logos/zimmer.png";
import johnsonLogo from "@/assets/logos/johnson.png";
import bioradLogo from "@/assets/logos/biorad.png";
import baxterLogo from "@/assets/logos/baxter.png";

const clients = [
  { name: "Straumann", logo: straumannLogo },
  { name: "Zimmer", logo: zimmerLogo },
  { name: "Johnson & Johnson", logo: johnsonLogo },
  { name: "Bio-Rad", logo: bioradLogo },
  { name: "Baxter", logo: baxterLogo },
];

const TrustLogos = () => (
  <section className="py-12">
    <div className="container">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Нам доверяют</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {clients.map((c) => (
          <div key={c.name} className="bg-surface rounded-lg border border-border flex items-center justify-center h-20 px-4">
            <img src={c.logo} alt={c.name} className="max-h-12 max-w-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustLogos;
