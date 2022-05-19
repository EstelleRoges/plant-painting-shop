import { Favorite } from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';

const PaymentAccepted = () => {
  return (
    <div>
    <h1>Commande passée! Merci! <Favorite style={{marginLeft: "0.5em", fontSize: "30px", color: "crimson"}}/></h1> 
    Retourner à la <Link to="/">page d'accueil</Link>
    </div>
  )
}

export default PaymentAccepted;