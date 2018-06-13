
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  View
} from 'react-native';


export default class App extends Component {

  constructor() {
    super()
    this.state = {
      tarefas: [],
      msg: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/tasks')
      .then(res => res.json())
      .then(json => this.setState({
        tarefas: json
      }))
      .catch(erro => {
        this.setState({
          msg: 'entrou na msg'
        })
      })
  }

  render() {
    const compromissos = [
      {
        id: 1,
        dia: '12',
        mes: 'mar',
        descricao: 'Criar app React Native'
      },
      {
        id: 1,
        dia: '13',
        mes: 'mar',
        descricao: 'Usar API do Node pra nossa App '
      }
    ]

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>
          Bem-vindo(a) !
        </Text>

        <FlatList style={styles.list}
          keyExtractor={item => item.id}
          data={compromissos}
          renderItem={({ item }) =>

            <View style={styles.dayComplete}>
              <View style={styles.dayAndMonth}>
                <Text style={styles.day}>{item.dia}</Text>
                <Text>{item.mes}</Text>
              </View>

              <View style={styles.description}>
                <Text>{item.descricao}</Text>
              </View>

            </View>
          }
        />

        <FlatList style={styles.list}
          keyExtractor={item => item.id}
          data={this.state.tarefas}
          renderItem={({ item }) =>

            <View>

              <Text style={styles.day}>{item.status.name}</Text>

            </View>
          }
        />

        <Text style={styles.day}>{this.state.msg}</Text>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
  description: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 5,
    padding: 10,
    fontSize: 40,
  }
});
