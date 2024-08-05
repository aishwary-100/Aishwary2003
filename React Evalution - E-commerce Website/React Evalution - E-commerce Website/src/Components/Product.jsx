import React from "react";
import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ProductCon } from "../Context/ProductContext";
import { useContext } from "react";
const Product = ({ title, description, price, thumbnail, id }) => {
  const { cartData, setCartData } = useContext(ProductCon);

  const handleAddToCart = (productId) => {
    fetch(`http://localhost:3000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setCartData([...cartData, data]))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Card w={{ base: '350px', sm: "250px" }} shadow={"xl"}>
        <CardBody>
          <Image
            src={thumbnail}
            h={"200px"}
            w={"100%"}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="sm">
              {title.length > 20 ? title.substring(0, 20) + "..." : title}
            </Heading>
            <Text fontSize={"xs"}>
              {description.length > 50
                ? description.substring(0, 50) + "..."
                : description}
            </Text>
            <Text color="blue.600" fontSize="md">
              ₹ {price.toString()}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button
              variant="solid"
              colorScheme="blue"
              size={"sm"}
              onClick={() => handleAddToCart(id)}
            >
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Product;
