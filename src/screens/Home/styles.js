import styled from 'styled-components/native'

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
`;

export const Card = styled.View`
    background-color: #fff;
    width: 90%;
    height: 20%;
    top: -40%;
    border-radius: 7;
    flex-direction: row;
    align-items: center;
    border-width: 1;
    border-color: #6fbbd3;
`;

export const Thumbnail = styled.Image`
    width: 100;
    height: 80;
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 20;
    margin-left: 20;
    border-width: 2;
    border-color: #6fbbd3;
    border-radius: 7;
`;

export const VideoTitle = styled.Text`
    font-weight: bold;
    font-size: 18;
`;

export const ButtonTitle = styled.Text`
    color: #6fbbd3;
`;

export const UploadButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 30;
    left: 20;
    width: 56;
    height: 56;
    border-radius: 80;
    background-color: #3ea4c4;
    justify-content: center;
    align-items: center;
`;

export const Footer = styled.Text`
    position: absolute;
    bottom: 15;
`;

export const CardButtonIcon = styled.TouchableOpacity`
    position: absolute;
    bottom: 10;
    right: 20;
`;