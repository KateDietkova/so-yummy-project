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

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HeaderStyled>
      <Container>
        <HeaderContainer>
          <Logo />
          <Navigation />
          <UserWithTogglerContainer>
            <UserLogo />
            <ThemeToggler />
            <BurgerMenuBtn isOpen={isOpen} setIsOpen={setIsOpen} />
          </UserWithTogglerContainer>
        </HeaderContainer>
      </Container>
      <MobileMenu isOpen={isOpen} />
    </HeaderStyled>
  );
};
