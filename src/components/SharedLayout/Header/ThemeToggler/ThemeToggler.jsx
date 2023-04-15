import { useState } from 'react';
import { SwitchStyled, SwitchContainer } from './ThemeToggler.styled';

export const ThemeToggler = ({ isMobile, setDarkTheme }) => {
  const [checked, setChecked] = useState(
    JSON.parse(localStorage.getItem('darkTheme')) || false
  );

  const handleChange = () => {
    setChecked(!checked);
    setDarkTheme(!checked);
    localStorage.setItem('darkTheme', JSON.stringify(!checked));
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
