import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchRecipesByCategory } from 'redux/categories/categoriesOperations';
import { selectRecipesByCategory } from 'redux/categories/categoriesSelectors';


import { List, Recipe, RecipeContainer, Description, RecipeImg } from "./RecipesList.styled"

export const RecipesList = () => {
    const recipes = useSelector(selectRecipesByCategory);
    const dispatch = useDispatch();
    const { categoryName } = useParams();

    useEffect(() => {
        dispatch(fetchRecipesByCategory(categoryName ))
    }, [dispatch, categoryName]);

        return (
        <List>
            {recipes && recipes.map(({ _id, title, thumb }) => (
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

// export const RecipesList = ({items = []}) => {
//     return (
//         <List>
//             {items.map(({ _id, title, thumb }) => (
//                 <Recipe key={_id}>
//                     <RecipeContainer>
//                         <Description>
//                             <p>{title}</p>
//                             </Description>
//                         <RecipeImg src={thumb} alt={title} />
//                         </RecipeContainer>
//                </Recipe>
//            ))}
//         </List>
// )
// }

