
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

interface SkillCategory {
  category: string;
  skills: {
    name: string;
    icon?: string;
    level: number;
  }[];
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState("languages");

  const skillCategories: SkillCategory[] = [
    {
      category: "languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 60 },
        { name: "C++", level: 60 },
        { name: "SQL", level: 90 },
        { name: "Bash", level: 70 },
        { name: "PL/SQL", level: 65 },
      ]
    },
    {
      category: "frameworks",
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "Keras", level: 90 },
        { name: "scikit-learn", level: 95 },
        { name: "OpenCV", level: 60 },
        { name: "NLTK", level: 90 },
        { name: "spaCy", level: 90 },
        { name: "Streamlit", level: 90 },
      ]
    },
    {
      category: "tools",
      skills: [
        { name: "Git", level: 95 },
        { name: "GitHub", level: 95 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 75 },
        { name: "Jenkins", level: 70 },
        { name: "Streamlit", level: 90 },
      ]
    },
    {
      category: "data",
      skills: [
        { name: "pandas", level: 100 },
        { name: "NumPy", level: 100 },
        { name: "Matplotlib", level: 85 },
        { name: "Seaborn", level: 80 },
        { name: "Plotly", level: 75 },
        { name: "SQL", level: 90 },
      ]
    },
    {
      category: "technologies",
      skills: [
        { name: "Machine Learning", level: 95 },
        { name: "Deep Learning", level: 90 },
        { name: "NLP", level: 95 },
        { name: "Computer Vision", level: 80 },
        { name: "DevOps", level: 70 },
        { name: "Microservices", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-tech-lightBlue to-tech-darkBlue">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-2 section-heading">My Tech Stack</h2>
          <p className="text-gray-400 mt-4 mb-8 max-w-2xl">
            With 10+ years of experience, I've mastered a diverse set of technologies and tools that allow me to build complete, production-ready AI and ML solutions.
          </p>
        </AnimatedSection>

        <AnimatedSection delay="delay-200">
          <Tabs defaultValue="languages" value={activeTab} onValueChange={setActiveTab} className="w-full mt-8">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-tech-darkBlue/50 p-1">
                <TabsTrigger
                  value="languages"
                  className={cn(
                    "px-4 py-2 rounded-md transition-all",
                    activeTab === "languages" ? "bg-tech-accent text-tech-darkBlue" : "text-gray-400 hover:text-white"
                  )}
                >
                  Languages
                </TabsTrigger>
                <TabsTrigger
                  value="frameworks"
                  className={cn(
                    "px-4 py-2 rounded-md transition-all",
                    activeTab === "frameworks" ? "bg-tech-accent text-tech-darkBlue" : "text-gray-400 hover:text-white"
                  )}
                >
                  Frameworks
                </TabsTrigger>
                <TabsTrigger
                  value="tools"
                  className={cn(
                    "px-4 py-2 rounded-md transition-all",
                    activeTab === "tools" ? "bg-tech-accent text-tech-darkBlue" : "text-gray-400 hover:text-white"
                  )}
                >
                  Tools
                </TabsTrigger>
                <TabsTrigger
                  value="data"
                  className={cn(
                    "px-4 py-2 rounded-md transition-all",
                    activeTab === "data" ? "bg-tech-accent text-tech-darkBlue" : "text-gray-400 hover:text-white"
                  )}
                >
                  Data Analysis
                </TabsTrigger>
                <TabsTrigger
                  value="technologies"
                  className={cn(
                    "px-4 py-2 rounded-md transition-all",
                    activeTab === "technologies" ? "bg-tech-accent text-tech-darkBlue" : "text-gray-400 hover:text-white"
                  )}
                >
                  Technologies
                </TabsTrigger>
              </TabsList>
            </div>
            
            {skillCategories.map((category) => (
              <TabsContent key={category.category} value={category.category}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="bg-tech-lightBlue/50 backdrop-blur-sm border border-tech-accent/20 rounded-lg p-5 skill-item"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-medium text-white">{skill.name}</h3>
                        <span className="text-tech-accent font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div
                          className="bg-tech-accent h-2.5 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
