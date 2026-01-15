import { Project, Client, Service } from './types';
import { PenTool, Settings, Building2, Trophy } from 'lucide-react';
import React from 'react';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Salsette-27",
    type: "Commercial",
    status: "Completed",
    image: "https://picsum.photos/id/43/800/600",
    year: "2024",
    location: "MUMBAI",
    description: "High-rise commercial facade installation with premium glazing."
  },
  {
    id: 2,
    title: "Mittal House",
    type: "Residential",
    status: "Completed",
    image: "https://picsum.photos/id/188/800/600",
    year: "2023",
    location: "MUMBAI",
    description: "Luxury residential window systems and marble cladding integration."
  },
  {
    id: 3,
    title: "Embassy Techzone",
    type: "Commercial",
    status: "Completed",
    image: "https://picsum.photos/id/234/800/600",
    year: "2023",
    location: "PUNE",
    description: "Extensive glass facade for major tech park campus."
  },
  {
    id: 4,
    title: "Leela Business Park",
    type: "Commercial",
    status: "Completed",
    image: "https://picsum.photos/id/1076/800/600",
    year: "2023",
    location: "ANDHERI-EAST, MUMBAI",
    description: "Aluminium louvers installed on all floors."
  },
  {
    id: 5,
    title: "Leela Hotel",
    type: "Commercial",
    status: "Completed",
    image: "https://picsum.photos/id/449/800/600",
    year: "2023",
    location: "ANDHERI(E) - MUMBAI",
    description: "Laundry area fixed and openable windows work completed."
  },
  {
    id: 6,
    title: "NIRMANN ESTRELLA",
    type: "Commercial",
    status: "Completed",
    image: "https://picsum.photos/id/122/800/600",
    year: "2024",
    location: "SOMJI CHOWK, PUNE",
    description: "Window maintenance, aluminium louver, fins, and fixed glass windows."
  }
];

export const CLIENTS: Client[] = [
  { id: 1, name: "L&T Realty", logo: "LARSEN & TOUBRO" },
  { id: 2, name: "Jindal Stainless", logo: "JSLA" },
  { id: 3, name: "Peninsula Land", logo: "PENINSULA LAND" },
  { id: 4, name: "Embassy REIT", logo: "EMBASSY REIT" },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Facade Designing",
    description: "Our skilled designers will work with you to create a custom design that meets your specific needs and preferences. We take into consideration the style of your building, the surrounding environment, and your budget to deliver a unique and functional design.",
    image: "https://picsum.photos/id/250/600/400",
    reverse: false
  },
  {
    id: 2,
    title: "Facade Fabrication",
    description: "Our state-of-the-art fabrication facility is equipped with the latest machinery and tools to ensure precision and quality in every product. We use high-grade aluminium and glass to manufacture durable and aesthetically pleasing facade elements.",
    image: "https://picsum.photos/id/257/600/400",
    reverse: true
  }
];

export const FEATURES = [
  {
    title: "Experience",
    icon: <Building2 className="w-12 h-12 text-amber-600 mb-4" />,
    description: "With years of industry presence, we bring unmatched expertise to every project."
  },
  {
    title: "Quality",
    icon: <Settings className="w-12 h-12 text-amber-600 mb-4" />,
    description: "We use only the highest quality materials and employ rigorous testing standards."
  },
  {
    title: "Innovation",
    icon: <PenTool className="w-12 h-12 text-amber-600 mb-4" />,
    description: "Creative design solutions that blend aesthetics with structural integrity."
  },
  {
    title: "Recognition",
    icon: <Trophy className="w-12 h-12 text-amber-600 mb-4" />,
    description: "Award-winning services recognized by top real estate developers."
  }
];