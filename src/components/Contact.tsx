
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real project, this would send the form data to a server or API
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 bg-maroon text-cream-DEFAULT">
      <div className="section-container" ref={ref}>
        <div className={`mb-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="section-title text-cream-DEFAULT">Get In Touch</h2>
          <div className="w-20 h-1 bg-cream-DEFAULT mb-8"></div>
          <p className="text-lg max-w-3xl">
            I'm currently available for freelance work and full-time opportunities. 
            If you want to discuss a project or just say hi, my inbox is always open!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className={`${inView ? 'animate-slide-in-left' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            <div className="flex items-start mb-8">
              <div className="bg-cream-DEFAULT text-maroon p-3 rounded-full mr-4">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <a href="mailto:samalpriyanshu966@gmail.com" className="text-cream-dark hover:text-white transition-colors">
                  samalpriyanshu966@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start mb-12">
              <div className="bg-cream-DEFAULT text-maroon p-3 rounded-full mr-4">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <a href="tel:+919755395984" className="text-cream-dark hover:text-white transition-colors">
                  +91 9755395984
                </a>
              </div>
            </div>
            
            <div className="bg-maroon-dark p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <p className="mb-6">
                Follow me on social media to stay updated with my latest projects and tech insights.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/priyanshusamal-/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-cream-DEFAULT text-maroon p-3 rounded-full hover:bg-cream-dark transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a 
                  href="https://x.com/PriyanshuS92042" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-cream-DEFAULT text-maroon p-3 rounded-full hover:bg-cream-dark transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-cream-DEFAULT text-maroon p-3 rounded-full hover:bg-cream-dark transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className={`${inView ? 'animate-slide-in-right' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
            <form onSubmit={handleSubmit} className="bg-maroon-dark p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Send Me A Message</h3>
              
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-maroon border border-cream-dark text-cream-DEFAULT focus:outline-none focus:ring-2 focus:ring-cream-DEFAULT"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-maroon border border-cream-dark text-cream-DEFAULT focus:outline-none focus:ring-2 focus:ring-cream-DEFAULT"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 rounded-md bg-maroon border border-cream-dark text-cream-DEFAULT focus:outline-none focus:ring-2 focus:ring-cream-DEFAULT"
                  required
                />
              </div>
              
              <button type="submit" className="bg-cream-DEFAULT text-maroon px-6 py-3 rounded-md hover:bg-cream-dark transition-colors flex items-center justify-center w-full">
                Send Message
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
