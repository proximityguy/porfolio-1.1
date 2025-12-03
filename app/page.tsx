'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<string>('dark');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const attr = document.documentElement.getAttribute('data-theme');
      if (attr) setTheme(attr);
    }
  }, []);
  const menuItems = ['Dashboard', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 glass backdrop-blur-md px-4 md:px-8 py-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.a
            href="#top"
            onClick={closeMenu}
            className="text-xl md:text-2xl font-bold gradient-text cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            Manish Kumar
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-base">
            {menuItems.map((item, i) => (
              <motion.a
                key={item}
                href={item === 'Dashboard' ? '#top' : `#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-primary transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              onClick={toggleTheme}
              className="glass px-3 py-1 rounded-full text-sm hover:glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-2xl text-gray-300 hover:text-primary transition-colors"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
          {/* Mobile Theme Toggle */}
          <motion.button
            className="md:hidden ml-3 text-sm glass px-3 py-1 rounded-full hover:glow"
            onClick={toggleTheme}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 pt-4 pb-2">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item}
                    href={item === 'Dashboard' ? '#top' : `#${item.toLowerCase()}`}
                    onClick={closeMenu}
                    className="text-gray-300 hover:text-primary transition-colors text-base py-2 border-b border-gray-700 hover:border-primary"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="top" className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-base md:text-xl text-gray-400 mb-2 md:mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Hi there! 👋 I&apos;m
            </motion.h2>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="gradient-text">Manish Kumar</span>
            </motion.h1>
            <div className="text-xl md:text-3xl mb-6 md:mb-8 h-16 md:h-20">
              <TypeAnimation
                sequence={[
                  'AI & ML Enthusiast 🤖',
                  2000,
                  'Full Stack Developer 💻',
                  2000,
                  'UI/UX Designer 🎨',
                  2000,
                  'Always Learning 🚀',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="gradient-text"
                repeat={Infinity}
              />
            </div>
            <motion.p
              className="text-base md:text-xl text-gray-300 mb-6 md:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Crafting Intelligent Solutions ✨ | Building Future Tech 🔥 | Learning Without Limits 📚
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-3 md:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <motion.a
                href="https://github.com/proximityguy"
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 hover:glow transition-all text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub size={20} className="md:w-6 md:h-6" />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/proximityguy"
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 hover:glow transition-all text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin size={20} className="md:w-6 md:h-6" />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                href="mailto:manishgenius2513@gmail.com"
                className="bg-gradient-to-r from-primary to-secondary px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 hover:shadow-2xl transition-all text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope size={20} className="md:w-6 md:h-6" />
                <span className="hidden sm:inline">Contact Me</span>
                <span className="sm:hidden">Email</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-full h-[400px] md:h-[500px] glass hero-image-frame rounded-3xl overflow-hidden flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <img src="/my_img.png" alt="Portrait of Manish Kumar" className="themed-image" />
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowDown className="text-primary text-3xl" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 gradient-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          
          <motion.div
            className="glass rounded-2xl md:rounded-3xl p-6 md:p-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
                  alt="Coding"
                  className="rounded-2xl w-full"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-base md:text-xl text-gray-300 mb-4 md:mb-6 leading-relaxed">
                  ✨ Passionate about blending <span className="text-primary font-bold">Full Stack Development</span> and <span className="text-secondary font-bold">Artificial Intelligence</span> to create smart, user-focused solutions.
                </p>
                <p className="text-base md:text-xl text-gray-300 mb-4 md:mb-6 leading-relaxed">
                  Constantly learning, experimenting, and exploring new ways to turn ideas into impactful technology.
                </p>
                <div className="space-y-3 md:space-y-4">
                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-2xl md:text-3xl">🎯</span>
                    <p className="text-sm md:text-lg">Currently: Working on AI/ML projects using Python</p>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-2xl md:text-3xl">📖</span>
                    <p className="text-sm md:text-lg">Finalist at <span className="font-bold text-primary">Smart India Hackathon 2025</span></p>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-2xl md:text-3xl">🌐</span>
                    <p className="text-sm md:text-lg">Contributing to open-source projects</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 gradient-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>

          {/* Frontend Development */}
          <motion.div
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-primary">⚛️ Frontend Development</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {[
                { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
                { name: 'Next.js', icon: 'https://skillicons.dev/icons?i=nextjs' },
                { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
                { name: 'HTML', icon: 'https://skillicons.dev/icons?i=html' },
                { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css' },
                { name: 'Bootstrap', icon: 'https://skillicons.dev/icons?i=bootstrap' },
                { name: 'Tailwind', icon: 'https://skillicons.dev/icons?i=tailwind' },
              ].map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="glass rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col items-center gap-3 md:gap-4 card-hover"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 md:w-16 md:h-16" />
                  <p className="text-xs md:text-sm font-semibold text-center">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend Development */}
          <motion.div
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-primary">☕ Backend Development</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {[
                { name: 'Java', icon: 'https://skillicons.dev/icons?i=java' },
                { name: 'Spring', icon: 'https://skillicons.dev/icons?i=spring' },
                { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' },
                { name: 'Express', icon: 'https://skillicons.dev/icons?i=express' },
                { name: 'C++', icon: 'https://skillicons.dev/icons?i=cpp' },
                { name: 'C', icon: 'https://skillicons.dev/icons?i=c' },
              ].map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="glass rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col items-center gap-3 md:gap-4 card-hover"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 md:w-16 md:h-16" />
                  <p className="text-xs md:text-sm font-semibold text-center">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile Development */}
          <motion.div
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-primary">📱 Mobile Development</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {[
                { name: 'Flutter', icon: 'https://skillicons.dev/icons?i=flutter' },
                { name: 'Dart', icon: 'https://skillicons.dev/icons?i=dart' },
                { name: 'Android Studio', icon: 'https://skillicons.dev/icons?i=androidstudio' },
              ].map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="glass rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col items-center gap-3 md:gap-4 card-hover"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 md:w-16 md:h-16" />
                  <p className="text-xs md:text-sm font-semibold text-center">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-primary">🗄️ Databases</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {[
                { name: 'MySQL', icon: 'https://skillicons.dev/icons?i=mysql' },
                { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },
                { name: 'MS SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
              ].map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="glass rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col items-center gap-3 md:gap-4 card-hover"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 md:w-16 md:h-16" />
                  <p className="text-xs md:text-sm font-semibold text-center">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI/ML */}
          <motion.div
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-primary">🤖 AI/ML (Currently Learning)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {[
                { name: 'Python', icon: 'https://skillicons.dev/icons?i=python' },
                { name: 'TensorFlow', icon: 'https://skillicons.dev/icons?i=tensorflow' },
                { name: 'PyTorch', icon: 'https://skillicons.dev/icons?i=pytorch' },
                { name: 'Scikit-Learn', icon: 'https://skillicons.dev/icons?i=sklearn' },
              ].map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="glass rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col items-center gap-3 md:gap-4 card-hover glow"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 md:w-16 md:h-16" />
                  <p className="text-xs md:text-sm font-semibold text-center">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-primary">🛠️ Tools & IDEs</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {[
                { name: 'VS Code', icon: 'https://skillicons.dev/icons?i=vscode' },
                { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
                { name: 'GitHub', icon: 'https://skillicons.dev/icons?i=github' },
                { name: 'IntelliJ', icon: 'https://skillicons.dev/icons?i=idea' },
                { name: 'Postman', icon: 'https://skillicons.dev/icons?i=postman' },
                { name: 'Figma', icon: 'https://skillicons.dev/icons?i=figma' },
              ].map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="glass rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col items-center gap-3 md:gap-4 card-hover"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 md:w-16 md:h-16" />
                  <p className="text-xs md:text-sm font-semibold text-center">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 gradient-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Work Experience
          </motion.h2>

          <div className="space-y-8 md:space-y-12">
            {/* Quickb AI Solutions */}
            <motion.div
              className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 card-hover"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4 md:gap-6">
                <motion.div
                  className="text-4xl md:text-6xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎨
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 gradient-text">UI/UX Designer</h3>
                  <p className="text-lg md:text-xl text-primary mb-3 md:mb-4">Quickb AI Solutions • 3 Months</p>
                  <p className="text-sm md:text-lg text-gray-300 mb-3 md:mb-4">
                    At Quickb AI Solutions, I worked on designing user-centered interfaces for AI-powered web applications. My responsibilities included conducting user research, creating wireframes and prototypes in Figma, and ensuring seamless user experiences through clean, responsive front-end design using HTML and CSS.
                  </p>
                  <div className="space-y-2">
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-primary">✓</span>
                      <p>Designed visually appealing and functional UI mockups using Figma</p>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-primary">✓</span>
                      <p>Conducted user research and feedback analysis to refine designs</p>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-primary">✓</span>
                      <p>Built responsive front-end components with HTML and CSS</p>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-primary">✓</span>
                      <p>Improved interface consistency and reduced user confusion through iterative design</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Paritechsoft */}
            <motion.div
              className="glass rounded-3xl p-8 card-hover"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-6">
                <motion.div
                  className="text-6xl"
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ☕
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-2 gradient-text">Java Backend Intern</h3>
                  <p className="text-xl text-primary mb-4">Paritechsoft • 6 Months</p>
                  <p className="text-lg text-gray-300 mb-4">
                    At Paritechsoft, I contributed to the development of RESTful APIs and backend modules for enterprise-level web applications. I worked with the Spring Boot framework to build and test backend logic, integrated MySQL for data management, and used Postman for API testing and validation.
                  </p>
                  <div className="space-y-2">
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-primary">✓</span>
                      <p>Developed and optimized RESTful APIs using Spring Boot</p>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-primary">✓</span>
                      <p>Implemented CRUD operations and managed data persistence with MySQL</p>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-primary">✓</span>
                      <p>Tested and documented APIs using Postman for integration readiness</p>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-primary">✓</span>
                      <p>Enhanced backend code quality through modular and reusable design patterns</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Education */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">🎓 Education</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="glass rounded-2xl p-6 card-hover"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold mb-2">MCA (Pursuing)</h3>
                <p className="text-primary text-xl mb-2">Lovely Professional University</p>
                <p className="text-gray-400">2025 - 2027</p>
              </motion.div>
              <motion.div
                className="glass rounded-2xl p-6 card-hover"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold mb-2">BCA</h3>
                <p className="text-primary text-xl mb-2">Patliputra University</p>
                <p className="text-gray-400">2020 - 2023</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 gradient-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <div className="space-y-12 md:space-y-16">
            {/* Project 1: Civic Issue Reporter */}
            <motion.div
              className="glass rounded-2xl md:rounded-3xl overflow-hidden card-hover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="relative h-64 md:h-full min-h-[300px]">
                  <img
                    src="/civic-issue-reporter.jpg"
                    alt="Civic Issue Reporter"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold">
                    SIH 2025 Finalist 🏆
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 gradient-text">Civic Issue Reporter</h3>
                  <p className="text-sm md:text-lg text-gray-300 mb-3 md:mb-4">
                    A unified mobile-first platform enabling citizens to report civic issues like potholes and broken infrastructure with GPS-tagged photos. Features automated categorization, real-time tracking, and analytics dashboard for government departments.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {['Flutter', 'React', 'Next.js', 'Express.js', 'MongoDB', 'Python AI'].map((tech) => (
                      <span key={tech} className="glass px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2 text-sm md:text-base">
                    <p className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Team of 6 members</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Centralized dashboard with interactive city mapping</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Automated routing and real-time citizen notifications</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2: Dhvani Vicharak */}
            <motion.div
              className="glass rounded-2xl md:rounded-3xl overflow-hidden card-hover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="order-2 md:order-1 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 gradient-text">Dhvani Vicharak - Audio Language Model</h3>
                  <p className="text-sm md:text-lg text-gray-300 mb-3 md:mb-4">
                    Deep Learning-based Audio Language Model for defense intelligence. Capable of understanding speech, non-speech, and paralinguistic audio with multilingual support. Built for DRDO to process audio data 5X faster.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {['React', 'Next.js', 'Tailwind CSS', 'Whisper', 'PANNs', 'LLM', 'JWT'].map((tech) => (
                      <span key={tech} className="glass px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2 text-sm md:text-base">
                    <p className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Frontend Developer for Team Code4City</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>85-90% reduction in processing time</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Multilingual: Hindi, Urdu, Tamil, Telugu, Bengali, Mandarin, English</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>400% throughput improvement for DRDO</span>
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2 relative h-64 md:h-auto min-h-[300px]">
                  <img
                    src="/dhvani-vicharak.png"
                    alt="Dhvani Vicharak"
                    className="w-full h-full object-contain md:object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold">
                    SIH Alternate 🎖️
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 3: Tech Shop */}
            <motion.div
              className="glass rounded-2xl md:rounded-3xl overflow-hidden card-hover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="relative h-64 md:h-full min-h-[300px]">
                  <img
                    src="/tech-shop.png"
                    alt="Tech Shop"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 gradient-text">Tech Shop E-Commerce</h3>
                  <p className="text-sm md:text-lg text-gray-300 mb-4 md:mb-6">
                    A fully responsive e-commerce website for electronics and tech products. Features include product catalog, shopping cart, dynamic filtering, and smooth animations for enhanced user experience.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {['HTML', 'CSS', 'JavaScript'].map((tech) => (
                      <span key={tech} className="glass px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href="https://tech-shop-online.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-primary to-secondary px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-sm md:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Live Demo →
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Project 4: House Price Prediction */}
            <motion.div
              className="glass rounded-2xl md:rounded-3xl overflow-hidden card-hover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="order-2 md:order-1 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 gradient-text">🏠 House Price Prediction System</h3>
                  <p className="text-sm md:text-lg text-gray-300 mb-3 md:mb-4">
                    Data-driven ML project predicting housing prices using California Housing dataset. Implements multiple regression algorithms with comprehensive data preprocessing and model evaluation.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {['Python', 'Jupyter', 'NumPy', 'Pandas', 'Scikit-Learn'].map((tech) => (
                      <span key={tech} className="glass px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2 text-sm md:text-base">
                    <p className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Linear Regression, Decision Tree, Random Forest models</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Cross-validation, RMSE, R² metrics evaluation</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>GridSearchCV optimization and automated Pipeline</span>
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2 relative h-64 md:h-auto min-h-[300px] bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
                  <motion.div
                    className="text-7xl md:text-9xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🏠
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Ongoing Projects Section */}
          <motion.div
            className="mt-12 md:mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 gradient-text">🚧 Ongoing Projects</h3>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {/* Phishing Email Detection */}
              <motion.div
                className="glass rounded-xl md:rounded-2xl p-5 md:p-6 card-hover"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">📧</div>
                <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Phishing Email Detection</h4>
                <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                  ML system using KNN and SVM to classify 5,172 emails based on word-frequency features. Comparative model analysis for effective detection.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="glass px-3 py-1 rounded-full text-xs">KNN</span>
                  <span className="glass px-3 py-1 rounded-full text-xs">SVM</span>
                  <span className="glass px-3 py-1 rounded-full text-xs">Python</span>
                </div>
              </motion.div>

              {/* SMS Spam Detection (BERT) */}
              <motion.div
                className="glass rounded-xl md:rounded-2xl p-5 md:p-6 card-hover"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">📱</div>
                <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">SMS Spam Detection (BERT)</h4>
                <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                  NLP-based spam detection using BERT transformer for deep contextual understanding. Superior precision on 5,574 SMS messages.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="glass px-2 md:px-3 py-1 rounded-full text-xs">BERT</span>
                  <span className="glass px-2 md:px-3 py-1 rounded-full text-xs">NLP</span>
                  <span className="glass px-2 md:px-3 py-1 rounded-full text-xs">Transformers</span>
                </div>
              </motion.div>

              {/* SMS Spam Detection (Traditional) */}
              <motion.div
                className="glass rounded-xl md:rounded-2xl p-5 md:p-6 card-hover"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">📲</div>
                <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">SMS Spam (Traditional ML)</h4>
                <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                  Comparing Logistic Regression, Random Forest, Gradient Boosting, and SVM with TF-IDF vectorization for SMS spam detection.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="glass px-2 md:px-3 py-1 rounded-full text-xs">RF</span>
                  <span className="glass px-2 md:px-3 py-1 rounded-full text-xs">SVM</span>
                  <span className="glass px-2 md:px-3 py-1 rounded-full text-xs">TF-IDF</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
        <div className="max-w-4xl mx-auto w-full text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 gradient-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let&apos;s Connect!
          </motion.h2>
          
          <motion.p
            className="text-base md:text-xl text-gray-300 mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Have a project in mind or just want to chat about tech? I&apos;m always open to discussing new opportunities and ideas!
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href="mailto:manishgenius2513@gmail.com"
              className="glass px-4 md:px-8 py-3 md:py-4 rounded-full flex items-center gap-2 md:gap-3 text-sm md:text-lg hover:glow transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope size={20} className="md:w-6 md:h-6" />
              <span className="break-all">manishgenius2513@gmail.com</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="flex justify-center gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="https://github.com/proximityguy"
              target="_blank"
              rel="noopener noreferrer"
              className="glass w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center hover:glow transition-all"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaGithub size={24} className="md:w-8 md:h-8" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/proximityguy"
              target="_blank"
              rel="noopener noreferrer"
              className="glass w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center hover:glow transition-all"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaLinkedin size={24} className="md:w-8 md:h-8" />
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-12 md:mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-2xl font-bold gradient-text mb-4 px-4">
              ✨ &quot;Code. Create. Contribute. Continuously.&quot; ✨
            </p>
            <motion.div
              className="flex justify-center gap-3 md:gap-4 mt-6 md:mt-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-4xl">🚀</span>
              <span className="text-4xl">💻</span>
              <span className="text-4xl">🤖</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass py-8 px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-4">
            Built with ❤️ using Next.js, Framer Motion, and Tailwind CSS
          </p>
          <p className="text-sm text-gray-500">
            © 2025 Manish Kumar. All rights reserved.
          </p>
          <motion.div
            className="mt-4"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-2xl">⭐</span>
          </motion.div>
        </motion.div>
      </footer>
    </main>
  );
}
