import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

export default function LessonHdr(props) {
    return (
        <View>
            <View style={styles.header}>
                <View style={{ backgroundColor: 'rgba(255, 255, 255, .2)', height: 90, width: 90, borderRadius: 60, marginLeft: 20 }}>
                    <Image style={{ height: 60, width: 60, margin: 15 }} source={props.image} />
                </View>
                <View style={{width: 250 , alignItems: 'flex-end'}}>
                    <Text style={{ color: 'white', fontSize: 26, fontFamily: 'sans-serif', marginRight: 20 }}>{props.title}</Text>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={{ color: 'white', fontSize: 20, fontFamily: 'sans-serif', marginRight: 20, marginLeft: 20 }}>Secciones</Text>
                <View style={{ height: 2, width: 265, backgroundColor: 'white', marginRight: 2 }}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        fontFamily:'sans-serif-light',
        width: 400,
        height: 120,
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: 'center'
    },
    section:{
        fontFamily:'sans-serif-light',
        width: 400,
        height: 50,
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: 'center',
        marginBottom: 5,
    },
});