import { useParams, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieByTitle, getMovieById } from "./apiSearch";

function MoviePage() {
  const { movie: slug } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovie() {
      setLoading(true);
      let data = null;

      if (location.state?.imdbID) {
        data = await getMovieById(location.state.imdbID);
      }

      if (!data) {
        const title = decodeURIComponent(slug).replace(/-/g, " ");
        data = await getMovieByTitle(title);
      }

      setMovie(data);
      setLoading(false);
    }
    loadMovie();
  }, [slug, location.state]);

  if (loading) {
    return (
      <main className="movie-page">
        <p className="movie-page__loading">Laster film...</p>
      </main>
    );
  }

  if (!movie) {
    return (
      <main className="movie-page">
        <p className="movie-page__error">Filmen ble ikke funnet.</p>
        <Link to="/" className="movie-page__back">← Tilbake til forsiden</Link>
      </main>
    );
  }

  const hasImage = movie.Poster && movie.Poster !== "N/A";

  return (
    <main className="movie-page">
      <nav className="movie-page__nav">
        <Link to="/" className="movie-page__back">← Tilbake til forsiden</Link>
      </nav>

      <article className="movie-page__content">
        <aside className="movie-page__poster-wrapper">
          {hasImage ? (
            <img
              src={movie.Poster}
              alt={`Plakat for ${movie.Title}`}
              className="movie-page__poster"
            />
          ) : (
            <figure className="movie-page__no-image">
              <span>Ingen bilde</span>
            </figure>
          )}
        </aside>

        <section className="movie-page__details">
          <header>
            <h1 className="movie-page__title">{movie.Title}</h1>
            <p className="movie-page__meta">
              <time dateTime={movie.Year}>{movie.Year}</time>
              {movie.Rated && movie.Rated !== "N/A" && (
                <span className="movie-page__rated">{movie.Rated}</span>
              )}
              {movie.Runtime && movie.Runtime !== "N/A" && (
                <span>{movie.Runtime}</span>
              )}
            </p>
          </header>

          {movie.Genre && movie.Genre !== "N/A" && (
            <p className="movie-page__genre">
              {movie.Genre.split(", ").map((genre) => (
                <span key={genre} className="movie-page__genre-tag">{genre}</span>
              ))}
            </p>
          )}

          {movie.Plot && movie.Plot !== "N/A" && (
            <section className="movie-page__section">
              <h2>Plot</h2>
              <p>{movie.Plot}</p>
            </section>
          )}

          {movie.Director && movie.Director !== "N/A" && (
            <section className="movie-page__section">
              <h2>Director</h2>
              <p>{movie.Director}</p>
            </section>
          )}

          {movie.Actors && movie.Actors !== "N/A" && (
            <section className="movie-page__section">
              <h2>Actors</h2>
              <p>{movie.Actors}</p>
            </section>
          )}

          {movie.imdbRating && movie.imdbRating !== "N/A" && (
            <section className="movie-page__section">
              <h2>Rating</h2>
              <p className="movie-page__rating">
                <span className="movie-page__rating-star">★</span>
                {movie.imdbRating} / 10
              </p>
            </section>
          )}
        </section>
      </article>
    </main>
  );
}

export default MoviePage;