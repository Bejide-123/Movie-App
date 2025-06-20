import './css/App.css'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import { FavouritesProvider } from './FavouritesContent/MovieContent'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <FavouritesProvider>
      <div>
        <NavBar></NavBar>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </main>
      </div>
    </FavouritesProvider >
  )
}


export default App


