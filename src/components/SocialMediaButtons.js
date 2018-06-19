
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

export default class SocialMediaButtons extends Component {

    render() {
        return (

            <View style={styles.socialButtons}>
                <TouchableOpacity>
                    <Image source={require('../img/i1.png')} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('../img/i2.png')} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('../img/i3.png')} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('../img/i4.png')} />
                </TouchableOpacity>

            </View>

        );
    }
}


const styles = StyleSheet.create({
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: 'white'
    }
});
