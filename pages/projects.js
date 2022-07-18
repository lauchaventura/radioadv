import React from "react";
import Head from "next/head";
import { Avatar,Stack, useColorModeValue, SimpleGrid, Text, Box, Container } from "@chakra-ui/react";
import Header from "../components/Header";
const axios = require('axios')



const Projects = () => {
    return (
        <>
            <Head>
                <title>Radio Agua de Vida | Nuestros Proyectos</title>
            </Head>
                <Header />
                
                <SimpleGrid height='90vh' columns={[1,2]} mt={9} alignItems='center' align='center'>
                    <Box  fontWeight='900' fontSize='80' lineHeight='0.8'>
                        <Text align='start' m={10} >Estamos ayudando desde cualquier parte del mundo</Text>
                    </Box>

                </SimpleGrid>  
                <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
        Trabajar en todos estos proyectos nos dejan una gran satisfaccion, el poder crear un multimedio para llegar a todos de distintas maneras, creo que seguimos conectados con la realidad.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://res.cloudinary.com/dsjas6fvz/image/upload/v1658171215/Radio%20Agua%20de%20Vida/IMG_7327_qorg6b.jpg'
          }
          alt={'Alejandro Cononahuel'}
          mb={2}
        />

        <Text fontWeight={600}>Alejandro Cononahuel</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Constructor 
        </Text>
      </Box>
    </Stack>            
         
        </>
    )
};


export default Projects;
