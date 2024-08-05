import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Box,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ProductCon } from "../Context/ProductContext";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { UserCon } from "../Context/UseAuth";
import PrivetRoute from "../utils/PrivetRoute";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartData, setCartData } = useContext(ProductCon);
  const { isAuth, setIsAuth } = useContext(UserCon);

  const handlelogout = () => {
    setIsAuth(false);
    navigate("/login");
  };

  if (location.pathname === "/login" || location.pathname === "/register") {
    return <Outlet />;
  }
  return (
    <div>
      <Box bg={"gray.700"}>
        <Stack py={4} px={5} flexDir={"row"} spacing={10} color={"white"}>
          <Menu>
            {/* <MenuButton
             aria-label='Options'
             icon={<HamburgerIcon />}
             variant='outline'
            ></MenuButton> */}
          </Menu>
          <Text
            fontSize={"lg"}
            fontWeight={"regular"}
            display={{ base: "none", sm: "block" }}
          >
            <i class="fa-solid fa-house"></i>
            <Link to={"/products"} style={{ marginLeft: "5px" }}>
              Home
            </Link>
          </Text>
          <Text
            fontSize={"lg"}
            fontWeight={"regular"}
            display={{ base: "none", sm: "block" }}
          >
            <Link
              to={"/cart"}
              style={{
                marginLeft: "5px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <i class="fa-solid fa-cart-shopping"></i>
              Cart
              <Box
                w={4}
                h={4}
                bg={"red.300"}
                borderRadius={"50%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                p={"10px"}
              >
                {cartData.length}
              </Box>
            </Link>
          </Text>
          <Text
            fontSize={"lg"}
            fontWeight={"regular"}
            display={{ base: "none", sm: "block" }}
          >
            <Link to={"/checkout"}>
              <i class="fa-solid fa-indian-rupee-sign"></i>
              Checkout
            </Link>
          </Text>
          <Text
            fontSize={"lg"}
            fontWeight={"regular"}
            display={{ base: "none", sm: "block" }}
          >
            <i class="fa-solid fa-person-running"></i>
            <Link
              onClick={handlelogout}
              to={"/login"}
              style={{ marginLeft: "5px" }}
            >
              Logout
            </Link>
          </Text>

          <Menu>
            <MenuButton ml={"auto"} display={{ base: "block", sm: "none" }}>
              <i class="fa-solid fa-bars"></i>
            </MenuButton>

            <MenuList
              display={{ base: "block", sm: "none" }}
              gap={5}
              color={"black"}
            >
              <MenuItem>
                <i class="fa-solid fa-house"></i> <Text ml={5}>
                <Link
              onClick={handlelogout}
              to={"/"}
              style={{ marginLeft: "5px" }}
            >
              Home
            </Link>
                </Text>
              </MenuItem>
              <MenuItem>
                <i class="fa-solid fa-images"></i> <Text ml={5}>
                <Link
              to={"/cart"}
              style={{
                marginLeft: "5px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <i class="fa-solid fa-cart-shopping"></i>
              Cart
              <Box
                w={4}
                h={4}
                bg={"red.300"}
                borderRadius={"50%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                p={"10px"}
              >
                {cartData.length}
              </Box>
            </Link>
                </Text>
              </MenuItem>
              <MenuItem>
                <i class="fa-solid fa-address-book"></i>{" "}
                <Text ml={5}>
                <Link to={"/checkout"}>
              <i class="fa-solid fa-indian-rupee-sign"></i>
              Checkout
            </Link>
                </Text>
              </MenuItem>
              <MenuItem>
                <i class="fa-solid fa-circle-exclamation"></i>{" "}
                <Text ml={5}>
                <Link
              onClick={handlelogout}
              to={"/login"}
              style={{ marginLeft: "5px" }}
            >
              Logout
            </Link>
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Box>
      <PrivetRoute />
      <Outlet />
    </div>
  );
};

export default Navbar;
