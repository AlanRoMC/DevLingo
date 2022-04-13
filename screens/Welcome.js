import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App({ navigation }) {
    const showAlert = () =>
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Cancel",
                    onPress: () => Alert.alert("Cancel Pressed"),
                    style: "cancel",
                },
            ],
            {
                cancelable: true,
                onDismiss: () =>
                    Alert.alert(
                        "This alert was dismissed by tapping outside of the alert dialog."
                    ),
            }
        );
        
    function goToContent(){
        navigation.navigate("Content");
    }

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(36, 11, 54, 1)', 'rgba(195, 20, 50, 1)']}
                style={styles.background}
                start={{x: 0.55, y: 0.05}} end={{x: 0.1, y: 0.9}}
            />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                <Image style={styles.icon} source={require('../assets/logo.png')} />

                <View style={styles.cont}>
                    <Text style={{ fontSize: 40, color: 'white', fontFamily: 'serif' }}>DevLingo</Text>
                </View>

                <TouchableOpacity onPress={goToContent}>
                    <Image style={styles.icon2} source={require('../assets/derecho.png')}/>
                </TouchableOpacity>


            </View>
        <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    icon: {
        width: 120,
        height: 120,
        marginTop: 15,
        marginLeft: 8
    },
    icon2: {
        width: 40,
        height: 40,
        marginTop: 100,
        marginLeft: 8,
    },
    cont: {
        alignItems: 'center',
        justifyContent: 'center'
    },
});
//<TouchableOpacity onPress={showAlert} style={{backgroundColor: 'green'}}>