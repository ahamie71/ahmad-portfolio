import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
      <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex gap-4">
        <a
          href={project.demo}
          target="_blank"
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 transition"
        >
          Démo
        </a>
        <a
          href={project.repo}
          target="_blank"
          className="px-4 py-2 border border-white rounded hover:bg-white hover:text-purple-700 transition"
        >
          Code
        </a>
      </div>
    </div>
  )
}
