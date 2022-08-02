import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import {
  SearchHeader,
  SearchBtn,
  SearchForm,
  SearchLabel,
  SearchInput,
} from './Searchbar.styles';
import { toast } from 'react-toastify';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getSerchMovies } from 'API/api-services';
//---------------------------------------------//

const Searchbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState('');
  const [searchFilmList, setSearchFilmList] = useState(null);
  // let navigate = useNavigate();
  const handlerInput = e => {
    // setSearchParams({ ['query']: e.target.value });
    setQuery(e.target.value);
  };
  useEffect(() => {
    getSerchMovies(searchParams.get('query')).then(data => {
      console.log(data.results);
      setSearchFilmList(data.results);
    });
  }, [searchParams]);

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
    setSearchParams({ query: query });
  };

  return (
    <>
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
    </>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { Searchbar };
