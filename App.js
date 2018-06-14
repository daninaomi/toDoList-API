
import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
// import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/Home'
import AddAppointment from './src/screens/AddAppointment'


export default class App extends Component {

  render() {

    return (
      <View>

        <Home />
        {/* <AddAppointment /> */}

      </View>
    );
  }
}

// const RootStack = createStackNavigator(
//   {
//     Home: Home
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );


// import { Navigation } from 'react-native-navigation';

// import Home from './src/screens/Home'
// import AddAppointment from './src/screens/AddAppointment'


// export default () => {
//   Navigation.registerComponent('Home', () => Home);
//   Navigation.registerComponent('AddAppointment', () => AddAppointment);

//   Navigation.startSingleScreenApp({
//     screen: {
//       screen: 'Home',
//       title: 'Home'
//     }
//   });
// }