import React from "react";
import { List, ListItem, Box } from "@mui/material";
import { FooterArea, FooterBox, Copyright } from "./FooterStyle";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scroll(0, 0);
  };

  return (
    <FooterArea>
      <FooterBox>
        <Box>
          <h2 onClick={scrollToTop}>
            <Link to="/">The Succi Place</Link>
          </h2>
          <p>123 rue du Vert</p>
          <p>75000 Paris</p>
        </Box>
        <Box>
          <List>
            <ListItem>
              <Link to="/about">À propos</Link>
            </ListItem>
            <ListItem>
              <Link to="/products">Produits</Link>
            </ListItem>
            <ListItem>
              <Link to="/error404">Page Error404</Link>
            </ListItem>
            <ListItem sx={{ marginTop: "10px", display: "block" }}>
              Crédits:
              <List>
                <ListItem>
                  <a href="https://www.vecteezy.com/vector-art/184643-succulents-top-view-hand-drawn-style">
                    Image User Dashboard
                  </a>
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
            </ListItem>
          </List>
        </Box>

        <Box>
          <List>
            <ListItem>Plan du site</ListItem>
            <ListItem>Mentions légales</ListItem>
            <ListItem>CGV</ListItem>
            <ListItem>SAV</ListItem>
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
            LinkedIn
          </a>
          |
          <a
            target="_blank"
            href="https://github.com/EstelleRoges/plant-painting-shop"
            rel="noreferrer"
          >
            Code GitHub
          </a>
        </p>
      </Copyright>
    </FooterArea>
  );
};

export default Footer;
