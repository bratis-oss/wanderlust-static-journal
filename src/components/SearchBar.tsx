
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { posts, Post } from '../data/posts';
import { useLanguage } from '@/contexts/LanguageContext';

interface SearchBarProps {
  onClose: () => void;
}

const SearchBar = ({ onClose }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Post[]>([]);
  const navigate = useNavigate();
  const { language } = useLanguage();

  const placeholderText = {
    es: "Buscar destinos, experiencias...",
    ca: "Cercar destinacions, experiències...",
    gl: "Buscar destinos, experiencias...",
    eu: "Bilatu helmugak, esperientziak...",
    en: "Search destinations, experiences...",
    fr: "Rechercher destinations, expériences..."
  };

  const noResultsText = {
    es: "No se encontraron resultados para",
    ca: "No s'han trobat resultats per a",
    gl: "Non se atoparon resultados para",
    eu: "Ez da emaitzarik aurkitu honetarako:",
    en: "No results found for",
    fr: "Aucun résultat trouvé pour"
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      const filteredResults = posts.filter(post => 
        post.title.toLowerCase().includes(value.toLowerCase()) ||
        post.destination.toLowerCase().includes(value.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(value.toLowerCase()) ||
        (post.subcategory && post.subcategory.toLowerCase().includes(value.toLowerCase()))
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  const handleResultClick = (slug: string) => {
    navigate(`/blog/${slug}`);
    onClose();
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          type="text"
          placeholder={placeholderText[language as keyof typeof placeholderText]}
          value={query}
          onChange={handleSearch}
          className="w-full p-3 pl-10 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700"
          autoFocus
        />
        <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
        {query && (
          <button 
            onClick={() => {
              setQuery('');
              setResults([]);
            }}
            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg max-h-80 overflow-y-auto">
          {results.map(post => (
            <div
              key={post.id}
              className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer border-b last:border-b-0 dark:border-gray-700"
              onClick={() => handleResultClick(post.slug)}
            >
              <h3 className="text-sm font-medium dark:text-white">{post.title}</h3>
              <div className="flex text-xs text-gray-500 dark:text-gray-400 space-x-2">
                <span>{post.destination}</span>
                {post.subcategory && (
                  <>
                    <span>•</span>
                    <span>{post.subcategory}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {query.length > 2 && results.length === 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg p-4 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            {noResultsText[language as keyof typeof noResultsText]} "{query}"
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
