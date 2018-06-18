
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    FlatList,
    View,
    TouchableOpacity,
    DrawerLayoutAndroid,
    Image
} from 'react-native';
import Appointment from '../components/Appointment'


export default class Home extends Component {

    constructor() {
        super()
        this.state = {
            tarefas: [],
            msg: ''
        }
    }

    componentDidMount() {
        // return fetch('http://10.20.104.49:3000/tasks')
        return fetch('http://192.168.1.15:3000/tasks')
            .then(res => res.json())
            .then(json => this.setState({
                tarefas: json
                // msg: 'entrou no segundo then!!!'
            }))
            .catch(erro => {
                this.setState({
                    msg: 'entrou na msg de erro'
                })
            })
    }


    deletaItem = (idAppointment) => {
        fetch(`http://192.168.1.15:3000/tasks/${idAppointment}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(respostaPronta => {

                const listaNova = this.state.tarefas.filter(tarefa => {
                    return tarefa._id !== idAppointment
                })

                this.setState({
                    tarefas: listaNova,
                    msg: 'filtroo'
                })
            })
            .catch(erro => {
                this.setState({
                    msg: 'entrou na msg de erro'
                })
            })
    }

    render() {

        const navigationView = (
            <View>
                <Text style={{ margin: 20, fontSize: 18, textAlign: 'left' }}
                    onPress={this.props.profile} >
                    Meu Perfil
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

                <ScrollView style={styles.container}>

                    <Text style={styles.welcome}>
                        Bem-vindo(a) !
                    </Text>

                    <FlatList style={styles.list}
                        keyExtractor={item => item._id}
                        data={this.state.tarefas}
                        renderItem={({ item }) =>

                            <Appointment
                                name={item.name}
                                status={item.status}
                                deletaItem={() => this.deletaItem(item._id)} />

                        }
                    />

                    <Text style={styles.day}>{this.state.msg}</Text>

                    <TouchableOpacity style={styles.buttonPrimary}
                        onPress={this.props.mudarTela}>
                        <Text style={styles.textButton}>Novo Compromisso</Text>
                    </TouchableOpacity>

                </ScrollView>

                {/* <View style={styles.socialButtons}>
                    <TouchableOpacity>
                        <Image source={require('./img/i1.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('./img/i2.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('./img/i3.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('./img/i4.png')} />
                    </TouchableOpacity>

                </View> */}

            </DrawerLayoutAndroid>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF'
    },
    toolbar: {
        backgroundColor: 'red'
    },
    welcome: {
        fontSize: 30,
        marginLeft: 20,
        marginTop: 50,
        color: 'grey'
    },
    list: {
        margin: 20
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
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: 'white'
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

// <FlatList style={styles.list}
//           keyExtractor={item => item.id}
//           data={compromissos}
//           renderItem={({ item }) =>

//             <View style={styles.dayComplete}>
//               <View style={styles.dayAndMonth}>
//                 <Text style={styles.day}>{item.dia}</Text>
//                 <Text>{item.mes}</Text>
//               </View>

//               <View style={styles.description}>
//                 <Text>{item.descricao}</Text>
//               </View>

//             </View>
//           }
//         /> 
