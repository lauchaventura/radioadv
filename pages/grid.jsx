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
                            fontSize='30px'>
                            Programación
                        </Badge>
                    </Box>
                    <Tabs variant='unstyled' size='md' isLazy>
                        <TabList
                            css={css({
                                scrollbarWidth: 'none',
                                '::-webkit-scrollbar': { display: 'none' },
                                '-webkit-overflow-scrolling': 'touch',
                                boxShadow: 'inset 0 -2px 0 rgba(0, 0, 0, 0.1)',
                                border: '0 none',
                            })}
                        >
                            <Tab _selected={{ color: 'white', bg: 'blue.500' }}>LUNES</Tab>
                            <Tab _selected={{ color: 'white', bg: 'green.400' }}>MARTES</Tab>
                            <Tab _selected={{ color: 'white', bg: 'green.400' }}>MIERCOLES</Tab>
                            <Tab _selected={{ color: 'white', bg: 'green.400' }}>JUEVES</Tab>
                            <Tab _selected={{ color: 'white', bg: 'green.400' }}>JUEVES</Tab>
                            <Tab _selected={{ color: 'white', bg: 'green.400' }}>JUEVES</Tab>
                            <Tab _selected={{ color: 'white', bg: 'green.400' }}>JUEVES</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel bg='red.100'>
                                <Text fontSize='xl' fontWeight='bold'>
                                    Quien Ira - 8AM
                                    <Badge mb={3} ml='1' variant='outline' fontSize='0.5em' colorScheme='red'>
                                        NUEVO
                                    </Badge>
                                </Text>
                                <p>Un Tiempo Para Todos - 9:30 AM</p>
                                <p>En Linea - 12 PM</p>
                                <p>Mujeres de Fe - 17PM</p>
                                <p>Herederos de Victoria - 18PM</p>
                                <p>Entre Lineas - 20PM</p>
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
                </Container>
            </ChakraProvider>
        </>
    )
};

export default grid;
