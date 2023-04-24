import {
  BgOrderFoodImg,
} from '../RegisterPage/RegisterPage.styled';
import { ContainerSigninPage, SigninPageSection } from './SigninPage.styled';
import { SigninForm } from 'components/SigninPageComponents/SigninForm/SigninForm';

const SigninPage = () => {
  return (
    <SigninPageSection>
      <ContainerSigninPage>
        {/* <BgOrderFoodImg></BgOrderFoodImg> */}
        <SigninForm />
      </ContainerSigninPage>
    </SigninPageSection>
  );
};

export default SigninPage;
