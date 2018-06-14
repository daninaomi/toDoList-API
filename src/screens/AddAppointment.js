
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Picker,
    TouchableOpacity
} from 'react-native';


export default class Home extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            status: ''
        }
    }

    onPress = () => {
        // const data = {
        //     name: this.state.name,
        //     status: this.state.status
        // }

        return fetch('http://10.20.105.240:3000/tasks', {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                status: this.state.status
            }),
            headers: new Headers({
                "Content-type": "application/json"
            })
        })
            .then(res => res.json())
            .then(this.setState({
                // tarefas: json
                msg: 'mandouuuu'
            }))
            .catch(erro => {
                this.setState({
                    msg: 'entrou na msg de erro'
                })
            })
    }

    render() {

        return (
            <View style={styles.container}>

                <TextInput style={styles.inputText}
                    placeholder='Qual seu compromisso?'
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />

                <Text style={styles.selectionLabel}>
                    Qual o status da sua tarefa?
                </Text>

                <Picker style={styles.selectionButton}
                    selectedValue={this.state.status}
                    onValueChange={(itemValue, itemIndex) => this.setState({ status: itemValue })}
                    mode='dropdown'
                >
                    <Picker.Item label="Pending" value="pending" />
                    <Picker.Item label="Ongoing" value="ongoing" />
                    <Picker.Item label="Complete" value="complete" />
                </Picker>

                <TouchableOpacity style={styles.buttonPrimary}
                    onPress={this.onPress}>
                    <Text style={styles.textButton}>Novo Compromisso</Text>
                </TouchableOpacity>


                <Text style={{ fontSize: 20 }}>{this.state.msg}</Text>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        margin: 30
    },
    inputText: {
        marginTop: 200,
        marginBottom: 50,
        fontSize: 20
    },
    selectionLabel: {
        fontSize: 16
    },
    selectionButton: {
        marginTop: 10,
        color: 'teal'
    },
    buttonPrimary: {
        marginTop: 150,
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'teal'
    },
    textButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18
    }
});
