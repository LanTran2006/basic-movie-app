import React from 'react'

function Movie({movie,setSelectedId,setIsOpen}) {
  return (
    <li onClick={()=> {setSelectedId(movie.imdbID);setIsOpen(true)}} key={movie.imdbID}>
    <img src={movie.Poster} alt={`${movie.Title} poster`} />
    <h3>{movie.Title}</h3>
    <div>
      <p>
        <span>🗓</span>
        <span>{movie.Year}</span>
      </p>
    </div>
  </li>
  )
}

export default Movie