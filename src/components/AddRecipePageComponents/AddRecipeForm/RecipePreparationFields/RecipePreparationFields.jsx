import { StyledWrapper,PositionBox } from './RecipePreparationFields.styled';
import { SubTitleStyled } from '../RecipeIngridientsFields/RecipeIngridientsFields.styled';
import { StyledPreparationField } from './RecipePreparationFields.styled';
import { useState, useEffect } from 'react';
import { FormError } from '../validationAddRecipe';
import { useFormikContext } from 'formik';

export const PreparationField = props => {
  const [preparation, setPreparation] = useState([]);
  const formikProps = useFormikContext();

  const setFormikValue = (name, value) => {
    formikProps.setFieldValue(name, value);
  };
  const handlePreparationInputChange = value => {
    // const newArray = value.split('\n');
    setFormikValue('preparation', value);
    setPreparation(value);
  };

  useEffect(() => {
    props.funct(preparation);
  }, [props, preparation]);

  return (
    <>
      <StyledWrapper>
        <SubTitleStyled>Recipe Preparation</SubTitleStyled>
        <PositionBox>
        <StyledPreparationField
          component="textarea"
          rows="10"
          cols="100"
          wrap="hard"
          type="text"
          name="preparation"  
          placeholder="Enter recipe"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          pattern="^[a-zA-Z0-9а-яА-Я]+(([' -][a-zA-Z0-9а-яА-Я ])?[a-zA-Z0-9а-яА-Я]*)*$"
          onChange={e => handlePreparationInputChange(e.currentTarget.value)}
          value={preparation}
        />
        <FormError name="preparation" /></PositionBox>
      </StyledWrapper>
    </>
  );
};
  