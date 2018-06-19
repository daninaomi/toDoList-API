import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ToolbarAndroid
    // AsyncStorage
} from 'react-native';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            senha: '',
            validacao: ''
        }
    }

    // login = () => {

    //     let usuario = {
    //         email: this.state.email,
    //         password: this.state.senha
    //     }

    //     const request = {
    //         method: 'POST',
    //         body: JSON.stringify(usuario),
    //         headers: new Headers({
    //             "Content-type": "application/json"
    //         })
    //     }

    //     const uri = 'http://10.20.104.49:3000/users/login'

    //     fetch(uri, request)
    //         .then(response => {
    //             if (!response.ok)
    //                 throw new Error('Não deu pra logar ai mermao')

    //             return response.json()
    //         })
    //         .then(json => {
    //             // const usuario = {
    //             //     email: this.state.email,
    //             //     token: _id
    //             // }

    //             // AsyncStorage.setItem('usuario', JSON.stringify(usuario))
    //             AsyncStorage.setItem('email', usuario.email)
    //             AsyncStorage.setItem('token', json._id)

    //             console.warn(json)
    //         })
    //         // .then(this.props.mudarTela())
    //         .catch(error => {
    //             console.warn('nao logou')
    //             this.setState({ validacao: error.message })
    //         })
    // }

    login = () => {
        this.props.mudarTela()
    }

    render() {
        return (
            <View style={styles.container}>

                <Image style={styles.logo}
                    source={require('../img/agenda2.png')}
                />
                <Text style={styles.logoText}>my agenda</Text>

                <TextInput style={styles.inputText}
                    placeholder='E-mail'
                    autoCapitalize="none"
                    placeholderTextColor="white"
                    underlineColorAndroid='white'
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />

                <TextInput style={styles.inputText}
                    placeholder='Senha'
                    autoCapitalize="none"
                    placeholderTextColor="white"
                    underlineColorAndroid='white'
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
        alignItems: 'center',
        backgroundColor: 'teal'
    },
    logo: {
        marginTop: 70
    },
    logoText: {
        marginTop: 10,
        marginBottom: 20,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inputText: {
        width: width * 0.8,
        marginBottom: 20,
        fontSize: 18
    },
    buttonPrimary: {
        width: width * 0.8,
        marginTop: 60,
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    textButton: {
        color: 'teal',
        textAlign: 'center',
        fontSize: 20
    }
});
