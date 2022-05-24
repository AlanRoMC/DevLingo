import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, CheckBox } from 'react-native-elements';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import VerificationBtn from '../components/VerificationBtn'

const Questions = ({ navigation, route }) => {

    var question = route.params.paramKey[0].question;


    var answer1 = route.params.paramKey[0].answers[0].text;
    var answer2 = route.params.paramKey[0].answers[1].text;
    var answer3 = route.params.paramKey[0].answers[2].text;
    var answer4 = route.params.paramKey[0].answers[3].text;

    var response1 = route.params.paramKey[0].answers[0].score;
    var response2 = route.params.paramKey[0].answers[1].score;
    var response3 = route.params.paramKey[0].answers[2].score;
    var response4 = route.params.paramKey[0].answers[3].score;

    function verify(){
        console.log("hola")
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
                    <View style={styles.main2}>
                            <View style={{ alignItems: 'center', margin: 15 }}>
                                <Text style={{ color: 'white', fontSize: 24, margin: 20, textAlign: 'center' }}>{question}</Text>
                            </View>
                            <View style={{ margin: 10, height: 680, alignItems: 'center'}}>

                                <VerificationBtn text={answer1} action={response1}/>
                                <VerificationBtn text={answer2} action={response2}/>
                                <VerificationBtn text={answer3} action={response3}/>
                                <VerificationBtn text={answer4} action={response4}/>
                                
                                <TouchableOpacity style={{ marginTop: 20, marginBottom: 20 }} onPress={verify}>
                                    <Image style={styles.icon2} source={require('../assets/derecho.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            
        <StatusBar style={"light"} />
        </View>
    );
}

export default Questions;

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
    main2: {
        backgroundColor: '#971133',
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