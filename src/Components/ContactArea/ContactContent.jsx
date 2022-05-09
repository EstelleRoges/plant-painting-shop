import { styled } from "@mui/material";
import React from "react";
import ContactForm from "./ContactForm";

const ContactContent = () => {
  return (
    <ContactArea>
      <h2>Contact me!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odio
        natus soluta vero? Ut adipisci culpa aut corporis incidunt nobis
        blanditiis officiis illum voluptate. Iure repellendus neque quaerat
        voluptate.
      </p>
      <ContactForm />
    </ContactArea>
  );
};

const ContactArea = styled("div")`
  margin-top: 5em;

  h2 {
    margin:0;
    padding-top: 0.2em;
    font-size: 36px;
    border-top: 1px dashed #ccc;
  }
`;

export default ContactContent;
