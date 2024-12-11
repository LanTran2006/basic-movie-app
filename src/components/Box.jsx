import React,{useState} from 'react'
import Movie from './Movie';
import {array} from 'prop-types'
function Loader() {
  return <p className="loader">Loading...</p>;
}

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔️</span> {message}
    </p>
  );
}
Box.propTypes= {
  movies: array
}

        
    function Box({movies,setSelectedId,loading,error,setIsOpen2}) {
    const [isOpen, setIsOpen] = useState(true);
    
  return (
    <div className="box">
       {loading && <Loader/>}
       {error && <ErrorMessage message={error}/>}
       
          <button
            className="btn-toggle"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? "-" : "+"}
          </button>

          {isOpen && (
            <ul className="list">
              {movies?.map((movie,idx) => (
                <Movie setIsOpen={setIsOpen2} setSelectedId={setSelectedId} key={idx} movie={movie}/>
              ))}
            </ul>
          )}
        </div>
  )
}

export default Box