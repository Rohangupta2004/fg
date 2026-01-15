export interface Project {
  id: number;
  title: string;
  type: string;
  status: string;
  image: string;
  year: string;
  location: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export interface Client {
  id: number;
  name: string;
  logo: string; // Using text/placeholder for logo in this clone
}