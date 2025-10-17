import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieDetails from "../components/MovieDetails";
import Loader from "../components/Loader";

const MoviePage = ({ movieId }) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovie = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=YOUR_API_KEY&i=${movieId}&plot=full`
        );
        if (response.data.Response === "True") setMovie(response.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };

    fetchMovie();
  }, [movieId]);

  return (
    <div>
      {loading ? <Loader /> : <MovieDetails movie={movie} />}
    </div>
  );
};

export default MoviePage;
