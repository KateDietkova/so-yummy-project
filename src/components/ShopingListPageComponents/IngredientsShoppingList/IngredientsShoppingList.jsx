import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { getShoppingList, deleteFromShoppingList } from 'redux/shoppingList/shoppingListOperations';
import { selectShoppingList, selectShoppingListError, selectShoppingListIsLoading } from 'redux/shoppingList/shoppingListSelectors';

import { RemoveBtn, Wrapper, Title, ContainerTitle, IngredientsList, IngredientsItem } from './IngredientsShoppingList.styled'
import { CgClose } from "react-icons/cg";


export const IngredientsShoppingList = () => {
    const list = useSelector(selectShoppingList);
    console.log(list)
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
            {list?.map(({_id, measure}) => (
                <IngredientsItem key={_id}>
                    <p>{measure}</p>
                    <RemoveBtn onClick={() => dispatch(deleteFromShoppingList(_id))}>{<CgClose size={20} />}</RemoveBtn>
                </IngredientsItem>

            ))}
            </IngredientsList>
            </>
)
}