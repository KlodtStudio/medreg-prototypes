import { useState } from "react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const mockResults = [
  { title: "Регистрация медицинских изделий «под ключ»", url: "/uslugi/registraciya-meditsinskih-izdeliy/pod-klyuch/" },
  { title: "Клинические испытания", url: "/uslugi/ispytaniya-meditsinskih-izdeliy/klinicheskie/" },
  { title: "Как определить класс риска медицинского изделия", url: "/blog/kak-opredelit-klass-riska/" },
  { title: "Изменения в РУ", url: "/uslugi/registraciya-meditsinskih-izdeliy/izmeneniya-v-ru/" },
  { title: "Цены на услуги", url: "/ceny/" },
];

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);

  const results = searched && query
    ? mockResults.filter((r) => r.title.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Результаты поиска</h1>
        <form
          className="flex gap-2 max-w-xl mb-8"
          onSubmit={(e) => { e.preventDefault(); setSearched(true); }}
        >
          <Input
            placeholder="Введите запрос..."
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSearched(false); }}
            className="flex-1"
          />
          <Button type="submit"><Search size={18} /></Button>
        </form>

        {searched && results.length > 0 && (
          <div className="space-y-4 max-w-xl">
            {results.map((r) => (
              <a key={r.url} href={r.url} className="block p-4 border border-border rounded-lg hover:shadow-md transition-shadow">
                <div className="font-medium">{r.title}</div>
                <div className="text-sm text-muted-foreground">{r.url}</div>
              </a>
            ))}
          </div>
        )}

        {searched && results.length === 0 && (
          <div className="text-muted-foreground">
            По запросу «{query}» ничего не найдено. Попробуйте изменить запрос.
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchPage;
