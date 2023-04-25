import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getShoppingList, deleteFromShoppingList } from 'redux/shoppingList/shoppingListOperations';
import { selectShoppingList, selectShoppingListError, selectShoppingListIsLoading } from 'redux/shoppingList/shoppingListSelectors';

import { Wrapper, Title, ContainerTitle, IngredientsList, IngredientsItem } from './IngredientsShoppingList.styled'


export const IngredientsShoppingList = () => {
    const list = useSelector(selectShoppingList);
    const isLoading = useSelector(selectShoppingListIsLoading);
    const error = useSelector(selectShoppingListError);
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(getShoppingList())
    }, [dispatch])


    return (
        <>
        <Wrapper>
            <Title>Products</Title> 
            <ContainerTitle>
                <Title>Number</Title>   
                <Title>Remove</Title> 
            </ContainerTitle>
        </Wrapper>
                    <IngredientsList>
                <IngredientsItem></IngredientsItem>
            </IngredientsList>
            </>
)
}