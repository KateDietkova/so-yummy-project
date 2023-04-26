import React from 'react';
import {
  SubscribeInput,
  SubscribeButton,
  IconMail,
  Form,
} from './SubscribeForm.styled';
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-hot-toast";
import { Formik } from 'formik';

export const SubscribeForm = () => {
  const handleSubmit = () => {};

  return (
    <Formik>
      <Form onSubmit={handleSubmit}>
        <SubscribeInput type="email" placeholder="Enter your email address" />
        <IconMail />
        <SubscribeButton type="submit">Subcribe</SubscribeButton>
      </Form>
    </Formik>
  );
};
