import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchRecipesByCategory } from 'redux/categories/categoriesOperations';
import { selectRecipesByCategory, selectCategoriesIsLoading, selectCategoriesRecipesError } from 'redux/categories/categoriesSelectors';
import { Loader } from 'components/universalComponents/Loader/Loader';

import { RecipesGallery } from 'components/universalComponents/RecipesGallery/RecipesGallery';

export const CategoriesRecipesList = () => {
    const recipes = useSelector(selectRecipesByCategory);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const error = useSelector(selectCategoriesRecipesError);

    const dispatch = useDispatch();
    const { categoryName } = useParams();

    useEffect(() => {
        const page = 1;
        dispatch(fetchRecipesByCategory({categoryName, page} ))
    }, [dispatch, categoryName]);
    return (
        <>
            {recipes.length > 0 && !isLoading && <RecipesGallery recipes={recipes} />}
            {isLoading && <Loader />}
            {error && <p>Whoops, something went wrong...</p>}
        </>
    )
}