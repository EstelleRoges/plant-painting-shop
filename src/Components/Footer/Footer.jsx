import { List, ListItem, Button, Box } from "@mui/material";
import { FooterArea, FooterBox, Copyright } from "./FooterStyle";
import { Pinterest, Facebook, Instagram } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterArea>
      <FooterBox>
        <Box>
          <List>
            <ListItem>
              <Link to="/about">About me</Link>
            </ListItem>
            <ListItem>
              <Link to="/products">Product</Link>
            </ListItem>
            <ListItem>
              <Link to="/error404">Page Error404</Link>
            </ListItem>
            <ListItem sx={{marginTop: "10px", display: "block"}}>
              Crédits:
              <List>
                <ListItem>
                  <a href="https://www.vecteezy.com/vector-art/184643-succulents-top-view-hand-drawn-style">
                    Image User Dashboard
                  </a>
                </ListItem>
                <ListItem>
                  <a href="https://www.pexels.com/fr-fr/">Images A propos</a>
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
            <ListItem>Mentions légales</ListItem>
            <ListItem>Conditions Générales de vente</ListItem>
            <ListItem>Plan du site</ListItem>
            <ListItem>Service après-vente</ListItem>
          </List>
        </Box>

        <Box sx={{ width: "500px" }}>
          <h2>Mes réseaux</h2>
          <List sx={{ width: "4em", display: "flex" }}>
            <ListItem>
              <Instagram />
            </ListItem>
            <ListItem>
              <Facebook />
            </ListItem>
            <ListItem>
              <Pinterest />
            </ListItem>
          </List>
          <h2>Newsletter</h2>
          <div>
            <input
              type="text"
              name="enterMail"
              id="enterMail"
              placeholder="Entrez votre mail"
            />
            <Button variant="contained" color="success">
              S'inscrire
            </Button>
          </div>
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
