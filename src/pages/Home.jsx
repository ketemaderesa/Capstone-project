import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Loader from "../components/Loader";

const Home = ({ onMovieSelect }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      // ✅ Replace 'YOUR_API_KEY' with your actual OMDb API key
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=abcd1234&s=${query}`
      );

      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
        setError(response.data.Error);
      }
    } catch (err) {
      setError("Network error, please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      <MovieList movies={movies} onMovieClick={onMovieSelect} />
    </div>
  );
};

export default Home;
