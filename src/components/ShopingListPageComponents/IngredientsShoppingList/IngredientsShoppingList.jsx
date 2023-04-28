import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getShoppingList, deleteFromShoppingList } from 'redux/shoppingList/shoppingListOperations';
import { selectShoppingList, selectShoppingListError, selectShoppingListIsLoading } from 'redux/shoppingList/shoppingListSelectors';

import { selectIngredients } from 'redux/ingredients/ingredientsSelectors';
import { getAllIngredients } from 'redux/ingredients/ingredientsOperations';

import {TextMessage, MeasureWrap, IngredientWrap, Measure, IngredientImgFrame, IngredientTitle, IngredientImg, RemoveBtn, Wrapper, Title, ContainerTitle, IngredientsList, IngredientsItem } from './IngredientsShoppingList.styled'
import { CgClose } from "react-icons/cg";
import { Loader } from 'components/universalComponents/Loader/Loader';
import IngredientsPlaceholder from '../../../assets/svg/mocks/food-default.svg';


export const IngredientsShoppingList = () => {
    // const list = useSelector(selectShoppingList);
    // console.log(list)

    const ingredients = useSelector(selectIngredients);
        console.log(ingredients)
    const isLoading = useSelector(selectShoppingListIsLoading);
    const error = useSelector(selectShoppingListError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllIngredients())
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
            {isLoading && <Loader />}
            {ingredients.length === 0 && !isLoading && !error && (<TextMessage>Your shopping list is empty...</TextMessage>)}
            <IngredientsList>
            {!isLoading && ingredients?.map(({_id,id, ttl, thb, measure}) => (
                <IngredientsItem key={id}>
                    <IngredientWrap>
                        <IngredientImgFrame>
                            <IngredientImg src={thb ? thb : IngredientsPlaceholder} alt={ttl } />
                        </IngredientImgFrame>
                        <IngredientTitle>{ ttl}</IngredientTitle>
                    </IngredientWrap>
                    <MeasureWrap>
                        <Measure>{measure}</Measure>
                    <RemoveBtn onClick={() => dispatch(deleteFromShoppingList(_id))}>{<CgClose size={20} />}</RemoveBtn>
                    </MeasureWrap>
                </IngredientsItem>
            ))}
                {error && <p>Whoops, something went wrong...</p>}
            </IngredientsList>
            </>
)
}