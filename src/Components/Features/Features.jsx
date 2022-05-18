import { Grid, styled } from "@mui/material";
import { LocalShipping, Palette, Drafts } from "@mui/icons-material";

const Features = () => {
  return (
    <FeatureList>
      <h1>Pourquoi shopper chez Succi Place?</h1>
      <Grid
        container
        direction="row"
        spacing={12}
        padding="0.5em"
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

const FeatureList = styled("div")`
  margin: 5em 2em;
`;

const Feature = styled("div")`
  margin-top: 2em;
  text-align: center;
  h3 {
    font-size: 34px;
  }

  svg {
    color: green;
    font-size: 48px;
  }

  p {
    font-size: 16px;
  }
`;

export default Features;
