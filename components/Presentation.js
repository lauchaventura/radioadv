import { Box, chakra, SimpleGrid, Text, AspectRatio, Link, Button , Image, Container } from "@chakra-ui/react";
import { GrMapLocation, GrPlay } from 'react-icons/gr';
import React from "react";
import Reproductor from './Reproductor'
import styles from '../styles/AudioPlayer.module.scss'
import { motion } from "framer-motion";
const Presentation = () => {
    return (
        <motion.div initial='hidden' animate='visible'
        variants={{
            hidden:{
scale:.9,
opacity:0
            },
            visible:{
                scale:1,
                opacity: 1,
            }
        }}
       
        >
        <Container maxW='container.xl'
        align="center"
        wrap="wrap"
p={10}
centerContent
        color="#1A202C"

    >
        <SimpleGrid alignItems='center' columns={[1, 2]}   spacing={10}>
         
            <Box align='start' justifyContent='center' >
            <Text lineHeight={0.9}  Textalign='start' fontWeight='900' fontSize={[50, 60, 90]}>
                    Somos distintos a los demas 
                </Text>
                <Text Textalign='start' mt={5}>
                Somos Agua de Vida un medio audiovisual en donde encontraras lo que buscas. Estamos para vos y para todo los que nos escuchan.
                </Text>
                

            </Box>
            <Box align='center'
            maxW={500}>
             <Image 
             align='center' 
             justify='center' 
             src='https://res.cloudinary.com/dsjas6fvz/image/upload/v1658190582/Radio%20Agua%20de%20Vida/TODOS_dgrpce.png' />


            </Box>
        </SimpleGrid>

    </Container >
    </motion.div>
      


  
    )
        ;
};

export default Presentation;