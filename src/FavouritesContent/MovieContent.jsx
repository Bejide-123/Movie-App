import { createContext, useState, useContext, useEffect } from "react";

const FavouritesContext = createContext();
export const useFavouritesContext = () => {
  return useContext(FavouritesContext);
};

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(() => {
    const savedFavourites = localStorage.getItem("favourites");
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addFavourite = (movie) => {
    setFavourites((prev) => [...prev, movie]);
  };

  const removeFavourite = (movieId) => {
    setFavourites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavourite = (movieId) => {
    return favourites.some((movie) => movie.id === movieId);
  };

  const value = {
    favourites,
    addFavourite,
    removeFavourite,
    isFavourite,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}
