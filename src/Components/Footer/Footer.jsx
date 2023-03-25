import React from "react";
import { List, ListItem, Box } from "@mui/material";
import { FooterArea, FooterBox, Copyright } from "./FooterStyle";
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';

const Footer = () => {
  const scrollToTop = () => {
    window.scroll(0, 0);
  };

  return (
    <FooterArea>
      <FooterBox>
        <Box>
          <Link to="/">
            <h2 onClick={scrollToTop}>The Succi Place</h2>
          </Link>
          <p>123 rue du Vert</p>
          <p>75000 Paris</p>
          <List>
            <ListItem>Plan du site</ListItem>
            <ListItem>Mentions légales</ListItem>
            <ListItem>CGV</ListItem>
            <ListItem>SAV</ListItem>
          </List>
        </Box>
        <Box>
          <h2 onClick={scrollToTop}>Autres</h2>
          <List>
            <ListItem>
              <Link to="/error404">Voir Page Error404</Link>
            </ListItem>
            <ListItem>
              <a href="https://www.pexels.com/fr-fr/">Images À propos</a>
            </ListItem>
            <ListItem>
              <a href="https://www.pinterest.fr/Teruu_E/projet-react-site-peintures-peintures/">
                Peintures de plantes
              </a>
            </ListItem>
          </List>
        </Box>
      </FooterBox>
      <Copyright>
        <p>
          © Developpé par Estelle ROGÈS
          <br />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/estelle-roges-dev/"
            rel="noreferrer"
          >
           <LinkedInIcon />
          </a>

          <a
            target="_blank"
            href="https://github.com/EstelleRoges/plant-painting-shop"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          
          <a
            target="_blank"
            href="https://estelleroges.github.io/"
            rel="noreferrer"
          >
            <WebIcon />
          </a>
        </p>
      </Copyright>
    </FooterArea>
  );
};

export default Footer;
