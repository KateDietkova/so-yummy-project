import { Navigation } from '../Navigation/Navigation';
import { Container } from '../../../universalComponents/Container/Container.styled';
import { MobileMenuContainer } from './MobileMenu.styled';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';

export const MobileMenu = ({ isOpen, setDarkTheme, darkTheme }) => {
  return (
    <MobileMenuContainer isOpen={isOpen}>
      <Container ismobile="true">
        <Navigation isMobile darkTheme={darkTheme} />
        <ThemeToggler isMobile setDarkTheme={setDarkTheme} />
      </Container>
    </MobileMenuContainer>
  );
};
