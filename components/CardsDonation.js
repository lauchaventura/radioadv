import React from "react";
import { Box, Image, Text, Button, Link, SimpleGrid, chakra, Flex, Container, Heading, Stack } from "@chakra-ui/react";

const CardsDonation = () => {
    return (
        <Container maxW='container.xl' mt={3} centerContent>
            <SimpleGrid columns={[1, 2, 3]} align='center' alignItems='center' color='#384967' >
                <Box
                    m={9}
                    maxW='sm'
                    borderRadius='md'
                    boxShadow='2xl'

                >
                    <Image src='https://www.mgscreativa.com/images/stories/virtuemart/product/logo-mercadopago9.png'
                        objectFit='cover'
                        boxSize='250px'
                    />
                    <Box>
                        <Text fontWeight='900'>Donar en territorio nacional</Text>
                        <Text >Podes colaborar con nuestros servicios desde cualquier parte del pais(AR)</Text>
                        <Image
                            cursor='pointer'
                            p={5}
                            width='90px'
                            src='https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0035/0133/Tarjeta_Prepaga_MercadoPago_solicitar__requisitos_y_beneficios.png?1567716920' />
                    </Box>
                </Box>

                <Box
                    m={9}
                    maxW='md'
                    boxShadow='2xl'
                    borderRadius='md'
                >
                    <Image src='https://www.mgscreativa.com/images/stories/virtuemart/product/logo-mercadopago9.png'
                        objectFit='cover'
                        boxSize='250px'
                    />
                    <Text fontWeight='bold'>Donar en territorio Nacional</Text>
                    <Text >Podes colaborar con nuestros servicios desde cualquier parte del pais(AR)</Text>
                    <Image
                        cursor='pointer'
                        p={6}
                        width='220px'
                        src='https://res.cloudinary.com/dsjas6fvz/image/upload/v1651623659/Radio%20Agua%20de%20Vida/tarjetas_lted6p.png' />
                </Box>
                <Box
                    maxW='sm'
                    boxShadow='2xl'
                    m={9}
                    borderRadius='md'
                >
                    <Image src='https://www.mgscreativa.com/images/stories/virtuemart/product/logo-mercadopago9.png'
                        objectFit='cover'
                        boxSize='250px'
                    />
                    <Text fontWeight='bold'>Donar telefonicamente</Text>
                    <Text>Desde cualquier parte del mundo</Text>
                    <Box p='4'>
                        <Text >En Argentina: 2984134931
                        </Text>
                        <Text>En el Exterior: (+549) 2984134931</Text>
                    </Box>



                </Box>
            </SimpleGrid>

        </Container>
    );
};

export default CardsDonation;
