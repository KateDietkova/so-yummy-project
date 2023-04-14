import { useState } from 'react';
import { SwitchStyled, SwitchContainer } from './ThemeToggler.styled';

export const ThemeToggler = ({ isMobile, setDarkTheme }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    setDarkTheme(!checked);
  };

  return (
    <SwitchContainer ismobile={isMobile && 'true'}>
      <SwitchStyled
        onChange={handleChange}
        checked={checked}
        offColor="#EFEFEF"
        onColor="#8BAA36"
        handleDiameter={21}
        height={27}
        width={61}
        borderRadius={50}
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </SwitchContainer>
  );
};
