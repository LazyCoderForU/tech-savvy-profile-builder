
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const Certifications = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const certificates = [
    {
      title: "Static Routing Using Packet Tracer",
      issuer: "Coursera",
      date: "Aug 2024",
      skills: ["Networking", "Packet Tracer", "Static Routing", "Network Configuration"],
      link: "https://www.coursera.org/account/accomplishments/verify/V6YZTF3D9FAJ",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000"
    },
    {
      title: "IBM DevOps and Software Engineering",
      issuer: "Coursera",
      date: "May 2024",
      skills: ["DevOps", "CI/CD", "Docker", "Kubernetes", "Cloud Computing"],
      link: "https://www.coursera.org/account/accomplishments/professional-cert/4D4G9L4C91BJ",
      image: "https://images.unsplash.com/photo-1561883088-039e53143d73?q=80&w=1000"
    },
    {
      title: "Python Bootcamp: Zero to Hero",
      issuer: "Udemy",
      date: "Feb 2023",
      skills: ["Python", "Object-Oriented Programming", "Data Structures", "Algorithms"],
      link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-9859b7c8-a067-4bb9-94fc-bb7dd4913bc4.pdf",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1000"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-tech-lightBlue to-tech-darkBlue">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-2 section-heading">Certifications</h2>
          <p className="text-gray-400 mt-4 mb-8 max-w-2xl">
            Continuous learning is key to staying ahead in the tech industry. Here are some of the professional certifications I've earned.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {certificates.map((cert, index) => (
            <AnimatedSection key={cert.title} delay={`delay-${index * 100}`}>
              <a 
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="block h-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card className="overflow-hidden h-full bg-tech-darkBlue/70 border border-tech-accent/20 transition-all hover:shadow-lg hover:shadow-tech-accent/10">
                  <div className="h-48 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-tech-darkBlue via-transparent to-transparent z-10"></div>
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                      style={{ 
                        transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)'
                      }}
                    />
                    {hoveredIndex === index && (
                      <div className="absolute inset-0 flex items-center justify-center bg-tech-accent/20 backdrop-blur-sm z-20 transition-opacity duration-300">
                        <span className="flex items-center gap-2 bg-tech-darkBlue/90 px-4 py-2 rounded-md text-tech-accent font-medium">
                          View Certificate <ExternalLink size={16} />
                        </span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-tech-accent">{cert.issuer}</span>
                      <span className="text-gray-400 text-sm">{cert.date}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {cert.skills.slice(0, 3).map(skill => (
                        <Badge key={skill} variant="outline" className="bg-tech-accent/10 text-tech-accent border-tech-accent/30">
                          {skill}
                        </Badge>
                      ))}
                      {cert.skills.length > 3 && (
                        <Badge variant="outline" className="bg-tech-accent/10 text-tech-accent border-tech-accent/30">
                          +{cert.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
