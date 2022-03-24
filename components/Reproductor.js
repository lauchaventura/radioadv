import React from "react";
import { Box, StylesProvider, Text, Image } from '@chakra-ui/react'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import styles from '../styles/AudioPlayer.module.scss'
import { GrPlay, GrVolumeMute, GrVolume, GrPause } from 'react-icons/gr';


const Reproductor = () => {
    return (
        <Box bg='#1D3557' boxSize='340px' >
            <Box padding={3}>
                <Image borderRadius='full' boxSize='250px' src='https://res.cloudinary.com/dsjas6fvz/image/upload/v1648063433/Radio%20Agua%20de%20Vida/logoradio.png' alt='logoradio' />

            </Box>
            <AudioPlayer
                src="https://serverssl.deradios.stream/8354/stream*540.stream"
                showJumpControls={false}
                style={{
                    borderColor: 'white',
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
    )
};

export default Reproductor;
