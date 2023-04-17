import { ErrorMessage } from 'formik';
import * as yup from 'yup';
import { StyledErrorMessage } from './AddRecipeForm.styled';

const inputRegex =
  /^[a-zA-Z0-9а-яА-Я]+(([' -][a-zA-Z0-9а-яА-Я ])?[a-zA-Z0-9а-яА-Я]*)*$/;

export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <StyledErrorMessage>{message}</StyledErrorMessage>}
    />
  );
};

export const descrFieldsSchema = yup.object().shape({
  title: yup
    .string()
    .matches(inputRegex, {
      message: 'Title may contain only letters, apostrophe, dash and spaces.',
      excludeEmptyString: true,
    })
    .required('Please, enter title of the dish'),
  about: yup
    .string()
    .matches(inputRegex, {
      message:
        'Description may contain only letters, apostrophe, dash and spaces.',
      excludeEmptyString: true,
    })
    .required('Please, enter a short description of the dish'),
});
