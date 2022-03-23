import { ChakraProvider, Box } from '@chakra-ui/react'
import '@fontsource/montserrat/400.css'
import '@fontsource/open-sans/700.css'
import theme from '../styles/theme'
import styles from '../styles/AudioPlayer.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Box >
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </>
  )


}
export default MyApp
