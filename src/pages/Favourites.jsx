import '../css/Favourites.css'
import { useFavouritesContext } from '../FavouritesContent/MovieContent'
import MovieCard from '../Components/MovieCard'

const Favourites = () => {
  const { favourites } = useFavouritesContext()

  if (favourites.length === 0) {
    return (
      <div className="favourite-empty">
        <h2>No Favourite movies yet</h2>
        <p>Start adding movies to your favourites so they would appear here</p>
      </div>
    )
  }

  return (
    <div className="movies-grid">
      {favourites.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default Favourites
