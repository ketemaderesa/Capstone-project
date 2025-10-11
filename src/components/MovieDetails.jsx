import React from "react";

const MovieDetails = ({ movie }) => {
  if (!movie) return <p className="text-center mt-4">Select a movie to see details.</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
          alt={movie.Title}
          className="w-full md:w-64 rounded-md"
        />
        <div>
          <h1 className="text-2xl font-bold">{movie.Title}</h1>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Cast:</strong> {movie.Actors}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>Ratings:</strong> {movie.Ratings.map(r => `${r.Source}: ${r.Value}`).join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
