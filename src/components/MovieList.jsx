import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onMovieClick }) => {
  if (!movies.length) return <p className="text-center mt-4">No movies found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} onClick={() => onMovieClick(movie.imdbID)} />
      ))}
    </div>
  );
};

export default MovieList;
