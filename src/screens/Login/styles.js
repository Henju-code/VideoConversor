import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: '100%',
        height: '30%',
        backgroundColor: '#6fbbd3',
        position: 'absolute',
        top: 0,
        alignItems: 'center'
    },
    icon: {
        top: '50%',
    },
    icon2: {
        top: '-40%',
    },
    input: {
        marginTop: '40%',
        borderBottomWidth: 1,
        borderColor: '#6fbbd3',
        width: '60%'
    },  
    button: {
        backgroundColor: '#6fbbd3',
        paddingHorizontal:60,
        paddingVertical: 20,
        borderRadius: 15,
        marginTop: 30
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '400'
    },
    footer: {
        position: 'absolute',
        bottom: 15,
    },
});