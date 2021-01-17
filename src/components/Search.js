import { useState, useEffect } from "react";
import axios from 'axios'
import "../styles/Search.css"; 

export default function Search(){
const [query, setQuery] = useState('');
const [movies, setMovies] = useState([]);
       
 const url = `https://www.omdbapi.com/?s=${query}&apikey=3f570196`;
    
    useEffect(() => {
      axios.get(url)
      .then(res => { console.log(res.data) })
      .catch(err => { console.log(err) })
    },[query])
  

  return (

    <form className="search">
        <label className="search-label" htmlFor="query">Movie Name</label>
        <input className="input" type="text" name="query"
            placeholder="i.e. Jurassic Park"
            value={query} onChange={e => setQuery(e.target.value)}
            />
    </form>

)
}