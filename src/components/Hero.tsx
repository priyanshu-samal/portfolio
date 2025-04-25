
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { ArrowDown, Download, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, rgba(232, 216, 196, 0.95) 0%, rgba(199, 183, 163, 0.95) 100%)`,
      }}
    >
      <div className="section-container flex flex-col justify-center z-10">
        <div className="max-w-3xl">
          <p className={`text-maroon font-medium mb-2 text-lg ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            Hello, I'm
          </p>
          <h1 className={`text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-maroon-dark ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
            Priyanshu Samal
          </h1>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-medium text-maroon mb-6 ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
            Full-Stack Developer
          </h2>
          <p className={`text-lg max-w-2xl mb-8 ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
            Passionate about creating AI-powered applications and backend systems with React, Next.js, and Node.js. 
            Focused on user-centered designs and scalable solutions.
          </p>
          <div className={`flex flex-wrap gap-4 ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '1s'}}>
            <a 
              href="/resume.pdf" 
              className="btn-primary"
              download="Priyanshu_Samal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2" size={18} />
              Download Resume
            </a>
            <Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              duration={800} 
              className="btn-secondary"
            >
              Contact Me
            </Link>
          </div>
          
          <div className={`mt-10 flex space-x-4 ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '1.2s'}}>
            <a 
              href="https://www.linkedin.com/in/priyanshusamal-/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-maroon flex items-center justify-center text-white hover:bg-maroon-dark transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://x.com/PriyanshuS92042" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-maroon flex items-center justify-center text-white hover:bg-maroon-dark transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="about" spy={true} smooth={true} duration={800} className="cursor-pointer">
          <ArrowDown className="text-maroon" size={24} />
        </Link>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-maroon rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-maroon-dark rounded-full filter blur-3xl opacity-10" />
    </section>
  );
};

export default Hero;
