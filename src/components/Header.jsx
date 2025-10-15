import React from 'react'

export default function Header() {
  return (
    <header className="w-full py-4 px-8 flex justify-between items-center bg-gray-100 dark:bg-gray-900 fixed top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">Ahmad</h1>
      <nav className="space-x-4">
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </nav>
    </header>
  )
}
