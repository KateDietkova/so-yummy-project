import { FiSearch } from 'react-icons/fi';
import {
  NavContainer,
  NavListStyled,
  NavLinkStyled,
} from './Navigation.styled';

export const Navigation = ({ isMobile, setIsOpen }) => {
  return (
    <NavContainer isMobile={isMobile}>
      <NavListStyled>
        <li>
          <NavLinkStyled
            to="categories/beef"
            onClick={() => setIsOpen && setIsOpen(false)}
          >
            Categories
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="add" onClick={() => setIsOpen && setIsOpen(false)}>
            Add recipes
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="my" onClick={() => setIsOpen && setIsOpen(false)}>
            My recipes
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to="favorite"
            onClick={() => setIsOpen && setIsOpen(false)}
          >
            Favorites
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to="shopinglist"
            onClick={() => setIsOpen && setIsOpen(false)}
          >
            Shopping list
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to="search"
            ismobile="true"
            onClick={() => setIsOpen(false)}
          >
            <FiSearch size={isMobile ? 20 : 24} />
            {isMobile && 'Search'}
          </NavLinkStyled>
        </li>
      </NavListStyled>
    </NavContainer>
  );
};
