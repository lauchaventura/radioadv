import {
  ButtonGroup,
  Box,
  IconButton,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import * as React from "react";
import {FaYoutube, FaFacebook, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg='white' color='blackAlpha.700' p={4}>
      <Stack
        spacing={{
          base: "4",
          md: "5",
        }}
      >
        <Text
          mt={2}
          fontSize='sm'
          color='subtle'
          align='center'
          fontWeight={500}
        >
          &copy; {new Date().getFullYear()} Radio Agua de Vida by
          @lauchaventura. Todos los derechos reservados.
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
