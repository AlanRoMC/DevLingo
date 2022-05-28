import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, FlatList, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import SectionBtn from '../components/SectionBtn';
import LessonHdr from '../components/LessonHdr';

import { CONTENT } from '../dummy-data/data';

const Lessons = ({ navigation, route }) => {

    const idK = route.params.paramKey;

    const titleStr = CONTENT[idK - 1].name;
    const imgC = CONTENT[idK - 1].img;

    const renderItem = ({ item }) => (
        <SectionBtn title={item.name} time={item.time} action={() => navigation.navigate("Subject", {paramKey: item})}/>
    );

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
        marginTop: 80,
        width: Dimensions.get('window').width * 1,
        height: Dimensions.get('window').height * .92,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'white',
    },
    body: {
        width: Dimensions.get('window').width * 1,
        height: Dimensions.get('window').height * .69,
        alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    icon2: {
        width: 40,
        height: 40,
    }
});
