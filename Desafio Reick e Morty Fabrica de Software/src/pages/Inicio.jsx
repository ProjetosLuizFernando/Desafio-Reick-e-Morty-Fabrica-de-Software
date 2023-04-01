import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import "./GaleriaGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topgaleria, setTopgalerias] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopgaleria(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${galeriaURL}top_rated?${apiKey}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);

  console.log(topgaleria);

  return (
    <div className="container">
      <h2 className="title">As Melhores Galerias:</h2>
      <div className="galeria-container">
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={galeria.id} galeria={galeria} />)}
      </div>
    </div>
  );
};

export default Home;
