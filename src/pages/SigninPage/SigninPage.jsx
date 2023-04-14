import {
  AuthPagesSection,
  BgOrderFoodImg,
} from '../RegisterPage/RegisterPage.styled';
import { ContainerSigninPage } from './SigninPage.styled';
import { SigninForm } from 'components/SigninPageComponents/SigninForm/SigninForm';

const SigninPage = () => {
  return (
    <AuthPagesSection>
      <ContainerSigninPage>
        <BgOrderFoodImg></BgOrderFoodImg>
        <SigninForm />
      </ContainerSigninPage>
    </AuthPagesSection>
  );
};

export default SigninPage;
