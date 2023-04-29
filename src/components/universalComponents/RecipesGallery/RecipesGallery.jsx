import { List, Recipe, RecipeContainer, Description, RecipeImg, RecipeNavLink } from './RecipesGallery.styled';
import IngredientsPlaceholder from '../../../assets/svg/mocks/food-default.svg';

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
                        <RecipeImg src={thumb ? thumb : IngredientsPlaceholder} loading="lazy" alt={title} />
                        </RecipeContainer>
                        </RecipeNavLink>
               </Recipe>
           ))}
        </List>
    )
}