import { useDispatch } from 'react-redux';
import { changeTheme } from 'redux/theme/themeSlice';
import { SwitchStyled, SwitchContainer } from './ThemeToggler.styled';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';

export const ThemeToggler = ({ isMobile }) => {
  const darkTheme = useSelector(selectTheme);

  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(changeTheme());
    localStorage.setItem('darkTheme', JSON.stringify(!darkTheme));
  };

  return (
    <SwitchContainer ismobile={isMobile && 'true'}>
      <SwitchStyled
        onChange={handleChange}
        checked={darkTheme}
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
