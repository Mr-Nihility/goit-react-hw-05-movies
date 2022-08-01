import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  SearchHeader,
  SearchBtn,
  SearchForm,
  SearchLabel,
  SearchInput,
} from './Searchbar.styles';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { getSerchMovies } from 'API/api-services';
//---------------------------------------------//
const Searchbar = () => {
  const [query, setQuery] = useState('');
  const [searchFilm, setSearchFilm] = useState(null);
  let navigate = useNavigate();
  const handlerInput = e => setQuery(e.target.value);

  const handlerSubmit = e => {
    e.preventDefault();

    if (!query.trim()) {
      toast.error('empty field', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    getSerchMovies(query.trim())
      .then(data => {
        console.log(data.results);
        setSearchFilm(data.results[0]);
        console.log(searchFilm);
      })
      .finally(() =>
        navigate(`/goit-react-hw-05-movies/movies/${searchFilm.id}`)
      );
  };

  return (
    <SearchHeader>
      <SearchForm onSubmit={handlerSubmit}>
        <SearchBtn type="submit">
          <SearchLabel>Search</SearchLabel>
        </SearchBtn>

        <SearchInput
          type="text"
          name="query"
          value={query}
          autoComplete="off"
          onChange={handlerInput}
          autoFocus
          placeholder="Search movie"
        />
      </SearchForm>
    </SearchHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { Searchbar };
