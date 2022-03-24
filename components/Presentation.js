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
            bg='#F1FAEE'
        >
            <SimpleGrid height='92vh' alignItems='center' columns={[1, 2]} >
                <Box>
                    <Code fontSize='34px'>
                        Somos distinto a los demas
                    </Code>
                    <Text fontWeight='bold'>
                        Estamos #ConectadosConLaRealidad
                    </Text>

                </Box>
                <Box  >
                    <Reproductor className={styles.player} />
                </Box>

            </SimpleGrid>

        </Container >
    )
        ;
};

export default Presentation;