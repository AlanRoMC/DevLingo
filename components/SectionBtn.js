import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SubjectBtn(props) {
    return (
        <TouchableOpacity onPress={props.action} style={{marginBottom:15}}>
            <LinearGradient
                colors={['rgba(175, 19, 50, 1)','rgba(120, 16, 52, 1)']}
                style={{borderRadius: 30, position: 'absolute', left: 0, right: 0, top: 0, height: '100%',}}
                start={{x: 0.55, y: 0.05}} end={{x: 0.1, y: 0.9}}
            />
            <View style={{ width: 380, borderRadius: 30, borderColor: 'black', borderWidth: 1, alignItems: 'flex-end'}}>
                <View style={{ width: 375 }}>
                    <Text style={{color: 'white', fontSize: 24, marginLeft: 10, marginTop: 10 , marginBottom: 5}}>{props.title}</Text>
                </View>
                <View style={{ height: 2, width: 285, backgroundColor: 'white' }}></View>
                <Text style={{ color: 'white', fontSize: 18, marginTop: 10, marginRight: 8 }}>Tiempo Aprox:</Text>
                <Text style={{ color: 'white', fontSize: 18, marginRight: 8, marginBottom: 10 }}>{props.time}</Text>
            </View>
        </TouchableOpacity>
    );
}