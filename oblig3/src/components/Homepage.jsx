import { useState, useEffect } from "react";
import SearchBar from "./Searchbar";
import MovieInfo from "./movieInfo";
import { searchMovies, getJamesBondMovies } from "./apiSearch";

function Homepage() {
  const [movies, setMovies] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBondMovies() {
      const bondMovies = await getJamesBondMovies();
      setMovies(bondMovies);
      setLoading(false);
    }
    loadBondMovies();
  }, []);

  async function handleSearch(query) {
    if (query === "") {
      setIsSearching(false);
      const bondMovies = await getJamesBondMovies();
      setMovies(bondMovies);
      return;
    }

    setIsSearching(true);
    setLoading(true);
    const results = await searchMovies(query);
    setMovies(results);
    setLoading(false);
  }

  return (
    <main className="home-page">
      <header className="home-page__header">
        <h1 className="home-page__title">GrandmasSecretMovies</h1>
      </header>

      <SearchBar onSearch={handleSearch} />

      {loading ? (
        <p className="home-page__loading">Loaddddddiiiiinnnggg dude .......</p>
      ) : (
        <MovieInfo
          movies={movies}
          heading={isSearching ? "Søkeresultater" : "James Bond-filmer"}
        />
      )}
    </main>
  );
}

export default Homepage;