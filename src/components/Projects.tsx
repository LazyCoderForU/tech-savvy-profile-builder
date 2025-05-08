
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo?: string;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      title: "Maze Runner Game",
      description: "Microservices-based web game with Flask, Docker, and Jenkins CI/CD. Features real-time UI, modular backend architecture, and containerized deployment.",
      tags: ["Python", "Flask", "Docker", "Microservices", "Jenkins"],
      image: "https://github.com/LazyCoderForU/Maze_Runner_Game_Python/raw/main/preview.png",
      github: "https://github.com/LazyCoderForU/Maze_Runner_Game_Python",
    },
    {
      title: "Medicoz Healthcare Platform",
      description: "Healthcare platform with patient management, appointment scheduling, and medical record tracking. Built with modern web technologies and responsive design.",
      tags: ["React", "MongoDB", "Express", "Node.js", "Healthcare"],
      image: "https://github.com/omkeshri/medicoz/raw/main/preview.png",
      github: "https://github.com/omkeshri/medicoz",
    },
    {
      title: "Real-Time Face Mask Detector",
      description: "DNN-based face mask detection system with OpenCV and Keras. Works on live video streams with high accuracy and performance optimization.",
      tags: ["Computer Vision", "Deep Learning", "Keras", "OpenCV", "Python"],
      image: "https://github.com/LazyCoderForU/Real-Time-Face-Mask-Detection/raw/main/preview.png",
      github: "https://github.com/LazyCoderForU/Real-Time-Face-Mask-Detection",
    },
    {
      title: "Named Entity Recognition using CRF",
      description: "NER tool developed with Conditional Random Fields, NLTK, and spaCy. Deployed with Streamlit for interactive BIO-tagged text visualization.",
      tags: ["NLP", "CRF", "Streamlit", "NLTK", "Python"],
      image: "https://github.com/LazyCoderForU/Ner_Streamlit_app/raw/main/preview.png",
      github: "https://github.com/LazyCoderForU/Ner_Streamlit_app",
    },
    {
      title: "Earthquake Prediction Model",
      description: "Machine learning model to predict earthquakes based on historical seismic data. Includes data visualization and interactive dashboard for analysis.",
      tags: ["Machine Learning", "Data Science", "Python", "Pandas", "Visualization"],
      image: "https://github.com/LazyCoderForU/earthquake-prediction/raw/main/preview.png",
      github: "https://github.com/LazyCoderForU/earthquake-prediction",
    },
  ];

  const filters = ['all', 'Machine Learning', 'NLP', 'Computer Vision', 'Docker', 'Python', 'Healthcare'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-tech-darkBlue">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-2 section-heading">Project Highlights</h2>
          <p className="text-gray-400 mt-4 mb-8 max-w-2xl">
            Throughout my career, I've built a variety of projects that demonstrate my expertise in AI, ML, and DevOps.
            Here are some highlights from my portfolio:
          </p>
        </AnimatedSection>

        <AnimatedSection delay="delay-200">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all",
                  activeFilter === filter
                    ? "bg-tech-accent text-tech-darkBlue"
                    : "bg-tech-lightBlue/30 text-gray-300 hover:bg-tech-lightBlue/50"
                )}
              >
                {filter === 'all' ? 'All Projects' : filter}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {filteredProjects.map((project, index) => (
            <AnimatedSection key={project.title} delay={`delay-${(index % 5) * 100}`}>
              <div className="bg-tech-lightBlue/30 backdrop-blur-sm rounded-lg overflow-hidden project-card border border-tech-accent/20 h-full flex flex-col">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tech-darkBlue to-transparent"></div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-tech-accent">{project.title}</h3>
                  <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={`${project.title}-${tag}`}
                        className="text-xs px-2 py-1 rounded-full bg-tech-accent/20 text-tech-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="border-tech-accent text-tech-accent hover:bg-tech-accent/10">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button variant="outline" size="sm" className="border-tech-accent text-tech-accent hover:bg-tech-accent/10">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay="delay-300" className="text-center mt-12">
          <Button className="bg-tech-accent text-tech-darkBlue hover:bg-tech-accent/90">
            <a href="https://github.com/LazyCoderForU" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github size={18} />
              View All Projects
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
