import { ReactComponent as LogoIcon } from '../../../../assets/svg/logo/logo.svg';
import { LogoIconLink } from './Logo.styled';

export const Logo = ({setIsOpen}) => {
  return (
    <LogoIconLink to="/" onClick={() => setIsOpen && setIsOpen(false)}>
      <LogoIcon />
    </LogoIconLink>
  );
};
