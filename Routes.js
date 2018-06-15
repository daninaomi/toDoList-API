
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/Home'
import AddAppointment from './src/screens/AddAppointment'

class HomeScreen extends Component {

    navegarTela = () => {
        this.props.navigation.navigate('AddAppointmentScreen')
    }

    render() {
        return (
            <Home mudarTela={this.navegarTela} />
        )
    }
}

class AddAppointmentScreen extends Component {
    navegarTela = () => {
        this.props.navigation.push('HomeScreen')
    }

    render() {
        return (
            <AddAppointment mudarTela={this.navegarTela} />
        )
    }
}

const RootStack = createStackNavigator(
    {
        HomeScreen: HomeScreen,
        AddAppointmentScreen: AddAppointmentScreen
    },
    {
        initialRouteName: 'HomeScreen',
    }
);

export default RootStack