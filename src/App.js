import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import MovieList from './component/movies/MovieList';
import MovieFilter from './component/search/MovieFilter';
import MovieAdd from './component/add/MovieAdd';
import data from './component/data';



function App() {
  
  const[movie,setMovie]=useState(data)
  const[inputTitle,setInputTitle]=useState('')
   const[inputRate,setInputRate]=useState('')

   //fonction pour ajouter movie film
  const ajout=(newMovie)=>{
    setMovie([...movie,newMovie])
  }
   // fonction pour supprimer  movie film 
const handelDelet=(id)=>{
setMovie(movie.filter((el)=> el.id!==id))
}
 //fonction pour checked movie film
  const handelCheck=(id)=>{
    setMovie(movie.map((el)=> el.id===id ?{...el,checked: !el.checked}  : el))
  }     
  
  return (
    <div className='App'>
    <h1 style={{color:'red'}}>Movies film </h1><hr/>
    <div style={{display:'flex',justifyContent:'space-between'}}>
        <div> 
          <MovieFilter   setInputTitle={setInputTitle} setInputRate={setInputRate}/>
        </div>
    
   </div>
    <hr/>
    
    <div ><MovieList  handelDelet={handelDelet} handelCheck={handelCheck} inputTitle={inputTitle} inputRate={inputRate} movie={movie}/></div>  
     <hr/>
     <div>
          <MovieAdd  ajout={ajout}/>
        </div>
    </div>
  );
}

export default App;
