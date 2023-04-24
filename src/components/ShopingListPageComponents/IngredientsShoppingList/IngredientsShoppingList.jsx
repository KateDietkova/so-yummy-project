import {Wrapper, Title, Container, IngredientsList, IngredientsItem} from './IngredientsShoppingList.styled'

export const IngredientsShoppingList = () => {
    return (
        <>
        <Wrapper>
            <Title>Products</Title> 
            <Container>
                <Title>Number</Title>   
                <Title>Remove</Title> 
            </Container>
        </Wrapper>
                    <IngredientsList>
                <IngredientsItem></IngredientsItem>
            </IngredientsList>
            </>
)
}