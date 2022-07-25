import React from "react";
import { useEffect, useState } from "react";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import {
    Box,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Container,
    Badge,
    Text,
    css,
    useDisclosure

} from "@chakra-ui/react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import theme from '../styles/theme'
import '@fontsource/montserrat/400.css'
import '@fontsource/open-sans/700.css'
import Head from "next/head";

const axios = require('axios')


const grilla = () => {
    const[APIdata, setAPIdata] = useState([])
const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
    setTimeout(() =>{
  setIsLoading(false)
    },4000)
  }, [])

useEffect(() => {
  axios.get(`https://sheetsu.com/apis/v1.0su/6b5ab495d7ff `)
  .then((incomingData) => {
    setAPIdata(incomingData.data)
  })
}, [])
    return (
        <>
            <Head>
                <title>Radio Agua de Vida | Grilla</title>
            </Head>
                <Header />
                <Container maxW='container.xl' centerContent >
                    {/* <Box
                        mb={4}
                        p={3}
                        textAlign="center"
                    >
                        <Badge
                            variant="solid"
                            colorScheme='green'
                            fontSize='30px'
                            align='center'
                        >
                            Programación
                        </Badge>
                    </Box> */}
                    {/* <Tabs orientation='vertical' borderColor='transparent' size='lg' key={APIdata.id}>
                        <TabList

                        >
                            <Tab  _selected={{ color: 'white', bg: 'blue.500' }}>LUNES</Tab>
                            <Tab _selected={{ color: 'white', bg: 'green.400' }}>MARTES</Tab>
                            <Tab _selected={{ color: 'white', bg: 'green.400' }}>MIERCOLES</Tab>
                            <Tab _selected={{ color: 'white', bg: 'green.400' }}>JUEVES</Tab>
                            <Tab _selected={{ color: 'white', bg: 'green.400' }}>VIERNES</Tab>
                            <Tab _selected={{ color: 'white', bg: 'green.400' }}>SABADO</Tab>
                            <Tab _selected={{ color: 'white', bg: 'green.400' }}>DOMINGO</Tab>
                        </TabList>
                        {APIdata.map(data =>(
                        <TabPanels>
                            <TabPanel bg='red.100' height='100%' >
                             <p>{data.monday}</p>
                            </TabPanel>
                            <TabPanel>
                            <p>{data.tuesday}</p>
                            </TabPanel>
                            <TabPanel>
                            <p>{data.wednesday}</p>
                            </TabPanel>
                            <TabPanel>
                            <p>{data.thursday}</p>
                            </TabPanel>
                            <TabPanel>
                            <p>{data.friday}</p>
                            </TabPanel>
                            <TabPanel>
                               
                            <p>{data.friday}</p>
                            <p>{data.drivers}</p>
                            <p>{data.horary}</p>
                            </TabPanel>
                        </TabPanels>
                         ))}
                    </Tabs> */}
                   <Heading align='center' fontSize={[40, 40, 60, 90]} p={[10,10,15,20]}>
                    Pagina proximamente disponible!
                   </Heading>
                    <Footer />
                </Container>

        </>
    )
};

export default grilla;
