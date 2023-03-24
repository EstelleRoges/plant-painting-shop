import React from "react";
import { Grid, styled } from "@mui/material";
import { LocalShipping, Palette, Drafts } from "@mui/icons-material";

const Features = () => {
  return (
    <FeatureList>
      <h2>Pourquoi shopper chez Succi Place?</h2>
      <Grid
        container
        direction="row"
        spacing={6}
        // padding="0.5em"
        textAlign="center"
        fontSize="28px"
        columns={{ xs: 2, sm: 2, md: 12 }}
      >
        <Grid item xs={4}>
          <Feature>
            <span>
              <Palette />
            </span>
            <h3>Peinture haute qualité</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              recusandae perspiciatis saepe tempore repellat provident?
            </p>
          </Feature>
        </Grid>
        <Grid item xs={4}>
          <Feature>
            <span>
              <LocalShipping />
            </span>
            <h3>Livraison rapide</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              nam.
            </p>
          </Feature>
        </Grid>
        <Grid item xs={4}>
          <Feature>
            <span>
              <Drafts />
            </span>
            <h3>Peintures personnalisées</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              laboriosam porro veritatis.
            </p>
          </Feature>
        </Grid>
      </Grid>
    </FeatureList>
  );
};

const FeatureList = styled("section")`
  margin: 5em 2em;
`;

const Feature = styled("div")`
  margin-top: 1em;
  text-align: center;

  h3 {
    font-size: clamp(22px, 2.5vw, 30px);
    text-align: center;
  }

  svg {
    font-size: 48px;
  }

  p {
    font-size: 16px;
  }
`;

export default Features;
