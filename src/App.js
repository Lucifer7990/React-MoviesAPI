import { useEffect, useState } from "react";
import './App.css';
import Card from './component/card.jsx';
//8d91a0ec
const DATA_URL = 'http://www.omdbapi.com/?apikey=8d91a0ec';

function App() {

  const [movies, setMovies] = useState([])


  const searchMovies = async (title)=>{
    const response = await fetch(`${DATA_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }

  useEffect(()=>{
    searchMovies('meet')
  },[])
  
  function findMovies(){
    let titleInput = document.querySelector('.search')
    if(titleInput !== null){
      if(titleInput.value !== ''){
        searchMovies(titleInput.value)
      }
      else{
        searchMovies('meet')

      }
    }
    
  }
  
  return (
    <div>
      <h1 className="title">MovieApp</h1>

      <input onChange={findMovies} className="search" type='text' placeholder="search for movie"/>

      <div className="cont">
        {movies?.length > 0 ?(
          movies.map((movie)=>(<Card key={movie.imdbID} movie={movie} />))
        ):(
          <h1>no movies found</h1>
        )}
      </div>

    </div>
  );
}

export default App;
