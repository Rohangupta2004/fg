import React from 'react';
import { Header } from './Hero';
import { Hero } from './Hero';
import { Clients } from './Clients';
import { Projects } from './Projects';
import { Awards } from './Awards';
import { WhyChooseUs } from './WhyChooseUs';
import { Services } from './Services';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';

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
