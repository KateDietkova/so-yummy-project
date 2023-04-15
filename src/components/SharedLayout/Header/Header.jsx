import { useState } from 'react';
import { Container } from '../../universalComponents/Container/Container.styled';
import {
  HeaderStyled,
  HeaderContainer,
  UserWithTogglerContainer,
} from './Header.styled';
import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import { UserLogo } from './UserLogo/UserLogo';
import { ThemeToggler } from './ThemeToggler/ThemeToggler';
import { BurgerMenuBtn } from './MobileMenu/BurgerMenuBtn/BurgerMenuBtn';
import { MobileMenu } from './MobileMenu/MobileMenu';

export const Header = ({ setDarkTheme, darkTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HeaderStyled>
      <Container>
        <HeaderContainer>
          <Logo />
          <Navigation darkTheme={darkTheme} />
          <UserWithTogglerContainer>
            <UserLogo darkTheme={darkTheme} />
            <ThemeToggler setDarkTheme={setDarkTheme} />
            <BurgerMenuBtn
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              darkTheme={darkTheme}
            />
          </UserWithTogglerContainer>
        </HeaderContainer>
      </Container>
      <MobileMenu
        isOpen={isOpen}
        setDarkTheme={setDarkTheme}
        darkTheme={darkTheme}
      />
    </HeaderStyled>
  );
};
