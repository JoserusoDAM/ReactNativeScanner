import React, { useEffect } from 'react';
import { Image, View, StyleSheet } from 'react-native';


const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home')
        }, 2000)
    }, [])

    return (
        <View style={styles.home}>
            <Image source={require('./assets/splash.png')} resizeMode="contain" style={{
                width: 200,
            }} />
        </View>
    )
};

const styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Splash;