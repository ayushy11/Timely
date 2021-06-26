import React from "react";
import Box from "./Box";
import css from "@styled-system/css";

const Typography = (props) => {
  return (
    <Box as={props.as || "p"} {...props}>
      {props.children}
    </Box>
  );
};

const Heading = (props) => {
  return (
    <Box
      as="h2"
      color="black"
      fontSize={{ xs: "5rem", sm: "2.5rem" }}
      fontWeight={{ xs: "750", sm: "600" }}
      textAlign={{ xs: "center", sm: "left" }}
      {...props}
    >
      {props.children}
    </Box>
  );
};

const Form = (props) => {
  return (
    <Box
      as="form"
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      alignItems="center"
      // justifyContent={{ xs: "center", sm: "space-between" }}
      outline="none"
      {...props}
    >
      {props.children}
    </Box>
  );
};

const Input = (props) => {
  return (
    <Box
      as="input"
      // border="none"
      textDecoration="none"
      outline="none"
      borderRadius="2px"
      color="primaryDark"
      fontSize="1.25rem"
      fontWeight="550"
      css={css({
        "&:focus": {        
          textDecoration: "none",
          outline:"none"
        },
      })}
      {...props}
    >
      {props.children}
    </Box>
  );
};
const Select = (props) => {
  return (
    <Box
      as="select"
      // border="none"
      textDecoration="none"
      outline="none"
      borderRadius="2px"
      color="primaryDark"
      fontSize="1.25rem"
      fontWeight="550"
      {...props}
    >
      {props.children}
    </Box>
  );
};
const Option = (props) => {
  return (
    <Box
      as="option"
      // border="none"
      textDecoration="none"
      outline="none"
      borderRadius="2px"
      color="primaryDark"
      fontSize="1.25rem"
      fontWeight="550"
      {...props}
    >
      {props.children}
    </Box>
  );
};

const Image = (props) => {
  return (
    <Box as="img" {...props}>
      {props.children}
    </Box>
  );
};

const Flex = (props) => {
  return (
    <Box
      css={css`
        display: flex;
      `}
      {...props}
    >
      {props.children}
    </Box>
  );
};

const Button = (props) => {
  return (
    <Box as="button" {...props}>
      {props.children}
    </Box>
  );
};

const PrimaryButton = (props) => {
  return (
    <Box
      as="button"
      display="block"
      backgroundColor="primary"
      borderRadius="5rem"
      fontWeight="700"
      color="white"
      textAlign="center"
      border="none"
      cursor="pointer"
      boxShadow="0 0 10px #eee"
      transition="0.5s"
      textTransform="uppercase"
      variant="primary"
      css={css({
        "&:hover": {
          backgroundPosition: "right center",
          color: "#fff",
          textDecoration: "none",
        },
      })}
      {...props}
    >
      {props.children}
    </Box>
  );
};

const Container = (props) => {
  return (
    <Box
      css={css`
        max-width: 1440px;
        margin: 0 auto;
      `}
      {...props}
    >
      {props.children}
    </Box>
  );
};

export {
  Box,
  Typography,
  Button,
  Flex,
  Container,
  Image,
  Heading,
  Form,
  Input,
  Select,
  Option,
  PrimaryButton,
};
