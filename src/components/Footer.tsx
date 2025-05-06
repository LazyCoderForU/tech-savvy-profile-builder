
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tech-darkBlue border-t border-tech-accent/20 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold font-mono text-tech-accent">
              Brajesh<span className="text-white">.dev</span>
            </a>
            <p className="text-gray-400 mt-2 text-sm">
              AI & ML Engineer | DevOps Enthusiast
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/LazyCoderForU" 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-400 hover:text-tech-accent transition"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/brajesh-kumar-5204b8253" 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-400 hover:text-tech-accent transition"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:brajeshguptaa1@gmail.com" 
              className="text-gray-400 hover:text-tech-accent transition"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-400 hover:text-tech-accent transition"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Brajesh Kumar. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Built with <span className="text-tech-accent">❤️</span> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
