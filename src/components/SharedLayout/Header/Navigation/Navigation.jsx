import { FiSearch } from 'react-icons/fi';
import {
  NavContainer,
  NavListStyled,
  NavLinkStyled,
} from './Navigation.styled';

export const Navigation = ({ isMobile, darkTheme }) => {
  return (
    <NavContainer isMobile={isMobile}>
      <NavListStyled>
        <li>
          <NavLinkStyled
            to="categories/beef"
            darktheme={darkTheme ? 'true' : 'false'}
          >
            Categories
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="add" darktheme={darkTheme ? 'true' : 'false'}>
            Add recipes
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="my" darktheme={darkTheme ? 'true' : 'false'}>
            My recipes
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="favorite" darktheme={darkTheme ? 'true' : 'false'}>
            Favorites
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to="shopinglist"
            darktheme={darkTheme ? 'true' : 'false'}
          >
            Shopping list
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to="search"
            ismobile="true"
            darktheme={darkTheme ? 'true' : 'false'}
          >
            <FiSearch size={isMobile ? 20 : 24} />
            {isMobile && 'Search'}
          </NavLinkStyled>
        </li>
      </NavListStyled>
    </NavContainer>
  );
};
