import MovieCard from "./MovieCard";

function MovieInfo({ movies, heading }) {
  if (movies.length === 0) {
    return (
      <section className="movie-list">
        <p className="movie-list__empty">shiiiiii no movies for youuuuuu</p>
      </section>
    );
  }

  return (
    <section className="movie-list">
      {heading && <h2 className="movie-list__heading">{heading}</h2>}
      <ul className="movie-list__grid">
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MovieInfo;