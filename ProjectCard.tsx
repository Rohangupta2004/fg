import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
           <span className="bg-white/90 backdrop-blur text-blue-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            {project.type}
          </span>
          <span className="bg-[#00609C] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            {project.status}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar className="w-4 h-4 mr-2 text-blue-500" />
            {project.year}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-2 text-blue-500" />
            <span className="uppercase">{project.location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm border-t pt-4">
          {project.description}
        </p>
      </div>
    </div>
  );
};