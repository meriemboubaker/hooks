import React from 'react';
import Card from "react-bootstrap/Card"
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from "react-rating-stars-component";
import "../App.css"

const MovieCard = (props) => {
  
  return(
  
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={props.myimage}/>
<Card.Body>
  <Card.Title>{props.title}</Card.Title>
  <Card.Text>
    {props.text}
  </Card.Text>

  <ReactStars
    count={5}
   
    size={24}
    edit={false}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />,
 
      
</Card.Body>
</Card>)}
export default MovieCard;