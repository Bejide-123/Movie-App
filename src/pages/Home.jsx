import MovieCard from "../Components/MovieCard";
import '../css/Home.css'
import { useState } from "react";
import { fetchMovies } from "../services/api";
import { getPopularMovies } from "../services/api";
import { useEffect } from "react";

const Home = () => {
      const [searchQuery, setSearchQuery] = useState("")
      const [movies, setMovies] = useState([])
      const [loading, setLoading] = useState(true)
      const [error, setError] = useState(null)
      useEffect(() => {
            const fetchData = async () => {
                  try{
                        const popularMovies = await getPopularMovies()
                        setMovies(popularMovies)
                  } catch (error) {
                        console.error("Error fetching popular movies:", error)
                        setError("Failed to fetch popular movies. Please try again later.")
                  } finally {
                        console.log("Popular movies fetched successfully")
                        setLoading(false)
                  }
            }
            fetchData()
      }, [])
      
      const search = (e) => {
            e.preventDefault()
            alert(searchQuery)
            setSearchQuery("")
      }
      
      return(
            <div className="home">
                  <form action="" onSubmit={search} className="search-form">
                        <input type="text"  id="" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                        <button type="submit" className="search-button" onClick={fetchMovies}>Search</button>

                  </form>
                  <div className="movies-grid">
                        {movies.map(movie => (<MovieCard movie = {movie} key = {movie.id}></MovieCard>))}
                  </div>
            </div>
      )
}

export default Home