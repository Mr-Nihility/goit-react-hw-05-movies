import { Img } from 'components/MovieCard/MovieCard.styled';
import { PropTypes } from 'prop-types';
//---------------------------------------------------------------------//

export const CastItem = ({ cast }) => {
  const { character, name, profile_path } = cast;
  return (
    <>
      <Img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : `https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif`
        }
        alt={name}
      />
      <h3>{name}</h3>
      <p>Character: {character}</p>
    </>
  );
};

CastItem.propTypes = {
  cast: PropTypes.shape({
    character: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
  }),
};
