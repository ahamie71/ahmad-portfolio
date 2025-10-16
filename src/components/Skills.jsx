import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data/skills.js'

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 10, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1 }
  }

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center px-4 bg-white text-black dark:bg-black dark:text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-8"
      >
        Compétences
      </motion.h2>
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-wrap gap-3 max-w-4xl justify-center"
      >
        {skills.map((skill, idx) => (
          <motion.li
            key={idx}
            variants={item}
            className="px-4 py-2 rounded-full bg-white border border-yellow-200 shadow-sm text-gray-900 hover:shadow-md hover:-translate-y-0.5 transition dark:bg-neutral-900 dark:text-gray-100 dark:border-yellow-500/20"
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}


