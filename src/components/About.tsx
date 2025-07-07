
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
                Hi, I'm Brajesh Kumar, an <span className="text-tech-accent">aspiring Machine Learning Engineer and Data Scientist</span> with a passion for turning data into actionable insights. My journey into the world of machine learning has been focused on building real-world applications that integrate cutting-edge algorithms with scalable backend systems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                One of my notable projects is the <span className="text-tech-accent">Named Entity Recognition (NER) System</span>, where I developed a CRF-based model for text analysis and deployed it with a real-time Streamlit web app. Another significant project I worked on is the <span className="text-tech-accent">Real-Time Face Mask Detection System</span>, where I leveraged MobileNetV2 and Keras to build a robust solution for edge devices with real-time performance.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With experience in <span className="text-tech-accent">Python, FastAPI, PostgreSQL, and Docker</span>, I'm committed to improving my skills and building innovative solutions to solve complex problems. I'm excited about the potential of machine learning and eager to contribute to future projects that make an impact.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Feel free to explore my projects below and reach out if you'd like to connect or collaborate!
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
                    <span>Aspiring AI & ML Engineer</span>
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
                    <span>Aspiring Data Scientist</span>
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
