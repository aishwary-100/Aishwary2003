import React, { useState, useEffect } from "react";
import Product from "../Components/Product";
import { Box, Stack, Select } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

const Products = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let filteredArray = [...data];

    // Filter by category
    if (category) {
      filteredArray = filteredArray.filter(item => item.category === category);
    }

    // Sort the filtered data
    if (selectValue === "lowToHigh") {
      filteredArray.sort((a, b) => a.price - b.price);
    } else if (selectValue === "highToLow") {
      filteredArray.sort((a, b) => b.price - a.price);
    }

    setFilteredData(filteredArray);
  }, [selectValue, category, data]);

  return (
    <div>
      <Box mb={4}>
        <Select
          placeholder="Filter by Category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="smartphones">Smartphones</option>
          <option value="home-decoration">Home Decoration</option>
          <option value="groceries">Groceries</option>
          <option value="skincare">Skincare</option>
          <option value="fragrances">Fragrances</option>
          <option value="laptops">Laptops</option>
        </Select>
        <Select
          mt={2}
          placeholder="Sort by Price"
          onChange={(e) => setSelectValue(e.target.value)}
        >
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </Select>
      </Box>
      <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-around"}>
        {filteredData.map((item, index) => (
          <Product key={index} {...item} />
        ))}
      </Stack>
    </div>
  );
};

export default Products;
