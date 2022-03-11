import React from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";

const CardsDonation = () => {
    return (
        <>
            <Box
                display='flex'
                columnGap={10}
                justifyContent='center'
            >
                <Box
                    maxW="250"
                    padding="2"
                    borderRadius="14"
                    boxShadow="lg"
                    backgroundColor="#fff"
                    textAlign="center"
                >
                    <Image
                        src="https://placeimg.com/240/240/nature"
                        alt="card-img"
                        objectFit="cover"
                    ></Image>
                    <Box marginTop="0.8em" marginBottom="0.8em">
                        <Text fontSize="1em" fontWeight="600" marginBottom="0.5em">
                            Donar a traves de MercadoPago
                        </Text>
                        <Text fontSize="0.8em" color="#737373">
                            Ayudas a difundir aun mas nuestro ministerio
                        </Text>
                        <Button mt={2}>
                            DONAR!
                        </Button>
                    </Box>
                </Box>
                <Box
                    maxW="250"
                    padding="2"
                    borderRadius="14"
                    boxShadow="lg"
                    backgroundColor="#fff"
                    textAlign="center"
                >
                    <Image
                        src="https://placeimg.com/240/240/nature"
                        alt="card-img"
                        objectFit="cover"
                    ></Image>
                    <Box marginTop="0.8em" marginBottom="0.8em">
                        <Text fontSize="1em" fontWeight="600" marginBottom="0.5em">
                            Donar a traves de Paypal
                        </Text>
                        <Text fontSize="0.8em" color="#737373">
                            Ayudas a difundir desde cualquier parte del mundo
                        </Text>
                        <Button mt={8}>
                            DONAR!
                        </Button>
                    </Box>
                </Box>
                <Box
                    maxW="250"
                    padding="2"
                    borderRadius="14"
                    boxShadow="lg"
                    backgroundColor="#fff"
                    textAlign="center"
                >
                    <Image
                        src="https://placeimg.com/240/240/nature"
                        alt="card-img"
                        objectFit="cover"
                    ></Image>
                    <Box marginTop="0.8em" marginBottom="0.8em">
                        <Text fontSize="1em" fontWeight="600" marginBottom="0.5em">
                            Donar a traves de MercadoPago
                        </Text>
                        <Text fontSize="0.8em" color="#737373">
                            Ayudas a difundir aun mas nuestro ministerio
                        </Text>
                        <Button mt={2}>
                            DONAR!
                        </Button>
                    </Box>
                </Box>
            </Box>

        </>

    );
};

export default CardsDonation;
