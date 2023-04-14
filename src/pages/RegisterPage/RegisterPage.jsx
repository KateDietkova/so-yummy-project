import {
  AuthPagesSection,
  BgOrderFoodImg,
  ContainerAuthPageStyled,
} from './RegisterPage.styled';
import { RegisterForm } from 'components/RegisterPageComponents/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <AuthPagesSection>
      <ContainerAuthPageStyled>
        <BgOrderFoodImg></BgOrderFoodImg>
        <RegisterForm />
      </ContainerAuthPageStyled>
    </AuthPagesSection>
  );
};

export default RegisterPage;
