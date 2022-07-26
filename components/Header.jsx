import React from "react";
import { useRouter } from "next/router"
import { motion } from "framer-motion";
import {
    Box,
    Stack,
    Heading,
    Flex,
    Text,
    Image,
    Button,
    Badge,
    useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());
    const router = useRouter();
    return (
        <>
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={2}
            
            width='100%'
            {...props}
            bg='white'
        >
            <Flex align="center" >
                <div onClick={() => router.push('/')} >
                    <Box   
                        w='23'
                       p={1}
                    >
                         <Heading
                        cursor='pointer'
                        fontSize='25px'
                        letterSpacing={"tighter"}
                        color='#1d3557'
                       
                    >
                        Radio Agua de Vida
                    </Heading>
                    </Box>             
                </div>
            </Flex>
           

            <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                <HamburgerIcon  />
            </Box>

            <Stack
                mr={9}
                direction={{ base: "column", md: "row", }}
                display={{ base: isOpen ? "block" : "none", md: "flex" }}
                width={{ base: "full", md: "auto" }}
                alignItems="center"
                columnGap={12}
                mt={{ base: 4, md: 0 }}
            >
                <div onClick={() => router.push('/programs')}>
                    <Text
                        cursor='pointer'
                        color='#1d3557'
                        fontWeight='ligth'
                        fontSize={15}
                        transitionDuration='400ms'
                        _hover={{ color: '#e63946' }}
                    >
                        Programas
                    </Text>
                </div>

                <div onClick={() => router.push('/grilla')}>
                    <Text
                        cursor='pointer'
                        color='1d3557'
                        _hover={{ color: '#e63946' }}
                        fontWeight='ligth'
                        fontSize={15}
                        transitionDuration='400ms'

                    >
                        Grilla
                    </Text>
                </div>
                {/* <div>
                    <Text
                        cursor='pointer'
                        color='#1d3557'
                        _hover={{ color: '#e63946' }}
                        transitionDuration='400ms'
                        fontWeight='ligth'
                        fontSize={15}
                    >
                        DONAR
                    </Text>
                </div> */}
                <div onClick={() => router.push('/projects')}>
                    <Text
                        cursor='pointer'
                        color='#1d3557'
                        _hover={{ color: '#e63946' }}
                        fontWeight='semibold'
                        transitionDuration='500ms'
                        fontSize={15}
                    >
                        NUESTROS PROYECTOS
                    </Text>
                </div>
            </Stack>


        </Flex >
        </>
    );
};

export default Header;
