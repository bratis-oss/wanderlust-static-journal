
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { MapPin, Mail, Instagram, Globe } from 'lucide-react';

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="About Wanderlust"
          imageSrc="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
        />
        
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our Story</h2>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Welcome to Wanderlust, a travel blog born from a passion for exploration and a desire to share the world's beauty with fellow travelers and dreamers alike.
              </p>
              
              <p>
                Wanderlust was created in 2023 as a platform to document travels, share insights, and inspire others to embark on their own journeys of discovery. What started as a personal travel diary has evolved into a resource for travelers seeking authentic experiences and practical advice.
              </p>
              
              <p>
                We believe that travel is not just about seeing new places but about immersing oneself in different cultures, connecting with local communities, and gaining perspectives that transform how we see the world and ourselves.
              </p>
              
              <p>
                Our mission is to inspire responsible travel that respects local cultures and environments. We strive to showcase both popular destinations and hidden gems, always highlighting sustainable practices and authentic experiences.
              </p>
            </div>
          </div>
        </section>
        
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10 text-center">Meet the Traveler</h2>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-2">Maria Rodriguez</h3>
                  <p className="flex items-center text-gray-600 mb-4">
                    <MapPin className="mr-2" size={18} /> Based in Madrid, Spain
                  </p>
                  
                  <div className="prose prose-lg max-w-none">
                    <p>
                      Hello! I'm Maria, a full-time traveler, photographer, and the founder of Wanderlust. My journey began in 2018 when I left my corporate job to travel across Southeast Asia for what was supposed to be a three-month sabbatical. Three years and 32 countries later, I'm still exploring the world and sharing my experiences.
                    </p>
                    
                    <p>
                      With a background in photography and a genuine love for storytelling, I created this blog to document my adventures and provide practical insights for fellow travelers. My travel style combines cultural immersion with outdoor adventures, always seeking experiences that challenge perspectives and create meaningful connections.
                    </p>
                  </div>
                  
                  <div className="flex space-x-4 mt-6">
                    <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                      <Mail size={20} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                      <Globe size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10 text-center">
              Our Travel Philosophy
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Responsible Travel</h3>
                <p className="text-gray-700">
                  We believe in traveling responsibly by respecting local cultures, supporting local economies, and minimizing environmental impact. We're committed to sharing eco-friendly travel tips and highlighting sustainable initiatives.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Authentic Experiences</h3>
                <p className="text-gray-700">
                  We seek authentic connections with places and people. Our content focuses on experiences that provide genuine insight into local life, moving beyond tourist attractions to capture the true essence of a destination.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Practical Advice</h3>
                <p className="text-gray-700">
                  We know that good travel advice can transform a trip. Our guides combine inspirational ideas with practical tips to help you plan meaningful journeys, whether you're a seasoned traveler or planning your first adventure.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Visual Storytelling</h3>
                <p className="text-gray-700">
                  We believe in the power of visual storytelling to inspire wanderlust. Through photography and thoughtful narratives, we aim to capture the beauty, diversity, and humanity of the places we visit.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Let's Connect
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Have questions, suggestions, or just want to say hello? I'd love to hear from you! Drop me a message at hello@wanderlust.com or connect on social media.
            </p>
            
            <button 
              className="bg-white text-primary hover:bg-gray-100 font-medium px-8 py-3 rounded-full transition-all transform hover:scale-105"
            >
              Contact Me
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
