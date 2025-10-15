import React from 'react'

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-purple-700 to-blue-500 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
        Salut, je suis Ahmad
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 mb-8">
        Développeur web full-stack | React, Tailwind, Node.js
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow-lg hover:bg-purple-100 transition"
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-700 transition"
        >
          Me contacter
        </a>
      </div>
    </section>
  )
}
