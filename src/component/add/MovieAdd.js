import React, { useState } from 'react'
import './MovieAdd.css'
import { v4 as uuidv4 } from 'uuid';
function MovieAdd({ajout}) {
    const[titles,setTitles]=useState('')
    const[descriptions,setDescriptions]=useState('');
    const[imageSrcs,setImageSrcs]=useState('')
    const[rates,setRates]=useState('')
    const[genres,setGenres]=useState('')
    const add=()=>{
      ajout({
          id:uuidv4(),
          title:titles,
          genre:genres,
          description:descriptions,
          rate:rates,
          sortie:2023,
          imageSrc:imageSrcs,
  
      },setTitles(''),setDescriptions(''),setImageSrcs(''),
      setRates(''),setGenres(''))
  }
  
  return (
  <>
  <h4 style={{color:'blueviolet'}}>Add movies</h4>
<div style={{display: 'grid', gap: '24px',gridTemplateColumns: 'repeat(4, 1fr)'}}>
  <form style={{display:'flex',justifyContent:'space-between'}}>
  <p>Title:</p>
  <input  placeholder='entre titre' value={titles}
      onChange={(e)=>setTitles(e.target.value)}/>
  </form ><br/>

  <form style={{display:'flex',justifyContent:'space-between'}}>
  <p>Description:</p>
    <input  placeholder='entre her....' value={descriptions}
      onChange={(e)=>setDescriptions(e.target.value)}/>
  </form><br/>

  <form style={{display:'flex',justifyContent:'space-between'}}>
  <p>imageSrc:</p>
  <input  placeholder='entre her.... ' value={imageSrcs}
      onChange={(e)=>setImageSrcs(e.target.value)}/>
  </form ><br/>

  <form style={{display:'flex',justifyContent:'space-between'}}>
  <p>Rate:</p>
  <input  placeholder='entre her.... ' value={rates}
      onChange={(e)=>setRates(e.target.value)}/>
  </form ><br/>

  <form style={{display:'flex',justifyContent:'space-between'}}>
  <p>Genre:</p>
  <input  placeholder='entre her.... ' value={genres}
      onChange={(e)=>setGenres(e.target.value)}/>
  </form ><br/>
  <button className='btn' onClick={()=>add()}>Add</button>
  </div>
    </>
  )
}

export default MovieAdd
