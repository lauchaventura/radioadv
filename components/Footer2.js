
import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
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
            }
            }

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
                    <ButtonGroup isExtvariant="ghost" >
                        <IconButton
                            as='a'

                            href="https://instagram.com/radioaguadevidaok"
                            aria-label="LinkedIn"
                            isExternal
                            icon={<FaYoutube fontSize="1.25rem" isExternal />}
                        />
                        <IconButton
                            as='a'
                            href="facebook.com/radioaguadevidaok"
                            isExternal
                            aria-label="GitHub"
                            icon={<FaFacebook fontSize="1.25rem" />} />
                        <IconButton
                            as='a'
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
