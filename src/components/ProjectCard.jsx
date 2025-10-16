import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-yellow-100 hover:shadow-yellow-200 hover:scale-105 transition dark:bg-neutral-900 dark:border-yellow-500/20">
      <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      <div className="flex gap-4">
        <a
          href={project.demo}
          target="_blank"
          className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300 transition"
        >
          Démo
        </a>
        <a
          href={project.repo}
          target="_blank"
          className="px-4 py-2 border border-black text-black rounded hover:bg-black hover:text-white transition dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
        >
          Code
        </a>
      </div>
    </div>
  )
}
