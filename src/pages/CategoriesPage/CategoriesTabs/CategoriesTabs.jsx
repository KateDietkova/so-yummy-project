import { useRef, useEffect } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import { useDispatch, useSelector } from 'react-redux';

import { selectCategories, selectCategoriesIsLoading, selectCategoriesRecipesError } from 'redux/categories/categoriesSelectors';
import { fetchCategoriesList } from 'redux/categories/categoriesOperations';
import { Loader } from 'components/universalComponents/Loader/Loader';
import { TabsList, Tab } from './CategoriesTabs.styled';

export const CategoriesTabs = () => {
  const categories = useSelector(selectCategories);
  console.log(categories)
  const isLoading = useSelector(selectCategoriesIsLoading);
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
      {isLoading && <Loader />}
      {error && <p>Whoops, something went wrong...</p>}
    </TabsList>
  );
};
