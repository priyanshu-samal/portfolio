
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-maroon-dark text-cream-DEFAULT py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer">
              <h2 className="text-3xl font-bold">Priyanshu<span className="text-cream-dark">.dev</span></h2>
            </Link>
            <p className="mt-2 text-cream-dark">Full-Stack Developer</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-cream-dark transition-colors cursor-pointer">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-cream-dark transition-colors cursor-pointer">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="skills" spy={true} smooth={true} duration={500} className="hover:text-cream-dark transition-colors cursor-pointer">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="projects" spy={true} smooth={true} duration={500} className="hover:text-cream-dark transition-colors cursor-pointer">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-3">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:samalpriyanshu966@gmail.com" className="hover:text-cream-dark transition-colors">
                    samalpriyanshu966@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+919755395984" className="hover:text-cream-dark transition-colors">
                    +91 9755395984
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/priyanshusamal-/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cream-dark transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://x.com/PriyanshuS92042" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cream-dark transition-colors"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cream-DEFAULT border-opacity-20 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p>&copy; {currentYear} Priyanshu Samal. All rights reserved.</p>
          
          <div className="mt-4 sm:mt-0">
            <a 
              href="/resume.pdf" 
              className="text-cream-dark hover:text-cream-DEFAULT transition-colors"
              download="Priyanshu_Samal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
