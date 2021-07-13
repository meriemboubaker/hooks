import React, { useState } from "react";
import MovieList from "./Components/MovieList";
import MyVerticallyCenteredModal from "./Components/Modal";
import Filter from "./Components/Filter";

import "./App.css";

function App(props) {
  const [Movies, setMovies] = useState(props.ListOfFilm);
  const [SearchTerm, setSearchTerm] = useState("");
  const [Rate, setRate] = useState(0);
  const [modal, setModal] = useState(false);

  const rating = (r) => {
    setRate(r);
  };
  const getTitre = (t) => {
    setSearchTerm(t);
  };
  const movieAddhandler = (addMovies) => {
    setMovies([...Movies, addMovies]);
  };
  const handleModal = (m) => {
    setModal(m);
  };
  console.log(Rate);
  return (
    <div className="App">
      <header>
        <Filter titre={getTitre} rate={rating} modalShow={handleModal} />
      </header>
      <main>
        <MovieList
          movieArray={Movies.filter(
            (elm) =>
              elm.title.toLowerCase().match(SearchTerm.toLowerCase().trim()) &&
              elm.stars >= Rate
          )}
        />

        <MyVerticallyCenteredModal
          show={modal}
          onHide={() => setModal(false)}
          addMovie={movieAddhandler}
        />
      </main>
      <footer>
        <h6> Go My Code 2021 © </h6>
      </footer>
    </div>
  );
}

export default App;
