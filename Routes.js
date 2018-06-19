
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/Home'
import AddAppointment from './src/screens/AddAppointment'
import Login from './src/screens/Login'
import Profile from './src/screens/Profile'


class HomeScreen extends Component {
    static navigationOptions = {
        title: 'My Agenda'
    };

    navegarTela = () => {
        this.props.navigation.navigate('AddAppointmentScreen')
    }

    sair = () => {
        this.props.navigation.navigate('LoginScreen')
    }

    perfil = () => {
        this.props.navigation.navigate('ProfileScreen')
    }

    render() {
        return (
            <Home mudarTela={this.navegarTela} logout={this.sair} profile={this.perfil} />
        )
    }
}

class AddAppointmentScreen extends Component {
    static navigationOptions = {
        title: 'Novo Compromisso'
    };

    navegarTela = () => {
        this.props.navigation.push('HomeScreen')
    }

    render() {
        return (
            <AddAppointment mudarTela={this.navegarTela} />
        )
    }
}

class LoginScreen extends Component {

    navegarTela = () => {
        this.props.navigation.push('HomeScreen')
    }

    render() {
        return (
            <Login mudarTela={this.navegarTela} />
        )
    }
}

class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Perfil'
    };

    navegarTela = () => {
        this.props.navigation.push('HomeScreen')
    }

    sair = () => {
        this.props.navigation.navigate('LoginScreen')
    }

    render() {
        return (
            <Profile mudarTela={this.navegarTela} logout={this.sair} />
        )
    }
}

const RootStack = createStackNavigator(
    {
        HomeScreen: HomeScreen,
        AddAppointmentScreen: AddAppointmentScreen,
        LoginScreen: LoginScreen,
        ProfileScreen: ProfileScreen
    },
    {
        initialRouteName: 'HomeScreen',
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'teal',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    }
);

export default RootStack