
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    DrawerLayoutAndroid,
    Dimensions
} from 'react-native';

const height = Dimensions.get('screen').height;
const url = 'http://192.168.1.15:3000/users'

export default class Home extends Component {

    constructor() {
        super()
        this.state = {
            user: {},
            msg: ''
        }
    }

    componentDidMount() {
        // return fetch('http://10.20.104.49:3000/users')
        return fetch(url)
            .then(res => res.json())
            .then(json => this.setState({
                user: json[0]
                // msg: 'entrou no segundo then!!!'
            }))
            .catch(erro => {
                this.setState({
                    msg: 'entrou na msg de erro'
                })
            })
    }

    upload = () => {
        const file = {
            uri,             // e.g. 'file:///path/to/file/image123.jpg'
            name,            // e.g. 'image123.jpg',
            type             // e.g. 'image/jpg'
        }

        const body = new FormData()
        body.append('file', file)

        fetch(url, {
            method: 'POST',
            body
        })
    }


    render() {

        const navigationView = (
            <View>
                <Text style={{ margin: 20, fontSize: 18, textAlign: 'left' }}
                    onPress={this.props.mudarTela} >
                    Home
                </Text>

                <Text style={{ margin: 20, fontSize: 18, textAlign: 'left' }}
                    onPress={this.props.logout} >
                    Logout
                </Text>
            </View>
        )

        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>

                <View style={styles.container}>
                    <View>
                        <Text style={styles.title}>
                            {this.state.user.name}
                        </Text>

                        <Text style={styles.subtitle}>
                            {this.state.user.email}
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.buttonPrimary}
                        onPress={this.upload}>
                        <Text style={styles.textButton}>Add Foto</Text>
                    </TouchableOpacity>

                </View>

            </DrawerLayoutAndroid>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        height: height * .8,
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF'
    },
    title: {
        fontSize: 30,
        marginLeft: 20,
        marginTop: 50,
        color: 'grey'
    },
    subtitle: {
        fontSize: 20,
        marginLeft: 20,
        color: 'grey'
    },
    buttonPrimary: {
        padding: 20,
        margin: 20,
        borderRadius: 10,
        backgroundColor: 'teal'
    },
    textButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }
});


// const compromissos = [
//   {
//     id: 1,
//     dia: '12',
//     mes: 'mar',
//     descricao: 'Criar app React Native'
//   },
//   {
//     id: 1,
//     dia: '13',
//     mes: 'mar',
//     descricao: 'Usar API do Node pra nossa App '
//   }
// ]

