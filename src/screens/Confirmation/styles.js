import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: '100%',
        height: '30%',
        backgroundColor: '#6fbbd3',
        position: 'absolute',
        justifyContent: 'center',
        flexDirection: 'row',
        top: 0
    },
    icon: {
        top: '50%',
    },
    iconBackground: {
        bottom: -20,
        position: 'absolute',
        backgroundColor: '#f3f3f3',
        width: '70%',
        height: 60,
        borderRadius: 70
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#6fbbd3',
        width: '20%'
    },  
    footer: {
        position: 'absolute',
        bottom: 15,
        
    }
});