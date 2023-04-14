import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding: 18px 0;
  position: relative;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserWithTogglerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 50px;
  }
`;
