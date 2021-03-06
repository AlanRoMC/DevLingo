import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import SubjectBtn from '../components/SubjectBtn';
import { CONTENT } from '../dummy-data/data';

const Content = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <SubjectBtn text={item.name} image={item.img} action={() => navigation.navigate("Lessons", {paramKey: item.id})}
        />
    );

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(36, 11, 54, 1)', 'rgba(195, 20, 50, 1)']}
                style={styles.background}
                start={{x: 0.55, y: 0.05}} end={{x: 0.1, y: 0.9}}
            />

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                <FlatList style = {{marginTop: 90}}
                    data={ CONTENT }
                    renderItem={ renderItem }
                />

            </View>
            
            <StatusBar style={"light"} />
        </View>
    );
}

export default Content;

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
});
