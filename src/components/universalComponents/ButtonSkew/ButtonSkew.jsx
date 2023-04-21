import { ButtonSkewStyled } from './ButtonSkew.styled';

export const ButtonSkew = ({
  onClick,
  color,
  hoverColor,
  width,
  padding,
  children,
  isShadow,
}) => {
  return (
    <ButtonSkewStyled
      onClick={onClick}
      color={color}
      hoverColor={hoverColor}
      width={width}
      padding={padding}
      isShadow={isShadow}
    >
      <div className="inner">{children}</div>
    </ButtonSkewStyled>
  );
};
