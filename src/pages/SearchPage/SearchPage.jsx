import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getRecipesByQuery } from 'services/api';
import { SearchForm } from 'components/MainPageComponents/SearchForm/SearchForm';
import { RecipesGallery } from 'components/universalComponents/RecipesGallery/RecipesGallery';
import { Pagination } from 'components/universalComponents/Pagination/Pagination';
import { BiChevronDown } from 'react-icons/bi';

import { MainTitleStyled } from 'components/universalComponents/MainTitle/MainTitle.styled';
import { Container } from 'components/universalComponents/Container/Container.styled';
import {
  Main,
  SearchSection,
  RecipesGallerySection,
  DropdownContainer,
  SearchLabel,
  StyledDropdown,
  SelectedValue,
  SearchSelect,
  Option,
  SearchContainer,
  PaginationContainer,
  NoResultsWrapper,
  NoResultsText,
  StyledChevron,
} from './SearchPage.styled';

const recipesPerPage = window.innerWidth < 1240 ? 6 : 12;

const SearchPage = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('title');
  const [recipes, setRecipes] = useState([]);
  const [recipesCount, setRecipesCount] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get(selectedValue) ?? '';
  const page = searchParams.get('page') ?? 1;
  const totalPages = Math.ceil(recipesCount / recipesPerPage);

  const onSelect = value => {
    setIsSelectOpen(false);
    setSelectedValue(value);
  };

  const addParamsToSearch = value => {
    setSearchParams({
      [selectedValue]: value,
      page: 1,
    });
  };

  useEffect(() => {
    if (query !== '') {
      getRecipesByQuery({
        query,
        searchType: selectedValue,
        page,
        recipesPerPage,
      }).then(data => {
        setRecipes(data.data);
        setRecipesCount(data.count);
      });
    }
  }, [query, selectedValue, page]);

  console.log(recipes, totalPages);
  return (
    <Container>
      <Main id="main">
        <SearchSection>
          <MainTitleStyled children={'Search'} />
          <SearchContainer>
            <SearchForm addParamsToSearch={addParamsToSearch} reversed={true} />
          </SearchContainer>
          <DropdownContainer onClick={() => setIsSelectOpen(!isSelectOpen)}>
            <SearchLabel>Search by:</SearchLabel>
            <StyledDropdown>
              <SelectedValue children={selectedValue} />
              <StyledChevron size={25} color="rgba(139, 170, 54, 1)" />
              {isSelectOpen && (
                <SearchSelect>
                  <Option onClick={() => onSelect('title')}>Title</Option>
                  <Option onClick={() => onSelect('ingredient')}>
                    Ingredients
                  </Option>
                </SearchSelect>
              )}
            </StyledDropdown>
          </DropdownContainer>
        </SearchSection>
        <RecipesGallerySection>
          {recipes.length === 0 && (
            <NoResultsWrapper>
              <NoResultsText>Try looking for something else..</NoResultsText>
            </NoResultsWrapper>
          )}
          {recipes?.length > 0 && <RecipesGallery recipes={recipes} />}
          {totalPages > 1 && (
            <PaginationContainer>
              <Pagination
                totalPages={totalPages}
                currentPage={page}
                scrollId={'main'}
                onClick={page =>
                  setSearchParams({ [selectedValue]: query, page })
                }
              />
            </PaginationContainer>
          )}
        </RecipesGallerySection>
      </Main>
    </Container>
  );
};

export default SearchPage;
