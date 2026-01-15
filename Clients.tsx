import React from 'react';
import { CLIENTS } from '../constants';

export const Clients: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-80">
          {CLIENTS.map((client) => (
            <div key={client.id} className="w-full flex justify-center grayscale hover:grayscale-0 transition-all duration-300">
               {/* Using text representation styled to look like logos since we don't have the SVGs */}
               <div className="text-xl md:text-2xl font-black text-slate-700 uppercase tracking-tighter text-center">
                  {client.logo}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};