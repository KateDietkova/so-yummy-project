import * as Yup from 'yup';
import {
  ErrorValidation,
  ErrorValidationIcon,
  WarningValidation,
  WarningValidationIcon,
  CorrectValidation,
  CorrectIconValidationIcon,
} from '../../RegisterPageComponents/RegisterForm/RegisterForm.styled';

const emailRules =
  /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// const passwordRules =
//   /(?=^.{6,255}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*/;

const passwordRules = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{6,255}$/;

const errorMassege = msg => {
  return (
    <div className="error">
      <ErrorValidation>{msg}</ErrorValidation>
      <ErrorValidationIcon />
    </div>
  );
};

const warningMassege = msg => {
  return (
    <div className="warning">
      <WarningValidation>{msg}</WarningValidation>
      <WarningValidationIcon />
    </div>
  );
};

export const ValidMassege = ({ children }) => {
  return (
    <div className="valid">
      <CorrectValidation>{children}</CorrectValidation>
      <CorrectIconValidationIcon />
    </div>
  );
};

export const signinSchema = Yup.object().shape({
  email: Yup.string()
    .email(errorMassege('Invalid email format'))
    .matches(emailRules, {
      message: errorMassege('Invalid email format'),
      excludeEmptyString: true,
    })
    .required(errorMassege('This field is required')),

  password: Yup.string()
    .min(6, errorMassege('Enter a valid password'))
    .max(16, errorMassege('Password too long'))
    .matches(passwordRules, {
      message: warningMassege('Your password is little secure'),
      excludeEmptyString: true,
    })
    .required(errorMassege('This field is required')),
});
