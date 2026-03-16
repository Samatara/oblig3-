const API_KEY = "fc82a3a7";

const BASE_URL = "https://www.omdbapi.com/";

export async function searchMovies(query) {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie`);
   const data = await response.json();
  return data.Response === "True" ? data.Search : [];
}

export async function getMovieByTitle(title) {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(title)}&plot=full`);
  const data = await response.json();
    return data.Response === "True" ? data : null;
}

export async function getMovieById(id) {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
  const data = await response.json();
  return data.Response === "True" ? data : null;
}
export async function getJamesBondMovies() {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=james+bond&type=movie`);
  const data = await response.json();

  return data.Response === "True" ? data.Search : [];
}