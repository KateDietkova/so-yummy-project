import {List, Recipe, RecipeContainer,Description, RecipeImg } from "./RecipesList.styled"

export const RecipesList = ({items = []}) => {
    return (
        <List>
            {items.map(({ _id, title, thumb }) => (
                <Recipe key={_id}>
                    <RecipeContainer>
                        <Description>
                            <p>{title}</p>
                            </Description>
                        <RecipeImg src={thumb} alt={title} />
                        </RecipeContainer>
               </Recipe>
           ))}
        </List>
)
}

