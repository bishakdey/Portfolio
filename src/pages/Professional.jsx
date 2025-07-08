import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const experiences = [
  { id: 1, title: 'Software Engineer at LTIMindtree', content: 'As a Full Stack Developer, I contributed to the development of multiple modules and features, leveraging a diverse technology stack including VueJS, Springboot, ArangoDB, Flask, Langchain, Mixtral, MySQL, and Docker. I took ownership of a complete module within our AI-Native platforms, driving its development from conception to deployment. Additionally, I mentored and guided junior engineers in various technologies, fostering their growth and contributing to team expertise.'},
  { id: 2, title: 'Internship at Mindtree', content: 'Gained hands-on experience in full-stack web development at Mindtree, utilizing the MERN (MongoDB, Express.js, React.js, Node.js) stack. Successfully designed and developed a comprehensive travel application as part of the training and internship program. This project honed skills in database management, server-side logic, front-end development, and the integration of these technologies to create a complete user-centric application.' },
  { id: 3, title: 'Sapthagiri NPS University', content: 'Graduated in Information Science and Engineering (IT) where I was also part of Cultural Activities Team. Participated in Hackathons and Photography competitions where I won in multiple college fests.' },
  //{ id: 4, title: 'Senior Developer at StartupX', content: 'Architected a modern microservices platform.' },
  
];

const keywords = ['Full Stack Developer', 'MERN', 'VueJS', 'Springboot', 'ArangoDB', 'Flask', 'Langchain', 'Mixtral', 'MySQL', 'Docker', 'MongoDB', 'Express.js', 'React.js', 'Node.js'];


const Professional = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const scrollTop = containerRef.current.scrollTop;
    const sectionHeight = containerRef.current.scrollHeight / experiences.length;
    const index = Math.round(scrollTop / sectionHeight);
    setActiveIndex(index);
  };

  const scrollToSection = (index) => {
    const sectionHeight = containerRef.current.scrollHeight / experiences.length;
    containerRef.current.scrollTo({ top: sectionHeight * index, behavior: 'smooth' });
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const highlightKeywords = (text, keywords) => {
    const parts = text.split(new RegExp(`(${keywords.join('|')})`, 'gi'));
    return parts.map((part, index) =>
      keywords.includes(part) ? <strong key={index}>{part}</strong> : part
    );
  };

  
  return (
    <main className="relative bg-gradient-to-b from-[#0f3266] to-[#00000FFA] text-white ">
        <video
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        src='videos/hero-3.mp4' typeof='video/mp4'
      >
        
        Your browser does not support the video tag.
      </video>
    
    <div className='relative z-10'>
      <Navbar />
      <div className='bg-transparent flex flex-col items-center w-full h-screen'>
        {/* Timeline dots and connecting line */}
        <div className="relative w-full flex justify-center items-center py-6 top-20">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 h-1 bg-gray-300 w-1/2 z-0"></div>
          <div className="flex justify-between w-1/2 z-10">
            {experiences.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => scrollToSection(index)}
                className={`h-5 w-5 rounded-full transition-all duration-300 border-2 ${
                  activeIndex === index ? 'bg-blue-600 border-blue-600 scale-125' : 'bg-white border-gray-400'
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Scrollable sections */}
        <div
          ref={containerRef}
          className="overflow-y-scroll h-full w-full scroll-smooth snap-y snap-mandatory"
        >
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="snap-start h-[100vh] flex flex-col justify-center items-center px-8 border-gray-200"
            >
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-6">{exp.title}</h2>
              <p className="text-sm sm:text-md md:text-lg text-gray-300 text-center max-w-2xl leading-relaxed font-robert-regular">
              {highlightKeywords(exp.content, keywords)}
              </p>  
            </div>
          ))}
        </div>
      </div>
      <Footer />
      </div>
      
    </main>
  );
};

export default Professional;
