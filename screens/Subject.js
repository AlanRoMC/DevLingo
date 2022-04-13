import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App({ navigation }) {

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(36, 11, 54, 1)', 'rgba(195, 20, 50, 1)']}
                style={styles.background}
                start={{x: 0.55, y: 0.05}} end={{x: 0.1, y: 0.9}}
            />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                <View style={styles.main}>

                    <View style={{ alignItems: 'center', margin: 15, borderRadius: 30, borderColor: 'white', borderWidth: 1}}>
                        <LinearGradient
                            colors={['rgba(175, 19, 50, 1)','rgba(120, 16, 52, 1)']}
                            style={styles.background2}
                            start={{x: 0.55, y: 0.05}} end={{x: 0.1, y: 0.9}}
                        />
                        <Text style={{color: 'white', fontSize: 24, margin: 20, textAlign: 'center'}}>¿Qué es Python?</Text>
                    </View>

                    <View style={{borderRadius: 30, borderColor: 'white', borderWidth: 1, margin: 15, height: 680, alignItems: 'center'}}>
                    <LinearGradient
                            colors={['rgba(175, 19, 50, 1)','rgba(120, 16, 52, 1)']}
                            style={styles.background2}
                            start={{x: 0.8, y: 0.4}} end={{x: 0, y: 0.5}}
                        />
                        <ScrollView>
                            <View style={{margin: 20}}>
                                <Text style={{color:'white', fontSize: 18}}>Python es uno de los lenguajes de programación más populares actualmente y es INTERPRETADO, es decir nosotros escribimos nuestro programa y Python lo interpreta y regresa un resultado. Python es un lenguaje MULTIPROPÓSITO, es decir, podemos crear códigos tanto para diferentes medios, ya sea Web, servidores, escritorio, aplicaciones web, entre otros. Lenguajes como PHP solo sirven para Web y es muy bueno para eso, pero no funciona para otro tipo de medios. Python es un lenguaje MULTIPARADIGMA, lo que significa que podemos usar varios paradigmas de programación, Estructurada, Orientado a Objetos, Imperativa, es decir que podemos programar de la forma que más nos guste. Python es un lenguaje MULTIPLATAFORMA Y DE SOFTWARE LIBRE, lo que significa que lo podemos utilizar tanto en Windows, Linux, Mac o cualquier Sistema Operativo.</Text>
                            </View>
                            <TouchableOpacity style={{marginLeft: '45%', marginTop: 20, marginBottom: 20}}>
                                <Image style={styles.icon2} source={require('../assets/derecho.png')}/>
                            </TouchableOpacity>
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
    icon2: {
        width: 40,
        height: 40,
        
    }
});