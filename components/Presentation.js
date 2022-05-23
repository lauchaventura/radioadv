import { Box, chakra, SimpleGrid, Text, Container, Stack, Button, Link, Heading, Code } from "@chakra-ui/react";
import { GrMapLocation, GrPlay } from 'react-icons/gr';
import React from "react";
import Reproductor from './Reproductor'
import styles from '../styles/AudioPlayer.module.scss'

const Presentation = () => {
    return (
        <SimpleGrid
            // backgroundImage="url('https://res.cloudinary.com/dsjas6fvz/image/upload/v1651251879/Radio%20Agua%20de%20Vida/traica_cbqogx.jpg')"
            // bgRepeat="no-repeat"
            // bgSize={{ base: '300%', md: '200$', lg: '100%' }}
            height='90vh'
            alignItems='center'
            fontWeight='900px'
            position='relative' >

            <Text fontWeight='extrabold' fontSize='70px' color='black' align='center'
            >
                SOMOS DISTINTOS A LOS DEMAS...
            </Text>


        </SimpleGrid>
    )
        ;
};

export default Presentation;