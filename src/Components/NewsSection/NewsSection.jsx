import React from "react";
import { List, ListItem, Button } from "@mui/material";
import { Pinterest, Facebook, Instagram } from "@mui/icons-material";
import { motion } from "framer-motion";
import { NewsContainer, NewsBox, NewsLetterInput } from "./NewsSectionStyle";

const NewsSection = () => {
  return (
    <>
      <NewsContainer>
        <NewsBox>
          <h2>Mes réseaux</h2>
          <List sx={{ display: "flex" }}>
            <ListItem>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Instagram />
              </motion.div>
            </ListItem>
            <ListItem>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Facebook />
              </motion.div>
            </ListItem>
            <ListItem>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Pinterest />
              </motion.div>
            </ListItem>
          </List>
        </NewsBox>
        <NewsBox>
          <h2>Abonnez-vous à la Newsletter</h2>
          <NewsLetterInput>
            <input
              type="text"
              name="enterMail"
              id="enterMail"
              placeholder="Entrez votre mail"
            />
            <Button variant="contained" color="success">
              S'inscrire
            </Button>
          </NewsLetterInput>
        </NewsBox>
      </NewsContainer>
    </>
  );
};

export default NewsSection;
