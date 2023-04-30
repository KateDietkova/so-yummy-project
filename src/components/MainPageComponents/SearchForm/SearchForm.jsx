import { Formik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  FormSearchMain,
  FieldSearchMain,
  SearchBtn,
} from './SearchForm.styled';

const initialValue = {
  searchQuery: '',
};

const regex = new RegExp('(?=.*[\\p{L}])[\\p{L}\\s]+', 'gu');

export const SearchForm = ({
  addParamsToSearch,
  reversed = false,
  query = '',
}) => {
  const [queryValue, setqueryValue] = useState(query);

  const handleChange = e => {
    setqueryValue(e.target.value);
  };

  const handleSubmit = () => {
    const trimValue = queryValue.trim();
    if (!trimValue) {
      toast.error('Field should not be empty');
      return;
    }
    const matches = trimValue.match(regex);
    if (!matches) {
      toast.error('Please enter a valid request');
      return;
    }
    const query = matches.join('');
    addParamsToSearch(query);
  };

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      <FormSearchMain>
        <FieldSearchMain
          placeholder={'Enter the text'}
          reversed={reversed}
          type="text"
          name="searchQuery"
          onChange={handleChange}
          value={queryValue}
        />
        <SearchBtn type="submit" reversed={reversed}>
          <div className="inner">Search</div>
        </SearchBtn>
      </FormSearchMain>
    </Formik>
  );
};
