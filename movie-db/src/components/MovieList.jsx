import MovieCard from './MovieCard';

const MovieList = ({ movies, onMovieClick }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No movies found. Try a different search.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onMovieClick={onMovieClick}
        />
      ))}
    </div>
  );
};

export default MovieList;