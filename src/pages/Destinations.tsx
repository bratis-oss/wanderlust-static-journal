
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PostCard from '../components/PostCard';
import Hero from '../components/Hero';
import { 
  Post, 
  posts, 
  getUniqueDestinations, 
  getPostsByDestination, 
  getPostsByCategory,
  getPostsBySubcategory,
  getUniqueSubcategoriesByCategory 
} from '../data/posts';
import { useLanguage } from '@/contexts/LanguageContext';

const Destinations = () => {
  const location = useLocation();
  const { language } = useLanguage();
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [activeDestination, setActiveDestination] = useState<string>('all');
  const [activeSubcategory, setActiveSubcategory] = useState<string>('all');
  const destinations = ['all', ...getUniqueDestinations()];
  const subcategories = ['all', ...getUniqueSubcategoriesByCategory('destinos')];

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Initialize with all destination posts
  useEffect(() => {
    const destPosts = getPostsByCategory('destinos');
    setFilteredPosts(destPosts);
  }, []);

  // Parse query parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const country = params.get('country');
    const subcategory = params.get('subcategory');
    
    // First apply destination filter if present
    if (country) {
      setActiveDestination(country);
      setFilteredPosts(getPostsByDestination(country));
    } else {
      setActiveDestination('all');
      const destPosts = getPostsByCategory('destinos');
      setFilteredPosts(destPosts);
    }
    
    // Then apply subcategory filter if present
    if (subcategory) {
      setActiveSubcategory(subcategory);
      setFilteredPosts(prev => 
        prev.filter(post => post.subcategory === subcategory)
      );
    } else {
      setActiveSubcategory('all');
    }
  }, [location.search]);

  const handleDestinationChange = (destination: string) => {
    setActiveDestination(destination);
    
    // First filter by destination
    let newFilteredPosts;
    if (destination === 'all') {
      newFilteredPosts = getPostsByCategory('destinos');
    } else {
      newFilteredPosts = getPostsByDestination(destination)
        .filter(post => post.categories?.includes('destinos'));
    }
    
    // Then apply subcategory filter if not 'all'
    if (activeSubcategory !== 'all') {
      newFilteredPosts = newFilteredPosts.filter(
        post => post.subcategory === activeSubcategory
      );
    }
    
    setFilteredPosts(newFilteredPosts);
  };

  const handleSubcategoryChange = (subcategory: string) => {
    setActiveSubcategory(subcategory);
    
    // Start with current destination filter
    let newFilteredPosts;
    if (activeDestination === 'all') {
      newFilteredPosts = getPostsByCategory('destinos');
    } else {
      newFilteredPosts = getPostsByDestination(activeDestination)
        .filter(post => post.categories?.includes('destinos'));
    }
    
    // Then apply subcategory filter
    if (subcategory !== 'all') {
      newFilteredPosts = newFilteredPosts.filter(
        post => post.subcategory === subcategory
      );
    }
    
    setFilteredPosts(newFilteredPosts);
  };

  // Translations
  const pageTitle = {
    es: "Explora Destinos",
    ca: "Explora Destinacions",
    gl: "Explora Destinos",
    eu: "Esploratu Helmugak",
    en: "Explore Destinations",
    fr: "Explorez les Destinations"
  };
  
  const pageDescription = {
    es: "Descubre lugares hermosos y experiencias increíbles alrededor del mundo",
    ca: "Descobreix llocs bonics i experiències increïbles arreu del món",
    gl: "Descobre lugares fermosos e experiencias incríbles ao redor do mundo",
    eu: "Aurkitu leku ederrak eta esperientzia harrigarriak mundu osoan",
    en: "Discover beautiful places and amazing experiences around the world",
    fr: "Découvrez de beaux endroits et des expériences incroyables dans le monde entier"
  };
  
  const noStoriesMessage = {
    es: "No hemos publicado ninguna historia sobre",
    ca: "No hem publicat cap història sobre",
    gl: "Non publicamos ningunha historia sobre",
    eu: "Ez dugu istoriorik argitaratu honi buruz:",
    en: "We haven't published any stories about",
    fr: "Nous n'avons pas encore publié d'histoires sur"
  };
  
  const checkLaterMessage = {
    es: "Vuelve a consultar más tarde o explora otros destinos.",
    ca: "Torna a consultar més tard o explora altres destinacions.",
    gl: "Volve consultar máis tarde ou explora outros destinos.",
    eu: "Begiratu berriro geroago edo esploratu beste helmuga batzuk.",
    en: "Check back later or explore other destinations.",
    fr: "Revenez plus tard ou explorez d'autres destinations."
  };

  const allDestinationsText = {
    es: "Todos los Destinos",
    ca: "Totes les Destinacions",
    gl: "Todos os Destinos",
    eu: "Helmuga Guztiak",
    en: "All Destinations",
    fr: "Toutes les Destinations"
  };

  const subcategoryLabels = {
    all: {
      es: "Todas las Subcategorías",
      ca: "Totes les Subcategories",
      gl: "Todas as Subcategorías", 
      eu: "Azpikategoria Guztiak",
      en: "All Subcategories",
      fr: "Toutes les Sous-catégories"
    },
    "Destinos populares": {
      es: "Destinos populares",
      ca: "Destinacions populars",
      gl: "Destinos populares",
      eu: "Helmuga ospetsuak",
      en: "Popular Destinations",
      fr: "Destinations populaires"
    },
    "Por continentes": {
      es: "Por continentes",
      ca: "Per continents",
      gl: "Por continentes",
      eu: "Kontinenteka",
      en: "By Continent",
      fr: "Par continent"
    },
    "España": {
      es: "España",
      ca: "Espanya",
      gl: "España",
      eu: "Espainia",
      en: "Spain",
      fr: "Espagne"
    }
  };

  const storiesFromText = {
    es: "Historias de viaje de",
    ca: "Històries de viatge de",
    gl: "Historias de viaxe de",
    eu: "Bidaia-istorioak hemendik:",
    en: "Travel Stories from",
    fr: "Récits de voyage de"
  };

  const allStoriesText = {
    es: "Todas las Historias de Viaje",
    ca: "Totes les Històries de Viatge",
    gl: "Todas as Historias de Viaxe",
    eu: "Bidaia-Istorio Guztiak",
    en: "All Travel Stories",
    fr: "Tous les Récits de Voyage"
  };

  const showingText = {
    es: "Mostrando",
    ca: "Mostrant",
    gl: "Mostrando",
    eu: "Erakusten",
    en: "Showing",
    fr: "Affichage de"
  };

  const storyText = {
    es: {
      singular: "historia",
      plural: "historias"
    },
    ca: {
      singular: "història",
      plural: "històries"
    },
    gl: {
      singular: "historia",
      plural: "historias"
    },
    eu: {
      singular: "istorio",
      plural: "istorio"
    },
    en: {
      singular: "story",
      plural: "stories"
    },
    fr: {
      singular: "récit",
      plural: "récits"
    }
  };

  const noStoriesFoundText = {
    es: "No se encontraron historias",
    ca: "No s'han trobat històries",
    gl: "Non se atoparon historias",
    eu: "Ez da istoriorik aurkitu",
    en: "No stories found",
    fr: "Aucun récit trouvé"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title={pageTitle[language as keyof typeof pageTitle]}
          subtitle={pageDescription[language as keyof typeof pageDescription]}
          imageSrc="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
          overlay={true}
        />
        
        <section className="container mx-auto px-4 py-12">
          {/* Destination Filter */}
          <div className="mb-6 overflow-x-auto pb-4">
            <h3 className="text-xl font-serif font-bold mb-3">Destino</h3>
            <div className="flex space-x-2 min-w-max">
              {destinations.map((destination) => (
                <button
                  key={destination}
                  onClick={() => handleDestinationChange(destination)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeDestination === destination
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {destination === 'all' 
                    ? allDestinationsText[language as keyof typeof allDestinationsText] 
                    : destination}
                </button>
              ))}
            </div>
          </div>

          {/* Subcategory Filter */}
          <div className="mb-10 overflow-x-auto pb-4">
            <h3 className="text-xl font-serif font-bold mb-3">Categoría</h3>
            <div className="flex space-x-2 min-w-max">
              {subcategories.map((subcategory) => (
                <button
                  key={subcategory}
                  onClick={() => handleSubcategoryChange(subcategory)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeSubcategory === subcategory
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {subcategory === 'all' 
                    ? subcategoryLabels.all[language as keyof typeof subcategoryLabels.all]
                    : subcategoryLabels[subcategory as keyof typeof subcategoryLabels][language as keyof (typeof subcategoryLabels)["Destinos populares"]]}
                </button>
              ))}
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100">
              {activeDestination === 'all' 
                ? allStoriesText[language as keyof typeof allStoriesText]
                : `${storiesFromText[language as keyof typeof storiesFromText]} ${activeDestination}`}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {showingText[language as keyof typeof showingText]} {filteredPosts.length} {
                filteredPosts.length === 1 
                  ? storyText[language as keyof typeof storyText].singular
                  : storyText[language as keyof typeof storyText].plural
              }
            </p>
          </div>
          
          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">
                {noStoriesFoundText[language as keyof typeof noStoriesFoundText]}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {noStoriesMessage[language as keyof typeof noStoriesMessage]} {activeDestination} {checkLaterMessage[language as keyof typeof checkLaterMessage]}
              </p>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Destinations;
