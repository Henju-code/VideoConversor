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
    IconBackground,
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
                <IconBackground>
                    <Icon name="email" size={180} color="#fff" style={{ marginLeft: -5 }} />
                </IconBackground>
            </Box>

            <Input
                placeholder="Digite your best email"
                keyboardType="email-address"
                onChangeText={setEmailAddress}
            />

            <Button onPress={() => handleSubmit()}>
                <ButtonTitle>Submit</ButtonTitle>
            </Button>

            <Footer>JMV Conversor</Footer>
        </Container>
    );
};