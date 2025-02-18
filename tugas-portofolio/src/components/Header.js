import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="bg-white text-black py-4 fixed w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">Portfolio</h1>
        
        {/* Toggle Button for Responsive Menu */}
        <button
          className="lg:hidden text-black text-2xl ml-auto focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Navigation Menu */}
        <nav
          className={`absolute right-0 top-16 bg-white shadow-lg lg:relative lg:top-0 lg:bg-transparent lg:shadow-none w-2/3 sm:w-1/2 lg:w-auto ${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:space-x-6`}
        >
          <ul className="flex flex-col items-end lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-right p-4 lg:p-0">
            <li>
              {location.pathname === '/' ? (
                <ScrollLink to="hero" smooth={true} duration={500} className="hover:text-teal-400 cursor-pointer">
                  Home
                </ScrollLink>
              ) : (
                <button onClick={() => handleNavigation('hero')} className="hover:text-teal-400 cursor-pointer">
                  Home
                </button>
              )}
            </li>
            <li>
              {location.pathname === '/' ? (
                <ScrollLink to="about" smooth={true} duration={500} className="hover:text-teal-400 cursor-pointer">
                  About
                </ScrollLink>
              ) : (
                <button onClick={() => handleNavigation('about')} className="hover:text-teal-400 cursor-pointer">
                  About
                </button>
              )}
            </li>
            <li>
              {location.pathname === '/' ? (
                <ScrollLink to="skills" smooth={true} duration={500} className="hover:text-teal-400 cursor-pointer">
                  Skills
                </ScrollLink>
              ) : (
                <button onClick={() => handleNavigation('skills')} className="hover:text-teal-400 cursor-pointer">
                  Skills
                </button>
              )}
            </li>
            <li>
              {location.pathname === '/' ? (
                <ScrollLink to="work-experience" smooth={true} duration={500} className="hover:text-teal-400 cursor-pointer">
                  Work Experience
                </ScrollLink>
              ) : (
                <button onClick={() => handleNavigation('work-experience')} className="hover:text-teal-400 cursor-pointer">
                  Work Experience
                </button>
              )}
            </li>
            <li>
              {location.pathname === '/' ? (
                <ScrollLink to="education" smooth={true} duration={500} className="hover:text-teal-400 cursor-pointer">
                  Education
                </ScrollLink>
              ) : (
                <button onClick={() => handleNavigation('education')} className="hover:text-teal-400 cursor-pointer">
                  Education
                </button>
              )}
            </li>
            <li>
              {location.pathname === '/' ? (
                <ScrollLink to="projects" smooth={true} duration={500} className="hover:text-teal-400 cursor-pointer">
                  Projects
                </ScrollLink>
              ) : (
                <button onClick={() => handleNavigation('projects')} className="hover:text-teal-400 cursor-pointer">
                  Projects
                </button>
              )}
            </li>
            <li>
              {location.pathname === '/' ? (
                <ScrollLink to="certificates" smooth={true} duration={500} className="hover:text-teal-400 cursor-pointer">
                  Certificates
                </ScrollLink>
              ) : (
                <button onClick={() => handleNavigation('certificates')} className="hover:text-teal-400 cursor-pointer">
                  Certificates
                </button>
              )}
            </li>
            <li>
              <Link to="/blog" className="hover:text-teal-400">
                Blog
              </Link>
            </li>
            <li>
              {location.pathname === '/' ? (
                <ScrollLink to="contact" smooth={true} duration={500} className="hover:text-teal-400 cursor-pointer">
                  Contact
                </ScrollLink>
              ) : (
                <button onClick={() => handleNavigation('contact')} className="hover:text-teal-400 cursor-pointer">
                  Contact
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
