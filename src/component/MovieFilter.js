import React from 'react'
import { useState } from 'react';


function MovieFilter({handelFilter}) {

  const[input,setInput]=useState('')
  const[inputRate,setInputRate]=useState('')
  
  return (
    <>
    <h4 style={{color:'blueviolet'}}>Filter movies</h4>
    <div style={{display:'flex'}}>
      
     <input  placeholder='filtre par title....' value={input}
      onChange={(e)=>setInput(e.target.value)}/>
    <br/><br/>
   
    <input  placeholder='filtre par rate ...' value={inputRate}
      onChange={(e)=>setInputRate(e.target.value)}/> 
      <br/>
    </div>
    </>
  )
}

export default MovieFilter
