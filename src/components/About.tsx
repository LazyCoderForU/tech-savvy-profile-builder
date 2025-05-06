
import AnimatedSection from './AnimatedSection';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-tech-lightBlue">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-2 section-heading">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="md:col-span-2 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate <span className="text-tech-accent">prefinal year B.Tech Computer Science student</span> at Lovely Professional University, with over
                10 years of theoretical and practical experience in developing AI and machine learning solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in technology began with a fascination for how computers could solve complex problems. This led me to specialize in 
                <span className="text-tech-accent"> Machine Learning</span>, <span className="text-tech-accent">Natural Language Processing</span>, 
                and <span className="text-tech-accent">Data Science</span> — turning complex data into meaningful, actionable insights.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With expertise in Python and various ML frameworks like TensorFlow and scikit-learn, I've built multiple
                projects including disease prediction models, face mask detection systems, and NER with CRF—all aimed at solving real-world problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My DevOps knowledge allows me to build and deploy scalable solutions using Docker, AWS, and CI/CD pipelines, ensuring that my
                machine learning models don't just work in theory, but can be deployed effectively in production environments.
              </p>
              
              <div className="pt-6 flex flex-wrap gap-4 text-sm">
                <Button variant="outline" className="border-tech-accent text-tech-accent hover:bg-tech-accent/10 px-6 py-5">
                  <a href="#projects">View Projects</a>
                </Button>
                <Button variant="outline" className="border-tech-accent text-tech-accent hover:bg-tech-accent/10 px-6 py-5">
                  <a href="https://drive.google.com/file/d/1rKyOCgiXJRh9ey34Y6SbC-JH2b5Z5OCx/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="border-2 border-tech-accent rounded-lg p-6 h-full bg-tech-darkBlue/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-tech-accent mb-4">Quick Info</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-tech-accent">🎓</span>
                    <span>B.Tech Computer Science</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-tech-accent">🏢</span>
                    <span>Lovely Professional University</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-tech-accent">💻</span>
                    <span>AI & ML Specialist</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-tech-accent">🔄</span>
                    <span>DevOps Engineer</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-tech-accent">🧠</span>
                    <span>Deep Learning Enthusiast</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-tech-accent">📊</span>
                    <span>Data Science Expert</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-tech-accent">🚀</span>
                    <span>Microservices Architecture</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-tech-accent">⏱️</span>
                    <span>90 WPM Typing Speed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
