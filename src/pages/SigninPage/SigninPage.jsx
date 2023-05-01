import { ContainerSigninPage, SigninPageSection } from './SigninPage.styled';
import { SigninForm } from 'components/SigninPageComponents/SigninForm/SigninForm';

const SigninPage = () => {
  return (
    <SigninPageSection>
      <ContainerSigninPage>
        <SigninForm />
      </ContainerSigninPage>
    </SigninPageSection>
  );
};

export default SigninPage;
