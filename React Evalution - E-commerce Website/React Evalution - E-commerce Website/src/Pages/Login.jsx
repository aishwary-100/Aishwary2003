import React, { useState } from "react";
import {
  Box,
  FormControl,
  Text,
  Heading,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import PrivetRoute from "../utils/PrivetRoute";
import { Navigate } from "react-router-dom";
import { UserCon } from "../Context/UseAuth";
import { useContext } from "react";
const Login = () => {
  const { isAuth, setIsAuth } = useContext(UserCon);
  console.log(isAuth);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userValue = JSON.parse(localStorage.getItem("user"));
    if (email === userValue.email && password === userValue.password) {
      setIsAuth(true);
      navigate("/");
    }
    else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        minH={"100vh"}
      >
        <Box
          maxW="md"
          mx="auto"
          mt={8}
          p={10}
          borderWidth="1px"
          borderRadius="lg"
        >
          <form onSubmit={handleSubmit}>
            <Heading size="lg" mb="5">
              {" "}
              Login
            </Heading>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" mt={4} isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button size={"sm"} colorScheme="blue" mt={4} type="submit">
              Login
            </Button>
          </form>
          <Text color={"blue.500"} w={"100%"} textAlign={"end"}>
            <Link to={"/register"}> Go to register</Link>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Login;
