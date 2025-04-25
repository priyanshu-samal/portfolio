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
    <section id="contact" className="py-24 bg-maroon text-white">
      <div className="section-container" ref={ref}>
        <div className={`mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="section-title text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-white mb-8"></div>
          <p className="text-lg max-w-3xl text-white/90">
            I'm currently available for freelance work and full-time opportunities. 
            If you want to discuss a project or just say hi, my inbox is always open!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className={`${inView ? 'animate-slide-in-left' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            <div className="flex items-start mb-8">
              <div className="bg-white text-maroon p-3 rounded-full mr-4">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
                <a href="mailto:samalpriyanshu966@gmail.com" className="contact-info">
                  samalpriyanshu966@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start mb-12">
              <div className="bg-white text-maroon p-3 rounded-full mr-4">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Phone</h3>
                <a href="tel:+919755395984" className="contact-info">
                  +91 9755395984
                </a>
              </div>
            </div>
            
            <div className="contact-card">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <p className="mb-6 text-white/90">
                Follow me on social media to stay updated with my latest projects and tech insights.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/priyanshusamal-/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-maroon p-3 rounded-full hover:bg-cream-light transition-colors hover:animate-pop-out"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a 
                  href="https://x.com/PriyanshuS92042" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-maroon p-3 rounded-full hover:bg-cream-light transition-colors hover:animate-pop-out"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className={`${inView ? 'animate-slide-in-right' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
            <form onSubmit={handleSubmit} className="contact-card">
              <div className="mb-6">
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                  placeholder="Your email"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-white text-maroon px-6 py-3 rounded-md hover:bg-cream-light transition-colors w-full flex items-center justify-center font-medium hover:animate-pop-out"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
