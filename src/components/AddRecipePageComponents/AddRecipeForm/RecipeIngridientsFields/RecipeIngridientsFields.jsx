import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { getAllIngredients } from 'redux/ingredients/ingredientsOperations';
import { useEffect } from 'react';
import { selectIngredients } from 'redux/ingredients/ingredientsSelectors';

import {
  StyledItemWrapper,
  StyledMeasureField,
  SelectWrapper,
  StyledCounterWrapper,
  StyledCounterButton,
  StyledCounterWindow,
  StyledDeleteButton,
  StyledListWrapper,
  StyledSelect,
  StyledSelectMeasures,
  SelectMeasureWrapper,
  SubTitleStyled,
  FlexWrapper,
  CrossIconStyled,
  MinusIconStyled,
  PlusIconStyled
} from './RecipeIngridientsFields.styled';
import { FormError } from '../validationAddRecipe';

export const IngredientsField = props => {
  const [counter, setCounter] = useState(1);
  const [ingredients, setIngredients] = useState([
    { id: 0, ingredient: {}, quantity: 1, measure: 'tbs' },
  ]);

 
  const dispatch = useDispatch();

  const ingredientsList = useSelector(selectIngredients);

  useEffect(() => {
    if (!ingredientsList || ingredientsList?.length === 0) {
      dispatch(getAllIngredients());
    }

    return;
  }, [dispatch, ingredientsList]);

  const measureList = ['tbs', 'tsp', 'kg', 'g'];

  const formikProps = useFormikContext();

  const setFormikValue = (name, value) => {
    formikProps.setFieldValue(name, value);
  };

  const measureSelectList = measureList.map(option => ({
    value: option.toLowerCase(),
    label: option,
  }));

  const ingredientSelectList = ingredientsList.map(option => ({
    value: option._id,
    label: option.ttl,
  }));

  const handleIngredientInputChange = (value, index) => {
    const object = ingredientSelectList.find(item => item.label === value);
    const newArray = [...ingredients];
    newArray.splice(index, 1, { ...ingredients[index], ingredient: object });
    setFormikValue('ingredients', newArray);
    setIngredients(newArray);
    props.funct(newArray)
  };

  const handleMeasureInputChange = (value, index) => {
    const newArray = [...ingredients];
    newArray.splice(index, 1, { ...ingredients[index], measure: value });
    setFormikValue('ingredients', newArray);

    setIngredients(newArray);
    props.funct(newArray)
  };
  const handleQuantityInputChange = (value, index) => {
    const newArray = [...ingredients];
    newArray.splice(index, 1, { ...ingredients[index], quantity: value });
    setFormikValue('ingredients', newArray);

    setIngredients(newArray);
    props.funct(newArray)
  };

  function decrement() {
    let result = counter - 1;
    const newArray = [...ingredients];
    newArray.pop();
    setCounter(result);
    setFormikValue('ingredients', newArray);
    setIngredients(newArray);
    props.funct(newArray)
  }

  function increment() {
    let result = counter + 1;
    const newArray = [...ingredients];
    newArray.push({
      id: uuidv4(),
      ingredient: '',
      quantity: 1,
      measure: 'tbs',
    });
    setCounter(result);
    setFormikValue('ingredients', newArray);
    setIngredients(newArray);
    props.funct(newArray)
  }

  function deleteItem(id) {
    const index = ingredients.findIndex(option => option.id === id);
    const newArray = [...ingredients];
    newArray.splice(index, 1);
    setIngredients(newArray);
    setCounter(newArray.length);
    setFormikValue('ingredients', newArray);
    console.log('item:', id, 'index:', index, ingredients);
  }

  return (
    <>
      <FlexWrapper>
        <SubTitleStyled>Ingredients</SubTitleStyled>
        <StyledCounterWrapper>
          <StyledCounterButton
            type="button"
            disabled={counter < 2 ? true : false}
            onClick={decrement}
          >
            <MinusIconStyled/>
          </StyledCounterButton>
          <StyledCounterWindow>{counter} </StyledCounterWindow>
          <StyledCounterButton
            type="button"
            onClick={increment}
            style={{ color: '#8BAA36' }}
          >
              <PlusIconStyled/>
          </StyledCounterButton>
        </StyledCounterWrapper>
      </FlexWrapper>
      <StyledListWrapper>
        {}
        {ingredients.map((item, index) => {
          return (
            <StyledItemWrapper key={item.id}>
              <SelectWrapper>
                <StyledSelect
                  classNamePrefix="Select"
                  options={ingredientSelectList}
                  name={`ingredients.ingredient.${index}.label`}
                  value={item.ingredient.label ? item.ingredient.label : null}
                  placeholder={
                    item.ingredient.label
                      ? item.ingredient.label
                      : 'Start entering ingredient'
                  }
                  onChange={e => handleIngredientInputChange(e.label, index)}
                ></StyledSelect>

                <FormError name={`ingredients.ingredient.${index}.label`} />
              </SelectWrapper>

              <SelectMeasureWrapper>
                {' '}
                <StyledMeasureField
                  type="text"
                  name={`ingredients.${index}.quantity`}
                  title="This field may contain only numbers."
                  required
                  pattern="^[a-zA-Z0-9а-яА-Я]+(([' -][a-zA-Z0-9а-яА-Я ])?[a-zA-Z0-9а-яА-Я]*)*$"
                  onChange={e =>
                    handleQuantityInputChange(e.currentTarget.value, index)
                  }
                  value={item.quantity}
                ></StyledMeasureField>
                <FormError name={`ingredients.${index}.quantity`} />
                <StyledSelectMeasures
                  isSearchable={false}
                  classNamePrefix="Select"
                  name="measure"
                  options={measureSelectList}
                  value={item.measure}
                  placeholder={item.measure}
                  onChange={e => handleMeasureInputChange(e.label, index)}
                ></StyledSelectMeasures>
              </SelectMeasureWrapper>
              <StyledDeleteButton
                type="button"
                disabled={counter < 2 ? true : false}
                onClick={() => deleteItem(item.id)}
              >
                <CrossIconStyled />
              </StyledDeleteButton>
            </StyledItemWrapper>
          );
        })}
      </StyledListWrapper>
    </>
  );
};
