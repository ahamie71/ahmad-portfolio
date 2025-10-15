import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between px-4">
        <h1 className="text-xl font-bold">Ahmad Portfolio</h1>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-purple-400">Home</Link>
          <a href="#projects" className="hover:text-purple-400">Projets</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </div>
      </nav>
    </header>
  )
}
