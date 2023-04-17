import { ButtonSkewStyled } from './ButtonSkew.styled';

export const ButtonSkew = ({
  onClick,
  color,
  hoverColor,
  width,
  padding,
  children,
}) => {
  return (
    <ButtonSkewStyled
      onClick={onClick}
      color={color}
      hoverColor={hoverColor}
      width={width}
      padding={padding}
    >
      <div className="inner">{children}</div>
    </ButtonSkewStyled>
  );
};
