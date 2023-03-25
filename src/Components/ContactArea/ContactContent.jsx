import { styled } from "@mui/material";
import React from "react";
import ContactForm from "./ContactForm";

const ContactContent = () => {
  return (
    <ContactArea>
      <h2>Une question? Contactez-moi!</h2>
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

const ContactArea = styled("section")`
  h2 {
    margin:0;
    padding-top: 0.2em;
    border-bottom: 1px dashed var(--green-secondary);
  }
`;

export default ContactContent;
