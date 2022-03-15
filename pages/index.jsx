import Head from 'next/head'
import ReactDOM from 'react-dom'
import Header from '../components/Header'
import { ChakraProvider, Box, Container } from '@chakra-ui/react'
import theme from '../styles/theme'
import '@fontsource/montserrat/400.css'
import '@fontsource/open-sans/700.css'
import Footer from '../components/Footer2'
import Map from '../components/Map'
import CardsDonation from '../components/CardsDonation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Radio Agua de Vida</title>
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Header />
        <Container maxW='container.xl' mt={5} >
          <CardsDonation />
          <Map />
          <Footer />

        </Container>
      </ChakraProvider>

    </>

  )
}
