import React from 'react'
import MovieCard from './movieCard.js';
const MovieList =(props)=>{
    return (
    <div>
        
        <MovieCard  title={props.title} bio={props.bio} myimage={props.myimage}/>

    </div>
    
 ) }
export default MovieList

