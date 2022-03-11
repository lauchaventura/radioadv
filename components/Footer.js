import { Box, Container, Stack } from '@chakra-ui/react'

const Footer = () => {
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
                <Box align="center" opacity={0.4} fontSize="sm" as='footer'
                    role="contentinfo"
                    py={{
                        base: '22',
                        md: '16',
                    }} >
                    &copy; {new Date().getFullYear()} Radio Agua de Vida by @lauchaventura. Todos los Derechos Reservados.
                </Box>
            </Stack>
        </Container>

    )
}

export default Footer