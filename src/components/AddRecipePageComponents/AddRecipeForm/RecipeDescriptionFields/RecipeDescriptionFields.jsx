import { Field, Formik, Form } from 'formik';
import Select from 'react-select';
import { maxHeight } from 'styled-system';

import {
  CameraIconStyled,
  FieldFileWrapper,
  FieldsWrapper,
  FormStyled,
  ImageInput,
  StyledField,
} from './RecipeDescriptionFields.styled';

const initialValues = {
  image: null,
  title: '',
  about: '',
  category: '',
  time: '',
};

const selectOptions = [
  { value: 'beef', label: 'Beef' },
  { value: 'breakfast', label: 'Breakfast' },
  { value: 'chicken', label: 'Chicken' },
  { value: 'dessert', label: 'Dessert' },
  { value: 'goat', label: 'Goat' },
  { value: 'lamb', label: 'Lamb' },
  { value: 'miscellaneous', label: 'Miscellaneous' },
  { value: 'pasta', label: 'Pasta' },
  { value: 'pork', label: 'Pork' },
  { value: 'seafood', label: 'Seafood' },
  { value: 'side', label: 'Side' },
  { value: 'starter', label: 'Starter' },
  { value: 'vegan', label: 'Vegan' },
  { value: 'vegetarian', label: 'Vegetarian' },
];

const schema = {};

const handleFormSubmit = () => {};

export const RecipeDescriptionFields = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleFormSubmit}
    >
      <FormStyled>
        <FieldFileWrapper>
          <CameraIconStyled />
          <ImageInput type="file" name="image"></ImageInput>
        </FieldFileWrapper>

        <FieldsWrapper>
          <StyledField
            type="text"
            name="title"
            placeholder="Enter item title"
          ></StyledField>
          <StyledField
            type="text"
            name="about"
            placeholder="Enter about recipe"
          ></StyledField>
          <div>
            <label>Category</label>
            <Select
              style={(maxHeight = 162px)}
              options={selectOptions}
              placeholder="Breakfast"
            ></Select>
            {/* <StyledField
              type="text"
              name="category"
              placeholder="Category"
            ></StyledField> */}
          </div>

          <StyledField
            type="text"
            name="time"
            placeholder="Cooking time"
          ></StyledField>
        </FieldsWrapper>
      </FormStyled>
    </Formik>
  );
};
