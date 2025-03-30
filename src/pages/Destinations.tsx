
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PostCard from '../components/PostCard';
import Hero from '../components/Hero';
import { posts, getUniqueDestinations, getPostsByDestination } from '../data/posts';
import { Post } from '../data/posts';
import { useLanguage } from '@/contexts/LanguageContext';

const Destinations = () => {
  const location = useLocation();
  const { language } = useLanguage();
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
  const [activeDestination, setActiveDestination] = useState<string>('all');
  const destinations = ['all', ...getUniqueDestinations()];

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Parse query parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const country = params.get('country');
    
    if (country) {
      setActiveDestination(country);
      setFilteredPosts(getPostsByDestination(country));
    } else {
      setActiveDestination('all');
      setFilteredPosts(posts);
    }
  }, [location.search]);

  const handleDestinationChange = (destination: string) => {
    setActiveDestination(destination);
    
    if (destination === 'all') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(getPostsByDestination(destination));
    }
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
          <div className="mb-10 overflow-x-auto pb-4">
            <div className="flex space-x-2 min-w-max">
              {destinations.map((destination) => (
                <button
                  key={destination}
                  onClick={() => handleDestinationChange(destination)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeDestination === destination
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {destination === 'all' ? 'All Destinations' : destination}
                </button>
              ))}
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900">
              {activeDestination === 'all' 
                ? 'All Travel Stories' 
                : `Travel Stories from ${activeDestination}`}
            </h2>
            <p className="text-gray-600">
              Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'story' : 'stories'}
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
              <h3 className="text-xl font-medium text-gray-900 mb-2">No stories found</h3>
              <p className="text-gray-600">
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
