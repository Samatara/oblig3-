import { Link } from "react-router-dom";


function MovieCard({ movie }) {
  const slug = movie.Title.toLowerCase().replace(/\s+/g, "-");
  const hasImage = movie.Poster && movie.Poster !== "No Image bro aiii";

  return (
    <article className="movie-card">
      <Link to={`/${slug}`} state={{ imdbID: movie.imdbID }}>
        {hasImage ? (
          <img
            src={movie.Poster}
            alt={`Plakat for ${movie.Title}`}
            className="movie-card__poster"
          />
        ) : (
          <figure className="movie-card__no-image">
            <span>Ingen bilde</span>
          </figure>
        )}
        <header className="movie-card__info">
          <h3 className="movie-card__title">{movie.Title}</h3>
          <time className="movie-card__year" dateTime={movie.Year}>
            {movie.Year}
          </time>
        </header>
      </Link>
    </article>
  );
}

export default MovieCard;