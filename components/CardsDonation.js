import React from "react";
import { Box, Image, Text, Button, Link, SimpleGrid, Container } from "@chakra-ui/react";

const CardsDonation = () => {
    return (
        <>
            <Container maxW='container.xl' centerContent mt={28} >
                <SimpleGrid columns={[1, 2, 3]} spacing={7} alignItems='center'  >
                    <Box
                        maxW="350"
                        boxShadow="lg"
                        textAlign="center"
                    >
                        <Image
                            src="https://www.mgscreativa.com/images/stories/virtuemart/product/logo-mercadopago9.png"
                            alt="card-img"
                            objectFit="cover"
                        ></Image>
                        <Box bg='#457B9D' padding="3">
                            <Text fontSize="1em" fontWeight="600" marginBottom="0.5em">
                                Donar a traves de MercadoPago
                            </Text>
                            <Text fontSize="0.8em" color="white">
                                Ayudas a difundir aun mas nuestro ministerio
                            </Text>
                            <Link isExternal>
                                <Button mt={2} >
                                    DONAR
                                </Button>
                            </Link>

                        </Box>
                    </Box>

                    <Box
                        maxW="350"
                        boxShadow="lg"
                        textAlign="center"
                    >
                        <Image
                            src="https://res.cloudinary.com/dsjas6fvz/image/upload/v1647310535/Radio%20Agua%20de%20Vida/phonenewmessage_101063_ovksye.png"
                            alt="card-img"
                            objectFit="cover"
                        ></Image>
                        <Box bg='#457B9D' padding="6"  >
                            <Text fontSize="1em" fontWeight="600" marginBottom="0.5em">
                                Donar a traves de Telefono y/o celular
                            </Text>
                            <Text fontSize="0.8em" color="#737373">
                                En ARG: 2984134931
                            </Text>
                            <Text fontSize="0.8em" color="#737373">
                                En el Exterior: (+54 9 2984134931)
                            </Text>

                        </Box>
                    </Box>
                    <Box
                        maxW="350"
                        padding="2"
                        boxShadow="lg"
                        backgroundColor="#fff"
                        textAlign="center"
                    >
                        <Image
                            src='https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_960_720.png'
                            alt="card-img"
                            objectFit="cover"
                        ></Image>
                        <Box>
                            <Text fontSize="1em" fontWeight="600" marginBottom="0.5em">
                                Donar a traves de Paypal o tarjeta
                            </Text>
                            <Text fontSize="0.8em" color="#737373">
                                Ayudas a difundir desde cualquier parte del mundo
                            </Text>
                            <Link href='https://www.paypal.com/donate/?hosted_button_id=QZ5VDQ8AQ5UXA' isExternal >
                                <Button mt={2}>
                                    DONAR
                                </Button>
                            </Link>

                        </Box>
                    </Box>
                </SimpleGrid>
            </Container>
        </>

    );
};

export default CardsDonation;
