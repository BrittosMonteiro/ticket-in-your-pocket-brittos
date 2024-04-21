import { useEffect, useState } from "react";
import ContainerComponent from "../../components/Container";
import ItemListContainerComponent from "../../components/ItemListContainer";

export default function HomeView() {
  const [movies, setMovies] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDUxNzRkMzcwMGM1YWFiZjIzNWQ2ZDhjZWY1MTQwMyIsInN1YiI6IjY1ODJkMjUyYjM0NDA5NDZlMDFhZWJjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3dqemApaRhZuCyX64_RySFq0XePhbyiTtx3RNUVhu08",
    },
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        const req = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1",
          options
        );
        const res = await req.json();
        setMovies(res.results);
      } catch (err) {
        console.log(err);
      }
    };

    getMovies();
  }, []);

  return (
    <ContainerComponent title={"Em cartaz"}>
      {movies.length > 0 && <ItemListContainerComponent list={movies} />}
    </ContainerComponent>
  );
}
