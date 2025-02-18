import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost'; // Komponen baru untuk halaman blog post
import Education from './components/Education';
import Certificates from './components/Certificates';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Route untuk halaman utama */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <WorkExperience />
                <Education/>
                <Projects />
                <Certificates/>
                <Contact />
              </>
            }
          />
          {/* Route untuk halaman Blog */}
          <Route path="/blog" element={<Blog />} />
          {/* Route untuk halaman post blog */}
          <Route path="/blog/:postId" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
