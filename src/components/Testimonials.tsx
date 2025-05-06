
import { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      content: "Brajesh is an outstanding student who demonstrated excellent problem-solving skills and deep learning expertise during his internship with us. His contributions were crucial to the success of the project.",
      author: "Mentor",
      position: "Coding Blocks",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000"
    },
    {
      content: "Brajesh has a sharp mind for AI and is highly collaborative. His ability to quickly grasp complex machine learning concepts and apply them effectively is remarkable.",
      author: "Professor",
      position: "Lovely Professional University",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1000"
    },
    {
      content: "I've worked with Brajesh on several DevOps projects, and his work ethic, commitment, and technical skills always stood out. He's an asset to any team.",
      author: "TeamMate",
      position: "Medicos",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-tech-darkBlue relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-tech-lightBlue to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-2 section-heading">Testimonials</h2>
          <p className="text-gray-400 mt-4 mb-8 max-w-2xl">
            What colleagues, mentors, and collaborators have to say about working with me.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto mt-12">
          <AnimatedSection delay="delay-200">
            <div className="relative h-[320px] sm:h-[250px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ${
                    index === activeIndex 
                      ? "opacity-100 translate-x-0" 
                      : index < activeIndex 
                        ? "opacity-0 -translate-x-full" 
                        : "opacity-0 translate-x-full"
                  }`}
                >
                  <Card className="bg-tech-lightBlue/30 border border-tech-accent/20 backdrop-blur-sm h-full">
                    <CardContent className="p-8 h-full flex flex-col justify-between">
                      <div className="mb-6">
                        <svg className="h-8 w-8 text-tech-accent mb-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391C14.017 10.812 16.693 8.5 20.05 8.5V10.9c-1.657 0-3.033 1.283-3.033 2.983v1.725h3v5.392h-6ZM4 21V10.9c1.657 0 3 1.283 3 2.983v1.725h3v5.392H4Z"></path>
                        </svg>
                        <p className="text-gray-300 text-lg leading-relaxed italic">{testimonial.content}</p>
                      </div>
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full overflow-hidden">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.author} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-white font-medium">{testimonial.author}</h4>
                          <p className="text-tech-accent text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? "bg-tech-accent" : "bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
