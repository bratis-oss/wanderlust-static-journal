
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { posts } from "@/data/posts";

const TravelTips = () => {
  // Filtrar solo los posts que son consejos de viaje
  const tipPosts = posts.filter(post => {
    // Check if post has categories or tags property before trying to access them
    const postCategories = post.categories || [];
    const postTags = post.tags || [];
    
    return (
      postCategories.includes("consejos") || 
      postTags.includes("tips") || 
      postTags.includes("consejos")
    );
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-8 text-center md:text-left">
            Consejos de Viaje
          </h1>
          
          <p className="max-w-3xl mx-auto md:mx-0 text-muted-foreground mb-12">
            Todos los consejos y recomendaciones para que tus viajes sean más cómodos, seguros y económicos.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tipPosts.length > 0 ? (
              tipPosts.map(post => (
                <PostCard key={post.slug} post={post} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">
                  Aún no hay artículos sobre consejos de viaje. ¡Vuelve pronto!
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
