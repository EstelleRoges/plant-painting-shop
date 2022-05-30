import { useState } from "react";
import productList from "../../Other/Lists/ProductList";
import ProductCard from "../../Components/ProductCard/ProductCard";
import {
  ProductsArea,
  ProductsNavigation,
  Cards,
  Card,
  Option,
} from "./ProductsStyle";
import {
  MenuItem,
  Select,
  FormControl,
  Input
} from "@mui/material";
import { Search } from "@mui/icons-material";

const Products = () => {
  const [filter, setFilter] = useState("new");
  // const [checkedColors, setCheckedColors] = useState([]);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  // const addToColorFilter = () => {
  //   setCheckedColors(...checkedColors, checkedColors);
  // };
  // const displayColors = () => {
  //   return;
  // };

// some code for the future color filters:
// return product.colors.includes("blue")

  return (
    <ProductsArea>
      <ProductsNavigation>
        <Option>
          <h2>Recherche</h2>
          <FormControl action="" method="get" fullWidth>
            <Input type="text" name="searchFor" id="searchFor" />
            <Search />
          </FormControl>
        </Option>
        <Option>
          <h2>Trier par:</h2>
          <FormControl action="" method="get" fullWidth>
            <Select
              labelId="filterSelect"
              id="filterSelect"
              color="success"
              value={filter}
              onChange={handleChange}
            >
              <MenuItem value={"new"}>Nouveautés</MenuItem>
              <MenuItem value={"price"}>Prix</MenuItem>
            </Select>
          </FormControl>
        </Option>
      </ProductsNavigation>
      <Cards>
        {filter === "new" && productList
          .sort(function (articleA, articleB) {
            return (articleA.new === articleB.new) ? 0 : articleA.new ? -1 : 1;
          })
          .map((product) => {
            return (
              <Card key={product.id}>
                <ProductCard {...product} />
              </Card>
            );
          })}

          {filter === "price" && productList
          .sort(function (articleA, articleB) {
            return (articleA.price.small - articleB.price.small);
          })
          .map((product) => {
            return (
              <Card key={product.id}>
                <ProductCard {...product} />
              </Card>
            );
          })}
      </Cards>
    </ProductsArea>
  );
};


export default Products;

{/* <Option>
          <h2>Couleurs</h2>
          <FormGroup sx={{ margin: "1em 2em", verticalAlign: "middle" }}>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{ marginTop: "1em" }}
                  onChange={addToColorFilter}
                  value={"red"}
                />
              }
              label="Rouge"
            />
            <FormControlLabel
              control={<Checkbox sx={{ marginTop: "1em" }} value={"orange"} />}
              label="Orange"
            />
            <FormControlLabel
              control={<Checkbox sx={{ marginTop: "1em" }} value={"yellow"} />}
              label="Jaune"
            />
            <FormControlLabel
              control={<Checkbox sx={{ marginTop: "1em" }} value={"green"} />}
              label="Vert"
            />
            <FormControlLabel
              control={<Checkbox sx={{ marginTop: "1em" }} value={"blue"} />}
              label="Bleu"
            />
            <FormControlLabel
              control={<Checkbox sx={{ marginTop: "1em" }} value={"pink"} />}
              label="Rose"
            />
            <FormControlLabel
              control={<Checkbox sx={{ marginTop: "1em" }} value={"purple"} />}
              label="Violet"
            />
          </FormGroup>
        </Option> */}