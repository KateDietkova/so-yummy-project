import React from 'react';
import {
  SubscribeInput,
  SubscribeButton,
  IconMail,
  Form,
} from './SubscribeForm.styled';
import { useState, useEffect } from "react";
import axios from "axios";
// import { toast } from "react-hot-toast";

export const SubscribeForm = () => {

    const [email, setEmail] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if (email.trim() !== "") {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [email]);


    const handleSubmit = (event) => {
      event.preventDefault();

      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (emailRegex.test(email)) {
          axios
              .post("/subscribe", { email: email })
              .then((response) => {
                  console.log("Email was successfully submitted!");
              // toast.success("Email was successfully submitted!");
          })
              .catch((error) => {
              console.log("Something went wrong. Please try again later!");
              // toast.error("Something went wrong. Please try again later!");
          });
      } else {
          console.log("Please enter a valid email!");
          // toast.error("Please enter a valid email!");
      }
    };
  
    const onChange = (event) => {
      setEmail(event.target.value);
    };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <SubscribeInput type="email" placeholder="Enter your email address" value={email}
                    onChange={onChange}/>
        <IconMail />
        <SubscribeButton type="submit" disabled={isDisabled} >Subcribe</SubscribeButton>
      </Form>
    </>
  );
};
