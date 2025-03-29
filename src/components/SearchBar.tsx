
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { posts } from '../data/posts';

interface SearchBarProps {
  onClose: () => void;
}

const SearchBar = ({ onClose }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof posts>([]);
  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      const filteredResults = posts.filter(post => 
        post.title.toLowerCase().includes(value.toLowerCase()) ||
        post.destination.toLowerCase().includes(value.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(value.toLowerCase())
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
          placeholder="Search destinations, experiences..."
          value={query}
          onChange={handleSearch}
          className="w-full p-3 pl-10 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          autoFocus
        />
        <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
        {query && (
          <button 
            onClick={() => {
              setQuery('');
              setResults([]);
            }}
            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border rounded-lg shadow-lg max-h-80 overflow-y-auto">
          {results.map(post => (
            <div
              key={post.id}
              className="p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
              onClick={() => handleResultClick(post.slug)}
            >
              <h3 className="text-sm font-medium">{post.title}</h3>
              <p className="text-xs text-gray-500">{post.destination}</p>
            </div>
          ))}
        </div>
      )}

      {query.length > 2 && results.length === 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border rounded-lg shadow-lg p-4 text-center">
          <p className="text-gray-500">No results found for "{query}"</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
