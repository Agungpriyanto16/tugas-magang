import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  const education = [
    { name: 'Bachelor ( Stratum - 1 ) / Informatics Engineering', duration: '2016 – 2020', description: 'Universitas 17 Agustus 1945', },
    { name: 'TKJ (Teknik Komputer Jaringan)', duration: '2012 – 2015', description: 'SMKN 2 Bangkalan' },
  ];

  return (
    <section id="education" className="py-16 bg-gray-100 px-4">
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold">{edu.name}</h3>
              <p>{edu.duration}</p>
              <p>{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Education;
