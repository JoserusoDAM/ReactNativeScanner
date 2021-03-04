import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Linking, Alert } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';


const Home = () => {

    const ifScaned = (e) => {
        Linking.openURL(e.data).catch(err =>
            Alert.alert("Codigo QR inváido", e.data))
    }

    const [showScanner, setShowScanner] = useState(false)

    return (
        <ImageBackground source={require('./assets/background.jpg')} style={styles.background}>

            <TouchableOpacity>
                    <Text style={styles.text}
                    onPress={() => setShowScanner(!showScanner) }
                    >
                    
                    {!showScanner ? "Escanea tu código QR" : "Ocultar scanner"}
                    
                    </Text>
                </TouchableOpacity>

        {showScanner && <QRCodeScanner 
            onRead={ifScaned}
            reactivate={true}
            permissionDialogMessage="Se necesitan permisos para acceder a la cámara"
            reactivateTimeout={10}
            showMarker={true}
            markerStyle={{borderBottomColor:"#FFF", borderRadius: 10}}
            //bottomContent={
                
            //}
        />}
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        width: '100%',
        height: 660
    },
    text: {
        backgroundColor: '#e5e5e5',
        padding: 10,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#00CED1',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 15
    }
})

export default Home;