
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "Destiny",
    description: "AI-powered application for travel planning and management that helps create personalized travel plans.",
    image: "/lovable-uploads/af21c388-33cd-4406-ae9b-ae44668350de.png",
    technologies: ["React", "Vite", "Tailwind CSS", "Firebase", "Google Maps API"],
    highlights: [
      "Used Vite and React for a dynamic user interface",
      "Implemented Tailwind CSS for responsive styling",
      "Integrated Firebase for backend services and authentication",
      "Utilized Google Maps API for destination selection and visualization",
      "Reduced planning workload by 70%"
    ]
  },
  {
    id: 2,
    title: "WordSmith",
    description: "AI-powered SaaS tool that simplifies content creation for threads, Instagram, blogs, and LinkedIn.",
    image: "/lovable-uploads/3a201367-da28-4871-918d-446730a17cc5.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Gemini AI", "PostgreSQL", "Drizzle ORM"],
    highlights: [
      "Built with Next.js and React for optimal performance",
      "Designed with Tailwind CSS for a clean, modern interface",
      "Integrated Gemini AI for generating creative content ideas",
      "Implemented secure authentication via Clerk",
      "Managed data efficiently with PostgreSQL and Drizzle ORM",
      "Added Razorpay integration for payments",
      "Reduced content creation effort by 50%"
    ]
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 bg-cream-dark">
      <div className="section-container" ref={ref}>
        <div className={`mb-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="section-title">Projects</h2>
          <div className="w-20 h-1 bg-maroon mb-8"></div>
          <p className="text-lg max-w-3xl">
            Explore some of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3">
            <div className="sticky top-24">
              {projectsData.map((project, index) => (
                <div 
                  key={project.id}
                  className={`p-4 mb-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeProject === index 
                      ? 'bg-maroon text-cream-DEFAULT shadow-lg' 
                      : 'bg-cream-DEFAULT hover:bg-maroon hover:text-cream-DEFAULT'
                  } ${inView ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.2 * (index + 1)}s` }}
                  onClick={() => setActiveProject(index)}
                >
                  <h3 className="font-bold text-xl">{project.title}</h3>
                  <p className="mt-2 text-sm">
                    {project.description.substring(0, 100)}...
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-2/3">
            <div className={`bg-cream-DEFAULT rounded-lg shadow-xl overflow-hidden ${inView ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <div className="relative">
                <img 
                  src={projectsData[activeProject].image} 
                  alt={projectsData[activeProject].title} 
                  className="w-full h-72 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold">{projectsData[activeProject].title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="mb-6">{projectsData[activeProject].description}</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-3 text-maroon">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {projectsData[activeProject].technologies.map((tech) => (
                      <span key={tech} className="bg-maroon text-cream-DEFAULT px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3 text-maroon">Key Highlights</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {projectsData[activeProject].highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <button className="btn-primary">
                    View Project <ExternalLink size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
