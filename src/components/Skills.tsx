
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "Java", "JavaScript", "TypeScript"],
    color: "maroon"
  },
  {
    title: "Web Development",
    skills: ["Next.js", "MERN Stack"],
    color: "maroon-dark"
  },
  {
    title: "Front-End",
    skills: ["React", "Tailwind CSS", "Shadcn", "Redis"],
    color: "maroon"
  },
  {
    title: "Back-End",
    skills: ["Node.js", "Express.js", "PostgreSQL", "GraphQL"],
    color: "maroon-dark"
  },
  {
    title: "APIs",
    skills: ["Google Maps API", "RESTful Services"],
    color: "maroon"
  },
  {
    title: "AI",
    skills: ["Gemini AI", "Machine Learning"],
    color: "maroon-dark"
  },
  {
    title: "Tools",
    skills: ["Git", "VSCode", "Firebase"],
    color: "maroon"
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
              className={`card border-l-4 border-${category.color} ${inView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <h3 className={`text-${category.color} text-xl font-bold mb-4`}>{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full bg-${category.color} mr-2`}></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 p-6 bg-cream-DEFAULT rounded-lg shadow-lg ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <h3 className="text-2xl font-bold text-maroon mb-4">Additional Competencies</h3>
          <div className="flex flex-wrap gap-3">
            {['UI/UX Design', 'Responsive Design', 'Test-Driven Development', 'API Integration', 'Auth Systems', 'Database Management', 'Deployment', 'Version Control', 'Mentoring'].map((skill) => (
              <span key={skill} className="bg-maroon bg-opacity-10 text-maroon px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
