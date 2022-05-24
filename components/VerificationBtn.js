import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function VerificationBtn(props) {

    function verificar(){
        console.log(props.action)
        if(props.action==1){
            alert("Correcto");
        }
        else{
            alert("Incorrecto")
        }
    }

    return(
        <TouchableOpacity
            onPress={verificar}
            style = {{
                //backgroundColor:'#971133',
                backgroundColor: 'rgba(120, 16, 52, 1)',
                fontFamily:'sans-serif-light',
                width: 350,
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
            
            <View style={{ margin: 20, backgroundColor: 'rgba(120, 16, 52, 1)' }}>
                <Text style={{color:'white', fontSize: 18, fontFamily:'sans-serif' }}>{props.text}</Text>
            </View>
            
        </TouchableOpacity>
    );
}