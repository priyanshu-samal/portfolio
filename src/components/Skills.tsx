import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "Java", "JavaScript", "TypeScript"],
    color: "maroon",
    borderColor: "border-maroon",
    textColor: "text-maroon",
    dotColor: "bg-maroon"
  },
  {
    title: "Web Development",
    skills: ["Next.js", "MERN Stack"],
    color: "maroon-dark",
    borderColor: "border-maroon-dark",
    textColor: "text-maroon-dark",
    dotColor: "bg-maroon-dark"
  },
  {
    title: "Front-End",
    skills: ["React", "Tailwind CSS", "Shadcn", "Redis"],
    color: "maroon",
    borderColor: "border-maroon",
    textColor: "text-maroon",
    dotColor: "bg-maroon"
  },
  {
    title: "Back-End",
    skills: ["Node.js", "Express.js", "PostgreSQL", "GraphQL"],
    color: "maroon-dark",
    borderColor: "border-maroon-dark",
    textColor: "text-maroon-dark",
    dotColor: "bg-maroon-dark"
  },
  {
    title: "APIs",
    skills: ["Google Maps API", "RESTful Services"],
    color: "maroon",
    borderColor: "border-maroon",
    textColor: "text-maroon",
    dotColor: "bg-maroon"
  },
  {
    title: "AI",
    skills: ["Gemini AI", "Machine Learning"],
    color: "maroon-dark",
    borderColor: "border-maroon-dark",
    textColor: "text-maroon-dark",
    dotColor: "bg-maroon-dark"
  },
  {
    title: "Tools",
    skills: ["Git", "VSCode", "Firebase"],
    color: "maroon",
    borderColor: "border-maroon",
    textColor: "text-maroon",
    dotColor: "bg-maroon"
  }
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 bg-maroon bg-opacity-5">
      <div className="section-container" ref={ref}>
        <div className={`mb-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="section-title">Skills</h2>
          <div className="w-20 h-1 bg-maroon mb-8"></div>
          <p className="text-lg max-w-3xl">
            My technical toolkit spans across the full stack, enabling me to build comprehensive and scalable solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className={`card ${category.borderColor} group relative transition-all duration-500 ease-out hover:scale-110 hover:shadow-2xl hover:translate-y-[-10px] hover:z-10 hover:bg-maroon hover:text-white ${inView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ 
                animationDelay: `${0.2 * (index + 1)}s`,
                transitionDelay: '0.1s',
                transform: 'perspective(1000px)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-maroon/0 to-maroon/0 transition-all duration-500 group-hover:from-maroon/20 group-hover:to-maroon/40 rounded-lg"></div>
              <div className="relative z-10 p-6">
                <h3 className={`${category.textColor} text-xl font-bold mb-4 transition-colors duration-500 group-hover:text-white`}>{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center transition-colors duration-500 group-hover:text-white">
                      <div className={`w-2 h-2 rounded-full ${category.dotColor} mr-2 transition-colors duration-500 group-hover:bg-white`}></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className={`mt-16 p-6 bg-cream-light rounded-lg shadow-lg group relative transition-all duration-500 ease-out hover:scale-110 hover:shadow-2xl hover:translate-y-[-10px] hover:z-10 hover:bg-maroon hover:text-white ${inView ? 'animate-fade-in' : 'opacity-0'}`} 
          style={{ 
            animationDelay: '1s', 
            transitionDelay: '0.1s',
            transform: 'perspective(1000px)',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-maroon/0 to-maroon/0 transition-all duration-500 group-hover:from-maroon/20 group-hover:to-maroon/40 rounded-lg"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-maroon mb-4 transition-colors duration-500 group-hover:text-white">Additional Competencies</h3>
            <div className="flex flex-wrap gap-3">
              {['UI/UX Design', 'Responsive Design', 'Test-Driven Development', 'API Integration', 'Auth Systems', 'Database Management', 'Deployment', 'Version Control', 'Mentoring'].map((skill) => (
                <span 
                  key={skill} 
                  className="bg-maroon bg-opacity-10 text-maroon px-3 py-1 rounded-full transition-all duration-500 ease-out hover:bg-maroon hover:text-white hover:scale-110 hover:shadow-lg hover:translate-y-[-5px] hover:z-20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
