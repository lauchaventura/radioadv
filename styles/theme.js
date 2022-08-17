import {extendTheme} from "@chakra-ui/react";

const fonts = {
  heading: "Montserrat, sans-serif",
  body: "Montserrat, sans-serif",
};
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const theme = extendTheme({config, fonts});

export default theme;
