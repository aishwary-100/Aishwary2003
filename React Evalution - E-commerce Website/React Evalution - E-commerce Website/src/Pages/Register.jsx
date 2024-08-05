import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = localStorage.getItem("user") || [];

    const newUser = { email, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    navigate("/login");
    e.target.reset();
  };

  return (
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
            Register
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
          <Button colorScheme="blue" mt={4} size={"sm"} type="submit">
            Login
          </Button>
        </form>
        <Text color={"blue.500"} w={"100%"} textAlign={"end"}>
          <Link to={"/login"}> Go to Login</Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Register;
