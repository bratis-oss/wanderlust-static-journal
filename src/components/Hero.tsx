
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  buttonText?: string;
  buttonLink?: string;
  overlay?: boolean;
}

const Hero = ({ 
  title, 
  subtitle, 
  imageSrc, 
  buttonText, 
  buttonLink, 
  overlay = true 
}: HeroProps) => {
  return (
    <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        {overlay && (
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        )}
      </div>
      
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 max-w-4xl animate-fade-up">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
        )}
        
        {buttonText && buttonLink && (
          <Link 
            to={buttonLink} 
            className="bg-white text-gray-900 hover:bg-gray-100 font-medium px-8 py-3 rounded-full inline-flex items-center transition-all transform hover:scale-105 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
