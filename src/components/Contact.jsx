import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-white text-black dark:bg-black dark:text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6"
      >
        Contact
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl text-center"
      >
        Vous avez un projet ou une question ? Envoyez‑moi un message ou contactez‑moi via les réseaux ci‑dessous.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="p-6 md:p-8 rounded-2xl bg-white text-black border border-yellow-500/20 shadow-lg dark:bg-white dark:text-black">
          <h3 className="text-2xl font-semibold mb-4">Mes coordonnées</h3>
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-yellow-400" /> ahmad@example.com</li>
            <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-yellow-400" /> +33 6 12 34 56 78</li>
            <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-yellow-400" /> Paris, France</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.linkedin.com/in/ahmad-hamieh-5b757a247/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300 transition text-sm font-semibold"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ahamie71"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 border border-black text-black rounded hover:bg-black hover:text-white transition text-sm font-semibold"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="p-6 md:p-8 rounded-2xl bg-white text-black border border-yellow-500/20 shadow-lg dark:bg-white dark:text-black">
          <form className="flex flex-col gap-4">
            <div className="text-left">
              <label htmlFor="name" className="block text-sm mb-1 text-black">Nom</label>
              <input
                id="name"
                type="text"
                placeholder="Votre nom"
                className="w-full p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="text-left">
              <label htmlFor="email" className="block text-sm mb-1 text-black">Email</label>
              <input
                id="email"
                type="email"
                placeholder="votre@email.com"
                className="w-full p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="text-left">
              <label htmlFor="message" className="block text-sm mb-1 text-black">Message</label>
              <textarea
                id="message"
                placeholder="Votre message..."
                className="w-full p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                rows="5"
              />
            </div>
            <button
              type="submit"
              className="p-3 bg-yellow-400 hover:bg-yellow-300 text-black rounded-lg transition font-semibold"
            >
              Envoyer
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}
