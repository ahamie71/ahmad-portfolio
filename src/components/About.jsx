import React from 'react'

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-8 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h3 className="text-3xl font-bold mb-6">À propos de moi</h3>
      <p className="text-lg max-w-3xl mx-auto">
        Je suis un développeur web spécialisé en React, Vite et Tailwind CSS. J’aime créer des sites performants et modernes.
      </p>
    </motion.section>
  )
}
