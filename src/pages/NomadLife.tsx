
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import Hero from "@/components/Hero";
import { posts } from "@/data/posts";
import { useLanguage } from "@/contexts/LanguageContext";

const NomadLife = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  // Filtrar solo los posts que son sobre vida nómada
  const nomadPosts = posts.filter(post => {
    const postCategories = post.categories || [];
    const postTags = post.tags || [];
    
    return (
      postCategories.includes("nomada") || 
      postTags.includes("nomada digital") || 
      postTags.includes("remoto") ||
      postTags.includes("work")
    );
  });

  const tags = ["all", "remoto", "comunidad", "impuestos", "finanzas", "legal"];

  const handleFilterChange = (tag: string) => {
    setActiveFilter(tag);
  };

  const filteredPosts = activeFilter === "all" 
    ? nomadPosts 
    : nomadPosts.filter(post => post.tags?.includes(activeFilter));

  // Translations
  const pageTitle = {
    es: "Vida Nómada",
    ca: "Vida Nòmada",
    gl: "Vida Nómade",
    eu: "Bizitza Nomada",
    en: "Nomad Life",
    fr: "Vie Nomade"
  };
  
  const pageDescription = {
    es: "Experiencias, reflexiones y consejos sobre cómo vivir y trabajar mientras viajas por el mundo.",
    ca: "Experiències, reflexions i consells sobre com viure i treballar mentre viatges pel món.",
    gl: "Experiencias, reflexións e consellos sobre como vivir e traballar mentres viaxas polo mundo.",
    eu: "Munduan zehar bidaiatzen duzun bitartean bizi eta lan egiteko esperientziak, hausnarketak eta aholkuak.",
    en: "Experiences, reflections, and advice on how to live and work while traveling the world.",
    fr: "Expériences, réflexions et conseils sur comment vivre et travailler tout en voyageant à travers le monde."
  };
  
  const emptyMessage = {
    es: "Aún no hay artículos sobre vida nómada. ¡Vuelve pronto!",
    ca: "Encara no hi ha articles sobre vida nòmada. Torna aviat!",
    gl: "Aínda non hai artigos sobre vida nómade. Volve pronto!",
    eu: "Oraindik ez dago bizitza nomadari buruzko artikulurik. Itzuli laster!",
    en: "There are no nomad life articles yet. Come back soon!",
    fr: "Il n'y a pas encore d'articles sur la vie nomade. Revenez bientôt !"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title={pageTitle[language as keyof typeof pageTitle]}
          subtitle={pageDescription[language as keyof typeof pageDescription]}
          imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
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

export default NomadLife;
