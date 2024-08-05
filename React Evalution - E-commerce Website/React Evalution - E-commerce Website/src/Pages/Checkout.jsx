import React, { useState } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ProductCon } from "../Context/ProductContext";
const Checkout = () => {
  const { cartData, setCartData } = useContext(ProductCon);

  const handlePay = () => {
    alert("Payment Successful");
    setTimeout(() => {
      setCartData([]);
    }, 1000);
  };
  return (
    <div>
      {cartData.length > 0 ? (
        <>
          <TableContainer p={5}>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Item Name</Th>

                  <Th>Price</Th>
                </Tr>
              </Thead>
              <Tbody>
                {cartData.map((item, index) => {
                  return (
                    <Tr key={index}>
                      <Td>{item.title}</Td>
                      <Td> ₹ {item.price}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Td fontWeight={"bold"}>Total</Td>
                  <Td fontWeight={"bold"}>
                    ₹{" "}
                    {cartData.reduce((acc, item) => {
                      return acc + item.price;
                    }, 0)}{" "}
                  </Td>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
          <Button colorScheme="teal" size="sm" mx={7} onClick={handlePay}>
            Pay Now
          </Button>
        </>
      ) : (
        <Heading textAlign={"center"} py={5}>
          No Items Available
        </Heading>
      )}
    </div>
  );
};

export default Checkout;
