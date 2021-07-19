import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Box = styled.View`
    width: 100%;
    height: 30%;
    background-color: #6fbbd3;
    position: absolute;
    top: 0;
    align-items: center;
`;

export const Input = styled.TextInput`
    margin-top: 40%;
    border-width: 1;
    border-color: #6fbbd3;
    width: 60%;
`;

export const Button = styled.TouchableOpacity`
    background-color: #6fbbd3;
    padding: 20 60;
    border-radius: 15;
    margin-top: 30;
`;

export const ButtonTitle = styled.Text`
    color: #fff;
    font-size: 20;
    font-weight: 400;
`;

export const Footer = styled.Text`
    position: absolute;
    bottom: 15;
`;