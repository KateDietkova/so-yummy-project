import { Container } from 'components/universalComponents/Container/Container.styled';
import { VerifyTitle } from './VarificationPage.styled';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verification } from 'redux/auth/authOperations';

export const VerificationPage = () => {
  const { vCode } = useParams();
  const dispatch = useDispatch();
  const email = JSON.parse(localStorage.getItem('userEmail'));

  useEffect(() => {
    console.log('Send verification', email, vCode);

    dispatch(verification({ email, vCode }));
  }, []);

  return (
    <Container>
      <VerifyTitle>Confirmed</VerifyTitle>
    </Container>
  );
};