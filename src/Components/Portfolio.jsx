// Portfolio.jsx

import { useEffect, useState } from "react";
import ProfilePic from '../assets/Amardeep photo.jpg'
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiMysql, SiTailwindcss, SiSpringboot } from "react-icons/si";
import Projects from './Projects';
import Certifications from './Certifications';
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Contact from './Contact';

export default function Portfolio() {

  const [activeSection, setActiveSection] = useState("home");

  const skills = [
    { name: "Java", icon: <FaJava className="text-orange-500" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Javascript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Springboot", icon: <SiSpringboot className="text-green-500" /> },
    { name: "Mysql", icon: <SiMysql className="text-blue-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },

  ];

  // const [selectedProject, setSelectedProject] = useState(null);



  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "certifications", "contact"];
      const scrollPosition = window.scrollY + 150;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-black from-slate-950 via-blue-950 to-slate-950 text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur bg-black/40 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-10 px-0 py-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-200 to-cyan-400">Amardeep</h1>
          {/* <div className="space-x-10 text-lg">
            <a href="#home" className="inline-block hover:text-blue-300 hover:scale-110 transition-transform duration-400">Home</a>
            <a href="#about" className="inline-block hover:text-blue-300 hover:scale-110 transition-transform duration-400">About</a>
            <a href="#skills" className="inline-block hover:text-blue-300 hover:scale-110 transition-transform duration-400">Skills</a>
            <a href="#projects" className="inline-block hover:text-blue-300 hover:scale-110 transition-transform duration-400">Projects</a>
            <a href="#contact" className="inline-block hover:text-blue-300 hover:scale-110 transition-transform duration-400">Contact</a>
          </div> */}

          <div className="space-x-10 text-lg">
            {
              ['home', 'about', 'skills', 'projects', 'certifications', 'contact'].map((section) => (
                <a key={section} href={`#${section}`} className={`inline-block font-bold text-2xl hover:text-blue-300 hover:scale-110 transition-transform duration-400 ${activeSection === section ? 'border-b-2 border-blue-300' : ''}`}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))
            }
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center">
        <div className="text-center px-6 animate-fadeIn">
          <img src={ProfilePic} alt="Profile Photo" className="w-60 h-75 rounded-full mx-auto mb-6  shadow-lg hover:scale-105 transition-transform duration-300" />
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className=" bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-200 to-blue-300">Amardeep kumar sahu</span>
          </h2>
          <p className="text-lg md:text-3xl text-blue-200 mb-6">
            Java | React | Full Stack Developer
          </p>
          <p className="text-lg text-white-100 leading-relaxed">
            Strong fundamentals on Java(Core + J2EE), SQL, React.js, and working with framwork like
          </p>
          <p className="text-lg text-white-100 leading-relaxed mb-6">
            Spring Boot , Hibernate . Eager to apply my problem-solving and coding skills in a collaborative development environment.
          </p>

          <a
            href="#projects"
            className="inline-block text-xl font-semibold bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-700 px-10 py-3 rounded-lg hover:from-cyan-700 hover:via-blue-600 hover:to-blue-700 transition shadow-lg shadow-blue-600/30 hover:scale-105 transition-all duration-400"
          >
            View My Work
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-6 text-blue-400">About Me</h2>
        <p className="text-white-100 leading-relaxed text-lg mb-5">
          I am a passionate software developer from India, focused on building clean,
          modern and scalable web applications using Java and React. I love good UI
          design and writing clean code.
        </p>
        <p className="text-white leading-relaxed text-lg mb-5">
          As a fresher, I am eager to learn, grow, and contribute to real-world projects while continuously improving my technical and problem-solving skills.
        </p>
        <a href="https://drive.google.com/file/d/1e7tyqLzKZMuhSSOSv4udIcv70h9CAPtN/view?usp=drive_link" target="_blank" rel="noopener norefferer"
          className="inline-block px-10 py-3 rounded-lg
        bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500
        text-white text-xl font-semibold shadow-lg shadow-blue-600/30 
        hover:from-cyan-500 hover:via-blue-700 hover:to-blue-600
        hover:scale-105 transition-all duration-400">
          My Resume
        </a>
      </section>

      {/* Skills */}
      {/* <section id="skills" className=" py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-blue-400">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Java", "React", "Javascript", "MYSQL", "Tailwind", "Spring Boot", "Git", "HTML", "CSS"].map(
              (skill) => (
                <div
                  key={skill}
                  className="p-6 text-lg text-center font-medium leading-relaxed rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 text-white shadow-md hover:scale-110 transition-full duration-300"
                >
                  {skill}
                </div>
              )
            )}
          </div>
        </div>
      </section> */}
      <section id="skills" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-blue-400 text-center">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {
              skills.map((skill) => (
                <div key={skill.name}
                  className="flex flex-row items-center justify-center gap-4 px-6 py-4 rounded-xl
                            bg-gradient-to-r from-slate-700 via-slate-750 to-slate-800
                            
                            hover:from-slate-800 hover:via-slate-750 hover:to-slate-700
                             shadow-md hover:scale-105 transition-all duration-400">
                  <span className="text-5xl">{skill.icon}</span>
                  <span className="text-2xl font-semibold mt-2">{skill.name}</span>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Projects */}
      {/* <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <h3 className="text-4xl font-bold mb-12 text-blue-400 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {["Bookstore Management", "Retail Billing System"].map((project) => (
            <div
              key={project}
              className="p-6 rounded-2xl bg-slate-900 border border-blue-800 shadow-lg hover:-translate-y-2 transition-full duration-400"
            >
              <h3 className="text-2xl font-semibold mb-2 text-blue-300">
                {project}
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                Full stack project with clean UI, backend logic and database integration.
              </p>
            </div>
          ))}
        </div>
      </section> */}

      <Projects />

      <Certifications />

      {/* Contact */}
      {/* <section id="contact" className="bg-blue-950/40 py-24">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6 text-blue-400">Contact Me</h3>
          <p className="text-blue-100 mb-6">Let's build something amazing together.</p>
          <a
            href="mailto:yourmail@example.com"
            className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition shadow-lg shadow-blue-600/30"
          >
            Say Hello
          </a>
        </div>
      </section> */}
      {/* Contact */}
      {/* <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 to-blue-950"> */}




      
{/* Contact */}

<Contact />





      <footer className="text-center py-6 text-blue-300 text-sm">
        © 2026 Rock Amar. All rights reserved.
      </footer>
    </div>
  );
}