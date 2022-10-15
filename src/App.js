import { useEffect, useState } from "react";
import MovieCart from "./Components/MovieCart";
import "./Styles/global.scss";
import SearchIcon from "./search.svg";
//f991d73f
const FAKE_API = "https://www.omdbapi.com?apikey=f991d73f";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const res = await fetch(`${FAKE_API}&s=${title}`);
    const data = await res.json();

    setMovies(data.Search);

    // console.log(data)
  };

  useEffect(() => {
    searchMovies("minion");
  }, []);

  return (
    <div className="App">
      <h1>Movie Rent</h1>
      <div className="search">
        <input
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>

        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        ></img>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCart movie={movie}></MovieCart>
          ))}
        </div>
      ) : (
        <div className="empty">No movies found</div>
      )}
    </div>
  );
}

export default App;
