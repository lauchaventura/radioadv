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
        <motion.div initial='hidden' animate='visible'
        variants={{
            hidden:{
scale:.9,
opacity:0
            },
            visible:{
                scale:1,
                opacity: 1,
                
            }
        }}
       
        >
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
            <Flex align="center" mr={5} ml={9}>
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
                        fontWeight='ligth'
                        transitionDuration='100ms'
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
                        transitionDuration='100ms'

                    >
                        Grilla
                    </Text>
                </div>
                <div>
                    <Text
                        cursor='pointer'
                        color='#1d3557'
                        _hover={{ color: '#e63946' }}
                        transitionDuration='100ms'
                        fontWeight='ligth'
                    >
                        DONAR
                    </Text>
                </div>
                <div onClick={() => router.push('/projects')}>
                    <Text
                        cursor='pointer'
                        color='#1d3557'
                        _hover={{ color: '#e63946' }}
                        fontWeight='ligth'
                        transitionDuration='300ms'
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
        </motion.div>
    );
};

export default Header;
