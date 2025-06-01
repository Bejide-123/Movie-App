const API_KEY = "6a0699eed713da785233b6d2ee6a84f0";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query) => {
      const endpoint = "/search/movie";
    try {
        const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=en-US`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Failed to fetch movies:", error);
        return [];
    }
}

export const getPopularMovies = async () => {
      const endpoint = "/movie/popular";
      try {
        const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Failed to fetch movies:", error);
        return [];
    }
}
