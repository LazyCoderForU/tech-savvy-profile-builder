
import AnimatedSection from './AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';

const Achievements = () => {
  const achievements = [
    {
      title: "90 WPM Typing Speed",
      description: "Achieved 90 words per minute typing speed, demonstrating excellent keyboard proficiency and attention to detail.",
      icon: "⌨️",
      link: "https://monkeytype.com/profile/Brajesh-Gupta",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=1000",
    },
    {
      title: "Smart India Hackathon",
      description: "Participated in Smart India Hackathon and built a deployed ML model with 95% accuracy for disease prediction.",
      icon: "🏆",
      link: "#",
      image: "https://images.unsplash.com/photo-1559223607-a43aee8a57e1?q=80&w=1000",
    },
    {
      title: "Research Paper Accepted",
      description: "Research paper on Named Entity Recognition using Conditional Random Fields accepted for publication.",
      icon: "📝",
      link: "#",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000",
    },
    {
      title: "Dean's List - Top 10%",
      description: "Recognized in the top 10% of students at Lovely Professional University for academic excellence.",
      icon: "🎓",
      link: "#",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-tech-lightBlue">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-2 section-heading">Achievements</h2>
          <p className="text-gray-400 mt-4 mb-8 max-w-2xl">
            Recognition of my skills, expertise, and contributions to the tech community and academia.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {achievements.map((achievement, index) => (
            <AnimatedSection key={achievement.title} delay={`delay-${index * 100}`}>
              <Card className="bg-tech-darkBlue/70 border border-tech-accent/20 overflow-hidden h-full hover:shadow-lg hover:shadow-tech-accent/10 transition-all">
                <div className="h-40 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-tech-darkBlue to-transparent z-10"></div>
                  <img 
                    src={achievement.image} 
                    alt={achievement.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center bg-tech-accent/80 backdrop-blur-sm rounded-lg z-20">
                    <span className="text-2xl">{achievement.icon}</span>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{achievement.description}</p>
                  {achievement.link && (
                    <a 
                      href={achievement.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-tech-accent text-sm font-medium hover:underline inline-block"
                    >
                      View Certificate →
                    </a>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
