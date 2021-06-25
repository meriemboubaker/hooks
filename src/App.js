import React from 'react';
import MovieList from './Components/movieList.js'
import MovieCard from './Components/movieCard'
import MyVerticallyCenteredModal from './Components/modal'
import Filter from './Components/filter'
import Button from 'react-bootstrap/Button'

import './App.css';

function App() {
  const movies = [{
    title: 'Avangers: Endgame',
    bio: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.',
    img: "https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg"
  },
  {
    title: 'Avengers: Infinity war',
    bio: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
    img: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    title: 'Luca',
    bio: 'On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human.o',
    img:'https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg'},
  {
    title: 'Stowaway',
    bio: 'A stowaway on a mission to Mars sets off a series of unintended consequences.',
    img:"https://m.media-amazon.com/images/M/MV5BMWYwMWQxMmUtNjU3MS00NjIwLTllYWMtNzcxYzRkMWYyYTkwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"},
  {
    title: 'Mortal Kombat',
    bio: "MMA fighter Cole Young seeks out Earth's greatest champions in order to stand against the enemies of Outworld in a high stakes battle for the universe.",
    img:"https://m.media-amazon.com/images/M/MV5BY2ZlNWIxODMtN2YwZi00ZjNmLWIyN2UtZTFkYmZkNDQyNTAyXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg"},
  {
    title: 'Spiral',
    bio: 'A criminal mastermind unleashes a twisted form of justice in Spiral, the terrifying new chapter from the book of Saw.',
    img:"https://m.media-amazon.com/images/M/MV5BZjI4ZWQwYzctMGJlMi00OTE1LWFkNjMtY2VlOGQxZmVhNDYyXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg"},
  {
    title: 'Friends: The Reunion',
    bio: 'An unscripted Friends reunion special.',
    img:"https://www.ecranlarge.com/uploads/image/001/378/friends-the-reunion-affiche-1378625.jpg"}]
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="App">
      <Filter />
      <div className='container'>
        {movies.map(movie => (<MovieList title={movie.title} text={movie.bio} myimage={movie.img} />))}
      </div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        +ADD
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </div>

  );
}

export default App;
