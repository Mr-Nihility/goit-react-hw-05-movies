import { Route, Routes } from 'react-router-dom';
import { Home } from 'components/Home/Home';
import { SharedLayout } from './SharedLayout/SharedLayout ';
import { Searchbar } from './Searchbar/Searchbar';
import { MovieCard } from './MovieCard/MovieCard';
//--------------------------------------------------------------//
export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/goit-react-hw-05-movies/movies"
            element={<Searchbar />}
          />
          <Route
            path="/goit-react-hw-05-movies/movies/:movieId"
            element={<MovieCard />}
          >
            <Route path="cast" />
            <Route path="reviews" />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
/*
'/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
'/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
'/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
/movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
/movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.
*/
