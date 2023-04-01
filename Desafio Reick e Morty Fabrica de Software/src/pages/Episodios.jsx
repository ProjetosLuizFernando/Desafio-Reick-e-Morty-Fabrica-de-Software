import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MoviesGrid.css";

const Search = () => {
  const [episodioParams] = useEpisodioParams();

  const [galeria, setGaleria] = useState([]);
  const query = episodioParams.get("q");

  const getSearchedGaleria = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setGaleria(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedGaleria(searchWithQueryURL);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="galeria-container">
        {movies.length > 0 &&
          movies.map((movie) => <GaleriaCard key={galeria.id} galeria={galeria} />)}
      </div>
    </div>
  );
};

export default Search;
