import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { api_key } from "../App";
import StarRating from "./StarRating";
function Detail({ id, setSelectedId,setWatched,watched}) {
  const { data: movie } = useFetch(
    `https://www.omdbapi.com/?apikey=${api_key}&i=`,
    id
  );
 let [userRating,setUserRating]=useState(0);
   useEffect(()=>{
    const handle_remove=(e)=>{
      if (e.key=="Escape") {
        setSelectedId(null);
      }
    }
     document.addEventListener('keydown',handle_remove)
     return ()=>document.removeEventListener("keydown",handle_remove);
   },[])
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;
  let watchedMovie=watched.find(item=>item.imdbID==movie.imdbID);
  let handle_add=()=>{
     const obj={
      imdbID: id,
      Poster: poster,
      Title: title,
      imdbRating,
      runtime: Number(runtime.split(" ")[0]),
      userRating
     }
     setWatched(prev=>[...prev,obj]);
     setSelectedId(null)
  }
  return (
    <div className="details">
      <header>
        <button onClick={() => setSelectedId(null)} className="btn-back">
          &larr;
        </button>
        <img src={poster} alt={`Poster of ${title} movie`} />
        <div className="details-overview">
          <h2>{title}</h2>
          <p>
            {released} &bull; {runtime}
          </p>
          <p>{genre}</p>
          <p>
            <span>⭐️</span>
            {imdbRating} IMDb rating
          </p>
        </div>
      </header>
     
      <section>
        <div className="rating">
        {watchedMovie ? <p>
                  You rated with movie {watchedMovie.userRating} <span>⭐️</span>
                </p> : <>
          <StarRating onSetRating={setUserRating} maxRating={10} size={24}/>
          <button disabled={userRating<1} onClick={handle_add} className="btn-add">+ Add to list</button>
          </>}
          
        </div>
        <p>
          <em>{plot}</em>
        </p>
        <p>Starring {actors}</p>
        <p>Directed by {director}</p>
      </section>
    </div>
  );
}

export default Detail;
{
  /* <section>
<div className="rating">
  {!isWatched ? (
    <>
      <StarRating
        maxRating={10}
        size={24}
        onSetRating={setUserRating}
      />
      {userRating > 0 && (
        <button className="btn-add" onClick={handleAdd}>
          + Add to list
        </button>
      )}
    </>
  ) : (
    <p>
      You rated with movie {watchedUserRating} <span>⭐️</span>
    </p>
  )}
</div>
<p>
  <em>{plot}</em>
</p>
<p>Starring {actors}</p>
<p>Directed by {director}</p>
</section> */
}
