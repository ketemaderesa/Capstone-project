const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-opacity-20 border border-white border-opacity-10 hover:border-purple-500 hover:border-opacity-30"
      onClick={() => onMovieClick(movie)}
    >
      <div className="h-64 overflow-hidden">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450/374151/9CA3AF?text=No+Image'}
          alt={movie.Title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-white text-sm mb-2 line-clamp-2">{movie.Title}</h3>
        <div className="flex justify-between items-center text-xs text-gray-400">
          <span>{movie.Year}</span>
          <span className="bg-purple-500 bg-opacity-20 text-purple-300 px-2 py-1 rounded">
            {movie.Type}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;