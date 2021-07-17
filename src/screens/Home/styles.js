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
        top: 0
    },
    card:{
        backgroundColor: '#fff',
        width: '90%',
        height: '20%',
        top: '-40%',
        borderRadius: 7,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#6fbbd3',
    },
    thumbnail:  {
        width: 100,
        height: 80,
        marginHorizontal: 20,
        borderWidth: 2,
        borderColor: '#6fbbd3',
        borderRadius: 7
    },
    videoTitle: {
        fontWeight: 'bold',
        fontSize: 18
    },
    icon: {
        position: 'absolute',
        bottom: 10,
        right: 20
    },
    buttonCardText: {
        color: "#6fbbd3"
    },  
    uploadButton: {
        position: 'absolute',
        bottom: 30,
        left: 20,
        width: 56,
        height: 56,
        borderRadius: 80,
        backgroundColor: '#3ea4c4',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        position: 'absolute',
        bottom: 15,
        
    }
});