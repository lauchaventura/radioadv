import { Box, chakra, SimpleGrid, Text, Container, Stack, Button, Link, Heading, Code, Image } from "@chakra-ui/react";
import { GrMapLocation, GrPlay } from 'react-icons/gr';
import React from "react";
import Reproductor from './Reproductor'
import styles from '../styles/AudioPlayer.module.scss'

const Presentation = () => {
    return (
        
 <SimpleGrid
            alignItems='center'
            columns={[1,2]}
            bg='gray.50'
            align='center'
            p={2}
            
             >
                <Box >
                <Text p={5} ml={10} mr={10} fontWeight='900' fontSize={[60, 70, 90]} lineHeight={0.9} color='#1A202C' align='start'
            >Somos distintos a los demas...
            </Text>
            <Text align='start'  p={5} ml={10} mr={10}>
                Somos Agua de Vida un medio audiovisual en donde encontraras lo que buscas. Estamos para vos y para todo los que nos escuchan. SOMOS LO QUE SOMOS GRACIAS A VOS !!! 
            </Text>
                </Box>
            
            <Box w={[400, 400, 600]} p={7}>
            <Image  align='center'  src='https://res.cloudinary.com/dsjas6fvz/image/upload/v1658177788/Radio%20Agua%20de%20Vida/TODOS_fahadm.png'/>
            </Box>

        </SimpleGrid>
       
    )
        ;
};

export default Presentation;