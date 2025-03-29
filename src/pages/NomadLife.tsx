
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { posts } from "@/data/posts";

const NomadLife = () => {
  // Filtrar solo los posts que son sobre vida nómada
  const nomadPosts = posts.filter(post => {
    // Check if post has categories or tags property before trying to access them
    const postCategories = post.categories || [];
    const postTags = post.tags || [];
    
    return (
      postCategories.includes("nomada") || 
      postTags.includes("nomada digital") || 
      postTags.includes("work") ||
      postTags.includes("remoto")
    );
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-8 text-center md:text-left">
            Vida Nómada
          </h1>
          
          <p className="max-w-3xl mx-auto md:mx-0 text-muted-foreground mb-12">
            Experiencias, reflexiones y consejos sobre cómo vivir y trabajar mientras viajas por el mundo.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nomadPosts.length > 0 ? (
              nomadPosts.map(post => (
                <PostCard key={post.slug} post={post} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">
                  Aún no hay artículos sobre vida nómada. ¡Vuelve pronto!
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
