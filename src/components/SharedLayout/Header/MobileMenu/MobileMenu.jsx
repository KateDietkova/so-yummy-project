import { Navigation } from '../Navigation/Navigation';
import { Container } from '../../../universalComponents/Container/Container.styled';
import { MobileMenuContainer } from './MobileMenu.styled';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { useSelector } from 'react-redux';

export const MobileMenu = ({ isOpen }) => {
  const darkTheme = useSelector(state => state.theme.darkTheme);
  return (
    <MobileMenuContainer
      isOpen={isOpen}
      darktheme={darkTheme ? 'true' : 'false'}
    >
      <Container ismobile="true">
        <Navigation isMobile />
        <ThemeToggler isMobile />
      </Container>
    </MobileMenuContainer>
  );
};
