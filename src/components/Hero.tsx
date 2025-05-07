
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const roles = ['AI & ML Engineer', 'Python Developer', 'DevOps Engineer', 'Data Scientist'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && typedText === currentRole) {
        // Pause at the end of the word
        setTypingSpeed(1500);
        setIsDeleting(true);
      } else if (isDeleting && typedText === '') {
        // Move to the next role
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setTypingSpeed(100);
      } else {
        if (isDeleting) {
          setTypedText(currentRole.substring(0, typedText.length - 1));
          setTypingSpeed(60);
        } else {
          setTypedText(currentRole.substring(0, typedText.length + 1));
          setTypingSpeed(100);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, currentRoleIndex, isDeleting, typingSpeed, roles]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-darkBlue/50 to-tech-lightBlue/20 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-3/5 space-y-6">
            <div className="space-y-3 animate-fade-in">
              <p className="text-tech-accent font-mono">Hi, my name is</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white">Brajesh Kumar.</h1>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-400 flex flex-wrap items-center gap-x-3">
                I'm a <span className="text-tech-accent typing-container">
                  <span className="typing-text">{typedText}</span>
                </span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed mt-4">
                Specializing in building intelligent systems and creating data-driven solutions. 
                Currently focused on AI, Machine Learning, and DevOps technologies.
              </p>
            </div>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4 animate-fade-in delay-300">
              <Button className="bg-tech-accent text-tech-darkBlue hover:bg-tech-accent/90 text-lg px-8 py-6">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" className="border-tech-accent text-tech-accent hover:bg-tech-accent/10 text-lg px-8 py-6">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-center animate-fade-in">
            <div className="rounded-full border-4 border-tech-accent/30 p-2 transform animate-float">
              <div className="rounded-full border-2 border-tech-accent p-2">
                <img
                  src="/lovable-uploads/54433542-e4a4-4d8d-ad5d-3e7a886073e8.png"
                  alt="Brajesh Kumar"
                  className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
