import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto mt-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-8 tracking-tight">
          Elevate Your Space With Finest Facade
        </h1>
        
        <div className="mt-8">
          <a 
            href="#contact"
            className="group inline-flex items-center px-8 py-4 text-lg font-medium text-white border-2 border-white/80 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full transition-all duration-300"
          >
            Get a Free Quote Now!
            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};