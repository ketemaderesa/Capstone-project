const MovieDetails = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-lg flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-white">{movie.Title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <img
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450/374151/9CA3AF?text=No+Image'}
                alt={movie.Title}
                className="w-64 h-96 object-cover rounded-lg"
              />
            </div>
            
            <div className="flex-1">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-300 mb-2">Plot</h3>
                  <p className="text-gray-400">{movie.Plot || 'No plot available.'}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-300 text-sm">Year</h3>
                    <p className="text-gray-400">{movie.Year}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-300 text-sm">Rated</h3>
                    <p className="text-gray-400">{movie.Rated || 'N/A'}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-300 text-sm">Runtime</h3>
                    <p className="text-gray-400">{movie.Runtime || 'N/A'}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-300 text-sm">Genre</h3>
                    <p className="text-gray-400">{movie.Genre || 'N/A'}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-300 text-sm">Director</h3>
                  <p className="text-gray-400">{movie.Director || 'N/A'}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-300 text-sm">Actors</h3>
                  <p className="text-gray-400">{movie.Actors || 'N/A'}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-300 text-sm">IMDb Rating</h3>
                  <p className="text-gray-400">{movie.imdbRating || 'N/A'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;