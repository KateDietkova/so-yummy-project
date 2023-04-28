import { FiSearch } from 'react-icons/fi';
import {
  NavContainer,
  NavListStyled,
  NavLinkStyled,
} from './Navigation.styled';
import { useLocation } from 'react-router-dom';

export const Navigation = ({ isMobile, setIsOpen }) => {
  const location = useLocation();
  const isDarkColorRecipe = location.pathname.includes('recipe/') ? "true" : "false";
  return (
    <NavContainer isMobile={isMobile}>
      <NavListStyled>
        <li>
          <NavLinkStyled
            to="categories/beef"
            onClick={() => setIsOpen && setIsOpen(false)}
            isdark={isDarkColorRecipe}
          >
            Categories
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to="add"
            onClick={() => setIsOpen && setIsOpen(false)}
            isdark={isDarkColorRecipe}
          >
            Add recipes
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to="my"
            onClick={() => setIsOpen && setIsOpen(false)}
            isdark={isDarkColorRecipe}
          >
            My recipes
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to="favorite"
            onClick={() => setIsOpen && setIsOpen(false)}
            isdark={isDarkColorRecipe}
          >
            Favorites
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to="shopinglist"
            onClick={() => setIsOpen && setIsOpen(false)}
            isdark={isDarkColorRecipe}
          >
            Shopping list
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to="search"
            ismobile="true"
            onClick={() => setIsOpen && setIsOpen(false)}
            isdark={isDarkColorRecipe}
          >
            <FiSearch size={isMobile ? 20 : 24} />
            {isMobile && 'Search'}
          </NavLinkStyled>
        </li>
      </NavListStyled>
    </NavContainer>
  );
};
