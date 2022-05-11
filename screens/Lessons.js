import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Modal, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import SectionBtn from '../components/SectionBtn';
import LessonHdr from '../components/LessonHdr';
import ModalVw from '../components/ModalVw';

import { CONTENT } from '../dummy-data/data';

const Lessons = ({ route }) => {

    console.log(route.params.paramKey)
    const idK = route.params.paramKey;

    const titleStr = CONTENT[idK - 1].name;
    const imgC = CONTENT[idK - 1].img;

    //info de prueba
    const title1 = '¿Qué es Python?';
    const info = 'Python es uno de los lenguajes de programación más populares actualmente y es INTERPRETADO, es decir nosotros escribimos nuestro programa y Python lo interpreta y regresa un resultado. Python es un lenguaje MULTIPROPÓSITO, es decir, podemos crear códigos tanto para diferentes medios, ya sea Web, servidores, escritorio, aplicaciones web, entre otros. Lenguajes como PHP solo sirven para Web y es muy bueno para eso, pero no funciona para otro tipo de medios. Python es un lenguaje MULTIPARADIGMA, lo que significa que podemos usar varios paradigmas de programación, Estructurada, Orientado a Objetos, Imperativa, es decir que podemos programar de la forma que más nos guste. Python es un lenguaje MULTIPLATAFORMA Y DE SOFTWARE LIBRE, lo que significa que lo podemos utilizar tanto en Windows, Linux, Mac o cualquier Sistema Operativo.';
    const newInfo = 'Armando se la come doblada';

    //modal
    const [infoText, changeInfoText] = useState(info);

    
    const onPressNextBtn = () => {
        changeInfoText(newInfo);
    };
    
    function goToSubject() {
        props;
    }
    //boton para mostrar modal
    const renderItem = ({ item }) => (
        <SectionBtn title={item.name} time={item.time} action={() => setModalVisible(true)} />
    );

    console.log(CONTENT[idK - 1].subtopics)

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(36, 11, 54, 1)', 'rgba(195, 20, 50, 1)']}
                style={styles.background}
                start={{ x: 0.55, y: 0.05 }} end={{ x: 0.1, y: 0.9 }}
            />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                <View style={styles.main}>
                    <LinearGradient
                        colors={['rgba(120, 16, 52, 1)', 'rgba(175, 19, 50, 1)']}
                        style={styles.background2}
                        start={{ x: 0.8, y: 0.4 }} end={{ x: 0, y: 0.5 }}
                    />
                    <LessonHdr title={titleStr} image={{ uri: imgC }} />

                    <View style={styles.body}>

                        <ModalVw
                            title={title1} content={info} onClose={() => setModalVisible(!modalVisible)} show={modalVisible}
                        />
                        <FlatList
                            data={CONTENT[idK - 1].subtopics}
                            renderItem={renderItem}
                        />
                    </View>

                </View>

            </View>

            <StatusBar style={"light"} />
        </View>
    );
}

export default Lessons;

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
    main: {
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
    body: {
        width: 400,
        height: 635,
        alignItems: 'center',
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
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
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
