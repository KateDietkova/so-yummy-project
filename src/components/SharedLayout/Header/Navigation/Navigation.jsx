import { FiSearch } from 'react-icons/fi';
import {NavContainer, NavListStyled, NavLinkStyled } from './Navigation.styled';

export const Navigation = ({isMobile}) => {
  return (
    <NavContainer isMobile={isMobile}>
      <NavListStyled>
        <li>
          <NavLinkStyled to="categories/beef">Categories</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="add">Add recipes</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="my">My recipes</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="favorite">Favorites</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="shopinglist">Shopping list</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="search" ismobile="true">
            <FiSearch size={isMobile ? 20: 24} />
            {isMobile && 'Search'}
          </NavLinkStyled>
        </li>
      </NavListStyled>
    </NavContainer>
  );
};
