import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/styles.css";
import MovieCard from "./movieCard.js";

export default function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const url = `https://api.themoviedb.org/3/search/movie?api_key=90825a4fcff70ff150e671b6d56c3070&language=en-US&query=${query}&page=1&include_adult=false`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setMovies(res.data.results);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <form className="search">
        <label className="search-label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={handleChange}
        />
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}
