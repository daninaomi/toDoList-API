import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    TextInput
} from 'react-native';

export default class Appointment extends Component {

    render() {

        const { name, status, deletaItem } = this.props

        return (
            <View style={styles.container}>

                <View style={styles.containerText}>
                    <Text>{status}</Text>
                    <Text style={styles.title}>{name}</Text>
                </View>

                <TouchableOpacity style={styles.buttonDelete}
                    onPress={deletaItem}>
                    <Text style={styles.textButton}> X </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        borderWidth: 2,
        borderColor: 'teal',
        borderRadius: 5,
        padding: 15,
    },
    containerText: {
        flex: 1,
        marginRight: 20
    },
    title: {
        fontSize: 20
    },
    buttonDelete: {
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: 'teal'
    },
    textButton: {
        color: 'white',
        fontSize: 15
    }
})