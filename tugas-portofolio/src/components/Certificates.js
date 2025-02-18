import React from "react";
import { motion } from "framer-motion";

const Certificates = () => {
  const certificates = [
    { name: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)", link: "https://www.dicoding.com/certificates/JMZVGO70NZN9" },
    { name: "Belajar Dasar Pemrograman Javascript", link: "https://www.dicoding.com/certificates/6RPNDWLOQZ2M" },
    { name: "Laravel Web Development", link: "https://sanbercode.com/sertifikat/generate/db6171bb-fdaf-491d-9ec9-4ea1c0e7daee" },
    { name: "Management Queue : Manajemen Antrian Pasien berbasis Machine Learning. (Buku Panduan/Petunjuk)", link: "https://e-hakcipta.dgip.go.id/index.php/c?code=OWRkYTkwY2QyMTkyNDgxOTEwY2U0ZmU2MjZlZGQxNmUK" },
    { name: "Belajar Membuat Aplikasi Back-End untuk Pemula", link: "https://www.dicoding.com/certificates/07Z6R0Q02PQR" },
    { name: "Pelatihan Html, Css, Javascript (WEB)", link: "https://s.komdigi.go.id/ProADaftarProgate" },
    { name: "Management Queue : Manajemen Antrian Pasien berbasis Machine Learning. (Program Komputer)", link: "https://e-hakcipta.dgip.go.id/index.php/c?code=M2U2YWVhODQyYWYxZTY0NWMzNGRiODBjYTQ5MGU1N2IK" },
  ];

  return (
    <section id="certificates" className="py-16 bg-gray-100 px-4">
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
        <motion.h2
          className="text-3xl font-bold text-center uppercase mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certificates
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-xl mr-2">•</span>
              {certificate.link ? (
                <a 
                  href={certificate.link} 
                  className="hover:underline hover:text-blue-600"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {certificate.name}
                </a>
              ) : (
                <span className="text-gray-700">{certificate.name}</span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certificates;
