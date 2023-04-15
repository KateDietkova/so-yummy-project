import { Field, Formik, Form } from 'formik';

import {
  CameraIconStyled,
  FieldFileWrapper,
  FieldInputWrapper,
  FieldsWrapper,
  ImageInput,
  StyledInput,
} from './RecipeDescriptionFields.styled';

const initialValues = {
  image: null,
  title: '',
  about: '',
  category: '',
  time: '',
};

const schema = {};

const handleFormSubmit = () => {};

export const RecipeDescriptionFields = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleFormSubmit}
    >
      <Form>
        <FieldFileWrapper>
          <CameraIconStyled />
          <ImageInput type="file" name="image"></ImageInput>
          {/* <StyledInput /> */}
        </FieldFileWrapper>

        <FieldsWrapper>
          <Field
            type="text"
            name="title"
            placeholder="Enter item title"
          ></Field>
          <Field
            type="text"
            name="about"
            placeholder="Enter about recipe"
          ></Field>
          <Field type="text" name="category" placeholder="Category"></Field>
          <Field type="text" name="time" placeholder="Cooking time"></Field>
        </FieldsWrapper>
      </Form>
    </Formik>
  );
};
