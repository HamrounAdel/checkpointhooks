import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import MovieList from './component/movielist/MovieList';
import MovieFilter from './component/MovieFilter';
import MovieAdd from './component/add/MovieAdd';


function App() {
  const[movie,setMovie]=useState([
    {id:1,title: 'John Wick: Chapitre 4 ', genre:'Action',
    description:'John Wick: Chapitre 4 est un film action américain réalisé par Chad Stahelski et sorti en 2023.',
    rate:7.8,sortie:2023,imageSrc:'./images/film1.jpg'},

    {id:2,title:'La Petite Sirène ' ,genre:'fantastique musical',
    description:'La Petite Sirène est un film musical fantastique américain réalisé par Rob Marshall et sorti en 2023.',
    rate:7.2,sortie:2023,imageSrc:'./images/film2.jpg'},

    {id:3,title:'Fast and Furious 10' ,genre:'Action',
    description:'Fast and Furious 10 ou Rapides X au Québec (Fast X) est un film action américain réalisé par Louis Leterrier et sorti en 2023',
    rate:2.9,sortie:2023,imageSrc:'./images/film3.jpg'},

    {id:4,title: 'Oppenheimer',genre:'Action',
    description:'The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.',
    rate:8.5,sortie:2023,imageSrc:'./images/film4.jpg'},

    {id:5,title:'Tyler Rake 2' ,genre:'Action',
      description:'Ayant échappé de peu à la mort, intrépide mercenaire Tyler Rake revient pour une nouvelle mission périlleuse : extraire de prison la famille un impitoyable gangster.',
      rate:6.5,sortie:2023,imageSrc:'./images/film5.jpg'},

    {id:6,title:'Equalizer 3' ,genre:'Action',
    description:'Equalizer 3 ou Le justicier 3 au Québec, est un film action américain réalisé par Antoine Fuqua et sorti en 2023.',
    rate:7,sortie:2023,imageSrc:'./images/film6.jpg'},
  ]);
  
  const ajout=(newMovie)=>{
    setMovie([...movie,newMovie])
  }
    
const handelFilter=()=>{

}
   
       
  
  return (
    <div className='App'>
    <h1 style={{color:'red'}}>Movies film </h1><hr/>
    <div style={{display:'flex',justifyContent:'space-between'}}>
        <div> 
          <MovieFilter   handelFilter={handelFilter} />
        </div>
        <th/>
        <div>
          <MovieAdd  ajout={ajout}/>
        </div>
    
   </div>
    <hr/>
    <div ><MovieList movie={movie}/></div>  
     
    </div>
  );
}

export default App;
