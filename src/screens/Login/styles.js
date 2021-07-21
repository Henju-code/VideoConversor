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

export const IconBackground = styled.View`
    bottom: -65;
    position: absolute;
    background-color: #6fbbd3;
    width: 170;
    height: 140;
    border-radius: 20;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.TextInput`
    margin-top: 40%;
    border-bottom-width: 1;
    border-color: #6fbbd3;
    width: 60%;
`;

export const Button = styled.TouchableOpacity`
    background-color: #6fbbd3;
    padding-right: 60;
    padding-left: 60;
    padding-top: 20;
    padding-bottom: 20;
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