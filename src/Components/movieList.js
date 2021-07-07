import React from 'react';
import MovieCard from "./MovieCard"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
import {Link} from 'react-router-dom'


const MovieList = (props) => {
    const Movies=[...props.movieArray]
    console.log(Movies)
  
  return(
<div className='movieCard'>
    <div className='movieList'>
    <div className='wrapp'>
{Movies.map(movie => (
  <div>

<Link to={{pathname:`/description/${movie.id}`,state:{list:Movies}}}>
  <MovieCard title={movie.title} myimage={movie.img} stars={movie.stars} text={movie.bio} />
</Link>
  </div>))}

</div>


  
</div>
</div>)}
export default MovieList;