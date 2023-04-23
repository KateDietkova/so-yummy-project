import { Container } from 'components/universalComponents/Container/Container.styled';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verification } from 'redux/auth/authOperations';
import { Loader } from 'components/universalComponents/Loader/Loader';
import { useAuth } from 'hooks/useAuth';

export const VerificationPage = () => {
  const dispatch = useDispatch();
  const { vCode } = useParams();
  const email = JSON.parse(localStorage.getItem('userEmail'));
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (vCode && !isLoggedIn) {
      dispatch(verification({ email, vCode }));
    }
  }, [dispatch, email, vCode, isLoggedIn]);

  return (
    <Container>
      <Loader />
    </Container>
  );
};
