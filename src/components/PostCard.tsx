
import { Link } from 'react-router-dom';
import { Post } from '../data/posts';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="aspect-[16/10] overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-5">
        <div className="mb-3">
          <span className="text-xs font-medium text-primary-foreground bg-primary px-2.5 py-0.5 rounded-full">
            {post.destination}
          </span>
        </div>
        
        <Link to={`/blog/${post.slug}`} className="block">
          <h3 className="text-xl font-serif font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground line-clamp-2 mb-4">
          {post.excerpt}
        </p>
        
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>{post.date}</span>
          <span>{post.readingTime}</span>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
