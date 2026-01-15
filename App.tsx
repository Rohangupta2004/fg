import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Clients } from './components/Clients';
import { Projects } from './components/Projects';
import { Awards } from './components/Awards';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Clients />
        <Projects />
        <Awards />
        <WhyChooseUs />
        <Services />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;