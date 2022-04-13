import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import SubjectBtn from '../components/SubjectBtn';

export default function App({ navigation }) {

    function goToLessons(){
        navigation.navigate("Lessons");
    }

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(36, 11, 54, 1)', 'rgba(195, 20, 50, 1)']}
                style={styles.background}
                start={{x: 0.55, y: 0.05}} end={{x: 0.1, y: 0.9}}
            />

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                <ScrollView style={{marginTop: 90}}>
                    <SubjectBtn text={"Introducción"} image={require('../assets/presentacion.png')} action={goToLessons}/>

                    <SubjectBtn text={"Sintaxis"} image={require('../assets/presentacion.png')}/>

                    <SubjectBtn text={"Variables"} image={require('../assets/presentacion.png')}/>

                    <SubjectBtn text={"Tipos de Datos"} image={require('../assets/presentacion.png')}/>

                    <SubjectBtn text={"Listas"} image={require('../assets/presentacion.png')}/>

                    <SubjectBtn text={"For"} image={require('../assets/presentacion.png')}/>

                    <SubjectBtn text={"While"} image={require('../assets/presentacion.png')}/>

                    <SubjectBtn text={"Matrices"} image={require('../assets/presentacion.png')}/>
                </ScrollView>

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
});
