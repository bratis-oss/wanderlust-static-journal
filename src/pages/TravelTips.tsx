
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import Hero from "@/components/Hero";
import { posts, getPostsByCategory, getPostsByTag } from "@/data/posts";
import { useLanguage } from "@/contexts/LanguageContext";

const TravelTips = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  // Filtrar solo los posts que son consejos de viaje
  const tipPosts = posts.filter(post => {
    const postCategories = post.categories || [];
    const postTags = post.tags || [];
    
    return (
      postCategories.includes("consejos") || 
      postTags.includes("tips") || 
      postTags.includes("consejos")
    );
  });

  const tags = ["all", "equipaje", "seguridad", "tecnología", "preparación", "salud"];

  const handleFilterChange = (tag: string) => {
    setActiveFilter(tag);
  };

  const filteredPosts = activeFilter === "all" 
    ? tipPosts 
    : tipPosts.filter(post => post.tags?.includes(activeFilter));

  // Translations
  const pageTitle = {
    es: "Consejos de Viaje",
    ca: "Consells de Viatge",
    gl: "Consellos de Viaxe",
    eu: "Bidaia Aholkuak",
    en: "Travel Tips",
    fr: "Conseils de Voyage"
  };
  
  const pageDescription = {
    es: "Todos los consejos y recomendaciones para que tus viajes sean más cómodos, seguros y económicos.",
    ca: "Tots els consells i recomanacions perquè els teus viatges siguin més còmodes, segurs i econòmics.",
    gl: "Todos os consellos e recomendacións para que as túas viaxes sexan máis cómodas, seguras e económicas.",
    eu: "Zure bidaiak erosoagoak, seguruagoak eta merkeagoak izan daitezen aholku eta gomendio guztiak.",
    en: "All the tips and recommendations to make your travels more comfortable, safe, and economical.",
    fr: "Tous les conseils et recommandations pour rendre vos voyages plus confortables, sûrs et économiques."
  };
  
  const emptyMessage = {
    es: "Aún no hay artículos sobre consejos de viaje. ¡Vuelve pronto!",
    ca: "Encara no hi ha articles sobre consells de viatge. Torna aviat!",
    gl: "Aínda non hai artigos sobre consellos de viaxe. Volve pronto!",
    eu: "Oraindik ez dago bidaia aholkuei buruzko artikulurik. Itzuli laster!",
    en: "There are no travel tip articles yet. Come back soon!",
    fr: "Il n'y a pas encore d'articles sur les conseils de voyage. Revenez bientôt !"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title={pageTitle[language as keyof typeof pageTitle]}
          subtitle={pageDescription[language as keyof typeof pageDescription]}
          imageSrc="https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
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

export default TravelTips;
