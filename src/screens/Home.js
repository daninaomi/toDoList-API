
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    FlatList,
    View,
    TouchableOpacity
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
        return fetch('http://10.20.104.49:3000/tasks')
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
        fetch(`http://10.20.104.49:3000/tasks/${idAppointment}`, {
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

        return (
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

                <TouchableOpacity style={styles.buttonPrimary}
                    onPress={this.props.mudarTela}>
                    <Text style={styles.textButton}>Novo Compromisso</Text>
                </TouchableOpacity>


                <Text style={styles.day}>{this.state.msg}</Text>

            </ScrollView>
        );
    }
}

// export default createStackNavigator({
//     Home: {
//       screen: HomeScreen
//     },
//   });

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 30,
        margin: 15,
        marginTop: 50,
        color: 'grey'
    },
    list: {
        margin: 15
    },
    dayComplete: {
        display: 'flex'
    },
    dayAndMonth: {
        width: 50
    },
    day: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    buttonPrimary: {
        padding: 20,
        margin: 15,
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
