import React from "react";
import { useRouter } from "next/router"
import { BsFacebook, BsYoutube, BsInstagram } from 'react-icons/bs';
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
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={2}
            position='fixed'
            width='100%'
            {...props}
            bg='white'
        >
            <Flex align="center" mr={5} ml={9}>
                <div onClick={() => router.push('/')} >
                    <Box
                        cursor='pointer'    
                        w='23'
                        h='16'
                    >
                        <Image 
 src='https://res.cloudinary.com/dsjas6fvz/image/upload/v1658285646/Radio%20Agua%20de%20Vida/conectados_con_larealidad_xmbluu.png'/>
                    </Box>             
                </div>
            </Flex>
           

            <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                <HamburgerIcon  transitionDuration='0.5s' _hover={{ onClick: '0.5s' }} />
            </Box>

            <Stack
                mr={16}
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
                        fontWeight='medium'
                        transitionDuration='100ms'
                        _hover={{ fontWeight: 'semibold' }}
                    >
                        Programas
                    </Text>
                </div>

                <div onClick={() => router.push('/grilla')}>
                    <Text
                        cursor='pointer'
                        color='1d3557'
                        _hover={{ fontWeight: 'semibold' }}
                        fontWeight='medium'
                        transitionDuration='100ms'

                    >
                        Grilla
                    </Text>
                </div>
                <div>
                    <Text
                        cursor='pointer'
                        color='#1d3557'
                        _hover={{ fontWeight: 'semibold' }}
                        transitionDuration='100ms'
                        fontWeight='medium'
                    >
                        DONAR
                    </Text>
                </div>
                <div onClick={() => router.push('/projects')}>
                    <Text
                        cursor='pointer'
                        color='#1d3557'
                        _hover={{ fontWeight: 'semibold' }}
                        fontWeight='medium'
                        transitionDuration='100ms'
                    >
                        NUESTROS PROYECTOS
                    </Text>
                </div>
            </Stack>


            {/* <Stack
                display={{ base: isOpen ? "block" : "none", md: "block" }}
                mt={{ base: 4, md: 0 }}
            >
                <Box
                    margin='9px'
                    mr='9'
                >
                    <Badge cursor='pointer' variant='outline' colorScheme='red' fontSize='0.8em' fontWeight='semibold'>
                        ESCUCHAR EN VIVO
                    </Badge>
                </Box>
            </Stack> */}


        </Flex >
    );
};

export default Header;
