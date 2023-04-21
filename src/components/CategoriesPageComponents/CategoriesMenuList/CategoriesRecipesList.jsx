import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchRecipesByCategory } from 'redux/categories/categoriesOperations';
import { selectRecipesByCategory } from 'redux/categories/categoriesSelectors';

import { RecipesGallery } from 'components/universalComponents/RecipesGallery/RecipesGallery';

export const CategoriesRecipesList = () => {
        const recipes = useSelector(selectRecipesByCategory);
    const dispatch = useDispatch();
    const { categoryName } = useParams();

    useEffect(() => {
        dispatch(fetchRecipesByCategory(categoryName ))
    }, [dispatch, categoryName]);
    return (
        <>
            {recipes.length > 0 && <RecipesGallery recipes={recipes} />}
        </>
    )
}