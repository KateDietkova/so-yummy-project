import { List, Recipe, RecipeContainer, Description, RecipeImg, RecipeNavLink } from './RecipesGallery.styled'

export const RecipesGallery = ({recipes}) => {
    return (
               <List>
            {recipes && recipes.map(({ _id, title, thumb }) => (
                <Recipe key={_id}>
                    <RecipeNavLink to={`/recipe/${_id}`}>
                    <RecipeContainer>
                        <Description>
                            <p>{title}</p>
                            </Description>
                        <RecipeImg src={thumb} loading="lazy" alt={title} />
                        </RecipeContainer>
                        </RecipeNavLink>
               </Recipe>
           ))}
        </List>
    )
}