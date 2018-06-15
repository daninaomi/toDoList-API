import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Dimensions,
    AsyncStorage
} from 'react-native';

const height = Dimensions.get('screen').height

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            senha: '',
            validacao: ''
        }
    }

    login = () => {

        let usuario = {
            email: this.state.email,
            password: this.state.senha
        }

        const request = {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: new Headers({
                "Content-type": "application/json"
            })
        }

        const uri = 'http://10.20.104.49:3000/users/login'

        fetch(uri, request)
            .then(response => {
                if (!response.ok)
                    throw new Error('Não deu pra logar ai mermao')

                return response.json()
            })
            .then(json => {
                // const usuario = {
                //     email: this.state.email,
                //     token: _id
                // }

                // AsyncStorage.setItem('usuario', JSON.stringify(usuario))
                AsyncStorage.setItem('email', usuario.email)
                AsyncStorage.setItem('token', json._id)

                console.warn(json)
            })
            // .then(this.props.mudarTela())
            .catch(error => {
                console.warn('nao logou')
                this.setState({ validacao: error.message })
            })
    }

    render() {
        return (
            <View style={styles.container}>
                {/* {console.warn(this.state)} */}
                <TextInput style={styles.inputText}
                    placeholder='E-mail'
                    autoCapitalize="none"
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />

                <TextInput style={styles.inputText}
                    placeholder='Senha'
                    autoCapitalize="none"
                    onChangeText={(senha) => this.setState({ senha })}
                    secureTextEntry={true}
                    value={this.state.senha}
                />

                <TouchableOpacity style={styles.buttonPrimary}
                    onPress={this.login}>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>

                <Text>{this.state.validacao}</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: height * 1,
        padding: 30,
        justifyContent: 'center'
    },
    inputText: {
        marginBottom: 20,
        fontSize: 18
    },
    buttonPrimary: {
        marginTop: 100,
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'teal'
    },
    textButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }
});
