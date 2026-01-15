import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
         <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-semibold text-lg shadow-inner">
            Our Services
         </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {SERVICES.map((service) => (
          <div key={service.id} className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
            
            <div className="w-full lg:w-1/2">
              <div className="relative group p-4 bg-white shadow-xl rounded-2xl rotate-1 hover:rotate-0 transition-all duration-500">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-auto rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">{service.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};