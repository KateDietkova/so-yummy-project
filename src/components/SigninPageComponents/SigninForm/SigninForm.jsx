import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import {
  FormWrapper,
  FormStyled,
  LabelStyled,
  FieldStyled,
  FieldsWrapper,
  EmailIcon,
  PasswordIcon,
  SubmitBtn,
} from '../../RegisterPageComponents/RegisterForm/RegisterForm.styled';

import { SigninTitle, LinkRegisterStyled } from './SigninForm.styled';
import { signinSchema, ValidMassege } from './validationSignin';

const initialValue = {
  name: '',
  email: '',
  password: '',
};

export const SigninForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (value, { resetForm }) => {
    console.log('Register data', value);
    resetForm();
    setIsSubmit(false);
    navigate('/');
  };

  return (
    <FormWrapper>
      <Formik
        initialValues={initialValue}
        validationSchema={signinSchema}
        onSubmit={handleSubmit}
        validateOnChange={isSubmit}
        validateOnBlur={false}
      >
        {({ errors, touched }) => (
          <FormStyled noValidate>
            <SigninTitle>Sign In</SigninTitle>
            <FieldsWrapper>
              <LabelStyled htmlFor="email">
                <FieldStyled
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <EmailIcon />
                <ErrorMessage name="email" />
                {touched.email && !errors.email && isSubmit && <ValidMassege />}
              </LabelStyled>
              <LabelStyled htmlFor="password">
                <FieldStyled
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <PasswordIcon />
                <ErrorMessage name="password" />
                {touched.password && !errors.password && isSubmit && (
                  <ValidMassege>Password is secure</ValidMassege>
                )}
              </LabelStyled>
            </FieldsWrapper>

            <SubmitBtn type="submit" onClick={() => setIsSubmit(true)}>
              Sign up
            </SubmitBtn>
          </FormStyled>
        )}
      </Formik>

      <LinkRegisterStyled to={'/register'}>Registration</LinkRegisterStyled>
    </FormWrapper>
  );
};
