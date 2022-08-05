import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import * as React from "react";
import {FaYoutube, FaFacebook, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <Container
      mt={6}
      as='footer'
      role='contentinfo'
      py={{
        base: "2",
        md: "7",
      }}
      bg='#1d3557'
      color='white'
      maxW='container.xl'
    >
      <Stack
        spacing={{
          base: "4",
          md: "5",
        }}
      >
        <Stack justify='space-between' direction='row' align='center'>
          <Text>Radio AGUA DE VIDA</Text>
          <ButtonGroup variant='ghost'>
            <Link href='https://youtube.com/radioaguadevidaok' isExternal>
              <IconButton
                aria-label='Youtube'
                isExternal
                icon={<FaYoutube fontSize='1.25rem' isExternal />}
              />
            </Link>

            <Link href='https://facebook.com/radioaguadevidaok' isExternal>
              <IconButton
                aria-label='Facebook'
                icon={<FaFacebook fontSize='1.25rem' />}
              />
            </Link>
            <Link href='https://instagram.com/radioaguadevidaok' isExternal>
              <IconButton
                isExternal
                aria-label='Instagram'
                icon={<FaInstagram fontSize='1.25rem' />}
              />
            </Link>
          </ButtonGroup>
        </Stack>
        <Text fontSize='sm' color='subtle' align='center'>
          &copy; {new Date().getFullYear()} Radio Agua de Vida by
          @lauchaventura. Todos los derechos reservados.
        </Text>
      </Stack>
    </Container>
  );
};

export default Footer;
