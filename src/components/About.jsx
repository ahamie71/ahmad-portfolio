import React from 'react'
import { skills } from '../data/skills.js'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">À propos de moi</h2>
        <p className="text-lg mb-6">
          Je suis un développeur web passionné par la création d'applications modernes et performantes avec React et Node.js.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Compétences :</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <span key={i} className="bg-purple-600 text-white px-3 py-1 rounded-full">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
