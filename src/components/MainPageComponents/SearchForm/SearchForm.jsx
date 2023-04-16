import { Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FormSearchMain,
  FieldSearchMain,
  SearchBtn,
} from './SearchForm.styled';

const initialValue = {
  searchQuery: '',
};

export const SearchForm = () => {
  const [queryValue, setqueryValue] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setqueryValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!queryValue) return;
    navigate('search', { state: { searchQuery: queryValue } });
  };

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      <FormSearchMain>
        <FieldSearchMain
          type="text"
          name="searchQuery"
          onChange={handleChange}
          value={queryValue}
        />
        <SearchBtn type="submit">
          <div className="inner">Search</div>
        </SearchBtn>
      </FormSearchMain>
    </Formik>
  );
};
