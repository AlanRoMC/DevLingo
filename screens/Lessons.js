import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import SectionBtn from '../components/SectionBtn';
import LessonHdr from '../components/LessonHdr';

export default function App({ navigation }) {

    function goToSubject(){
        navigation.navigate("Subject");
    }

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(36, 11, 54, 1)', 'rgba(195, 20, 50, 1)']}
                style={styles.background}
                start={{x: 0.55, y: 0.05}} end={{x: 0.1, y: 0.9}}
            />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                    <View style={styles.main}>
                    <LinearGradient
                        colors={['rgba(120, 16, 52, 1)', 'rgba(175, 19, 50, 1)']}
                        style={styles.background2}
                        start={{x: 0.8, y: 0.4}} end={{x: 0, y: 0.5}}
                    />
                        <LessonHdr title={"Introducción"} image={require('../assets/presentacion.png')}/>

                        <View style={styles.body}>
                            <ScrollView>
                                <SectionBtn title={"Sección 1: ¿Qué es Python?"} time={"5 min"} action={goToSubject}/>
                                <SectionBtn title={"Sección 2: Primeros Pasos"} time={"7 min"} action={goToSubject}/>
                                <SectionBtn title={"Sección 3: Operadores Aritméticos"} time={"5 min"} action={goToSubject}/>
                                <SectionBtn title={"Sección 4: Definición de variables"} time={"5 min"} action={goToSubject}/>
                                <SectionBtn title={"Sección 5: Trabajando con cadenas"} time={"4 min"} action={goToSubject}/>
                                <SectionBtn title={"Sección 6: Conversión de tipos de datos"} time={"8 min"} action={goToSubject}/>
                                <SectionBtn title={""} time={""} action={goToSubject}/>
                                <SectionBtn title={""} time={""} action={goToSubject}/>
                            </ScrollView>
                            
                        </View>

                    </View>

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
    background2: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
        borderRadius: 30
    },
    main:{
        backgroundColor: '#971133',
        marginTop: 82,
        width: 400,
        height: 820,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'white',
    },
    body:{
        width:400,
        height: 635,
        alignItems: 'center',
    },
});
