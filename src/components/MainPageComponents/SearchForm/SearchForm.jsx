import { Formik } from 'formik';
import {
  FormSearchMain,
  FieldSearchMain,
  SearchBtn,
} from './SearchForm.styled';

const initialValue = {
  searchQuery: '',
};

export const SearchForm = () => {
  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
  };

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      <FormSearchMain>
        <FieldSearchMain type="text" name="searchQuery" />
        <SearchBtn>
          <div className="inner">Search</div>
        </SearchBtn>
      </FormSearchMain>
    </Formik>
  );
};
