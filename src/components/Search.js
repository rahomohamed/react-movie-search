import React from "react";
import "../styles/Search.css"; 

export default function Search(){
  return (
    <form className="form">
        <label className="label" htmlFor="query">Movie Name</label>
        <input className="input" type="text" name="query"
            placeholder="i.e. Jurassic Park"/>
        <button className="button" type="submit">Search</button>
    </form>
)
}