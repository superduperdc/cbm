import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/Logo/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text fontSize="2xl">NavBar</Text>
    </HStack>
  );
};

export default NavBar;
