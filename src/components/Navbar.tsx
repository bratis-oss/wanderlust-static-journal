
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Search, X, Sun, Moon, ChevronDown } from "lucide-react";
import SearchBar from "./SearchBar";
import { useTheme } from "./ThemeProvider";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Inicio */}
              <NavigationMenuItem>
                <Link to="/" className={navigationMenuTriggerStyle()}>
                  Inicio
                </Link>
              </NavigationMenuItem>
              
              {/* Destinos */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Destinos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <Link to="/destinations" className="font-medium leading-none mb-2 text-primary">
                      Todos los Destinos
                    </Link>
                    <NavigationMenuLink asChild>
                      <Link to="/destinations?filter=popular" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Destinos Populares</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Los lugares más visitados del mundo
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/destinations?filter=continent" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Por Continentes</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Explora destinos por región geográfica
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/destinations?filter=spain" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">España</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Descubre lo mejor de la península ibérica
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* Escapadas */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Escapadas</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <Link to="/getaways" className="font-medium leading-none mb-2 text-primary">
                      Todas las Escapadas
                    </Link>
                    <NavigationMenuLink asChild>
                      <Link to="/getaways?type=short" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Escapadas Cortas</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Rutas de Fin de Semana
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/getaways?type=long" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Escapadas Largas</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Refugios de Viaje
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/getaways?type=secret" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Escapadas Secretas</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Lugares ocultos y menos conocidos
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/getaways?type=unforgettable" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Escapadas Inolvidables</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Experiencias únicas y memorables
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* Consejos de Viaje */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Consejos de Viaje</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <Link to="/travel-tips" className="font-medium leading-none mb-2 text-primary">
                      Todos los Consejos
                    </Link>
                    <NavigationMenuLink asChild>
                      <Link to="/travel-tips?topic=preparation" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Guías de Preparación</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Todo lo que necesitas antes de salir
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/travel-tips?topic=practical" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Consejos Prácticos</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Recomendaciones para un viaje sin problemas
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* Vida Nómada */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Vida Nómada</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <Link to="/nomad-life" className="font-medium leading-none mb-2 text-primary">
                      Todo sobre Vida Nómada
                    </Link>
                    <NavigationMenuLink asChild>
                      <Link to="/nomad-life?topic=how-to" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Cómo Ser un Viajero Nómada</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Pasos para iniciar tu vida nómada
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/nomad-life?topic=action" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Nómadas en Acción</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Historias de nómadas digitales
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/nomad-life?topic=borderless" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Vida Sin Fronteras</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Experiencias internacionales
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/nomad-life?topic=office" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">El Mundo es tu Oficina</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Trabajo remoto mientras viajas
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/nomad-life?topic=freedom" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Rumbo a la Libertad</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Cómo crear una vida de libertad
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* About */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Sobre NomadGo</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <NavigationMenuLink asChild>
                      <Link to="/about" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Quién Soy</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Conoce más sobre el creador de NomadGo
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/about#travel-style" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Nuestro Modo de Viajar</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Filosofía de viaje de NomadGo
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/about#affiliates" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Afiliados y Transparencia</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Cómo se financia este blog
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/about#contact" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Contacto</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Ponte en contacto con nosotros
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
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
          <div className="flex flex-col space-y-2">
            {/* Inicio */}
            <Link 
              to="/" 
              className="text-foreground hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            
            {/* Destinos - Mobile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-between w-full text-left py-2 text-foreground hover:text-primary">
                Destinos <ChevronDown size={16} className="ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/destinations" onClick={() => setIsMenuOpen(false)}>Todos los Destinos</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/destinations?filter=popular" onClick={() => setIsMenuOpen(false)}>Destinos Populares</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/destinations?filter=continent" onClick={() => setIsMenuOpen(false)}>Por Continentes</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/destinations?filter=spain" onClick={() => setIsMenuOpen(false)}>España</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Escapadas - Mobile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-between w-full text-left py-2 text-foreground hover:text-primary">
                Escapadas <ChevronDown size={16} className="ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/getaways" onClick={() => setIsMenuOpen(false)}>Todas las Escapadas</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/getaways?type=short" onClick={() => setIsMenuOpen(false)}>Escapadas Cortas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/getaways?type=long" onClick={() => setIsMenuOpen(false)}>Escapadas Largas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/getaways?type=secret" onClick={() => setIsMenuOpen(false)}>Escapadas Secretas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/getaways?type=unforgettable" onClick={() => setIsMenuOpen(false)}>Escapadas Inolvidables</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Consejos de Viaje - Mobile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-between w-full text-left py-2 text-foreground hover:text-primary">
                Consejos de Viaje <ChevronDown size={16} className="ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/travel-tips" onClick={() => setIsMenuOpen(false)}>Todos los Consejos</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/travel-tips?topic=preparation" onClick={() => setIsMenuOpen(false)}>Guías de Preparación</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/travel-tips?topic=practical" onClick={() => setIsMenuOpen(false)}>Consejos Prácticos</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Vida Nómada - Mobile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-between w-full text-left py-2 text-foreground hover:text-primary">
                Vida Nómada <ChevronDown size={16} className="ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/nomad-life" onClick={() => setIsMenuOpen(false)}>Todo sobre Vida Nómada</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/nomad-life?topic=how-to" onClick={() => setIsMenuOpen(false)}>Cómo Ser un Viajero Nómada</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/nomad-life?topic=action" onClick={() => setIsMenuOpen(false)}>Nómadas en Acción</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/nomad-life?topic=borderless" onClick={() => setIsMenuOpen(false)}>Vida Sin Fronteras</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/nomad-life?topic=office" onClick={() => setIsMenuOpen(false)}>El Mundo es tu Oficina</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/nomad-life?topic=freedom" onClick={() => setIsMenuOpen(false)}>Rumbo a la Libertad</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Sobre NomadGo - Mobile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-between w-full text-left py-2 text-foreground hover:text-primary">
                Sobre NomadGo <ChevronDown size={16} className="ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/about" onClick={() => setIsMenuOpen(false)}>Quién Soy</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about#travel-style" onClick={() => setIsMenuOpen(false)}>Nuestro Modo de Viajar</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about#affiliates" onClick={() => setIsMenuOpen(false)}>Afiliados y Transparencia</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about#contact" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
