import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/index'
import Booking from './pages/booking'
import Contact from './pages/contact'
import Service from './pages/service'
import Team from './pages/team'
import Tips from './pages/tips'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/team" element={<Team />} />
        <Route path="/tips" element={<Tips />} />
      </Routes>
    </BrowserRouter>
  )
}



export default App







