import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { sendEmailVerification } from '../../services/SendGrid';
import { 
    Box,
    Button,
    ButtonTitle,
    Container,
    Footer,
    Input
 } from './styles';

export function Login() {
    const [emailAddress, setEmailAddress] = useState('');
    const navigation = useNavigation();


    function handleSubmit() {
        sendEmailVerification(emailAddress);
        navigation.navigate('Confirmation');
    };

    return (
        <Container>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />

            <Box>
                <Icon name="email" size={200} color="#6fbbd3" style={{top: '50%'}}/>
                <Icon name="email" size={180} color="#fff" style={{top: '-40%'}}/>

            </Box>

            <Input
                placeholder="Digite your best email"
                keyboardType="email-address"
                onChangeText={setEmailAddress}
            />

            <Button
                style={styles.button}
                onPress={() => handleSubmit()}
            >
                <ButtonTitle>Submit</ButtonTitle>
            </Button>

            <Footer>JMV Conversor</Footer>
        </Container>
    );
};