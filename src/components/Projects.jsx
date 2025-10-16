import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-white text-black dark:bg-black dark:text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6"
      >
        Mes Projets
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
