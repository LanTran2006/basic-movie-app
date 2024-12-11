import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/Nav";
import Watched from "./components/Watched";
import Summary from "./components/Summary";
import Box from "./components/Box";
import Preference from "./components/Preference";
import useFetch from "./hooks/useFetch";
import Movie from "./components/Movie";
import Detail from "./components/Detail";
import useLocalStorage from "./hooks/useLocalStorage";
export const api_key = "a980920f";

export default function App() {
  const {
    loading,
    data: movies,
    error,
    setData: setMovies,
    setLoading,
    setError,
  } = useFetch(`https://www.omdbapi.com/?apikey=${api_key}&s=`, "harry");
  const [watched, setWatched] = useLocalStorage([]);
  let [selectedId, setSelectedId] = useState(null);
  const [isOpen, setIsOpen] = useState(true);//for prefernece
   useEffect(()=>{
     if (selectedId) {
      document.title=movies.find(item=>item.imdbID==selectedId).Title;
     } else {
      document.title='usePopcorn';
     }
   },[selectedId])
  return (
    <>
      <NavBar
        setError={setError}
        setLoading={setLoading}
        setMovies={setMovies}
        movies={movies}
      />
      <main className="main">
        <Box
          setIsOpen2={setIsOpen}
          loading={loading}
          error={error}
          setSelectedId={setSelectedId}
          movies={movies}
        />
        <Preference isOpen={isOpen} setIsOpen={setIsOpen}>
          {selectedId ? (
            <Detail watched={watched} setWatched={setWatched} setSelectedId={setSelectedId} id={selectedId} />
          ) : (
            <>
              <Summary watched={watched} />
              <Watched setWatched={setWatched} watched={watched} />
            </>
          )}
        </Preference>
      </main>
    </>
  );
}
