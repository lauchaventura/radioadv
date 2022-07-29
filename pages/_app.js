import {ChakraProvider, Box} from "@chakra-ui/react";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/quicksand";
import theme from "../styles/theme";
import {motion} from "framer-motion";

function MyApp({Component, pageProps, router}) {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
export default MyApp;
