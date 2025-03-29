
import { useEffect } from 'react';
import Hero from '../components/Hero';
import FeaturedPost from '../components/FeaturedPost';
import PostCard from '../components/PostCard';
import { getFeaturedPosts, getLatestPosts, getUniqueDestinations } from '../data/posts';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const Index = () => {
  const featuredPosts = getFeaturedPosts();
  const latestPosts = getLatestPosts(3);
  const destinations = getUniqueDestinations();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          title="Explore the World with Wanderlust"
          subtitle="Discover breathtaking destinations and unforgettable experiences"
          imageSrc="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
          buttonText="Explore Destinations"
          buttonLink="/destinations"
        />
        
        {/* Featured Posts Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10 text-center">
            Featured Stories
          </h2>
          
          <div className="grid grid-cols-1 gap-8">
            {featuredPosts.map((post, index) => (
              <FeaturedPost key={post.id} post={post} />
            ))}
          </div>
        </section>
        
        {/* Destinations Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10 text-center">
              Popular Destinations
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((destination, index) => (
                <Link 
                  key={destination} 
                  to={`/destinations?country=${destination}`}
                  className="group relative h-60 rounded-xl overflow-hidden shadow-md"
                >
                  <img 
                    src={`https://source.unsplash.com/featured/?${destination},travel`} 
                    alt={destination} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <div className="flex items-center text-white">
                      <MapPin className="mr-2" size={18} />
                      <span className="text-xl font-medium">{destination}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Latest Posts Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10 text-center">
            Latest Adventures
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/destinations" 
              className="inline-block bg-primary text-white hover:bg-primary/90 font-medium px-8 py-3 rounded-full transition-all transform hover:scale-105"
            >
              View All Posts
            </Link>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Join Our Travel Community
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter for travel tips, exclusive content, and updates on new destinations.
            </p>
            
            <form className="max-w-md mx-auto flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-gray-900 text-white px-6 py-3 rounded-r-lg hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
