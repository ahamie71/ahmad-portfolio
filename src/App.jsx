import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'

export default function App() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white transition-colors">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}
