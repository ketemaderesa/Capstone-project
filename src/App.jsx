import React, { useState } from "react";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";

function App() {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleMovieSelect = (id) => {
    setSelectedMovieId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center py-6">Movie Database</h1>
      {selectedMovieId ? (
        <MoviePage movieId={selectedMovieId} />
      ) : (
        <Home onMovieSelect={handleMovieSelect} />
      )}
    </div>
  );
}

export default App;
