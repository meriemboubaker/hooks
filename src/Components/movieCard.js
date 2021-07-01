import React from 'react';
import Card from "react-bootstrap/Card"
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from "react-star-rating-component";
import "../App.css"

const MovieCard = (props) => {
  
  return(
    <div  className='movieCard'>
  
<Card className='container' style={{ width: '14rem' }}>
<Card.Img className='image' variant="top" src={props.myimage}/>
<Card.Body >
<ReactStars
    name='star3'
    starCount={5}
    editing={false}
    value={props.stars}
  />
<div className='overlay1' >
  <div className='text'>
  <Card.Title>{props.title}</Card.Title>
  <Card.Text >
    {props.text}
  </Card.Text>
  </div>
  </div>   
</Card.Body>
</Card>
</div>)}
export default MovieCard;