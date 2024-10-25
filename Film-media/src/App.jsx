import { useEffect, useState } from "react";
import SearchIcon from "./assets/search.svg";
// import MakeCart from "./Cart.jsx";

// const API_URL = "http://www.omdbapi.com/?apikey=d3684f4b";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (i) => {
    const url = `https://api.tvmaze.com/shows/${i}`;
    const options = { method: "GET", headers: { accept: "application/json" } };

    try {
      const res = await fetch(url, options);
      const data = await res.json();
      setMovies((prevMovies) => [...prevMovies, data]); // Add each movie to the movies array
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    for (let i = 1; i < 12; i++) {
      searchMovies(i);
    }
  }, []);

  return (
    <>
      <div className="search">
        <h1>Movieland</h1>
        <input
          type="text"
          placeholder="Search for movies"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="" onClick={() => searchMovies(searchTerm)} />
      </div>
      <div className="container">
        {" "}
        {/* Add this container */}
        {movies.map((movie, index) => (
          <div key={index}>
            <figure>
              <img src={movie.image?.medium} alt={movie.name} />
              <figcaption>{movie.name}</figcaption>
            </figure>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
