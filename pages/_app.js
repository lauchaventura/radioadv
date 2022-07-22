import { ChakraProvider, Box } from '@chakra-ui/react'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/800.css'
import '@fontsource/montserrat/900.css'
import '@fontsource/open-sans/700.css'
import theme from '../styles/theme'
import { motion } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div key={router.route} initial='pageInitial' animate='pageAnimate' variants={{
      pageInitial: {
        opacity:0
      },
      pageAnimate:{
        opacity:1
      },
    }}>
      <ChakraProvider theme={theme}>
        <Box >
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </motion.div>
  )


}
export default MyApp
