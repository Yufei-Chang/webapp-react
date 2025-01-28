import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <section>
        <h1>Benvenuto topo di fogna, in questo fantasmitico mondo di pellicole!</h1>
        <p>
          Qui puoi lasciare la tua recensione e vedere le recensioni degli altri, ma vacci piano con le parole.
        </p>
        <Link to="/movies" className="btn btn-primary">Dai un'occhiata ai film</Link>
      </section>
    </>
  );
}

export default HomePage;