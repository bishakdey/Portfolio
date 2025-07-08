import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Navbar from '../components/Navbar'

const skills = [
  { name: "JavaScript", image: "/icons/javascript.svg" },
  { name: "React", image: "/icons/react.svg" },
  { name: "Tailwind", image: "/icons/tailwind.svg" },
  { name: "Node.js", image: "/icons/nodejs.svg" },
  { name: "Figma", image: "/icons/figma.svg" },
  { name: "Python", image: "/icons/python.svg" },
  { name: "ArangoDB", image: "/icons/arangodb.svg" },
  { name: "Vue JS", image: "/icons/vuejs.svg" },
  { name: "Docker", image: "/icons/docker.svg" },
  { name: "Mongo DB", image: "/icons/mongodb.svg" },
  { name: "Adobe Lightroom", image: "/icons/adobe-lightroom.svg" },
  { name: "SpringBoot", image: "/icons/spring.svg" },
  { name: "Flask", image: "/icons/flask.svg" },
  { name: "Kubernetes", image: "/icons/kubernetes.svg" },
 
 
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <main className="bg-transparent text-white py-10">
    <section className="py-16 px-6 bg-transparent text-white">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-center items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:shadow-[0px_4px_20px_rgba(0,255,255,0.4)] transition-shadow flex flex-col items-center justify-center"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-12 h-12 mb-3 object-contain"
              />
              <p className="text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
     </main>
  )
}

export default Skills