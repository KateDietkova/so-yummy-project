import { useDispatch } from "react-redux";
import {  useState, useEffect } from "react";
import { addToShoppingList, deleteFromShoppingList} from '../../../../redux/shoppingList/shoppingListOperations';

import { CheckBoxSvg, Box } from "./CheckBox.styled";


export const Checkbox = ({ ingredientId: ingredient, isChecked, measure }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState();
 
useEffect(() => {
    setChecked(isChecked);
  }, [isChecked])

  const handleCheck = () => {
    if (!checked) {
      dispatch(addToShoppingList({ ingredient, measure }));
      setChecked(true)
    } else {
      dispatch(deleteFromShoppingList({ ingredient, measure }));
      setChecked(false);
    }
  };
 
  return <Box
    onClick={handleCheck}>
    {checked && 
    <CheckBoxSvg />
    }
  </Box>;
};







  // useEffect(() => {
  //   if (shopList.length > 0) {
  //     const isInList = shopList.find(item => item.ttl === ttl);
  //     setChecked(isInList ? isInList._id : false);
  //   }
  // }, [shopList, dispatch, ttl]);