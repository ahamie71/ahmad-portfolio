import React from 'react'
import { motion } from 'framer-motion'
import { experiences } from '../data/experiences.js'

export default function Experiences() {
  return (
    <section id="experiences" className="min-h-screen flex flex-col items-center justify-center px-4 bg-white text-black dark:bg-black dark:text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-8"
      >
        Expériences
      </motion.h2>
      <div className="w-full max-w-4xl relative">
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-yellow-500/30" />
        <ul className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.li
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative md:grid md:grid-cols-2 md:gap-8"
            >
              <div className="flex items-start gap-3 md:justify-end md:text-right">
                <span className="mt-2 h-3 w-3 rounded-full bg-yellow-400 md:order-2" />
                <div className="bg-white text-gray-900 dark:bg-neutral-900 dark:text-gray-100 border border-yellow-500/20 rounded-xl p-4 shadow-sm">
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{exp.company} · {exp.period}</p>
                </div>
              </div>
              <div className="mt-3 md:mt-0">
                <div className="bg-white text-gray-800 dark:bg-neutral-900 dark:text-gray-100 border border-yellow-500/20 rounded-xl p-4 shadow-sm">
                  <p className="text-sm leading-relaxed">{exp.summary}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}


