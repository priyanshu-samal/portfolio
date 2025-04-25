import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="section-container" ref={ref}>
        <div className={`mb-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="section-title">Experience & Education</h2>
          <div className="w-20 h-1 bg-maroon mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-2xl font-bold mb-8 text-maroon ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              Work Experience
            </h3>
            
            <div className={`relative border-l-2 border-maroon pl-8 pb-8 ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
              <div className="absolute w-4 h-4 bg-maroon rounded-full -left-[9px] top-0"></div>
              <div className="mb-1 text-sm text-gray-500">May 2022 - Nov 2022</div>
              <h4 className="text-xl font-bold text-maroon-dark">Backend Intern</h4>
              <h5 className="text-lg font-medium mb-2">CodeAte with ACC</h5>
              <p className="mb-4">Gwalior, MP</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Leveraged Node.js as the primary backend framework to architect and implement robust solutions, resulting in a seamless user experience.
                </li>
                <li>
                  Implemented robust user authentication and authorization mechanisms in a Node.js backend, utilizing bcrypt for secure password hashing, two-factor authentication for enhanced security, and role-based access control to ensure a secure login process and prevent unauthorized access, significantly enhancing system security and user experience.
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className={`text-2xl font-bold mb-8 text-maroon ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              Education
            </h3>
            
            <div className={`relative border-l-2 border-maroon pl-8 pb-8 ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
              <div className="absolute w-4 h-4 bg-maroon rounded-full -left-[9px] top-0"></div>
              <div className="mb-1 text-sm text-gray-500">Apr 2020 - Aug 2024</div>
              <h4 className="text-xl font-bold text-maroon-dark">Bachelor of Technology in Computer Science</h4>
              <h5 className="text-lg font-medium mb-2">Minor in AI and ML</h5>
              <div className="flex items-center gap-2 mt-4">
                <span className="bg-maroon bg-opacity-10 text-maroon px-3 py-1 rounded-full text-sm">
                  Computer Science
                </span>
                <span className="bg-maroon bg-opacity-10 text-maroon px-3 py-1 rounded-full text-sm">
                  AI/ML
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className={`text-2xl font-bold mb-8 text-maroon ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
            Community & Links
          </h3>
          
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
            <a 
              href="https://www.geeksforgeeks.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-cream-light rounded-lg hover:bg-maroon hover:text-white transition-all duration-300 flex items-center justify-center font-medium"
            >
              GeeksforGeeks
            </a>
            <a 
              href="https://leetcode.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-cream-light rounded-lg hover:bg-maroon hover:text-white transition-all duration-300 flex items-center justify-center font-medium"
            >
              Leetcode
            </a>
            <a 
              href="https://www.geeksforgeeks.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-cream-light rounded-lg hover:bg-maroon hover:text-white transition-all duration-300 flex items-center justify-center font-medium"
            >
              GeeksforGeeks
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
