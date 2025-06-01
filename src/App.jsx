import './css/App.css'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'

function App() {

  return (
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
  )
}


export default App



// return (
//     <>
//       <div className="App">
//       <header>
//         <h1>Movie App</h1>
//         <nav>
//           <ul>
//             <li><a href="/">Home</a></li>
//             <li><a href="/favourites">Favourites</a></li>
//             <li><a href="/about">About</a></li>
//           </ul>
//         </nav>
//       </header>  
//     </div>
//       <div className="container">
//         <h1>Movie App</h1>
//         <p>Welcome to the Movie App! Here you can find your favourite movies.</p>
//       </div>
//     </>
//     )
