import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Banner from './Pages/Home/Banner/Banner'
import Avenues from './Pages/Avenues/Avenues'
import Goal from './Pages/Goal/Goal'
import Alliance from './Pages/Alliance/Alliance'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/avenues" element={<Avenues />} />
          <Route path="/goal" element={<Goal />} />
          <Route path="/alliances" element={<Alliance />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
