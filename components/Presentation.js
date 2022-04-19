import { Box, chakra, SimpleGrid, Text, Container, Stack, Button, Link, Heading, Code } from "@chakra-ui/react";
import { GrMapLocation, GrPlay } from 'react-icons/gr';
import React from "react";
import Reproductor from './Reproductor'
import styles from '../styles/AudioPlayer.module.scss'

const Presentation = () => {
    return (
        <Container maxW='container.xl'
            align="center"
            color="black"
            centerContent
        >
            <SimpleGrid height='88vh' alignItems='center' columns={[1, 2]}  >
                <Box>
                    <Heading size='4xl' as='h2' align='center' bgGradient='linear(to-l, #1D3557, #457B9D)'
                        bgClip='text'>
                        Somos distinto a los demas...
                    </Heading>
                </Box>
                <Box >
                    <Heading size='lg' >

                    </Heading>
                </Box>

            </SimpleGrid>

        </Container >
    )
        ;
};

export default Presentation;