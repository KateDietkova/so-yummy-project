import {
  AuthPagesSection,
  ContainerAuthPageStyled,
} from './RegisterPage.styled';
import { RegisterForm } from 'components/RegisterPageComponents/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <AuthPagesSection>
      <ContainerAuthPageStyled>
        <RegisterForm />
      </ContainerAuthPageStyled>
    </AuthPagesSection>
  );
};

export default RegisterPage;
