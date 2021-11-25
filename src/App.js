import { Route, Routes } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Home from './components/Home/Home'
import Services from './components/Home/Services/Services'
import Profile from './components/Profile/Profile'
import Navbar from './components/Navbars/Navbar'
import Developement from './components/Home/Services/Developement/Developement'
import Marketing from './components/Home/Services/Marketing/Marketing'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} >
          <Route path="/services/developpement" element={<Developement />} />
          <Route path="/services/marketing" element={<Marketing />} />
        </Route>
        <Route path="/profil/:id" element={<Profile />} />

      </Routes>
    </div>
  )
}

export default App
