import styled from 'styled-components';
import { Field } from 'formik';
import { ReactComponent as CameraIcon } from '../../../../assets/svg/other/camera.svg';

export const FieldFileWrapper = styled.div`
  position: relative;

  width: 279px;
  height: 268px;
  border-radius: 8px;

  background-color: ${props => props.theme.colors.accent};

  @media screen and (min-width: 1280px) {
    width: 357px;
    height: 344px;
  }
`;

export const ImageInput = styled(Field)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  font-size: 0;

  cursor: pointer;
`;

// export const StyledInput = styled.div`
//   border: none;
//   cursor: pointer;
// `;

export const CameraIconStyled = styled(CameraIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 64px;
  height: 64px;
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
