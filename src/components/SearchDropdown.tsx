import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ChevronRight } from "lucide-react";
import { searchContent, type SearchItem } from "@/lib/searchData";

const SearchDropdown = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState<SearchItem[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.trim().length >= 2) {
      setResults(searchContent(query).slice(0, 5));
      setOpen(true);
    } else {
      setResults([]);
      setOpen(false);
    }
  }, [query]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const highlightMatch = (text: string) => {
    if (!query.trim()) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <strong key={i} className="font-bold">{part}</strong>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setOpen(false);
      navigate(`/search/?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div ref={wrapperRef} className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim().length >= 2 && setOpen(true)}
          placeholder="Поиск..."
          className="w-44 h-8 pl-3 pr-8 text-sm border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        />
        <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary">
          <Search size={16} />
        </button>
      </form>

      {open && query.trim().length >= 2 && (
        <div className="absolute right-0 top-full mt-1 w-80 bg-background border border-border rounded-lg shadow-xl z-50">
          {results.length > 0 ? (
            <>
              {results.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.url}
                  className="flex items-center gap-2 px-4 py-3 hover:bg-surface transition-colors border-b border-border last:border-b-0 text-sm"
                  onClick={() => { setOpen(false); setQuery(""); }}
                >
                  <ChevronRight size={14} className="text-muted-foreground shrink-0" />
                  <span>{highlightMatch(item.title)}</span>
                </Link>
              ))}
              <Link
                to={`/search/?q=${encodeURIComponent(query.trim())}`}
                className="block px-4 py-3 text-sm text-primary font-medium border-t border-border hover:bg-surface transition-colors"
                onClick={() => { setOpen(false); setQuery(""); }}
              >
                Все результаты
              </Link>
            </>
          ) : (
            <div className="px-4 py-4 text-sm text-muted-foreground">
              По вашему запросу ничего не найдено
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
