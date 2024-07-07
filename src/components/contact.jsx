import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import backgroundImage from "./image.jpg"; // Replace with your actual image path

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bvmpw8h",
        "template_6sa7mzo",
        form.current,
        "aovP4UANbiEGVJgCo"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      {/* <h2>Coming Soon</h2> */}
      <form ref={form} onSubmit={sendEmail}>
        <InputLabel>Full Name</InputLabel>
        <input type="text" name="user_name" />
        
        <InputLabel>Email</InputLabel>
        <input type="email" name="user_email" />
        
        <InputLabel>Message (Which STEM subject are you interested in? Science, Technology, Engineering, Maths)</InputLabel>
        <textarea name="message" />
        
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  border-radius: 10px;
  background-image: url(${backgroundImage}); /* Add background image */
  background-size: cover; /* Adjust as needed */
  background-position: center; /* Adjust as needed */
  padding: 5rem; /* Add padding to keep content from sticking to edges */

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px; /* Fixed typo: changed 35p to 35px */
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(255, 153, 102);

      &:focus {
        border: 2px solid rgb(255, 153, 102);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(255, 153, 102);

      &:focus {
        border: 2px solid rgb(255, 153, 102);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      margin-left: 0.5rem;
      cursor: pointer;
      background: rgb(255, 153, 102);
      color: white;
      border: none;
    }
  }
`;


const InputLabel = styled.label`
  padding-bottom: 20px;
`;