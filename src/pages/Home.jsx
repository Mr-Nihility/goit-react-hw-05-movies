import { useEffect, useState } from 'react';
import { FilmList } from 'components/FilmsList/FilmList';
import { getPoPMovies } from 'API/api-services';

export default function Home() {
  const [popMovieList, setPopMovies] = useState([]);
  // const isFirstLoad = useRef(true);

  useEffect(() => {
    // if (isFirstLoad.current) {
    //   isFirstLoad.current = false;
    //   return;
    // }
    getPoPMovies().then(data => {
      setPopMovies(data.results);
    });
  }, []);

  return <FilmList filmList={popMovieList} />;
}
