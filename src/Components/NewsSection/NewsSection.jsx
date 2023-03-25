import React from "react";
import { List, ListItem } from "@mui/material";
import { Pinterest, Facebook, Instagram } from "@mui/icons-material";
import { motion } from "framer-motion";
import MailIcon from "@mui/icons-material/Mail";
import { NewsContainer, NewsBox, NewsLetterInput } from "./NewsSectionStyle";

const NewsSection = () => {
  return (
    <>
      <NewsContainer>
        <NewsBox>
          <h2>Mes réseaux</h2>
          <List sx={{ display: "flex" }}>
            <ListItem sx={{ justifyContent: "center" }}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Instagram />
              </motion.div>
            </ListItem>
            <ListItem sx={{ justifyContent: "center" }}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Facebook />
              </motion.div>
            </ListItem>
            <ListItem sx={{ justifyContent: "center" }}>
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
            <button><MailIcon /></button>
          </NewsLetterInput>
        </NewsBox>
      </NewsContainer>
    </>
  );
};

export default NewsSection;
