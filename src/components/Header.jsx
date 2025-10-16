import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    try {
      const current = document.documentElement.classList.contains('dark')
      setIsDark(current)
    } catch {}
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    const applied = document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', applied ? 'dark' : 'light')
    } catch {}
  }
  return (
    <header className="bg-white/70 dark:bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/60 text-black dark:text-white py-4 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <h1 className="text-xl font-bold tracking-tight">Ahmad Portfolio</h1>
        <div className="hidden md:flex gap-6 text-base md:text-lg font-medium">
          <Link to="/" className="hover:text-yellow-500">Accueil</Link>
          
          <a href="#skills" className="hover:text-yellow-500">Compétences</a>
          <a href="#projects" className="hover:text-yellow-500">Projets</a>
          <a href="#experiences" className="hover:text-yellow-500">Expériences</a>
          <a href="#contact" className="hover:text-yellow-500">Contact</a>
        </div>
        <div className="flex items-center">
          <a href="#contact" className="hidden md:inline-flex px-3 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300 text-sm font-semibold transition">Me contacter</a>
        </div>
      </nav>
    </header>
  )
}
