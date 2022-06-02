import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import VerificationBtn from '../components/VerificationBtn'

const Questions = ({ navigation, route }) => {

    var lenQtn = route.params.paramKey.length;
    
    let [iter, setIter] = useState(0)

    let [question, setQuestion] = useState(route.params.paramKey[iter].question)

    let [answer1, setAnswer1] = useState(route.params.paramKey[iter].answers[0].text);
    let [answer2, setAnswer2] = useState(route.params.paramKey[iter].answers[1].text);
    let [answer3, setAnswer3] = useState(route.params.paramKey[iter].answers[2].text);
    let [answer4, setAnswer4] = useState(route.params.paramKey[iter].answers[3].text);

    let [response1, setResponse1] = useState(route.params.paramKey[iter].answers[0].score);
    let [response2, setResponse2] = useState(route.params.paramKey[iter].answers[1].score);
    let [response3, setResponse3] = useState(route.params.paramKey[iter].answers[2].score);
    let [response4, setResponse4] = useState(route.params.paramKey[iter].answers[3].score);
    
    function verify(){      
        setIter(iter += 1)

        if(iter >= lenQtn){
            navigation.navigate("Content")
        }else{
            setQuestion(route.params.paramKey[iter].question);
    
            setAnswer1(route.params.paramKey[iter].answers[0].text);
            setAnswer2(route.params.paramKey[iter].answers[1].text);
            setAnswer3(route.params.paramKey[iter].answers[2].text);
            setAnswer4(route.params.paramKey[iter].answers[3].text);

            setResponse1(route.params.paramKey[iter].answers[0].score);
            setResponse2(route.params.paramKey[iter].answers[1].score);
            setResponse3(route.params.paramKey[iter].answers[2].score);
            setResponse4(route.params.paramKey[iter].answers[3].score);
        }
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
    main:{
        backgroundColor: '#971133',
        marginTop: 80,
        width: Dimensions.get('window').width * 1,
        height: Dimensions.get('window').height * .92,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'white',
    },
    main2: {
        
        width: Dimensions.get('window').width * 1,
        height: Dimensions.get('window').height * .92,
        
    },
    icon2: {
        width: 40,
        height: 40,
        
    }
});