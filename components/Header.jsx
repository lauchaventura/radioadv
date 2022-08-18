import React from "react";
import {useRouter} from "next/router";

import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Link,
  Button,
  Badge,
  useDisclosure,
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";

const Header = props => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const router = useRouter();
  return (
    <>
      <Flex
        as='nav'
        align='center'
        justify='space-between'
        wrap='wrap'
        padding={2}
        width='100%'
        {...props}
        bg='white'
      >
        <Flex align='center'>
          <div onClick={() => router.push("/")}>
            <Box w='23' p={1}>
              <Text
                cursor='pointer'
                fontSize='30px'
                fontWeight='extrabold'
                font
                letterSpacing='tighter'
                color='#1A202C'
                ml={[0, 5]}
              >
                @radioaguadevida
              </Text>
            </Box>
          </div>
        </Flex>

        <Box display={{base: "block", md: "none"}} onClick={handleToggle}>
          <HamburgerIcon />
        </Box>

        <Stack
          mr={9}
          direction={{base: "column", md: "row"}}
          display={{base: isOpen ? "block" : "none", md: "flex"}}
          width={{base: "full", md: "auto"}}
          alignItems='center'
          columnGap={8}
          mt={{base: 4, md: 0}}
          color='#1A202C'
        >
          <div onClick={() => router.push("/programs")}>
            <Text
              cursor='pointer'
              color='#1A202C'
              fontWeight='semibold'
              fontSize={17}
              transitionDuration='400ms'
              _hover={{color: "#e63946"}}
            >
              Programas
            </Text>
          </div>
          <div onClick={() => router.push("/projects")}>
            <Text
              cursor='pointer'
              color='#1A202C'
              _hover={{color: "#e63946"}}
              fontWeight='semibold'
              transitionDuration='500ms'
              fontSize={17}
            >
              Nuestros proyectos
            </Text>
          </div>
          <div onClick={() => router.push("/contact")}>
            <Text
              cursor='pointer'
              color='#1A202C'
              _hover={{color: "#e63946"}}
              fontWeight='extrabold'
              fontSize={16}
              transitionDuration='400ms'
            >
              CONTACTANOS!
            </Text>
          </div>
        </Stack>
      </Flex>
    </>
  );
};

export default Header;
