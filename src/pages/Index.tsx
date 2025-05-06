
import { useEffect, useState } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-tech-darkBlue z-50">
        <div className="text-center">
          <div className="text-3xl font-bold text-tech-accent font-mono">
            <span className="inline-block animate-pulse">B</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.1s' }}>r</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.2s' }}>a</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.3s' }}>j</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.4s' }}>e</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.5s' }}>s</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.6s' }}>h</span>
          </div>
          <div className="mt-4 h-1 w-48 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-tech-accent animate-[progress_1.5s_ease-in-out]" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-tech-darkBlue">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
