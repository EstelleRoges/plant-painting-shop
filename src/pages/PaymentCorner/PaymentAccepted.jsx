import React from "react";
import { Favorite } from "@mui/icons-material";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PaymentAccepted = () => {
  return (
    <>
      <PaymentOk>
        <h2>
          Commande passée! Merci!{" "}
          <motion.div
            animate={{ scale: [1, 1.5, 1, 1.5, 1] }}
            transition={{ duration: 1 }}
          >
            <Favorite />
          </motion.div>
        </h2>
        <p>
          Retourner à la <Link to="/">page d'accueil</Link>
        </p>
      </PaymentOk>
    </>
  );
};

const PaymentOk = styled("div")`
  height: 25vh;
  margin: 5em;
  margin-bottom: 15%;

  h2 {
    font-size: clamp(40px, 4.5vh, 44px);
  }
  
  p {
    font-size: 20px;
  }

  a {
    font-size: 20px;
    color: var(--brown-primary);
  }

  div {
    display: inline-block;
  }

  svg {
    margin-left: 0.5em;
    font-size: 30px;
    color: #d37383;
  }
`;

export default PaymentAccepted;
