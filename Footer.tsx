import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white border-t border-gray-200 pt-16 pb-8">
      
      {/* CTA Strip */}
      <div className="bg-blue-600 text-white py-12 mb-16">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold mb-6">Ready to upgrade your facade?</h2>
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded hover:bg-gray-100 transition shadow-lg">
               View Company Profile
            </button>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Details */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl font-bold text-black border-b-4 border-black inline-block mb-8 pb-1">
              Contact Us:
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="text-xl font-bold text-gray-900 mr-2">Phone Number::</span>
                </div>
                <a href="tel:+918369233566" className="text-xl text-blue-600 font-semibold hover:underline">
                  +91-8369233566
                </a>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                   <span className="text-xl font-bold text-gray-900 mr-2">Email us at:</span>
                </div>
                <a href="mailto:info@fineglaze.com" className="text-xl text-blue-600 font-semibold hover:underline break-all">
                  info@fineglaze.com
                </a>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                   <span className="text-xl font-bold text-gray-900 mr-2">Tel.No.:</span>
                </div>
                <span className="text-xl text-gray-800 font-semibold">
                  +91-020-68299-428
                </span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full lg:w-2/3 h-96 bg-gray-100 relative rounded-lg overflow-hidden shadow-inner border">
             {/* Simulating Map Embed */}
             <img 
               src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_2560%2Cc_limit/GoogleMapTA.jpg" 
               alt="Map Location" 
               className="w-full h-full object-cover opacity-80"
             />
             <div className="absolute top-4 left-4 bg-white p-4 rounded shadow-lg max-w-xs">
                <h3 className="font-bold text-gray-800">Fine Glaze</h3>
                <p className="text-xs text-gray-600 mt-1">
                   Shop no.1 & 2, Jagdamba Bhawan Marg, near sunshine hills, Pune, Maharashtra 411060
                </p>
                <div className="mt-2 flex items-center text-amber-500 text-xs font-bold">
                   5.0 ★★★★★ <span className="text-blue-500 ml-2 font-normal underline cursor-pointer">5 reviews</span>
                </div>
                <a href="#" className="text-blue-500 text-xs mt-2 block hover:underline">View larger map</a>
             </div>
             <div className="absolute bottom-4 right-4">
                <MapPin className="text-red-600 w-12 h-12 drop-shadow-lg animate-bounce" />
             </div>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Fine Glaze. All rights reserved.
        </div>
      </div>
    </footer>
  );
};