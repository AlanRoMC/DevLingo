import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import SectionBtn from '../components/SectionBtn';
import LessonHdr from '../components/LessonHdr';
import ModalVw from '../components/ModalVw';
import CheckBoxVw from '../components/CheckBoxVw';

import { CONTENT } from '../dummy-data/data';

const Lessons = ({ navigation, route }) => {

    //console.log("--- ",route.params.paramKey)
    const idK = route.params.paramKey;

    //console.log("---\n",CONTENT[idK - 1].lessons[0].lesson[0].name,"\n---")

    const titleStr = CONTENT[idK - 1].name;
    const imgC = CONTENT[idK - 1].img;

    //modal
    //const [infoText, changeInfoText] = useState(info);

    var idInfo;
/*
    const onPressNextBtn = () => {
        changeInfoText(newInfo);
    };
*/

    function goToSubject() {
        props;
    }
    //boton para mostrar modal
    const renderItem = ({ item }) => (
        <SectionBtn title={item.name} time={item.time} action={() => navigation.navigate("Subject", {paramKey: item})}/>
    );

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

/*
<CheckBoxVw
    title={title1} onClose={() => setModalVisible(!modalVisible)} show={modalVisible}
/>

<ModalVw
    title={title1} content={info} onClose={() => setModalVisible(!modalVisible)} show={modalVisible}
/>
*/

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
