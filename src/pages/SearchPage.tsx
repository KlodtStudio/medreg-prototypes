import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { searchContent, type SearchItem } from "@/lib/searchData";

const ITEMS_PER_PAGE = 10;

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const initialPage = parseInt(searchParams.get("page") || "1", 10);

  const [query, setQuery] = useState(initialQuery);
  const [activeQuery, setActiveQuery] = useState(initialQuery);
  const [page, setPage] = useState(initialPage);

  const results = activeQuery ? searchContent(activeQuery) : [];
  const totalPages = Math.max(1, Math.ceil(results.length / ITEMS_PER_PAGE));
  const pagedResults = results.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  useEffect(() => {
    const q = searchParams.get("q") || "";
    const p = parseInt(searchParams.get("page") || "1", 10);
    setQuery(q);
    setActiveQuery(q);
    setPage(p);
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query.trim() });
      setActiveQuery(query.trim());
      setPage(1);
    }
  };

  const goToPage = (p: number) => {
    setPage(p);
    setSearchParams({ q: activeQuery, page: String(p) });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const highlightMatch = (text: string) => {
    if (!activeQuery.trim()) return text;
    const regex = new RegExp(`(${activeQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <strong key={i} className="font-bold">{part}</strong>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  const breadcrumbItems = [
    { label: activeQuery ? `Вы искали «${activeQuery}»` : "Результаты поиска" },
  ];

  return (
    <Layout>
      <div className="container py-8">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Результаты поиска</h1>

        <form onSubmit={handleSearch} className="flex gap-3 max-w-2xl mb-6">
          <Input
            placeholder="Введите запрос..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 h-12 text-base"
          />
          <Button type="submit" className="h-12 px-8 text-base">Найти</Button>
        </form>

        {activeQuery && (
          <div className="mb-6 text-sm text-muted-foreground">
            Найдено: {results.length}
          </div>
        )}

        {activeQuery && pagedResults.length > 0 && (
          <div className="max-w-3xl space-y-8 mb-8">
            {/* Pagination top */}
            {totalPages > 1 && (
              <div className="flex items-center gap-1 mb-4">
                <button
                  onClick={() => page > 1 && goToPage(page - 1)}
                  disabled={page <= 1}
                  className="p-2 text-muted-foreground hover:text-foreground disabled:opacity-30"
                >
                  <ChevronLeft size={18} />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => goToPage(p)}
                    className={`w-8 h-8 rounded text-sm font-medium ${
                      p === page
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-surface"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => page < totalPages && goToPage(page + 1)}
                  disabled={page >= totalPages}
                  className="p-2 text-muted-foreground hover:text-foreground disabled:opacity-30"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}

            {pagedResults.map((r, idx) => (
              <div key={idx} className="border-b border-border pb-6">
                <Link
                  to={r.url}
                  className="text-lg font-semibold text-primary hover:underline"
                >
                  {highlightMatch(r.title)}
                </Link>
                <p className="text-sm text-foreground mt-2 leading-relaxed">
                  … {highlightMatch(r.snippet)}…
                </p>
                {r.date && (
                  <p className="text-xs text-muted-foreground mt-2 text-right">
                    Изменено: {r.date}
                  </p>
                )}
              </div>
            ))}

            {/* Pagination bottom */}
            {totalPages > 1 && (
              <div className="flex items-center gap-1 pt-4">
                <button
                  onClick={() => page > 1 && goToPage(page - 1)}
                  disabled={page <= 1}
                  className="p-2 text-muted-foreground hover:text-foreground disabled:opacity-30"
                >
                  <ChevronLeft size={18} />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => goToPage(p)}
                    className={`w-8 h-8 rounded text-sm font-medium ${
                      p === page
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-surface"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => page < totalPages && goToPage(page + 1)}
                  disabled={page >= totalPages}
                  className="p-2 text-muted-foreground hover:text-foreground disabled:opacity-30"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        )}

        {activeQuery && results.length === 0 && (
          <div className="text-muted-foreground text-lg py-8">
            По вашему запросу ничего не найдено
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchPage;
