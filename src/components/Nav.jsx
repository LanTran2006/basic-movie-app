import React,{useEffect, useRef, useState} from 'react'
import { api_key } from '../App';

function getMovie(query) {
  return fetch(`https://www.omdbapi.com/?apikey=${api_key}&s=${query}`).then(res=>res.json());
}


function NavBar({movies,setMovies,setLoading,setError}) {
  const [query, setQuery] = useState("");
  let inputEl=useRef();
  useEffect(()=>{
     inputEl.current.focus();
  },[])
  useEffect(()=>{
    if (!query) return;
    let timer=setTimeout(async()=>{
         try {
          setError(null)
          setMovies([]);
          setLoading(true);
          const response=await getMovie(query);
          setMovies(response.Search);
          if (response.Error) {
            setError(response.Error);
        } else {
            setMovies(response?.Search);
        }
         } catch (error) {
            setError("unable to get movies")
         } finally {
          setLoading(false);
         }
    },1000)
return ()=>clearTimeout(timer);
  },[query])
  return (
    <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>
        <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          ref={inputEl}
        />
        <p className="num-results">
          Found <strong>{movies?.length}</strong> results
        </p>
      </nav>
  )
}

export default NavBar
