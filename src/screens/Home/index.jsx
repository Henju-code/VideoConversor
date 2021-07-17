import React, { useState, useEffect } from 'react';
import {
    Image,
    View,
    TouchableOpacity,
    Text,
    Alert
} from 'react-native';
import { RNFFmpeg } from 'react-native-ffmpeg';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from "expo-media-library";


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

const jmvVideoConversorDir = FileSystem.cacheDirectory + 'JMV/';
const jmvFileUri = (videoId) => jmvVideoConversorDir + `video-${videoId}.mp4`;

export function Home() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [videoConverted, setVideoConverted] = useState(false);
    const [videoCode, setVideoCode] = useState('');

    useEffect(() => {

        // Checks if jmvVideoConversor directory exists. If not, creates it
        async function ensureDirExists() {
            const dirInfo = await FileSystem.getInfoAsync(jmvVideoConversorDir);
            if (!dirInfo.exists) {
                console.log("JMV_Video_Conversor directory doesn't exist, creating...");
                await FileSystem.makeDirectoryAsync(jmvVideoConversorDir, { intermediates: true });
            }
        }

        async function getPermission() {
            const permission = await MediaLibrary.requestPermissionsAsync();

            if (permission.status != 'granted') {
                return;
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
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        });

        if (!result.cancelled) {
            setFile(result.uri);
        }

        setVideoConverted(false);
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
        <View style={styles.container}>
            <View style={styles.box}>
            </View>
            {file &&
                <View style={styles.card}>
                    <Image source={{ uri: file }} style={styles.thumbnail} />

                    <Text style={styles.videoTitle}>Video-01.mp4</Text>

                    <TouchableOpacity style={styles.icon}>
                        {videoConverted 
                        ?
                        <Icon
                            name="download"
                            size={30}
                            color="#6fbbd3"
                            onPress={() => { handleMove() }}
                        />
                        :
                        <Text
                            style={styles.buttonCardText}
                            onPress={() => { handleConversor() }}
                        >
                            {!loading ? 'Convert now' : 'Loading...'}
                        </Text>
                        }
                    </TouchableOpacity>
                </View>
            }

            <TouchableOpacity
                style={styles.uploadButton}
                onPress={pickVideo}
            >
                <Icon name="plus" size={30} color="#fff" />
            </TouchableOpacity>

            <Text style={styles.footer}>JMV Conversor</Text>
        </View>
    );
}