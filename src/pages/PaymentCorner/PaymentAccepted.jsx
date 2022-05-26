import { Favorite } from '@mui/icons-material';
import { styled } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const PaymentAccepted = () => {
  return (
    <PaymentOk>
    <h1>Commande passée! Merci! <Favorite style={{marginLeft: "0.5em", fontSize: "30px", color: "crimson"}}/></h1> 
    <p>Retourner à la <Link to="/">page d'accueil</Link></p>
    </PaymentOk>
  )
}

const PaymentOk = styled("div")`
height: 100%;
 margin: 5em 0;

 p {
   font-size: 20px;
 }

 a {
   color: green;
 }
`;

export default PaymentAccepted;