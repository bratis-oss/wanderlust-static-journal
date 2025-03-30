
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import Hero from "@/components/Hero";
import { posts } from "@/data/posts";
import { useLanguage } from "@/contexts/LanguageContext";

const Getaways = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  // Filtrar solo los posts que son escapadas
  const getawayPosts = posts.filter(post => {
    const postCategories = post.categories || [];
    const postTags = post.tags || [];
    
    return (
      postCategories.includes("escapadas") || 
      postTags.includes("escapadas") || 
      postTags.includes("fin de semana")
    );
  });

  const tags = ["all", "fin de semana", "naturaleza", "montaña", "playa", "secreto"];

  const handleFilterChange = (tag: string) => {
    setActiveFilter(tag);
  };

  const filteredPosts = activeFilter === "all" 
    ? getawayPosts 
    : getawayPosts.filter(post => post.tags?.includes(activeFilter));

  // Translations
  const pageTitle = {
    es: "Escapadas",
    ca: "Escapades",
    gl: "Escapadas",
    eu: "Ihesaldiak",
    en: "Getaways",
    fr: "Escapades"
  };
  
  const pageDescription = {
    es: "Descubre ideas perfectas para escapadas de fin de semana y viajes cortos que te permitirán desconectar sin ir demasiado lejos.",
    ca: "Descobreix idees perfectes per a escapades de cap de setmana i viatges curts que et permetran desconnectar sense anar massa lluny.",
    gl: "Descobre ideas perfectas para escapadas de fin de semana e viaxes curtas que che permitirán desconectar sen ir demasiado lonxe.",
    eu: "Aurkitu asteburuko ihesaldi eta bidaia laburretarako ideia bikainak, urrunegi joan gabe deskonektatzeko aukera emango dizutenak.",
    en: "Discover perfect ideas for weekend getaways and short trips that will allow you to disconnect without going too far.",
    fr: "Découvrez des idées parfaites pour des escapades de week-end et des voyages courts qui vous permettront de déconnecter sans aller trop loin."
  };
  
  const emptyMessage = {
    es: "Aún no hay artículos sobre escapadas. ¡Vuelve pronto!",
    ca: "Encara no hi ha articles sobre escapades. Torna aviat!",
    gl: "Aínda non hai artigos sobre escapadas. Volve pronto!",
    eu: "Oraindik ez dago ihesaldiei buruzko artikulurik. Itzuli laster!",
    en: "There are no getaway articles yet. Come back soon!",
    fr: "Il n'y a pas encore d'articles sur les escapades. Revenez bientôt !"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title={pageTitle[language as keyof typeof pageTitle]}
          subtitle={pageDescription[language as keyof typeof pageDescription]}
          imageSrc="https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
          overlay={true}
        />
        
        <div className="container mx-auto px-4 py-8">
          {/* Filter Tags */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-2 min-w-max pb-4">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleFilterChange(tag)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeFilter === tag
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {tag === 'all' ? 'Todos' : tag}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map(post => (
                <PostCard key={post.slug} post={post} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">
                  {emptyMessage[language as keyof typeof emptyMessage]}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Getaways;
