import React from "react";
import { Box, SimpleGrid, Text, Image, Container } from '@chakra-ui/react'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import styles from '../styles/AudioPlayer.module.scss'
import { GrPlay, GrVolumeMute, GrVolume, GrPause } from 'react-icons/gr';


const Reproductor = () => {
    return (
        <Container
            maxW='container.xl'
            align='center'
            mt={9}
            bg='black'
        >
            <SimpleGrid columns={[1, 2]} alignItems='center' justify='center'>
                <Box bg='#1D3557' boxSize='240px' >
                    <Box padding={3}>
                        <Image borderRadius='full' boxSize='150px' src='https://res.cloudinary.com/dsjas6fvz/image/upload/v1648063433/Radio%20Agua%20de%20Vida/logoradio.png' alt='logoradio' />

                    </Box>
                    <AudioPlayer
                        src="https://serverssl.deradios.stream/8354/stream*540.stream"
                        showJumpControls={false}
                        style={{
                            borderColor: '',
                            underline: 'outline',
                            backgroundColor: 'white',
                            color: 'black',
                            width: '100%'
                        }}
                        customIcons={{
                            play: <GrPlay size={22} />,
                            pause: <GrPause size={22} />,
                            volume: <GrVolume size={22} />,
                            volumeMute: <GrVolumeMute size={22} />
                        }}
                        customProgressBarSection={[]}
                        customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                        autoPlayAfterSrcChange={false}
                    />
                </Box >
                <Box>
                    <Text color='white'>
                        Escuchanos desde cualquier parte del mundo vayas donde vayas, estes donde estes
                    </Text>
                </Box>
            </SimpleGrid>

        </Container>

    )
};

export default Reproductor;
