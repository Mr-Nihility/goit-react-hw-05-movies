import { MovieCard } from 'components/MovieCard/MovieCard';
import { Outlet, Link } from 'react-router-dom';
import { getDetailsMovies } from '../API/api-services';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
//--------------------------------------///
export const MovieView = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getDetailsMovies(movieId).then(data => {
      // console.log(data);
      setMovie(data);
    });
  }, [movieId]);
  return (
    <>
      {movie && <MovieCard movie={movie} />}
      <hr />
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Review</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
