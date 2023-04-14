import { ButtonSkewStyled } from './ButtonSkew.styled';


export const ButtonSkew = ({ onClick, color, hoverColor, width, children }) => {
  return (
    <ButtonSkewStyled
      onClick={onClick}
      color={color}
      hoverColor={hoverColor}
      width={width}
    >
      <div className="inner">{children}</div>
    </ButtonSkewStyled>
  );
};


// export const LinkSkew = ({ to, color, hoverсolor, width, children }) => {
//   return (
//     <LinkSkewStyled to={to} color={color} hovercolor={hoverсolor} width={width}>
//       <div className="inner">{children}</div>
//     </LinkSkewStyled>
//   );
// };