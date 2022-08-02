import { Link, useLocation } from 'react-router-dom';
import { List } from 'components/SharedLayout/SharedLayout.styled';
//---------------------------------------------------//
export const FilmList = ({ filmList }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {filmList.map(({ title, id, name, poster_path }) => {
          return (
            <li key={id} style={{ width: 200 }}>
              <Link
                to={`/goit-react-hw-05-movies/movies/${id}`}
                state={{ from: location }}
              >
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : `https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif`
                  }
                  alt={title ? title : name}
                  width="200"
                />
                <p>{title ? title : name}</p>
              </Link>
            </li>
          );
        })}
      </List>
    </>
  );
};
