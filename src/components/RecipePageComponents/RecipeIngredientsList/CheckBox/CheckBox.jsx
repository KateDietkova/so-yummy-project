import { useDispatch } from "react-redux";
import {  useState } from "react";
import { addToShoppingList, deleteFromShoppingList} from 'redux/shoppingList/shoppingListOperations';

import { CheckBoxSvg, Box } from "./CheckBox.styled";


export const Checkbox = ({ _id, ttl, thb, measure}) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
 
  
  // useEffect(() => {
  //   setChecked(isChecked);
  // }, [isChecked])
  
  const handleChange = (event, data) => {
    if (!checked) {
      dispatch(addToShoppingList(data)).then(()=>setChecked(true))
      
    } else {
      dispatch(deleteFromShoppingList(checked)).then(()=>setChecked(false));
      
    }
     
  };

  return <Box
    id={_id}
    type="checkbox"
    
    onClick={event => handleChange(event, {ttl, thb, measure})}>{checked && 
    <CheckBoxSvg />
  }</Box>;
};