import { useEffect, useState } from 'react';
import {
  SearchHeader,
  SearchBtn,
  SearchForm,
  SearchLabel,
  SearchInput,
} from './Searchbar.styles';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import { getSerchMovies } from 'API/api-services';
import { FilmList } from 'components/FilmsList/FilmList';
//---------------------------------------------//

export default function Searchbar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState('');
  const [searchFilmList, setSearchFilmList] = useState([]);

  const handlerInput = e => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    getSerchMovies(searchParams.get('query')).then(data => {
      console.log(data.results);
      setSearchFilmList(data.results);
    });
  }, [searchParams, query]);

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
      {searchFilmList?.length ? <FilmList filmList={searchFilmList} /> : <></>}
    </>
  );
}
