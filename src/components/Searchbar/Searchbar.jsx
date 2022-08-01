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
//---------------------------------------------//
const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

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
    onSubmit(query);
    setQuery('');
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
