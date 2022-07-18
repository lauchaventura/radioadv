import React from "react";
import { useRouter } from "next/router"
import { BsFacebook, BsYoutube, BsInstagram } from 'react-icons/bs';
import {
    Box,
    Stack,
    Heading,
    Flex,
    Text,
    Link,
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
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={2}
            
            {...props}
            backgroundColor='transparent'
            background='transparent'
        >
            <Flex align="center" mr={5}>
                <div onClick={() => router.push('/')} >
                    <Heading
                        cursor='pointer'
                        as='h3'
                        size='lg'
                        letterSpacing={"tighter"}
                        color='white'
                        bg='#1d3557'
                        p={2}
                    >
                        Radio Agua de Vida
                    </Heading>
                </div>
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                <HamburgerIcon />
            </Box>

            <Stack
                marginLeft={15}
                direction={{ base: "column", md: "row", }}
                display={{ base: isOpen ? "block" : "none", md: "flex" }}
                width={{ base: "full", md: "auto" }}
                alignItems="center"
                flexGrow={1}
                columnGap={10}
                mt={{ base: 4, md: 0 }}
            >
                <div onClick={() => router.push('/programs')}>
                    <Text
                        cursor='pointer'
                        color='#1d3557'
                        fontWeight='semibold'
                        _hover={{ color: 'gray.300' }}
                        transitionDuration='400ms'
                    >
                        Programas
                    </Text>
                </div>

                <div onClick={() => router.push('/grilla')}>
                    <Text
                        cursor='pointer'
                        color='1d3557'
                        _hover={{ color: 'gray.300' }}
                        fontWeight='semibold'
                        transitionDuration='400ms'

                    >
                        Grilla
                    </Text>
                </div>
                <div>
                    <Text
                        cursor='pointer'
                        color='#1d3557'
                        _hover={{ color: 'gray.300' }}
                        transitionDuration='400ms'
                        fontWeight='semibold'
                    >
                        DONAR
                    </Text>
                </div>
                <div onClick={() => router.push('/projects')}>
                    <Text
                        cursor='pointer'
                        color='#1d3557'
                        _hover={{ color: 'gray.300' }}
                        fontWeight='semibold'
                        transitionDuration='400ms'
                    >
                        NUESTROS PROYECTOS
                    </Text>
                </div>
            </Stack>


            <Stack
                display={{ base: isOpen ? "block" : "none", md: "block" }}
                mt={{ base: 4, md: 0 }}
            >
                <Box
                    display='flex'
                    margin='9px'
                >
                    <Badge cursor='pointer' variant='outline' colorScheme='red' fontSize='0.8em'>
                        ESCUCHAR EN VIVO
                    </Badge>
                </Box>
            </Stack>


        </Flex >
    );
};

export default Header;
