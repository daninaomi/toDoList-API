
import React, { Component } from 'react';
import Routes from './Routes'


export default class App extends Component {

  render() {

    return (
      <Routes />
    );
  }
}




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