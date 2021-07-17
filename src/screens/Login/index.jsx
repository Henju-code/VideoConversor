import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { sendEmailVerification } from '../../services/SendGrid';
import { styles } from './styles';

export function Login() {
    const [emailAddress, setEmailAddress] = useState('');
    const navigation = useNavigation();


    function handleSubmit() {
        sendEmailVerification(emailAddress);
        navigation.navigate('Confirmation');
    }

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />

            <View style={styles.box}>
                <Icon name="email" size={200} color="#6fbbd3" style={styles.icon}/>
                <Icon name="email" size={180} color="#fff" style={styles.icon2}/>

            </View>

            <TextInput
                placeholder="Digite your best email"
                keyboardType="email-address"
                onChangeText={setEmailAddress}
                style={styles.input}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => handleSubmit()}
            >
                <Text style={styles.buttonTitle}>Submit</Text>
            </TouchableOpacity>

            <Text style={styles.footer}>JMV Conversor</Text>

        </View>
    );
}