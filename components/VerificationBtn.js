import React, {useRef} from 'react';
import { TouchableOpacity, Text, View, ToastAndroid } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

export default function VerificationBtn(props) {

    const confettiRef = useRef();



    function verificar(){
        if(props.action == 1){
            confettiRef.current.start();
            ToastAndroid.show("¡Respuesta correcta!", 2000)
            
        }
        else{
            ToastAndroid.show("¡Upss, te equivocaste!", 2000)
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

            <ConfettiCannon
                count={150}
                origin={{y:0, x:0}}
                autoStart={false}
                ref={confettiRef}
                explosionSpeed='1000'
                fallSpeed='3000'
            />
            
        </TouchableOpacity>
    );
}