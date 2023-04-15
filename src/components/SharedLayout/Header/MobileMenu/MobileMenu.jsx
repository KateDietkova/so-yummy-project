import { Navigation } from '../Navigation/Navigation';
import { Container } from '../../../universalComponents/Container/Container.styled';
import { MobileMenuContainer } from './MobileMenu.styled';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';

export const MobileMenu = ({ isOpen, setDarkTheme, darkTheme }) => {
  return (
    <MobileMenuContainer isOpen={isOpen} darktheme={darkTheme? 'true' : 'false'}>
      <Container ismobile="true">
        <Navigation isMobile darkTheme={darkTheme} />
        <ThemeToggler isMobile setDarkTheme={setDarkTheme} />
      </Container>
    </MobileMenuContainer>
  );
};
