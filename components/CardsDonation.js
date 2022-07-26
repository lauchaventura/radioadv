import React from "react";
import { Box, Image, Text, Grid, Container, Heading, Stack } from "@chakra-ui/react";

const CardsDonation = () => {
    return (
       <Container
       maxW='container.xl'
    
       >

            <Grid align='center' mb={6}  p={3}gridGap={7} templateColumns="repeat(auto-fill, minmax(240px, 1fr))" >
            {/* <Box  justifyContent='center' >
                    
                    <Box alignItems='center' align='start' >
                        <Text fontSize='45' lineHeight={0.82}  fontWeight='900'>Tu ayuda nos impulsa </Text>
                       
                        <Text fontSize='20'   >Nuestros proyectos son para desarrolar el ambito social </Text>
                    </Box>
                </Box> */}
               
                <Box
                    borderRadius='md'
                    boxShadow='2xl'
                 
                >
                    <Box bg='#a8dadc'>
                    <Image src='https://res.cloudinary.com/dsjas6fvz/image/upload/v1653339183/Radio%20Agua%20de%20Vida/1_fvo0wm.png'
                        objectFit='cover'
                        boxSize='200px'
                    />
                    </Box>
                    
                    <Box p={2} mt={2}>
                        <Text  fontWeight='600'>Donar en territorio nacional</Text>
                        <Text >Podes colaborar con nuestros servicios desde cualquier parte del pais(AR)</Text>
                        <Image
                            cursor='pointer'
                            p={5}
                            width='90px'
                            src='https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0035/0133/Tarjeta_Prepaga_MercadoPago_solicitar__requisitos_y_beneficios.png?1567716920' />
                    </Box>
                </Box>

                <Box  
                    boxShadow='2xl'
                    borderRadius='md'
                >
                    <Box bg='#457b9d'>
                    <Image bg='#a8dadc' src='https://res.cloudinary.com/dsjas6fvz/image/upload/v1653339183/Radio%20Agua%20de%20Vida/2_ei5qn8.png'
                        objectFit='cover'
                        boxSize='200px'
                    />
                    </Box>
                    <Box p={2} >
 
                    <Text mt={2}  fontWeight='semibold'>Donar desde el Exterior</Text>
                    <Text >Podes colaborar con nuestros servicios desde cualquier parte del pais(AR)</Text>
                    <Image
                        cursor='pointer'
                        p={6}
                        width='220px'
                        src='https://res.cloudinary.com/dsjas6fvz/image/upload/v1651623659/Radio%20Agua%20de%20Vida/tarjetas_lted6p.png' />
                    </Box>
                  
                </Box>
                <Box
                    boxShadow='2xl'
                >
                    <Box bg='#1d3557'>
                    <Image src='https://res.cloudinary.com/dsjas6fvz/image/upload/v1653339183/Radio%20Agua%20de%20Vida/3_pvqwyk.png'
                        objectFit='cover'
                        boxSize='200px'
                    />
                    </Box>
                    <Box p={3}>
                    <Text  fontWeight='semibold'>Donar telefonicamente</Text>
                    <Text>Desde cualquier parte del mundo</Text>
                    <Box p='3'>
                        <Text >En Argentina: 2984134931
                        </Text>
                        <Text>En el Exterior: (+549) 2984134931</Text>
                    </Box>
                
                 </Box>
                 
                </Box>
                <Box
                    boxShadow='2xl'
                >
                    <Box bg='#e63946'>
                    <Image src='https://res.cloudinary.com/dsjas6fvz/image/upload/v1658857571/Radio%20Agua%20de%20Vida/avatar_gv8nca.png'
                        objectFit='cover'
                        boxSize='200px'
                    />
                    </Box>
                    <Box p={3}>
                    <Text  fontWeight='semibold'>Donar presencialmente</Text>
                    <Text>En General Roca, Rio Negro</Text>
                    <Box p='3'>
                        <Text mt={3}>Nuestros estudios centrales
                        </Text>
                        <Text mt={3}>Llamar previamente: 2984134931</Text>
                    </Box>
                
                 </Box>
                 
                </Box>
                
            </Grid>
            </Container>
    );
};

export default CardsDonation;