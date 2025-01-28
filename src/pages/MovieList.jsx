import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import MovieCard from "../components/MovieCard";

function MovieList() {
  const genres = ["Thriller", "Fantascienza", "Drammatico"];

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const getMovies = () => {
    const params = {};
    if (search.length > 0) {
      params.search = search;
    }

    if (selectedGenre !== "") {
      params.genre = selectedGenre;
    }

    axios.get(`${backendUrl}/movies`, { params }).then((resp) => {
      setMovies(resp.data.data);
    });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <section>
        <h1>Beccati sto catalogo cosmico di film!</h1>
        <p>Top film consigliati, non in base alle tue preferenze</p>
      </section>
      <section>
        <h2>Elenco dei film</h2>
        <div className="my-4 d-flex">
          {/* Filtro per genere */}
          <select
            name=""
            id=""
            value={selectedGenre}
            onChange={(event) => setSelectedGenre(event.target.value)}
          >
            <option value="">Tutti</option>
            {genres.map((curGenre, index) => (
              <option key={index} value={curGenre}>
                {curGenre}
              </option>
            ))}
          </select>
          {/* Campo di ricerca */}
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="form-control"
            type="search"
            aria-label="Cerca film per parola chiave"
            placeholder="Cerca film"
          />
          <button onClick={getMovies} className="btn btn-primary ms-2">
            Cerca
          </button>
        </div>
        {movies.length > 0 ? (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            {movies.map((curMovie) => (
              <div className="col" key={curMovie.id}>
                <MovieCard movie={curMovie} />
              </div>
            ))}
          </div>
        ) : (
          <div className="alert alert-warning">
            Hey amico, mi dispiace ma siamo tornati a mani vuote..
          </div>
        )}
      </section>
    </>
  );
}

export default MovieList;