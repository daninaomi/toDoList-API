import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Picker
} from 'react-native';
import ModalBox from '../components/ModalBox'

export default class Appointment extends Component {

    constructor() {
        super()
        this.state = {
            modalVisible: false,
            // name: '',
            // status: ''
        }
    }

    render() {

        const { name, status, deletaItem } = this.props

        return (

            <View>

                <TouchableOpacity style={styles.container}
                    onPress={() => {
                        this.setState({ modalVisible: true })
                    }}>
                    {/* <View style={styles.container}> */}

                    <View style={styles.containerText}>
                        <Text>{status}</Text>
                        <Text style={styles.title}>{name}</Text>
                    </View>

                    <TouchableOpacity style={styles.buttonDelete}
                        onPress={deletaItem}>
                        <Text style={styles.textButton}> X </Text>
                    </TouchableOpacity>
                    {/* </View> */}
                </TouchableOpacity >

                <ModalBox visible={this.state.modalVisible}
                    fecharModal={() => this.setState({ modalVisible: false })}>

                    <View>
                        {/* <Text>Muitas coisas sem sentido</Text> */}
                        <TextInput
                            placeholder='coisas'
                            onChangeText={(name) => this.setState({ name })}
                            value={name}
                        />
                        <Picker style={styles.selectionButton}
                            selectedValue={this.state.status}
                            onValueChange={(itemValue, itemIndex) => this.setState({ status: itemValue })}
                            mode='dropdown'
                        >
                            <Picker.Item label="Pending" value="pending" />
                            <Picker.Item label="Ongoing" value="ongoing" />
                            <Picker.Item label="Complete" value="complete" />
                        </Picker>
                    </View>

                </ModalBox>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        borderWidth: 2,
        borderColor: 'teal',
        borderRadius: 5,
        padding: 15,
    },
    containerText: {
        flex: 1,
        marginRight: 20
    },
    title: {
        fontSize: 20
    },
    buttonDelete: {
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: 'teal'
    },
    textButton: {
        color: 'white',
        fontSize: 15
    }
})