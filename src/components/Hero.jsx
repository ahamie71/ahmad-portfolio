import React from 'react'
import {motion} from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-gray-50 to-gray-100 dark:from-black dark:via-zinc-900 dark:to-neutral-900"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
        className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-white/10 blur-3xl"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.8 }}
        className="absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-yellow-400/10 blur-3xl"
      />
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-left">
          <motion.span
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-600 border border-yellow-400/40 text-xs font-semibold"
          >
            Disponible pour une alternance / mission
          </motion.span>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-black dark:text-white"
          >
            Ahmad Hamieh
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-3 text-xl md:text-2xl text-gray-700 dark:text-gray-200"
          >
            Développeur Web Full‑Stack - data & AI
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-3 text-base md:text-lg text-gray-600 dark:text-gray-300"
          >
            Étudiant en <span className="font-semibold">Master Dev, Data & AI (5e année)</span> à <span className="font-semibold">l’école d’ingénieurs IPSSI (Paris)</span>.
            <br />
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-5 flex flex-wrap gap-2"
          >
      
          </motion.div>
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#projects" className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:-translate-y-0.5 hover:bg-yellow-300 transition">Voir mes projets</a>
            <a href="#contact" className="px-6 py-3 border border-black text-black dark:border-white dark:text-white font-semibold rounded-lg hover:-translate-y-0.5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">Me contacter</a>
            <a href="/ahmdCv.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-semibold rounded-lg shadow-lg hover:-translate-y-0.5 hover:bg-neutral-800 dark:hover:bg-gray-200 transition">Voir mon CV</a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <div className="relative h-64 w-64 md:h-80 md:w-80">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-yellow-400/60 to-transparent blur-xl" />
            <div className="relative h-full w-full rounded-2xl bg-white dark:bg-neutral-900 border border-yellow-500/30 overflow-hidden">
              <img
                src="/images/5648EF2C-0BBB-49B0-AEA7-FE3AB5B5F3DD_1_105_c.jpeg"
                alt="Portrait de Ahmad Hamieh"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
