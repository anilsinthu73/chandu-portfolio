'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import data from '@/lib/data.json';
import { motion } from 'framer-motion';
import { ArrowRight, GithubIcon, LinkedinIcon, Mail, Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
// const { education, projects, certifications } = data;
const { education, projects, certifications } = data;
const MotionImg = motion.img;
const skills = [
  "Java",
  "Python",
  "JavaScript", 
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "SQL",
  "MongoDB",
  "Git",
  "HTML/CSS",
  "Tailwind CSS",
  "C Programming",
  "Data Structures & Algorithms",
  "Machine Learning",
  "Power BI",
  "Blockchain"
];


// Animation variants with improved mobile responsiveness
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.4, ease: "easeOut" },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { delay: i * 0.15, duration: 0.4 },
  }),
};

const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.4, ease: "easeOut" },
  }),
};



const NavItem = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClick?.();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md 
        hover:bg-white/10 active:bg-white/20 focus:outline-none focus:ring-2 
        focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-slate-900
        text-sm sm:text-base"
    >
      {children}
    </a>
  );
};

export default function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white">
      {/* Enhanced Navigation Bar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-lg sm:text-xl font-bold"
            >
              <a href="#about" className="hover:text-purple-300 transition-colors">Chandu</a>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="md:hidden p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex gap-4 lg:gap-6"
            >
              <NavItem href="#about">About</NavItem>
              <NavItem href="#education">Education</NavItem>
              <NavItem href="#skills">Skills</NavItem>
              <NavItem href="#projects">Projects</NavItem>
              <NavItem href="#contact">Contact</NavItem>
            </motion.div>
          </div>

          {/* Enhanced Mobile Navigation Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isMenuOpen ? 1 : 0,
              height: isMenuOpen ? 'auto' : 0
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black/90 backdrop-blur-lg rounded-lg mt-2"
          >
            <div className="flex flex-col space-y-1 p-2">
              <NavItem href="#about" onClick={() => setIsMenuOpen(false)}>About</NavItem>
              <NavItem href="#education" onClick={() => setIsMenuOpen(false)}>Education</NavItem>
              <NavItem href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</NavItem>
              <NavItem href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</NavItem>
              <NavItem href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavItem>
            </div>
          </motion.div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16" id='about'>
        {/* Enhanced Hero Section */}
        <motion.section
          className="text-center mb-16 sm:mb-20"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <MotionImg
            src="/assets/profile.jpg"
            alt="Chandhu"
            className="mx-auto rounded-full w-32 h-32 sm:w-40 sm:h-40 mb-6 border-4 border-white/20 hover:border-white/60 transition-all"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent px-4"
            variants={fadeUp}
            custom={0.2}
          >
            Karra Chandra Sai Shankar
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 mt-3 sm:mt-4 px-4"
            variants={fadeUp}
            custom={0.3}
          >
            Software Developer | AI Enthusiast
          </motion.p>
          <motion.div
            className="mt-6 flex justify-center gap-6"
            variants={fadeUp}
            custom={0.4}
          >
            <a
              href="https://github.com/Chandukarra-git"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform p-2 hover:bg-white/10 rounded-full"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-6 h-6 sm:w-8 sm:h-8 hover:text-gray-400" />
            </a>
            <a
              href="https://linkedin.com/in/karra-chandra-sai-shankar-b602b0234"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform p-2 hover:bg-white/10 rounded-full"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-6 h-6 sm:w-8 sm:h-8 hover:text-blue-400" />
            </a>
          </motion.div>
        </motion.section>

        {/* Enhanced Education Section */}
        <motion.section
          className="mb-16 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          id="education"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center"
            variants={fadeUp}
          >
            Education
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, idx) => (
              <motion.div key={idx} variants={fadeUp} custom={idx}>
                <Card className="bg-gray-800/50 backdrop-blur-sm text-white p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white/90">{edu.degree}</h3>
                  <p className="text-white/70 mt-2">{edu.institution}</p>
                  <p className="text-sm text-white/60 mt-1">
                    {edu.duration} | {edu.location}
                  </p>
                  {edu.cgpa && <p className="mt-2 text-green-400">CGPA: {edu.cgpa}</p>}
                  {edu.score && <p className="mt-2 text-green-400">Score: {edu.score}</p>}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          id="skills"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            variants={fadeUp}
          >
            Skills
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={fadeUp}
          >
            {skills?.map((skill: string, idx: number) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-full 
                          hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all"
                variants={fadeUp}
                custom={idx}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

      {/* Projects Section */}
      <motion.section
        className="mb-20"
        initial="hidden"
        whileInView="visible"
        id="projects"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          variants={fadeUp}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div key={idx} variants={fadeInUp} custom={idx}>
            <Card className="bg-gray-800/50 backdrop-blur-sm text-white p-6 rounded-xl
                   hover:transform hover:scale-105 transition-all duration-300
                   border border-white/10 hover:border-white/20">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 
                   bg-clip-text text-transparent">{project.title}</h3>
              <p className="text-gray-300 mt-3 leading-relaxed">{project.description}</p>
              <Button
                variant="ghost"
                className="mt-4 text-sm text-white/70 hover:text-white"
              >
                Learn More →
              </Button>
            </Card>
          </motion.div>
        ))}
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        className="mb-20"
        initial="hidden"
        whileInView="visible"
        id="certifications"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          variants={fadeUp}
        >
          Certifications
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={fadeIn}
        >
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            custom={idx}
            className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl
               border border-white/10 hover:border-white/20
               transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 
                rounded-full flex items-center justify-center">
                {idx + 1}
              </div>
              <p className="text-white/90 font-medium">{cert}</p>
            </div>
          </motion.div>
        ))}
        </motion.div>
      </motion.section>

        
        {/* Contact Section - Enhanced */}
        <motion.section
          className="relative text-center mb-20 py-16 px-4 rounded-2xl bg-gradient-to-br from-slate-800/50 to-indigo-900/50 backdrop-blur-sm border border-white/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          
          <motion.h2 
            className="text-4xl font-bold mb-12 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
            variants={fadeUp}
          >
            Lets Connect
          </motion.h2>

          <motion.div 
            className="relative flex flex-col items-center gap-8 max-w-md mx-auto"
            variants={fadeUp}
          >
            <motion.div 
              className="w-full space-y-6"
              variants={fadeIn}
            >
              <motion.a 
                href="mailto:chandukarra03@gmail.com" 
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 
                  border border-white/10 hover:border-white/20 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                variants={fadeInUp}
              >
                <Mail className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="text-lg font-medium text-white/90 group-hover:text-white">chandukarra03@gmail.com</span>
              </motion.a>

              <motion.a 
                href="tel:+919014186689" 
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 
                  border border-white/10 hover:border-white/20 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                variants={fadeInUp}
              >
                <Phone className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <span className="text-lg font-medium text-white/90 group-hover:text-white">+91 9014186689</span>
              </motion.a>

              <div className="flex justify-center gap-4">
                <motion.a
                  href="https://github.com/Chandukarra-git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-white/10 
                    border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  variants={fadeInUp}
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-6 h-6 text-white/90 group-hover:text-white transition-colors" />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/karra-chandra-sai-shankar-b602b0234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-white/10 
                    border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  variants={fadeInUp}
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-6 h-6 text-white/90 group-hover:text-white transition-colors" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 text-white 
                  px-8 py-3 rounded-full text-lg font-medium
                  hover:from-blue-600 hover:to-purple-600 
                  shadow-lg hover:shadow-xl hover:shadow-blue-500/20
                  border-2 border-transparent hover:border-white/20
                  transition-all duration-300 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Say Hello
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>

        <footer className="text-center text-gray-400">
          &copy; 2025 Chandu. All rights reserved.
        </footer>
      </div>
    </main>
  );
  
}
