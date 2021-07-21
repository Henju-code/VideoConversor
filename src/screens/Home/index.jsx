import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { RNFFmpeg } from 'react-native-ffmpeg';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from "expo-media-library";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Container,
    Box,
    Card,
    Thumbnail,
    VideoTitle,
    CardButtonIcon,
    ButtonTitle,
    UploadButton,
    Footer
} from './styles';

const jmvVideoConversorDir = FileSystem.cacheDirectory + 'JMV/';
const jmvFileUri = (videoId) => jmvVideoConversorDir + `video-${videoId}.mp4`;

export function Home() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [videoConverted, setVideoConverted] = useState(false);
    const [videoCode, setVideoCode] = useState('');

    useEffect(() => {
        async function ensureDirExists() {
            try {
                const dirInfo = await FileSystem.getInfoAsync(jmvVideoConversorDir);

                if (!dirInfo.exists) {
                    console.log("JMV_Video_Conversor directory doesn't exist, creating...");
                    await FileSystem.makeDirectoryAsync(jmvVideoConversorDir, { intermediates: true });
                }
            } catch (error) {
                console.log(error);
            }
        }

        async function getPermission() {
            try {
                const permission = await MediaLibrary.requestPermissionsAsync();

                if (permission.status != 'granted') {
                    return;
                }
            } catch (error) {
                console.log(error);
            }
        }

        getPermission();
        ensureDirExists();
    }, []);

    function codeGenerator() {
        const code = new Date().getTime().toFixed();
        setVideoCode(code.toString());

        return code.toString();
    }

    const pickVideo = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            });

            if (!result.cancelled) {
                setFile(result.uri);
            }

            setVideoConverted(false);
        } catch (error) {
            console.log(error);
        }

    };

    async function handleMove() {
        try {
            Alert.alert("Success!");

            const asset = await MediaLibrary.createAssetAsync(jmvFileUri(videoCode));
            const album = await MediaLibrary.getAlbumAsync('Download');
            if (album == null) {
                await MediaLibrary.createAlbumAsync('Download', asset, false);
            } else {
                await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
            }
        } catch (e) {
            console.error(e);
        }
    }

    function handleConversor() {
        setLoading(true);
        RNFFmpeg.executeWithArguments(["-i", `${file}`, "-c:v", "mpeg4", `${jmvFileUri(codeGenerator())}`]).then(result => {
            console.log(`Code: ${result}`);

            if (result === 0) {
                setVideoConverted(true);
                setLoading(false);
            } else {
                setLoading(false);
                Alert.alert("Error on video converter process");
            }
        });
    }

    return (
        <Container>
            <Box></Box>

            {file &&
                <Card>
                    <Thumbnail source={{ uri: file }} />

                    <VideoTitle>Video-01.mp4</VideoTitle>

                    <CardButtonIcon>
                        {videoConverted
                            ?
                            <Icon
                                name="download"
                                size={30}
                                color="#6fbbd3"
                                onPress={() => { handleMove() }}
                            />
                            :
                            <ButtonTitle onPress={() => { handleConversor() }}>
                                {!loading ? 'Convert now' : 'Loading...'}
                            </ButtonTitle>
                        }
                    </CardButtonIcon>
                </Card>
            }

            <UploadButton onPress={pickVideo}>
                <Icon name="plus" size={30} color="#fff" />
            </UploadButton>

            <Footer>JMV Conversor</Footer>
        </Container>
    );
};