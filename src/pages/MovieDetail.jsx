import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";

function MovieDetail() {
  const { slug } = useParams();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`${backendUrl}/movies/${slug}`).then((resp) => {
      setMovie(resp.data.data);
    });
  }, []);

  return (
    <>
      {movie && (
        <>
          <section>
            <img
              className="w-50"
              src={`${backendUrl}/images/${movie.image}`}
              alt=""
            />
            <h1>{movie.title}</h1>
            <h2 className="text-primary">{movie.author}</h2>
            <p>Voto: {movie.vote_avg}</p>
            <p>Genre: {movie.genre}</p>
            <p>{movie.abstract}</p>
          </section>
          <section>
            <div className="row row-cols-1 g-3">
              {movie.reviews.map(curReview => <ReviewCard key={curReview.id} review={curReview} />)}
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default MovieDetail;