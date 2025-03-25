"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MdDocumentScanner } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDrag } from "react-use-gesture";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const bind = useDrag(({ offset: [x] }) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = -x;
    }
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const projects = [
    {
      title: "Realtime Chat App",
      description: "Messaging with WebSocket integration",
      link: "https://saurav-sinha-3141.github.io/rt-chat",
      tech: ["React", "Node.js", "WebSocket"],
      image:
        "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=500&q=80",
    },
    {
      title: "Chatllama",
      description: "Interact with local LLMs",
      link: "https://saurav-sinha-3141.github.io/chatllama",
      tech: ["React", "Node.js", "Ollama", "CI/CD", "PWA"],
      image:
        "https://images.unsplash.com/photo-1738107450290-ec41c2399ad7?w=500&q=80",
    },
    {
      title: "Video Playback Controller",
      description: "A chrome extension for controlling speeds of videos",
      link: "https://github.com/saurav-sinha-3141/video-playback",
      tech: ["Javascript", "HTML"],
      image:
        "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?w=500&q=80",
    },
    {
      title: "Media Server Setup",
      description: "Self-hosted streaming solution with transcoding",
      link: "https://github.com/saurav-sinha-3141",
      tech: ["Docker", "Nginx", "FFmpeg", "Redis"],
      image:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&q=80",
    },
    {
      title: "Next.js Portfolio",
      description: "Modern portfolio with animations and responsive design",
      link: "sauravsinha.tech",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&q=80",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
      <motion.div
        className="w-full max-w-[1200px] mx-auto p-6 md:p-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <motion.div
            className="flex flex-col space-y-6"
            variants={itemVariants}
          >
            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-700/50"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="Saurav-new.jpg"
                alt="Profile"
                className="rounded-xl w-full object-cover aspect-square shadow-2xl ring-4 ring-blue-500/20"
              />
            </motion.div>

            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-700/50"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Education
              </h2>
              <div className="space-y-4">
                {[
                  {
                    school: "Birla Institute of Technology, Mesra",
                    years: "2021-25",
                    degree: "Bachelor of Technology",
                  },
                  {
                    school: "Delhi Public School, Ranchi",
                    years: "2019-21",
                    degree: "High School",
                  },
                  {
                    school: "Kairali School, Ranchi",
                    years: "2008-19",
                    degree: "Secondary Education",
                  },
                ].map((edu, index) => (
                  <motion.div
                    key={index}
                    className="border-l-2 border-blue-400/30 pl-4 py-2"
                    whileHover={{ x: 10 }}
                  >
                    <h3 className="font-semibold text-blue-300">
                      {edu.school}
                    </h3>
                    <p className="text-gray-400 text-sm">{edu.degree}</p>
                    <p className="text-gray-500 text-xs">{edu.years}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="md:col-span-2 space-y-6"
            variants={itemVariants}
          >
            {/* Social Icons */}
            <motion.div
              className="flex justify-center md:justify-start space-x-4"
              variants={containerVariants}
            >
              {[
                {
                  Icon: FaLinkedin,
                  link: "https://dub.sh/wemw1MD",
                  color: "hover:text-blue-400",
                },
                {
                  Icon: FaGithub,
                  link: "https://dub.sh/aGIRm7H",
                  color: "hover:text-purple-400",
                },
                {
                  Icon: BsTwitterX,
                  link: "https://dub.sh/GcsZZDm",
                  color: "hover:text-blue-300",
                },
                {
                  Icon: FaEnvelope,
                  link: "mailto:sauravsinha3141@gmail.com",
                  color: "hover:text-green-400",
                },
                {
                  Icon: MdDocumentScanner,
                  link: "https://dub.sh/O7QIVIq",
                  color: "hover:text-yellow-400",
                },
              ].map(({ Icon, link, color }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  target="_blank"
                  className={`bg-gray-800/50 p-4 rounded-xl shadow-lg backdrop-blur-sm border border-gray-700/50 ${color} transform transition-all duration-300`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>

            {/* Summary */}
            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700/50"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  I'm a passionate developer with a strong foundation in
                  software development, system design, and emerging
                  technologies. I enjoy building scalable applications,
                  exploring low-level programming, and optimizing systems for
                  efficiency and performance.
                </p>
                <p className="leading-relaxed">
                  With experience in web development, real-time applications,
                  databases, and AI/ML, I constantly seek to learn and
                  experiment with new technologies. Whether working on backend
                  logic, user experiences, or networking protocols, I strive for
                  well-engineered, impactful solutions.
                </p>
              </div>
            </motion.div>

            {/* Chess & Activities */}
            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700/50"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Interests
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-gray-300">🏆 Chess Rating: 1100+ ELO</p>
                  <p className="text-gray-300">🌟 Open Source Contributor</p>
                  {/* <p className="text-gray-300">📚 Tech Blog Writer</p> */}
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300">🎯 Problem Solving Enthusiast</p>
                  {/* <p className="text-gray-300">🎨 UI/UX Design</p> */}
                  {/* <p className="text-gray-300">🎮 Game Development</p> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Projects Section */}
        <motion.div
          className="mt-16"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            className="text-center text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Featured Projects
          </motion.h2>
          <div className="relative">
            <div
              ref={carouselRef}
              {...bind()}
              className="flex space-x-6 overflow-x-auto pb-8 cursor-grab active:cursor-grabbing scrollbar-hide"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  variants={itemVariants}
                >
                  <div
                    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl w-[300px] h-[400px] flex flex-col shadow-xl border border-gray-700/50 relative overflow-hidden"
                    onMouseEnter={() => setActiveProject(index)}
                    onMouseLeave={() => setActiveProject(null)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                    <h3 className="text-xl font-bold text-blue-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-1 bg-blue-500/20 rounded-full text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <AnimatePresence>
                      {activeProject === index && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/95 backdrop-blur-sm flex items-center justify-center"
                        >
                          <motion.button
                            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-transform"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.open(project.link, "_blank")}
                          >
                            View Project
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="mt-16 bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700/50"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <form className="max-w-2xl mx-auto space-y-6">
            <motion.div variants={itemVariants}>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm"
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-4 rounded-xl bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm"
                required
              ></textarea>
            </motion.div>
            <motion.div variants={itemVariants} className="flex justify-center">
              <motion.button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
