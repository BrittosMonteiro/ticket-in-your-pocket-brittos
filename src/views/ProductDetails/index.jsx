import { useParams } from "react-router-dom";
import ContainerComponent from "../../components/Container";
import { useEffect, useState } from "react";
import { options } from "../../utils/config";
import './style.css'

export default function ProductDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovieDetails = async () => {
      const req = await fetch(
        `
      https://api.themoviedb.org/3/movie/${id}?language=pt-BR`,
        options
      );
      const res = await req.json();
      setMovie(res);
      document.body.style.backgroundImage = `url(https://image.tmdb.org/t/p/original//${res.backdrop_path})`
    };
    getMovieDetails();
  }, [id]);

  return (
    <ContainerComponent title={movie.title}>
      <div className="movie_description">
        <p>{movie.overview}</p>
      </div>
    </ContainerComponent>
  );
}
