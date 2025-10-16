import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Initialize theme before render to avoid FOUC
try {
  const storedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const theme = storedTheme || (prefersDark ? 'dark' : 'light')
  document.documentElement.classList.toggle('dark', theme === 'dark')
} catch {}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
