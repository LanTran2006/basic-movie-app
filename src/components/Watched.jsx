import React from "react";

function Watched({ watched,setWatched }) {
  let handle_delete=(id)=>{
    setWatched(watched.filter(item=>item.imdbID!=id))
  }
  return (
    <ul className="list">
      {watched.map((movie) => (
        <li key={movie.imdbID}>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <h3>{movie.Title}</h3>
          <div>
            <p>
              <span>⭐️</span>
              <span>{movie.imdbRating}</span>
            </p>
            <p>
              <span>🌟</span>
              <span>{movie.userRating}</span>
            </p>
            <p>
              <span>⏳</span>
              <span>{movie.runtime} min</span>
            </p>
            <button onClick={()=>handle_delete(movie.imdbID)} className="btn-delete">X</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Watched;
