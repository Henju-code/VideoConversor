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
    justify-content: center;
    flex-direction: row;
    top: 0;
`;

export const IconBackground = styled.View`
    bottom: -20;
    position: absolute;
    background-color: #f3f3f3;
    width: 70%;
    height: 60;
    border-radius: 70;
    flex-direction: row;
`;

export const Input = styled.TextInput`
    border-bottom-width: 1;
    border-color: #6fbbd3;
    width: 20%;
`;

export const Footer = styled.Text`
    position: absolute;
    bottom: 15;
`;