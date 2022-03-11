import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
    Box,
    Heading,
    Container,
    Badge,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
} from "@chakra-ui/react";
import Header from '../components/Header'
import theme from '../styles/theme'
import '@fontsource/montserrat/400.css'
import '@fontsource/open-sans/700.css'
const grid = () => {
    return (
        <ChakraProvider resetCSS theme={theme} >
            <Header />
            <Container maxW='xl'>
                <Box
                    mb={5}
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

            </Container>
        </ChakraProvider>
    )
};

export default grid;
