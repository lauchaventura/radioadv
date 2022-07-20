import Head from 'next/head'
import Header from '../components/Header'
import { ChakraProvider, Container } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Map from '../components/Map'
import CardsDonation from '../components/CardsDonation'
import Presentation from '../components/Presentation'
import Reproductor from '../components/Reproductor'
import styles from '../styles/AudioPlayer.module.scss'
export default function Home() {
  return (
    <>
      <Head>
        <title>Radio Agua de Vida</title>
      </Head>
      <Header />
      <Presentation/>
      <CardsDonation />
      <Reproductor />
      <Map />
      <Footer />

    </>

  )
}
