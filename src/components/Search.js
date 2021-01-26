import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/styles.css";
import MovieCard from "./movieCard.js";
import popcorn from "../assets/popcorn.png" 

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
       <div className="search-container">
            <img className="search__icon" src={popcorn} alt='popcorn' />
            <div className="search__details">
                <h1 className="search__header">React Movie Search</h1>
      <form>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Search for a movie..."
          value={query}
          onChange={handleChange}
        />
      </form>
      </div>
      </div>
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
