import React from "react";
import { useRouter } from "next/router"
import { ChakraProvider } from "@chakra-ui/react";
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

const grid = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Radio Agua de Vida | Grilla</title>
            </Head>
            <ChakraProvider resetCSS theme={theme} >
                <Header />
                <Container maxW='xl' >
                    <Box
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
                    </Box>
                    <Tabs orientation='vertical' borderColor='transparent' size='lg'>
                        <TabList

                        >
                            <Tab _selected={{ color: 'white', bg: 'blue.500' }}>LUNES</Tab>
                            <Tab _selected={{ color: 'white', bg: 'green.400' }}>MARTES</Tab>
                            <Tab _selected={{ color: 'white', bg: 'green.400' }}>MIERCOLES</Tab>
                            <Tab _selected={{ color: 'white', bg: 'green.400' }}>JUEVES</Tab>
                            <Tab _selected={{ color: 'white', bg: 'green.400' }}>VIERNES</Tab>
                            <Tab _selected={{ color: 'white', bg: 'green.400' }}>SABADO</Tab>
                            <Tab _selected={{ color: 'white', bg: 'green.400' }}>DOMINGO</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel bg='red.100' height='100%' >
                                <Text fontSize='lg' fontWeight='bold'>
                                    Quien Ira - 8AM
                                    <Badge mb={3} ml='1' variant='outline' fontSize='0.5em' colorScheme='red'>
                                        NUEVO
                                    </Badge>
                                </Text>
                                <Text fontSize='lg' fontWeight='bold'>
                                    Un Tiempo Para Todos - 9:30
                                </Text>
                                <Text fontSize='lg' fontWeight='bold'>
                                    En Linea - 12 PM
                                </Text>
                                <Text fontSize='lg' fontWeight='bold'>
                                    Mujeres de Fe - 17PM
                                </Text>
                                <Text fontSize='lg' fontWeight='bold'>
                                    Herederos de Victoria - 18PM
                                </Text>
                                <Text fontSize='lg' fontWeight='bold'>
                                    Entre Lineas - 20PM
                                </Text>

                            </TabPanel>
                            <TabPanel>
                                <p>two!</p>
                            </TabPanel>
                            <TabPanel>
                                <p>two!</p>
                            </TabPanel>
                            <TabPanel>
                                <p>asdasd</p>
                            </TabPanel>
                            <TabPanel>
                                <p>asdasd</p>
                            </TabPanel>
                            <TabPanel>
                                <p>two!</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    <Footer />
                </Container>
            </ChakraProvider>

        </>
    )
};

export default grid;
