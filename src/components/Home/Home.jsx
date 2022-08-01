import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPoPMovies } from 'API/api-services';

export const Home = () => {
  const [popMovieList, setPopMovies] = useState([]);
  // const isFirstLoad = useRef(true);

  useEffect(() => {
    // if (isFirstLoad.current) {
    //   isFirstLoad.current = false;
    //   return;
    // }
    getPoPMovies().then(data => {
      // console.log(data.results);
      setPopMovies(data.results);
    });
  }, []);

  return (
    <>
      <ul>
        {popMovieList.map(({ title, id, name }) => {
          return (
            <li key={id}>
              <Link to={`/goit-react-hw-05-movies/movies/${id}`}>
                {title ? title : name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
