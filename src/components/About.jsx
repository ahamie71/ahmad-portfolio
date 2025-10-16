import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white text-black dark:bg-black dark:text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6"
      >
        À propos de moi
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl p-6 md:p-8 rounded-2xl bg-white text-gray-800 border border-yellow-100 shadow-sm dark:bg-neutral-900 dark:text-gray-100 dark:border-yellow-500/20"
      >
        <p className="text-lg leading-relaxed">
          Je suis développeur web full-stack, passionné par les technologies modernes comme React, Tailwind CSS et Node.js.
          J’adore créer des expériences élégantes, performantes et interactives.
        </p>
      </motion.div>
    </section>
  )
}
