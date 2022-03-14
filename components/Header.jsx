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
            padding={3}
            bg="black"
            color="white"
            {...props}
        >
            <Flex align="center" mr={5}>
                <div onClick={() => router.push('/')} >
                    <Heading
                        cursor='pointer'
                        as="h1"
                        size="lg"
                        letterSpacing={"tighter"}
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
                columnGap={6}
                mt={{ base: 4, md: 0 }}
            >
                <div onClick={() => router.push('/programs')}>
                    <Text
                        cursor='pointer'
                        colorScheme='white'
                        _hover={{ color: 'gray.300' }}

                        transitionDuration='400ms'
                    >
                        Programas
                    </Text>
                </div>

                <div onClick={() => router.push('/grid')}>
                    <Text
                        cursor='pointer'
                        colorScheme='white'
                        _hover={{ color: 'gray.300' }}

                        transitionDuration='400ms'

                    >
                        Grilla
                    </Text>
                </div>
                <div>
                    <Text
                        cursor='pointer'
                        colorScheme='white'
                        _hover={{ color: 'gray.300' }}

                        transitionDuration='400ms'

                    >
                        DONAR
                    </Text>
                </div>
            </Stack>


            <Stack
                display={{ base: isOpen ? "block" : "none", md: "block" }}
                mt={{ base: 4, md: 0 }}
            >
                <Box

                    display='flex'
                    margin='4px'
                    columnGap='15px'

                >

                    <Link
                        href='https://youtube.com'
                        isExternal
                        _hover={{ color: 'gray.300' }}
                        transitionDuration='400ms'
                    >
                        <BsYoutube size='20px' />
                    </Link>
                    <Link
                        href='https://facebook.com/radioaguadevidaok'
                        isExternal
                        _hover={{ color: 'gray.300' }}
                        transitionDuration='400ms'
                    >
                        <BsFacebook size='20px' />
                    </Link>
                    <Link
                        href='https://instagram.com/radioaguadevidaok'
                        isExternal
                        _hover={{ color: 'gray.300' }}
                        transitionDuration='400ms'
                    >
                        <BsInstagram size='20px' />
                    </Link>
                </Box>
            </Stack>


        </Flex >
    );
};

export default Header;
