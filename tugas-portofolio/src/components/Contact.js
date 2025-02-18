import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-16 bg-white px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="mb-4 text-lg">Feel free to reach out to me through the following channels:</p>
        <div className="text-lg">
          <p>Email: <a href="mailto:achmad.fatoni129@gmail.com" className="text-teal-500 underline">achmad.fatoni129@gmail.com</a></p>
          <p>Phone: <a href="tel:085933724736" className="text-teal-500 underline">0859-33972-4736</a></p>
        </div>
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://github.com/fatoni-ach"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/achmad-fatoni-3259221b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-400"
          >
            Linkedin
          </a>
          <a
            href="https://www.instagram.com/fatoni_ach/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-400"
          >
            Instagram
          </a>
          <a
            href="https://medium.com/@fatoni_ach"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-400"
          >
            Medium
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
