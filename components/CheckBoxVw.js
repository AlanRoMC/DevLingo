import React, { useState } from "react";
import { CheckBox } from 'react-native-elements';
import { TouchableOpacity, Text, View, StyleSheet, Modal, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function CheckBoxVw(props){

    const [checkBoxValue, setCheckBoxValue] = useState(false);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.show}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>

                    <View style={{ width: 400 }}>
                        <View style={{ width: 240, flexDirection: "row", flexWrap: "wrap", alignItems: 'center', justifyContent: 'space-between', margin: 15 }}>
                            <TouchableOpacity onPress={props.onClose}>
                                <Image style={styles.icon22} source={require('../assets/cancelar.png')} />
                            </TouchableOpacity>
                            <Text style={styles.modalText}>Evaluación</Text>
                        </View>
                    </View>

                    <View style={styles.main2}>
                        <View style={{ alignItems: 'center', margin: 15 }}>
                            
                            <Text style={{ color: 'white', fontSize: 24, margin: 20, textAlign: 'center' }}>{props.title}</Text>
                        </View>
                        <View style={{ margin: 10, height: 680, alignItems: 'center'}}>
                                <CheckBox
                                    containerStyle={{width: '100%', marginBottom: 30, marginTop: 30}}
                                    title={'Python es un lenguaje interpretado'}
                                    checked={checkBoxValue}
                                    onPress={() => setCheckBoxValue(!checkBoxValue)}
                                />

                                <CheckBox
                                    containerStyle={{width: '100%', marginBottom: 30}}
                                    title={'Python es un lenguaje semi-interpretado'}
                                    checked={checkBoxValue}
                                    onPress={() => setCheckBoxValue(!checkBoxValue)}
                                />

                                <CheckBox
                                    containerStyle={{width: '100%', marginBottom: 30}}
                                    title={'Python es un lenguaje utilizado por Chris'}
                                    checked={checkBoxValue}
                                    onPress={() => setCheckBoxValue(!checkBoxValue)}
                                />

                                <CheckBox
                                    containerStyle={{width: '100%', marginBottom: 30}}
                                    title={'Armando se la come doblada 100% real no fake'}
                                    checked={checkBoxValue}
                                    onPress={() => setCheckBoxValue(!checkBoxValue)}
                                />
                            
                            <TouchableOpacity style={{ marginTop: 20, marginBottom: 20 }} onPress={props.onClose}>
                                <Image style={styles.icon2} source={require('../assets/derecho.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    background2: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
        borderRadius: 30
    },
    main2: {
        backgroundColor: '#971133',
        width: 400,
        height: 820,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'white',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        width: '100%',
        height: '100%',
        backgroundColor: "#240B35",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        textAlign: "center",
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
    },
    icon2: {
        width: 40,
        height: 40,
    },
    icon22: {
        width: 30,
        height: 30,
    }
});