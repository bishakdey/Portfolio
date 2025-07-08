import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import Footer from '../components/Footer';


const sampleProjects = [
    {
      name: "AI Storyboard Generator (COMING SOON)",
      image: "img/entrance.webp", 
      description: "A tool that generates storyboards using AI for filmmakers. (In progress)",
      fullDescription:
        "This project utilizes AI to generate visual storyboards from text descriptions. Built with Next.js, OpenAI API, and Tailwind CSS.",
      github: "https://github.com/yourusername/storyboard-ai",
      live: "https://storyboard-ai.vercel.app",
      tags: ["Next.js", "OpenAI", "Tailwind CSS", "Framer Motion"],
    },
    {
      name: "Portfolio Site",
      image: "img/portfolio.png", 
      description: "My personal portfolio with a special emphasis on design built with React and Tailwind.",
      fullDescription:
        "A developer portfolio showcasing projects, blogs, and design skills. Includes video transitions, animations, and fully responsive layout. This is primarily built with React, Tailwind CSS. Additionally, the site features transions and animations using GSAP and Framer Motion.",
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.com",
      tags: ["React", "Tailwind", "GSAP", "Framer Motion"],
    },
    {
      name: "Travel-X",
      image: "img/travel-x.png", 
      description: "A travel application built with the MERN stack.",
      fullDescription:
        "This is a travel application(Booking.com clone) built with the MERN stack. It allows users to search for destinations, view travel packages, and book trips. The application features a user-friendly interface and integrates with various APIs using ExpressJS for Backend.",
      github: "https://github.com/bishakdey/Travel-X",
      live: "https://yourportfolio.com",
      tags: ["React", "CSS", "Express", "MongoDB"],
    },
    
  ];

  const ProjectCard = ({ project, onClick }) => (
    <motion.div
      whileHover={{ scale: 1.12, rotate: 2 }}
      whileTap={{ scale: 0.98 }}
      className="relative group w-full sm:w-[380px] h-[280px] rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300"
      onClick={onClick}
      style={{
        backgroundImage: `url(${project.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300 p-4 flex flex-col justify-between">
        <div className="flex justify-end gap-2">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300"
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub />
          </a>
        </div>
        <div>
          <h3 className="text-white text-xl font-bold">{project.name}</h3>
          <p className="text-gray-300 text-sm line-clamp-2 font-robert-regular">{project.description}</p>
        </div>
      </div>
    </motion.div>
  );  


  const ProjectDialog = ({ project, isOpen, onClose }) => (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black bg-opacity-60" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="max-w-xl w-full bg-white rounded-xl overflow-hidden shadow-lg">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <Dialog.Title className="text-2xl font-bold">{project.name}</Dialog.Title>
            <p className="text-gray-700 mt-2 font-robert-regular">{project.fullDescription}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex justify-end gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
              >
                Live Site
              </a>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
  

const Projects = () => {

    const [selectedProject, setSelectedProject] = useState(null);
  return (
    <main className="bg-gradient-to-b from-[#0f3266] to-[#00000FFA] text-white">

        <Navbar />

        <section className="py-20 bg-transparent min-h-screen">
      <div className="container mx-auto px-6 text-center py-10">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {sampleProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        {selectedProject && (
          <ProjectDialog
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
    <Footer />
    </main>
  )
}

export default Projects