import React from "react";
import { Box, Image, Text, Button, Link, SimpleGrid, chakra, Flex, Container, Heading, Stack } from "@chakra-ui/react";

const CardsDonation = () => {
    return (
       <Container
       maxW='container.xl'
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={3}
            color="#1A202C"
            w='100%'
            centerContent
       >

            <SimpleGrid spacing={[4,8,12]} columns={[1, 2, 3]}  align='center' alignItems='center' color='#384967'  >
                <Box
                   
                  
                    borderRadius='md'
                    boxShadow='2xl'
                    w={[230,270, 260, 270]}
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
                w={[230,270, 260, 270]}
                    
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
                   
                    w={[230,270, 260, 270]}
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
            </SimpleGrid>
            </Container>
    );
};

export default CardsDonation;