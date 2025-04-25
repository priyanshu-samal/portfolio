import { useInView } from 'react-intersection-observer';
import { Code, FileText, User } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 bg-cream-DEFAULT">
      <div className="section-container" ref={ref}>
        <div className={`mb-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="section-title">About Me</h2>
          <div className="w-20 h-1 bg-maroon mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`${inView ? 'animate-slide-in-left' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            <div className="relative w-full h-auto aspect-[3/4] mb-4 md:mb-0 p-1">
              <div className="w-full h-full bg-maroon rounded-lg absolute -top-4 -right-4 z-0"></div>
              <div className="w-full h-full relative z-10 rounded-lg">
                <img 
                  src="/images/profile.png"
                  alt="Priyanshu Samal"
                  className="w-full h-full object-contain rounded-lg shadow-xl bg-cream-light"
                />
              </div>
            </div>
          </div>
          
          <div className={`${inView ? 'animate-slide-in-right' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
            <p className="mb-6 text-lg">
              I'm a skilled full-stack developer with experience in AI-powered applications and backend systems. 
              Proficient in React, Next.js, and Node.js, I excel at creating user-centered designs and improving customer experiences.
            </p>
            <p className="mb-6 text-lg">
              I collaborate effectively with cross-functional teams to build scalable solutions, focusing on user onboarding and compliance.
              Passionate about inclusive design, I bring a data-driven approach to enhance product workflows and mentor peers in achieving high standards.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center p-4 rounded-lg bg-cream-dark text-maroon hover:bg-maroon hover:text-white transition-colors duration-300">
                <User className="mb-2" size={28} />
                <h3 className="font-bold text-lg">Full-Stack Dev</h3>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-cream-dark text-maroon hover:bg-maroon hover:text-white transition-colors duration-300">
                <Code className="mb-2" size={28} />
                <h3 className="font-bold text-lg">AI Enthusiast</h3>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-cream-dark text-maroon hover:bg-maroon hover:text-white transition-colors duration-300">
                <FileText className="mb-2" size={28} />
                <h3 className="font-bold text-lg">UI/UX Designer</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
