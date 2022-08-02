import { getCastMovies } from 'API/api-services';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem } from './CastItem';
import { List } from 'components/SharedLayout/SharedLayout.styled';
//----------------------------------------------//

export const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCastMovies(movieId).then(data => {
      console.log(data);
      setMovieCast(data.cast);
    });
  }, [movieId]);
  return (
    <>
      {movieCast && movieCast.length ? (
        <List>
          {movieCast.map(item => {
            return (
              <li key={item.id}>
                <CastItem cast={item}></CastItem>
              </li>
            );
          })}
        </List>
      ) : (
        <p>No data</p>
      )}
    </>
  );
};
