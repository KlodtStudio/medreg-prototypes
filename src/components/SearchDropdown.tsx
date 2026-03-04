import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, X, ChevronRight } from "lucide-react";
import { searchContent, type SearchItem } from "@/lib/searchData";

const SearchDropdown = () => {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [showResults, setShowResults] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.trim().length >= 2) {
      setResults(searchContent(query).slice(0, 5));
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  }, [query]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowResults(false);
        if (!query.trim()) setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [query]);

  useEffect(() => {
    if (expanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [expanded]);

  const highlightMatch = (text: string) => {
    if (!query.trim()) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? <strong key={i} className="font-bold">{part}</strong> : <span key={i}>{part}</span>
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setShowResults(false);
      setExpanded(false);
      navigate(`/search/?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleClose = () => {
    setQuery("");
    setShowResults(false);
    setExpanded(false);
  };

  if (!expanded) {
    return (
      <button
        onClick={() => setExpanded(true)}
        aria-label="Поиск"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Search size={20} />
      </button>
    );
  }

  return (
    <>
      {/* Full-width search bar overlay */}
      <div className="fixed inset-x-0 top-0 z-50 bg-background border-b border-border shadow-lg" ref={wrapperRef}>
        <div className="container flex items-center gap-3 h-16">
          <form onSubmit={handleSubmit} className="flex-1 flex items-center gap-3">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Например: регистрация"
              className="flex-1 h-10 text-base bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <button type="submit" className="shrink-0 h-9 px-6 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
              Найти
            </button>
          </form>
          <button onClick={handleClose} className="text-muted-foreground hover:text-foreground transition-colors shrink-0">
            <X size={22} />
          </button>
        </div>

        {showResults && query.trim().length >= 2 && (
          <div className="border-t border-border bg-background">
            <div className="container">
              {results.length > 0 ? (
                <>
                  {results.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.url}
                      className="flex items-center gap-2 px-2 py-3 hover:bg-surface transition-colors border-b border-border last:border-b-0 text-sm"
                      onClick={handleClose}
                    >
                      <ChevronRight size={14} className="text-muted-foreground shrink-0" />
                      <span>{highlightMatch(item.title)}</span>
                    </Link>
                  ))}
                  <Link
                    to={`/search/?q=${encodeURIComponent(query.trim())}`}
                    className="block px-2 py-3 text-sm text-primary font-medium border-t border-border hover:bg-surface transition-colors"
                    onClick={handleClose}
                  >
                    Все результаты
                  </Link>
                </>
              ) : (
                <div className="px-2 py-4 text-sm text-muted-foreground">
                  По вашему запросу ничего не найдено
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchDropdown;
