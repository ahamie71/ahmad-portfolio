import React from 'react'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Mes Projets</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
