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

centerContent
        color="#1A202C"

    >
        <SimpleGrid alignItems='center' columns={[1, 2]}   >
         
            <Box align='start' justifyContent='center' mb={10} >
            <Text p={6} lineHeight={0.86}  Textalign='start' fontWeight='900' fontSize={[67, 60, 100]}>
                    Somos distintos a los demas 
                </Text>
                <Text Textalign='start' ml={6}>
                Somos Agua de Vida un medio audiovisual en donde encontraras lo que buscas. Estamos para vos y para todo los que nos escuchan.
                </Text>
                

            </Box>
            <Box align='center'
            maxW={540} ml={[,2,3,9]} p={2}>
             <Image 
             align='center' 
             justify='center' 
             src='https://res.cloudinary.com/dsjas6fvz/image/upload/v1658190582/Radio%20Agua%20de%20Vida/TODOS_dgrpce.png' />


            </Box>
        </SimpleGrid>
<Box w='55px' position='fixed'  bottom='50px' right='25px' zIndex='100'  >
    <Link outline='none'href='https://api.whatsapp.com/send?phone=2984134931' isExternal>
        <Image borderRadius='2xl'  src='https://res.cloudinary.com/dsjas6fvz/image/upload/v1658713033/Radio%20Agua%20de%20Vida/pngwing.com_dlalmd.png' />
    </Link>
</Box>
    </Container >
    </motion.div>
      


  
    )
        ;
};

export default Presentation;