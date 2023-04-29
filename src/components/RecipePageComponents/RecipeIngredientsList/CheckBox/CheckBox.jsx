import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  addToShoppingList,
  deleteFromShoppingList,
} from '../../../../redux/shoppingList/shoppingListOperations';

import { CheckBoxSvg, Box } from './CheckBox.styled';

export const Checkbox = ({
  ingredient,
  isChecked,
  idIngredientsShoppingList,
}) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(isChecked);

  console.log('idIngredientsShoppingList', idIngredientsShoppingList);

  const handleCheck = () => {
    if (!checked) {
      dispatch(
        addToShoppingList({ id: ingredient._id, measure: ingredient.measure })
      );
      setChecked(true);
    } else {
      dispatch(deleteFromShoppingList({ _id: idIngredientsShoppingList }));
      setChecked(false);
    }
  };

  return <Box onClick={handleCheck}>{checked && <CheckBoxSvg />}</Box>;
};
