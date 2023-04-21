import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import { TabsList, Tab } from './CategoriesTabs.styled';
import { selectCategories } from 'redux/categories/categoriesSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategoriesList } from 'redux/categories/categoriesOperations';

export const CategoriesTabs = () => {
  const { categories } = useSelector(selectCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, [dispatch]);

  const ref = useRef();
  const { events } = useDraggable(ref);
    return (
         <TabsList  {...events} ref={ref}>
            {categories.length > 0 && categories.map(category => (
                <Tab to={`/categories/${category.toLowerCase()}`} key={category}>{category }</Tab>
            ))}
    </TabsList>
)
}

  return (
    <TabsList {...events} ref={ref}>
      {categories &&
        categories.map(category => (
          <Tab to={`/categories/${category.toLowerCase()}`} key={category}>
            {category}
          </Tab>
        ))}
    </TabsList>
  );
};
