
import { ButtonGroup, Container, IconButton, Stack, Text, Link } from '@chakra-ui/react'
import * as React from 'react'
import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa'
import { Logo } from './Logo'

const Footer2 = () => {
    return (
        <Container
            as="footer"
            role="contentinfo"
            py={{
                base: '12',
                md: '16',
            }}
        >
            <Stack
                spacing={{
                    base: '4',
                    md: '5',
                }}
            >
                <Stack justify="space-between" direction="row" align="center">
                    <Text>
                        Radio AGUA DE VIDA
                    </Text>
                    <ButtonGroup variant="ghost" isExtenal>
                        <IconButton
                            href="youtube.com"
                            isExternal
                            aria-label="LinkedIn"
                            icon={<FaYoutube fontSize="1.25rem" />}
                        />
                        <IconButton
                            href="facebook.com/radioaguadevidaok"
                            isExternal
                            aria-label="GitHub"
                            icon={<FaFacebook fontSize="1.25rem" />} />
                        <IconButton
                            href="https://instagram.com/radioaguadevidaok"
                            isExternal
                            aria-label="Twitter"
                            icon={<FaInstagram fontSize="1.25rem" />}
                        />
                    </ButtonGroup>
                </Stack>
                <Text fontSize="sm" color="subtle">
                    &copy; {new Date().getFullYear()} Radio Agua de Vida by @lauchaventura. Todos los derechos reservados.
                </Text>
            </Stack>
        </Container>
    );
};

export default Footer2;
