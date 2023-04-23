import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import { TabsList, Tab } from './CategoriesTabs.styled';
import { selectCategories, selectCategoriesIsLoading, selectCategoriesRecipesError } from 'redux/categories/categoriesSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategoriesList } from 'redux/categories/categoriesOperations';
import { Loader } from 'components/universalComponents/Loader/Loader';


export const CategoriesTabs = () => {
  const { categories } = useSelector(selectCategories);
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
      {categories.length > 0 &&
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
