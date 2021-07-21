import React from 'react';
import { Alert, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { verificationCode } from '../../services/SendGrid';
import {
    Box,
    Container,
    Footer,
    IconBackground,
    Input
} from './styles';

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
        <Container>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />

            <Box>
                <IconBackground>
                    <Icon name="asterisk" size={60} color="#6fbbd3" />
                    <Icon name="asterisk" size={60} color="#6fbbd3" />
                    <Icon name="asterisk" size={60} color="#6fbbd3" />
                    <Icon name="asterisk" size={60} color="#6fbbd3" />
                </IconBackground>
            </Box>


            <Input
                placeholder="Your code"
                keyboardType="numeric"
                onChangeText={handleInputChange}
            />

            <Footer>JMV Conversor</Footer>
        </Container>
    );
}