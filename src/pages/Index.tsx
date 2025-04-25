
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const location = useLocation();

  // Show welcome toast
  useEffect(() => {
    const timer = setTimeout(() => {
      toast({
        title: "Welcome to my portfolio!",
        description: "Feel free to explore my work and get in touch.",
      });
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Handle smooth scrolling when URL has hash
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
