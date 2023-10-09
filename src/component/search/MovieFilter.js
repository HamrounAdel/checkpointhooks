import React from 'react'



function MovieFilter({setInputTitle,setInputRate}) {

  
  return (
    <>
    <h4 style={{color:'blueviolet'}}>Filter movies</h4>
    <div style={{display:'flex'}}>
      
     <input  placeholder='filtre par title....' 
      onChange={(e)=>setInputTitle(e.target.value)}/>
    <br/><br/>
   
    <input  placeholder='filtre par rate ...' 
    onChange={(e)=>setInputRate(e.target.value)}/> 
      <br/>
    </div>
    </>
  )
}

export default MovieFilter
