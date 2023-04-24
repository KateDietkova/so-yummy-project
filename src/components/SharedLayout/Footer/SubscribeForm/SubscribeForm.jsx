import React from 'react';
import { SubscribeInput, SubscribeButton, IconMail, Form } from './SubscribeForm.styled'
//import { useState, useEffect } from "react";
import { Formik } from 'formik';


export const SubscribeForm = () => {



    return (
        <Formik>
            <Form>
                <SubscribeInput
                    type="email"
                    placeholder="Enter your email address"
                />
                <IconMail/>
                <SubscribeButton type="submit">
                    Subcribe
                </SubscribeButton>
            </Form>
        </Formik>
    );
  };
