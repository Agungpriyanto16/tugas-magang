import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    { name: 'Sister', duration: 'February 2022 – April 2022', description: 'Role as Backend Developer', link: 'https://gitlab.com/Agungpriyanto16/sanbarcode-reactjs-batch-59/-/tree/main/final-project?ref_type=heads' },
    { name: 'Conecworld App', duration: 'April 2021 – January 2022', description: 'Role as Mobile App Developer', link: 'https://gitlab.com/Agungpriyanto16/sanbarcode-reactjs-batch-59/-/tree/main/final-project?ref_type=heads' },
    { name: 'Website KKP', duration: 'September 2021 – November 2021', description: 'Role as Fullstack Developer which focus on CMS', link: 'https://gitlab.com/Agungpriyanto16/sanbarcode-reactjs-batch-59/-/tree/main/final-project?ref_type=heads' },
    { name: 'Logic', duration: 'May 2021 – May 2021', description: 'Role as Fullstack Developer', link: 'https://gitlab.com/Agungpriyanto16/sanbarcode-reactjs-batch-59/-/tree/main/final-project?ref_type=heads' },
  ];

  return (
    <section id="projects" className="py-16 bg-white px-4">
      <motion.div
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p>{project.duration}</p>
              <p>{project.description}</p>
              <a href={project.link} className="text-teal-500 underline mt-2 block">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
