import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Heading,
  TableContainer,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ProductCon } from "../Context/ProductContext";
const Cart = () => {
  const { cartData, setCartData } = useContext(ProductCon);
  console.log(cartData);
  return (
    <div>
      {cartData.length > 0 ? (
        <TableContainer p={5}>
          <Table variant="simple">
            <TableCaption>Product Table</TableCaption>
            <Thead>
              <Tr>
                <Th>Item Name</Th>
                <Th>Description</Th>
                <Th>Price</Th>
                <Th>Image</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cartData.map((item, index) => {
                return (
                  <Tr key={index}>
                    <Td>{item.title}</Td>
                    <Td>{item.description}</Td>
                    <Td>{item.price}</Td>
                    <Td>
                      <img
                        src={item.thumbnail}
                        width={"100px"}
                        height={"100px"}
                        alt=""
                      />
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Heading textAlign={"center"} py={5}>
          No Items Available
        </Heading>
      )}
    </div>
  );
};

export default Cart;
