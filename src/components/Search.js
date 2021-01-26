import React, {useState} from 'react';
import "../styles/styles.css"; 
import MovieCard from "./movieCard.js";


export default function Search(){
  
const [query, setQuery] = useState('');
const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
  e.preventDefault();
  console.log("submitting");
       
 const url = `https://api.themoviedb.org/3/search/movie?api_key=90825a4fcff70ff150e671b6d56c3070&language=en-US&query=${query}&page=1&include_adult=false`;
 
 try {
  const res = await fetch(url);
  const data  = await res.json();
  console.log(data.results)
  setMovies(data.results);
}catch(err){
  console.error(err);
}
}

  return (
<>
    <form className="search" onSubmit={searchMovies}>
        <label className="search-label" htmlFor="query">Movie Name</label>
        <input className="input" type="text" name="query"
            placeholder="i.e. Jurassic Park"
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
            />
               <button className="button" type="submit">Search</button>
    </form>
    <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>     
</>
)
}