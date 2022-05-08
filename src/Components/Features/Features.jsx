import { Grid, styled } from "@mui/material";

const Features = () => {
  const Feature = styled("div")`
    margin: 1em;
    h3 {
      font-size: 20px;
    }

    p {
      font-size: 12px;
    }
  `;

  return (
    <Grid
      container
      direction="row"
      spacing={12}
      columns={{ xs: 2, sm: 2, md: 12 }}
    >
      <Grid item xs={4}>
        <Feature>
          <span></span>
          <h3>Feature</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            recusandae perspiciatis saepe tempore repellat provident?
          </p>
        </Feature>
      </Grid>
      <Grid item xs={4}>
        <Feature>
          <span></span>
          <h3>Feature</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            nam.
          </p>
        </Feature>
      </Grid>
      <Grid item xs={4}>
        <Feature>
          <span></span>
          <h3>Feature</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            laboriosam porro veritatis.
          </p>
        </Feature>
      </Grid>
      <Grid item xs={4}>
        <Feature>
          <span></span>
          <h3>Feature</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </Feature>
      </Grid>
      <Grid item xs={4} className=".feature">
        <Feature>
          <span></span>
          <h3>Feature</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis?
          </p>
        </Feature>
      </Grid>
      <Grid item xs={4}>
        <Feature>
          <span></span>
          <h3>Feature</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            commodi!
          </p>
        </Feature>
      </Grid>
    </Grid>
  );
};

export default Features;
