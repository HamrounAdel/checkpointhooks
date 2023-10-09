import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaTrashAlt,FaCheck } from "react-icons/fa";

function MovieCard({el,handelDelet,handelCheck}) {
    console.log('dfg',el)

  return (
    <div>
      <Card style={{ width: '18.2rem' ,height:'40rem'}}>
      <img variant="top" src={el.imageSrc
    } style={{width:'290px',height:'350px'}}/>
      <Card.Body>
        <Card.Title>
        <span style={{ color: el.checked ? 'red' : 'black' }}>{el.title}  </span>
           <FaTrashAlt style={{color:'red'}} onClick={()=>handelDelet(el.id)}/>
           <FaCheck  style={{color:'green'}} onClick={()=>handelCheck(el.id)} />
        </Card.Title>
        
        <Card.Text>
        Date de sortie:{el.sortie}<br/>
        Genre:{el.genre}<br/>
        Description:{el.description}<br/>
        Rate:{el.rate}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard
