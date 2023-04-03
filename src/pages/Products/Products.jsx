import React, { useState } from "react";
import productList from "../../Other/Lists/ProductList";
import ProductCard from "../../Components/ProductCard/ProductCard";
import {
  ProductsArea,
  ProductsNavigation,
  Cards,
  Option,
} from "./ProductsStyle";
import {
  MenuItem,
  Select,
  FormControl,
  Input,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { motion } from "framer-motion";

const Products = () => {
  const [filter, setFilter] = useState("new");
  const [entry, setEntry] = useState("");
  const [checkedColors, setCheckedColors] = useState([]);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const searchFromEntry = (event) => {
    setEntry(event.target.value);
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <ProductsArea>
        <ProductsNavigation>
          <Option>
            <h2>Recherche</h2>
            <FormControl action="" method="get" fullWidth>
              <Input
                type="text"
                name="searchFor"
                id="searchFor"
                onChange={searchFromEntry}
              />
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

          <Option>
            <h2>Couleurs</h2>
            <FormGroup
              sx={{
                margin: "1em 2em",
                verticalAlign: "middle",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ marginTop: "1em", marginLeft: "1em" }}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setCheckedColors([
                          ...checkedColors,
                          event.target.value,
                        ]);
                      } else {
                        setCheckedColors(
                          checkedColors.filter(
                            (color) => color !== event.target.value
                          )
                        );
                      }
                    }}
                    value={"red"}
                  />
                }
                label="Rouge"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ marginTop: "1em", marginLeft: "1em" }}
                    value={"orange"}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setCheckedColors([
                          ...checkedColors,
                          event.target.value,
                        ]);
                      } else {
                        setCheckedColors(
                          checkedColors.filter(
                            (color) => color !== event.target.value
                          )
                        );
                      }
                    }}
                  />
                }
                label="Orange"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ marginTop: "1em", marginLeft: "1em" }}
                    value={"yellow"}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setCheckedColors([
                          ...checkedColors,
                          event.target.value,
                        ]);
                      } else {
                        setCheckedColors(
                          checkedColors.filter(
                            (color) => color !== event.target.value
                          )
                        );
                      }
                    }}
                  />
                }
                label="Jaune"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ marginTop: "1em", marginLeft: "1em" }}
                    value={"green"}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setCheckedColors([
                          ...checkedColors,
                          event.target.value,
                        ]);
                      } else {
                        setCheckedColors(
                          checkedColors.filter(
                            (color) => color !== event.target.value
                          )
                        );
                      }
                    }}
                  />
                }
                label="Vert"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ marginTop: "1em", marginLeft: "1em" }}
                    value={"blue"}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setCheckedColors([
                          ...checkedColors,
                          event.target.value,
                        ]);
                      } else {
                        setCheckedColors(
                          checkedColors.filter(
                            (color) => color !== event.target.value
                          )
                        );
                      }
                    }}
                  />
                }
                label="Bleu"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ marginTop: "1em", marginLeft: "1em" }}
                    value={"pink"}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setCheckedColors([
                          ...checkedColors,
                          event.target.value,
                        ]);
                      } else {
                        setCheckedColors(
                          checkedColors.filter(
                            (color) => color !== event.target.value
                          )
                        );
                      }
                    }}
                  />
                }
                label="Rose"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ marginTop: "1em", marginLeft: "1em" }}
                    value={"purple"}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setCheckedColors([
                          ...checkedColors,
                          event.target.value,
                        ]);
                      } else {
                        setCheckedColors(
                          checkedColors.filter(
                            (color) => color !== event.target.value
                          )
                        );
                      }
                    }}
                  />
                }
                label="Violet"
              />
            </FormGroup>
          </Option>
        </ProductsNavigation>

        <Cards>
          {filter === "new" &&
            productList
              .sort(function (articleA, articleB) {
                return articleA.new === articleB.new
                  ? 0
                  : articleA.new
                  ? -1
                  : 1;
              })
              .filter((painting) =>
                painting.name.toLowerCase().includes(entry.toLowerCase())
              )
              .filter(
                (painting) =>
                  checkedColors.length === 0 ||
                  painting.colors.some((color) => checkedColors.includes(color))
              )
              .map((product) => {
                return <ProductCard key={product.id} {...product} />;
              })}

          {filter === "price" &&
            productList
              .sort(function (articleA, articleB) {
                return articleA.price.small - articleB.price.small;
              })
              .filter((painting) =>
                painting.name.toLowerCase().includes(entry.toLowerCase())
              )
              .filter(
                (painting) =>
                  checkedColors.length === 0 ||
                  painting.colors.some((color) => checkedColors.includes(color))
              )
              .map((product) => {
                return <ProductCard key={product.id} {...product} />;
              })}
        </Cards>
      </ProductsArea>
    </motion.div>
  );
};

export default Products;
