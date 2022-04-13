import React from 'react';
import { TouchableOpacity, Text, Image, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SubjectBtn(props) {
    return(
        <TouchableOpacity
            onPress={props.action}
            style = {{
                backgroundColor:'#971133',
                //backgroundColor:'transparent',
                fontFamily:'sans-serif-light',
                width: 400,
                //height: 120,
                justifyContent: "space-between",
                alignItems: 'center',
                borderRadius: 30,
                flexDirection: "row",
                flexWrap: "wrap",
                alignContent: 'center',
                borderColor: 'white',
                borderWidth: 1,
                marginBottom: 20
            }}>
            <LinearGradient
                colors={['rgba(120, 16, 52, 1)', 'rgba(175, 19, 50, 1)']}
                style={{borderRadius: 30, position: 'absolute', left: 0, right: 0, top: 0, height: '100%',}}
                start={{x: 0.55, y: 0.05}} end={{x: 0.1, y: 0.9}}
            />
            <View style={{backgroundColor: 'rgba(255, 255, 255, .2)', height:90, width: 90, borderRadius: 60, margin: 20}}>
                <Image style={{height:60, width:60, margin: 15}} source={props.image}/>
            </View>
            <View style={{ width: 240, alignItems: 'flex-end', marginRight: 20, paddingTop: 40, marginBottom: 20}}>
                <Text style={{color:'white', fontSize: 18, fontFamily:'sans-serif' }}>{props.text}</Text>
            </View>
            
        </TouchableOpacity>
    );
}
/*
<TouchableOpacity
            onPress={props.action}
            style = {{
                //backgroundColor:'black',
                backgroundColor:'transparent',
                fontFamily:'sans-serif-light',
                width: 400,
                height: 120,
                justifyContent: "space-between",
                alignItems: 'center',
                borderRadius: 30,
                flexDirection: "row",
                flexWrap: "wrap",
                alignContent: 'center',
                borderColor: 'black',
                borderWidth: 1,
                marginBottom: 20
            }}>
            
            <View style={{backgroundColor: 'rgba(255, 255, 255, .2)', height:90, width: 90, borderRadius: 60, marginLeft: 20}}>
                <Image style={{height:60, width:60, margin: 15}} source={props.image}/>
            </View>
            <Text style={{color:'white', fontSize: 18, fontFamily:'sans-serif', marginRight: 20, paddingTop: 40}}>{props.text}</Text>
            
        </TouchableOpacity>

        <ImageBackground source={require('../assets/Rectangle44.png')} resizeMode="cover" style={{height:127, width:400, marginBottom: 20, borderRadius: 30}}>
            <TouchableOpacity
                onPress={props.action}
                style = {{
                    //backgroundColor:'black',
                    backgroundColor:'transparent',
                    fontFamily:'sans-serif-light',
                    width: 400,
                    height: 120,
                    justifyContent: "space-between",
                    alignItems: 'center',
                    borderRadius: 30,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignContent: 'center',
                    borderColor: 'black',
                    borderWidth: 1,
                }}>
                
                    <View style={{backgroundColor: 'rgba(255, 255, 255, .2)', height:90, width: 90, borderRadius: 60, marginLeft: 20}}>
                        <Image style={{height:60, width:60, margin: 15}} source={props.image}/>
                    </View>
                    <Text style={{color:'white', fontSize: 18, fontFamily:'sans-serif', marginRight: 20, paddingTop: 40}}>{props.text}</Text>
            </TouchableOpacity>
        </ImageBackground>
*/