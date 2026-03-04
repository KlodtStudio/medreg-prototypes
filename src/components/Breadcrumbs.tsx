import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  to?: string;
}

const Breadcrumbs = ({ items }: { items: Crumb[] }) => (
  <nav className="text-sm text-muted-foreground mb-6 flex flex-wrap items-center gap-1">
    <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
    {items.map((item, i) => (
      <span key={i} className="flex items-center gap-1">
        <ChevronRight size={14} />
        {item.to ? (
          <Link to={item.to} className="hover:text-primary transition-colors">{item.label}</Link>
        ) : (
          <span className="text-foreground">{item.label}</span>
        )}
      </span>
    ))}
  </nav>
);

export default Breadcrumbs;
