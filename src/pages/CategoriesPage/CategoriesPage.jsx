import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Container } from "components/universalComponents/Container/Container.styled";
import { MainTitle } from "components/universalComponents/MainTitle/MainTitle";
import { CategoriesTabs } from "./CategoriesTabs/CategoriesTabs";
import {RecipesList} from "components/universalComponents/RecipesList/RecipesList";



// const instance = axios.create({
//   baseURL: 'https://so-yummy-api.herokuapp.com/api/',
//   headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDI5YjBmNDczMjk5NmVkYTk3OTAiLCJpYXQiOjE2ODE3MjA3NTUsImV4cCI6MTY4MjkzMDM1NX0.DoC-PApp9KBbMKIbvZVnDvnYAkQ6zbBx1EjUTbSYjvU'}
// });

const CategoriesPage = () => {

  // const navigate = useNavigate();
// const goBack = () => navigate (-1)
//   useEffect(() => {
//     const login = async (data) => {
//       try {
//         const { data: result } = await instance.post('/auth/login', data)
//          instance.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDI5YjBmNDczMjk5NmVkYTk3OTAiLCJpYXQiOjE2ODE3MjA3NTUsImV4cCI6MTY4MjkzMDM1NX0.DoC-PApp9KBbMKIbvZVnDvnYAkQ6zbBx1EjUTbSYjvU`;
//         return result;
//       } catch (error) {
//         console.log(error.message)
//       }
//   }
// login()
// }, [])

  return (
    <Container>
    <MainTitle text="Categories"/>
    <CategoriesTabs  />
    <RecipesList />
    </Container>
  )
};

export default CategoriesPage;
