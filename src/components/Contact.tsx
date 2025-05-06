
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormState({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-tech-accent" />,
      title: "Email",
      value: "brajeshguptaa1@gmail.com",
      link: "mailto:brajeshguptaa1@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-tech-accent" />,
      title: "Phone",
      value: "+91 7979911811",
      link: "tel:+917979911811",
    },
    {
      icon: <Github className="h-5 w-5 text-tech-accent" />,
      title: "GitHub",
      value: "@LazyCoderForU",
      link: "https://github.com/LazyCoderForU",
    },
    {
      icon: <Linkedin className="h-5 w-5 text-tech-accent" />,
      title: "LinkedIn",
      value: "brajesh-kumar",
      link: "https://www.linkedin.com/in/brajesh-kumar-5204b8253",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-tech-darkBlue to-tech-lightBlue relative">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-2 section-heading">Get In Touch</h2>
          <p className="text-gray-400 mt-4 mb-8 max-w-2xl">
            I'm always interested in new opportunities, collaborations, and discussing anything related to AI, ML, or DevOps. Feel free to reach out!
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <AnimatedSection delay="delay-100">
            <div className="bg-tech-lightBlue/30 backdrop-blur-sm rounded-lg p-8 border border-tech-accent/20 h-full">
              <h3 className="text-xl font-semibold text-white mb-6">Send Me A Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="bg-tech-darkBlue/50 border-tech-accent/30 focus-visible:ring-tech-accent text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    required
                    className="bg-tech-darkBlue/50 border-tech-accent/30 focus-visible:ring-tech-accent text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Your message"
                    required
                    rows={5}
                    className="bg-tech-darkBlue/50 border-tech-accent/30 focus-visible:ring-tech-accent text-white"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="bg-tech-accent text-tech-darkBlue hover:bg-tech-accent/90 w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </AnimatedSection>

          <AnimatedSection delay="delay-200">
            <div className="bg-tech-lightBlue/30 backdrop-blur-sm rounded-lg p-8 border border-tech-accent/20 h-full">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-tech-darkBlue/50">
                      {info.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-gray-300 text-sm">{info.title}</h4>
                      <a 
                        href={info.link}
                        className="text-white hover:text-tech-accent transition"
                        target={info.title === "GitHub" || info.title === "LinkedIn" ? "_blank" : undefined}
                        rel={info.title === "GitHub" || info.title === "LinkedIn" ? "noopener noreferrer" : undefined}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}

                <div className="pt-6 mt-6 border-t border-tech-accent/20">
                  <h4 className="text-white font-medium mb-4">Current Location</h4>
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-tech-darkBlue/50">
                      <MapPin className="h-5 w-5 text-tech-accent" />
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-300">Lovely Professional University</p>
                      <p className="text-gray-300">Phagwara, Punjab, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-tech-accent/20">
                <h4 className="text-white font-medium mb-4">My Resume</h4>
                <Button className="bg-tech-accent/90 text-tech-darkBlue hover:bg-tech-accent w-full">
                  <a 
                    href="https://drive.google.com/file/d/1rKyOCgiXJRh9ey34Y6SbC-JH2b5Z5OCx/view?usp=sharing" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    Download Resume
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 12.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
