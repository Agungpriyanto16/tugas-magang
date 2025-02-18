import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      id="about"
      className="py-16 bg-gray-100 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <img
            src="/Images/Achmad Fatoni.jpg"
            alt="Profile"
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Right Section - Content */}
        <div className="w-full lg:w-2/3 lg:pl-8">
          <h2 className="text-3xl font-bold mb-4">Software Engineer</h2>
          <p className="text-gray-700 mb-6">
          Hi..!! My name is Achmad Fatoni. I have a passion in web development and have
experience as a mobile app developer as well. I have more than 2 years of work
experience in the field of web development and have used Amazon Web Services
(AWS). I am a fast learner, motivated to progress, and have good time management.
it's a pleasure to be able to contribute well at work. you can see my personal
project at https://github.com/fatoni-ach.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 mb-6">
            <p><strong>Birthday:</strong> April 6th, 1998</p>
            <p><strong>Status:</strong> Single</p>
            <p><strong>Country:</strong> Indonesia</p>
            <p><strong>Phone:</strong> 083122988893</p>
            <p><strong>Email:</strong> <a href="mailto:achmad.fatoni129@gmail.com" className="text-teal-500 underline"> achmad.fatoni129@gmail.com</a></p>
            <p><strong>Address:</strong> Jl Tambak Mayor Baru Gg 2 no 104, Asemrowo,
            Surabaya, Indonesia</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
