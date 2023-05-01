import { useRef, useEffect } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategories,
  selectCategoriesIsLoading,
  selectCategoriesRecipesError,
} from 'redux/categories/categoriesSelectors';
import { fetchCategoriesList } from 'redux/categories/categoriesOperations';
import { TabsList, Tab } from './CategoriesTabs.styled';

export const CategoriesTabs = () => {
  const categories = useSelector(selectCategories);
  const error = useSelector(selectCategoriesRecipesError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, [dispatch]);

  const ref = useRef();
  const { events } = useDraggable(ref);
  return (
    <TabsList {...events} ref={ref}>
      {categories?.length > 0 &&
        categories.map(category => (
          <Tab to={`/categories/${category.toLowerCase()}`} key={category}>
            {category}
          </Tab>
        ))}
      {error && <p>Whoops, something went wrong...</p>}
    </TabsList>
  );
};
