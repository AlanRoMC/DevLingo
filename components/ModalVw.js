import React, {useState} from "react";
import { TouchableOpacity, Text, View, StyleSheet, Modal, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ModalVw(props){
    
    //const [modalVisible, setModalVisible] = useState(false);
    
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

                    <View style={{ width: 200, marginRight: '42.5%' }}>
                        <View style={{ width: 200, flexDirection: "row", flexWrap: "wrap", alignItems: 'center', justifyContent: 'space-between', margin: 15 }}>
                            <TouchableOpacity onPress={props.onClose}>
                                <Image style={styles.icon22} source={require('../assets/cancelar.png')} />
                            </TouchableOpacity>
                            <Text style={styles.modalText}>Tema</Text>
                        </View>
                    </View>

                    <View style={styles.main2}>
                        <View style={{ alignItems: 'center', margin: 15, borderRadius: 30, borderColor: 'white', borderWidth: 1 }}>
                            <LinearGradient
                                colors={['rgba(175, 19, 50, 1)', 'rgba(120, 16, 52, 1)']}
                                style={styles.background2}
                                start={{ x: 0.55, y: 0.05 }} end={{ x: 0.1, y: 0.9 }}
                            />
                            <Text style={{ color: 'white', fontSize: 24, margin: 20, textAlign: 'center' }}>{props.title}</Text>
                        </View>

                        <View style={{ borderRadius: 30, borderColor: 'white', borderWidth: 1, margin: 15, height: 680, alignItems: 'center' }}>
                            <LinearGradient
                                colors={['rgba(175, 19, 50, 1)', 'rgba(120, 16, 52, 1)']}
                                style={styles.background2}
                                start={{ x: 0.8, y: 0.4 }} end={{ x: 0, y: 0.5 }}
                            />
                            <ScrollView>
                                <View style={{ margin: 20 }}>
                                    <Text style={{ color: 'white', fontSize: 18 }}>{props.content}</Text>
                                </View>
                                <TouchableOpacity style={{ marginLeft: '45%', marginTop: 20, marginBottom: 20 }} onPress={props.onClose}>
                                    <Image style={styles.icon2} source={require('../assets/derecho.png')} />
                                </TouchableOpacity>
                            </ScrollView>
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