import React from 'react';
import { Award } from 'lucide-react';

export const Awards: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 flex justify-center space-x-4">
            <div className="relative shadow-2xl bg-white p-2 border border-gray-200 rotate-[-2deg]">
              {/* Mock Certificate */}
              <div className="w-64 h-48 bg-slate-50 border-4 border-amber-500 p-4 flex flex-col items-center justify-center text-center">
                <Award className="w-12 h-12 text-amber-600 mb-2" />
                <h4 className="font-serif font-bold text-lg">CERTIFICATE</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Of Appreciation</p>
                <div className="w-32 h-px bg-gray-300 my-2"></div>
                <p className="text-[10px] font-bold">BEST VENDOR PERFORMANCE</p>
                <p className="text-[10px] text-gray-600">2024</p>
              </div>
            </div>
            
            <div className="relative z-10">
               {/* Mock Trophy */}
               <img 
                 src="https://images.unsplash.com/photo-1628149208035-7171d9d4d984?q=80&w=1000&auto=format&fit=crop" 
                 alt="Trophy" 
                 className="h-64 object-contain drop-shadow-2xl"
               />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <div className="border-l-4 border-amber-500 pl-6">
              <h2 className="text-3xl font-bold text-amber-500 mb-2">BEST PERFORMANCE VENDOR – 2024</h2>
              <p className="text-xl text-blue-900 font-semibold mb-4">
                Awarded to Fine Glaze by Embassy REIT Ltd.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For Smoothly Completing Facade Glass Replacement of Embassy 247 Vikhroli Project. This recognition stands as a testament to our commitment to quality, safety, and timely delivery in challenging environments.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};