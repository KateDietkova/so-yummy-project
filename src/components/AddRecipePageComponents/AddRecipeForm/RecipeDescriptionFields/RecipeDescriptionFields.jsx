import { Formik } from 'formik';
import { VscNoNewline } from 'react-icons/vsc';
import Select from 'react-select';
import {
  CameraIconStyled,
  FieldFileWrapper,
  FieldsWrapper,
  FormStyled,
  ImageInput,
  SelectWrapper,
  StyledField,
  StyledSelectLabel,
} from './RecipeDescriptionFields.styled';

const initialValues = {
  image: '',
  title: '',
  about: '',
  category: '',
  time: '',
};

const selectOptions = [
  'Beef',
  'Breakfast',
  'Chicken',
  'Dessert',
  'Goat',
  'Lamb',
  'Miscellaneous',
  'Pasta',
  'Pork',
  'Seafood',
  'Side',
  'Starter',
  'Vegan',
  'Vegetarian',
];
const options = selectOptions.map(option => ({
  value: option.toLowerCase(),
  label: option,
}));

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
          <SelectWrapper>
            <StyledSelectLabel>Category</StyledSelectLabel>
            <Select
              styles={{
                dropdownIndicator: () => ({
                  color: '#8BAA36',
                  width: '10px',
                  height: '5px',
                  cursor: 'pointer',
                  marginRight: '5px',
                  marginLeft: '13px',
                  marginBottom: '23px',
                }),
                indicatorSeparator: () => ({
                  display: 'none',
                }),
                placeholder: styles => {
                  return {
                    ...styles,
                    fontFamily: 'PoppinsRegular',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '1',
                    color: '#000000',
                  };
                },
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginLeft: 'auto',
                  border: 'none',
                  fontFamily: 'PoppinsRegular',
                  fontWeight: '400',
                  fontSize: '12px',
                  lineHeight: '1',
                  letterSpacing: '-0.02em',
                  color: '#000000',
                }),
                option: (styles, { data }) => {
                  return {
                    ...styles,
                    fontFamily: 'PoppinsRegular',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '1.5',
                    letterSpacing: '-0.02em',
                    color: '#000000',
                    opacity: '0.5',
                  };
                },
                menu: (styles, { data }) => {
                  return {
                    ...styles,
                    width: '123px',
                    height: '144px',
                    backgroundColor: '#FFFFFF',
                    boxShadow:
                      ' 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074)',
                    borderRadius: ' 6px',
                    fontFamily: 'PoppinsRegular',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '1.5',
                    letterSpacing: '-0.02em',
                    color: '#000000',
                    opacity: 0.5,
                  };
                },
              }}
              options={options}
              placeholder="Breakfast"
            ></Select>
          </SelectWrapper>

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
