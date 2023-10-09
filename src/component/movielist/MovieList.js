import React from 'react'
import MovieCard from '../MovieCard'
import './MovieList.css'
function MovieList({movie}) {
  return (
    <div className='grid-container'>
        {movie.map((el)=>  <MovieCard el={el}/>)}
    
    </div>
  )
}

export default MovieList
