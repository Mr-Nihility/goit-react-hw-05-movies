import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Home } from 'pages/Home';
import { SharedLayout } from './SharedLayout/SharedLayout ';
// import { Searchbar } from './Searchbar/Searchbar';
// import { MovieView } from 'pages/MovieView';
import { Cast } from './Cast/Cast';
import { Review } from './Review/Review';
// import NotFound from 'pages/NotFound';

const NotFound = lazy(() => import('pages/NotFound'));
const Searchbar = lazy(() => import('../pages/Searchbar'));
const MovieView = lazy(() => import('pages/MovieView'));
const Home = lazy(() => import('pages/Home'));

//--------------------------------------------------------------//
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<h2>Loading ...</h2>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/goit-react-hw-05-movies/movies"
            element={
              <Suspense fallback={<h2>Loading ...</h2>}>
                <Searchbar />
              </Suspense>
            }
          />
          <Route
            path="/goit-react-hw-05-movies/movies/:movieId"
            element={
              <Suspense fallback={<h2>Loading ...</h2>}>
                <MovieView />
              </Suspense>
            }
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
        </Route>

        <Route
          path="*"
          element={
            <Suspense fallback={<h2>Loading ...</h2>}>
              <NotFound />
            </Suspense>
          }
        />
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
