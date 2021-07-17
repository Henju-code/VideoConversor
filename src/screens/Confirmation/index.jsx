import React from 'react';
import {
    View,
    TextInput,
    Alert,
    StatusBar,
    Text
} from 'react-native';
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { verificationCode } from '../../services/SendGrid';
import { styles } from './styles';

export function Confirmation() {
    const navigation = useNavigation();

    function handleInputChange(value) {
        if (value.length === 4) {
            handleSubmit(value);
        }
    }

    function handleSubmit(code) {
        if (verificationCode == code) {
            navigation.navigate('Home');
        } else {
            Alert.alert('Please try again! 😢');
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />

            <View style={styles.box}>
                <View style={styles.iconBackground}></View>

                <Icon name="asterisk" size={60} color="#6fbbd3" style={styles.icon}/>
                <Icon name="asterisk" size={60} color="#6fbbd3" style={styles.icon}/>
                <Icon name="asterisk" size={60} color="#6fbbd3" style={styles.icon}/>
                <Icon name="asterisk" size={60} color="#6fbbd3" style={styles.icon}/>             
            </View>


            <TextInput
                style={styles.input}
                placeholder="Your code"
                keyboardType="numeric"
                onChangeText={handleInputChange}
            />

            <Text style={styles.footer}>JMV Conversor</Text>
        </View>
    );
}