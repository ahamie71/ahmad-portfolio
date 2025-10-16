import React from 'react'
import Hero from '../components/Hero.jsx'
import Projects from '../components/Projects.jsx'
import Contact from '../components/Contact.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Skills from '../components/Skills.jsx'
import Experiences from '../components/Experiences.jsx'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Experiences />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
