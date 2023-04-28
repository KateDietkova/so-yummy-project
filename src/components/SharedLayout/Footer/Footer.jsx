import { FollowUs } from '../../FollowUs/FollowUs';
import { Nav } from './Nav/Nav';
import {
  FooterWrapper,
  FooterContainer,
  BackgrImage,
  Wrapper,
  TextWrapper,
  LogoContainer,
  LogoIconLink,
  Logo,
  ProjectName,
  Benefits,
  Subscribe,
  FooterLicense,
} from './Footer.styled';
import { SubscribeForm } from './SubscribeForm/SubscribeForm';

export const Footer = () => {
  return (
    <FooterWrapper>
      <BackgrImage />
      <FooterContainer>
        <Wrapper>
          <TextWrapper>
            <LogoContainer to="/">
              <LogoIconLink>
                <Logo />
              </LogoIconLink>

              <ProjectName>So Yummy</ProjectName>
            </LogoContainer>

            <Benefits>
              <li>Database of recipes that can be replenished</li>
              <li>Flexible search for desired and unwanted ingredients</li>
              <li>Ability to add your own recipes with photos</li>
              <li>Convenient and easy to use</li>
            </Benefits>
          </TextWrapper>

          <Nav />

          <Subscribe>
            <h3>Subscribe to our Newsletter</h3>
            <p>
              Subscribe up to our newsletter. Be in touch with latest news and
              special offers, etc.
            </p>

            <SubscribeForm />
          </Subscribe>
        </Wrapper>

        <FollowUs />
      </FooterContainer>

      <FooterLicense>
        <p>
          © 2023 All Rights Reserved.
          <span>Terms of Service</span>
        </p>
      </FooterLicense>
    </FooterWrapper>
  );
};
