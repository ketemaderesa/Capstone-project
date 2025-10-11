import React from "react";

const MovieCard = ({ movie, onClick }) => (
  <div
    className="border rounded-md p-2 m-2 cursor-pointer hover:shadow-lg transition-shadow"
    onClick={onClick}
  >
    <img
      src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
      alt={movie.Title}
      className="w-full h-64 object-cover rounded-md"
    />
    <h2 className="font-bold mt-2 text-lg">{movie.Title}</h2>
    <p className="text-gray-600">{movie.Year}</p>
  </div>
);

export default MovieCard;
