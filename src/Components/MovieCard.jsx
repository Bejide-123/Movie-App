import '../css/MovieCard.css'
import { useFavouritesContext } from '../FavouritesContent/MovieContent'

const MovieCard = ({ movie }) => {
  const { addFavourite, removeFavourite, isFavourite } = useFavouritesContext()

  const isMovieFavourite = isFavourite(movie.id)

  const toggleFavourite = () => {
    if (isMovieFavourite) {
      removeFavourite(movie.id)
    } else {
      addFavourite(movie)
    }
  }

  return (
    <div className="movie-card" data-aos="fade-up">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favourite-button ${isMovieFavourite ? 'active' : ''}`}
            onClick={toggleFavourite}
          >
            ♡
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split('-')[0]}</p>
      </div>
    </div>
  )
}

export default MovieCard
