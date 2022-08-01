import { getDetailsMovies } from 'API/api-services';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
//---------------------------------------------//
export const MovieCard = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getDetailsMovies(movieId).then(data => {
      console.log(data);
      setMovie(data);
    });
  }, [movieId]);

  return (
    <>
      <div>
        <img
          src={movie.poster_path}
          alt={movie.title ? movie.title : movie.name}
        />
      </div>
      <div>
        <h2>{movie.title ? movie.title : movie.name}</h2>
      </div>
    </>
  );
};
