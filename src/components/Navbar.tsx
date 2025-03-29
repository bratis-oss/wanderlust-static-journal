
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Search, X, Sun, Moon } from "lucide-react";
import SearchBar from "./SearchBar";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 z-50 bg-background bg-opacity-90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-bold text-foreground">
          NomadGo
        </Link>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 rounded-full hover:bg-muted"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full hover:bg-muted"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/destinations" className="nav-link">Destinos</Link>
          <Link to="/getaways" className="nav-link">Escapadas</Link>
          <Link to="/travel-tips" className="nav-link">Consejos de Viaje</Link>
          <Link to="/nomad-life" className="nav-link">Vida Nómada</Link>
          <Link to="/about" className="nav-link">About</Link>
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 rounded-full hover:bg-muted"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/destinations" 
              className="text-foreground hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Destinos
            </Link>
            <Link 
              to="/getaways" 
              className="text-foreground hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Escapadas
            </Link>
            <Link 
              to="/travel-tips" 
              className="text-foreground hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Consejos de Viaje
            </Link>
            <Link 
              to="/nomad-life" 
              className="text-foreground hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Vida Nómada
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}

      {/* Search overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-background shadow-lg p-4 animate-fade-in">
          <SearchBar onClose={() => setIsSearchOpen(false)} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
