import { ReactComponent as LogoIcon } from '../../../../assets/svg/logo/logo.svg';
import { LogoIconLink } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoIconLink to="/">
      <LogoIcon />
    </LogoIconLink>
  );
};
