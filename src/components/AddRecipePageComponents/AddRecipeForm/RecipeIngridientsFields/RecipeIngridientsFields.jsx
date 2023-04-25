import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIngredients } from 'redux/ingredients/ingredientsOperations';
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
  CrossIconStyled
} from './RecipeIngridientsFields.styled';
import { FormError } from '../validationAddRecipe';
export const IngredientsField = props => {
  const [counter, setCounter] = useState(1);
  const [ingredients, setIngredients] = useState([
    { id: 0, ingredient: {}, quantity: 1, measure: 'tbs' },
  ]);
  // const dispatch = useDispatch();

  // const ingredientsList = useSelector(selectIngredients)


  // useEffect(() => {
  //   if (!ingredientsList) {
  //   dispatch(fetchIngredients())
  
  // }}, [dispatch, ingredientsList]);
   
  ///  ф-ція отримання даних з редакс//



  useEffect(() => {
    props.funct(ingredients);
    
  }, [ingredients]);

  const measureList = ['tbs', 'tsp', 'kg', 'g'];

  const ingredientsList = [
    {
      _id: {
        $oid: '640c2dd963a319ea671e368c',
      },
      ttl: 'Challots',
      desc: 'A type of onion that has a mild, sweet flavor and a distinctive bulb shape, often used in French cuisine to add flavor to sauces, dressings, and other dishes.',
      t: '',
      thb: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564674/ovlvnvcuzttiplnzewm3.png',
    },
    {
      _id: {
        $oid: '640c2dd963a319ea671e3668',
      },
      ttl: 'Basil Leaves',
      desc: 'Basil, also called great basil, is a culinary herb of the family Lamiaceae (mints).\r\n',
      t: '',
      thb: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/c8mwndz8kbgb29wjn4eg.png',
    },
    {
      _id: {
        $oid: '640c2dd963a319ea671e366d',
      },
      ttl: 'Beef Fillet',
      desc: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and nutrients.\r\n\r\nMost beef skeletal muscle meat can be used as is by merely cutting into certain parts, such as roasts, short ribs or steak (filet mignon, sirloin steak, rump steak, rib steak, rib eye steak, hanger steak, etc.), while other cuts are processed (corned beef or beef jerky). Trimmings, on the other hand, are usually mixed with meat from older, leaner (therefore tougher) cattle, are ground, minced or used in sausages. The blood is used in some varieties called blood sausage. Other parts that are eaten include other muscles and offal, such as the oxtail, liver, tongue, tripe from the reticulum or rumen, glands (particularly the pancreas and thymus, referred to as sweetbread), the heart, the brain (although forbidden where there is a danger of bovine spongiform encephalopathy, BSE, commonly referred to as mad cow disease), the kidneys, and the tender testicles of the bull (known in the United States as calf fries, prairie oysters, or Rocky Mountain oysters). Some intestines are cooked and eaten as is, but are more often cleaned and used as natural sausage casings. The bones are used for making beef stock.',
      t: '',
      thb: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/zuhii6vl0wgaybsgjexk.png',
    },
  ];


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
  };

  const handleMeasureInputChange = (value, index) => {
    const newArray = [...ingredients];
    newArray.splice(index, 1, { ...ingredients[index], measure: value });
    setFormikValue('ingredients', newArray);
    setIngredients(newArray);
  };
  const handleQuantityInputChange = (value, index) => {
    const newArray = [...ingredients];
    newArray.splice(index, 1, { ...ingredients[index], quantity: value });
    setFormikValue('ingredients', newArray);
    setIngredients(newArray);
  };

  function decrement() {
    let result = counter - 1;
    const newArray = [...ingredients];
    newArray.pop();
    setCounter(result);
    setFormikValue('ingredients', newArray);
    setIngredients(newArray);
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
            -
          </StyledCounterButton>
          <StyledCounterWindow>{counter} </StyledCounterWindow>
          <StyledCounterButton
            type="button"
            onClick={increment}
            style={{ color: '#8BAA36' }}
          >
            +
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
                <CrossIconStyled/>
              </StyledDeleteButton>
            </StyledItemWrapper>
          );
        })}
      </StyledListWrapper>
    </>
  );
};
