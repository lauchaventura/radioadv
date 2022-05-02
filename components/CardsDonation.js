import React from "react";
import { Box, Image, Text, Button, Link, SimpleGrid, chakra, Flex } from "@chakra-ui/react";

const CardsDonation = () => {
    return (
        <>
            <SimpleGrid columns={[1, 2, 3]} spacing={3} mt={7}   >
                <Flex
                    w="full"
                    alignItems="center"
                    justifyContent="center"

                >
                    <Flex
                        maxW="md"
                        mx="auto"
                        shadow="lg"
                        rounded="lg"
                        overflow="hidden"
                    >
                        <Box
                            w={1 / 3}
                            bgSize="cover"
                            style={{
                                backgroundImage:
                                    "url('https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_960_720.png')",
                            }}
                        ></Box>

                        <Box w={2 / 3} p={{ base: 4, md: 4 }}>
                            <chakra.h1
                                fontSize="2xl"
                                fontWeight="bold"
                            >
                                Tarjeta o Paypal
                            </chakra.h1>

                            <chakra.p
                                mt={2}
                                fontSize="sm"
                            >
                                Podes apoyar nuestros servicios desde cualquier parte del Mundo
                            </chakra.p>

                            <Flex mt={3} alignItems="center" justifyContent="space-between">
                                <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                                    $220
                                </chakra.h1>
                                <chakra.button
                                    px={2}
                                    py={1}
                                    bg="white"
                                    fontSize="xs"
                                    color="gray.900"
                                    fontWeight="bold"
                                    rounded="lg"
                                    textTransform="uppercase"
                                    _hover={{
                                        bg: "gray.200",
                                    }}
                                    _focus={{
                                        bg: "gray.400",
                                    }}
                                >
                                    DONAR
                                </chakra.button>
                            </Flex>
                        </Box>
                    </Flex>
                </Flex>
                <Flex
                    w="full"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Flex
                        maxW="md"
                        mx="auto"

                        shadow="lg"
                        rounded="lg"
                        overflow="hidden"
                    >
                        <Box
                            w={1 / 3}
                            bgSize="cover"
                            style={{
                                backgroundImage:
                                    "url('https://s03.s3c.es/imag/_v0/487x453/2/5/a/mercado-pago.png')",
                            }}
                        ></Box>

                        <Box w={2 / 3} p={{ base: 4, md: 4 }}>
                            <chakra.h1
                                fontSize="2xl"
                                fontWeight="bold"
                            >
                                Mercado Pago
                            </chakra.h1>

                            <chakra.p
                                mt={2}
                                fontSize="sm"
                            >
                                Podes apoyar nuestros servicios en territorio nacional(ARG)
                            </chakra.p>

                            <Flex mt={3} alignItems="center" justifyContent="space-between">
                                <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                                    $220
                                </chakra.h1>
                                <chakra.button
                                    px={2}
                                    py={1}
                                    bg="white"
                                    fontSize="xs"
                                    color="gray.900"
                                    fontWeight="bold"
                                    rounded="lg"
                                    textTransform="uppercase"
                                    _hover={{
                                        bg: "gray.200",
                                    }}
                                    _focus={{
                                        bg: "gray.400",
                                    }}
                                >
                                    DONAR
                                </chakra.button>
                            </Flex>
                        </Box>
                    </Flex>
                </Flex>
                <Flex
                    w="full"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Flex
                        maxW="md"
                        mx="auto"
                        shadow="lg"
                        rounded="lg"
                        overflow="hidden"
                    >
                        <Box
                            w={1 / 3}
                            bgSize="cover"
                            style={{
                                backgroundImage:
                                    "url('https://res.cloudinary.com/dsjas6fvz/image/upload/v1647310535/Radio%20Agua%20de%20Vida/phonenewmessage_101063_ovksye.png')",
                            }}
                        ></Box>

                        <Box w={2 / 3} p={{ base: 4, md: 4 }}>
                            <chakra.h1
                                fontSize="2xl"
                                fontWeight="bold"
                            >
                                Telefono o celular
                            </chakra.h1>

                            <chakra.p
                                mt={2}
                                fontSize="sm"
                            >
                                LLamanos al +54 9 2984134931 y te asesoramos de la mejor manera
                            </chakra.p>

                            <Flex mt={3} alignItems="center" justifyContent="space-between">
                                <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                                    $220
                                </chakra.h1>
                                <chakra.button
                                    px={2}
                                    py={1}
                                    bg="white"
                                    fontSize="xs"
                                    color="gray.900"
                                    fontWeight="bold"
                                    rounded="lg"
                                    textTransform="uppercase"
                                    _hover={{
                                        bg: "gray.200",
                                    }}
                                    _focus={{
                                        bg: "gray.400",
                                    }}
                                >
                                    DONAR
                                </chakra.button>
                            </Flex>
                        </Box>
                    </Flex>
                </Flex>
            </SimpleGrid>
        </>

    );
};

export default CardsDonation;
