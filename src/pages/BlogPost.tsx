
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PostCard from '../components/PostCard';
import { getPostBySlug, getLatestPosts, Post } from '../data/posts';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (slug) {
      const foundPost = getPostBySlug(slug);
      
      if (foundPost) {
        setPost(foundPost);
        // Get related posts (here we just get latest for simplicity)
        setRelatedPosts(getLatestPosts(3).filter(p => p.id !== foundPost.id));
      } else {
        // Post not found, redirect to 404
        navigate('/not-found');
      }
    }
  }, [slug, navigate]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Image */}
        <div className="w-full h-[50vh] md:h-[70vh] relative">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        {/* Content Section */}
        <article className="container mx-auto px-4 md:px-8 -mt-20 relative z-10">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-10">
            <Link 
              to="/destinations" 
              className="inline-flex items-center text-gray-600 hover:text-primary mb-6"
            >
              <ArrowLeft className="mr-2" size={16} /> Back to all posts
            </Link>

            <span className="text-sm font-medium text-white bg-primary px-3 py-1 rounded-full">
              {post.destination}
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mt-4 mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-600 text-sm mb-8">
              <div className="flex items-center mr-6 mb-2">
                <Calendar className="mr-2" size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <Clock className="mr-2" size={16} />
                <span>{post.readingTime}</span>
              </div>
              <span className="mb-2">By {post.author}</span>
            </div>
            
            <div 
              className="prose prose-lg max-w-none blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="border-t border-gray-200 mt-12 pt-8">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Share this post:</span>
                <div className="flex space-x-4">
                  <button className="text-gray-600 hover:text-primary transition-colors">
                    Facebook
                  </button>
                  <button className="text-gray-600 hover:text-primary transition-colors">
                    Twitter
                  </button>
                  <button className="text-gray-600 hover:text-primary transition-colors">
                    Pinterest
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
        
        {/* Related Posts Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
            You Might Also Like
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
