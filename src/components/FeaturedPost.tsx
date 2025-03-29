
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Post } from '../data/posts';

interface FeaturedPostProps {
  post: Post;
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <div className="relative group overflow-hidden rounded-xl">
      <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
        <div className="mb-2">
          <span className="text-xs font-medium bg-primary text-primary-foreground px-3 py-1 rounded-full">
            {post.destination}
          </span>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
          {post.title}
        </h2>
        
        <p className="text-white/80 mb-4 max-w-2xl">
          {post.excerpt}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="text-white/70 text-sm">
            {post.date} · {post.readingTime}
          </div>
          
          <Link 
            to={`/blog/${post.slug}`} 
            className="text-white inline-flex items-center hover:text-primary transition-colors"
          >
            Leer Más <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
