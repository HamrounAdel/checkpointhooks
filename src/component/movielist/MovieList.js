import React from 'react'
import MovieCard from '../MovieCard'
import './MovieList.css'
function MovieList({movie,inputTitle,inputRate}) {
  return (
    <div className='grid-container'>
        {movie.filter((el)=> (el.title.toLowerCase().includes(inputTitle.toLowerCase().trim()))&& el.rate>=inputRate)
        .map((el)=>  <MovieCard el={el}/>)}
    
    </div>
  )
}

export default MovieList
