import React from "react";
import { Box, SimpleGrid, Text, Image, Container } from '@chakra-ui/react'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import styles from '../styles/AudioPlayer.module.scss'
import { GrPlay, GrVolumeMute, GrVolume, GrPause } from 'react-icons/gr';


const Reproductor = () => {
    return (

        <SimpleGrid mt={5} columns={[1, 2]} alignItems='center' justify='center' padding='20px' bg='#457b9d'>
            <Box alignItems='center' align='center' p={2}>
                <AudioPlayer
                    src="https://serverssl.deradios.stream/8354/stream*540.stream"
                    showJumpControls={false}
                    style={{
                        backgroundImage: 'url("https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png")',
                        color: 'black',
                        width: '70%',
                        borderRadius: '20px',
                        align: 'center',

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
            </Box>
            <Box>
                <Text color='white' align='center' p={5}>
                    Escuchanos desde cualquier parte del mundo vayas donde vayas, estes donde estes
                </Text>
            </Box>
        </SimpleGrid>

    )
};

export default Reproductor;
