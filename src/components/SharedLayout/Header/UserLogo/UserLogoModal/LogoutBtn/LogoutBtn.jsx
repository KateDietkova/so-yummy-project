import { AiOutlineArrowRight } from 'react-icons/ai';
import { ButtonSkew } from 'components/universalComponents/ButtonSkew/ButtonSkew';

export const LogoutBtn = ({ onClick }) => {
  return (
    <ButtonSkew onClick={onClick}>
      Log out
      <AiOutlineArrowRight size={18} color={'#fafafa'} />
    </ButtonSkew>
  );
};
