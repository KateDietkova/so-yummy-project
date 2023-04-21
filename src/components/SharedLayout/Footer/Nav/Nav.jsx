import { NavFooterContainer, Link } from './Nav.styled'

export const Nav = () => {
  return (
    <NavFooterContainer>
      <Link to="search"> Ingredients </Link>
      <Link to="add">  Add recipes </Link>
      <Link to="my"> My recipes </Link>
      <Link to="favorite"> Favorite </Link>
      <Link to="shopinglist"> Shopping list </Link>
    </NavFooterContainer>
  );
};
