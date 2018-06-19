import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

export default class ModalBox extends Component {
    state = {
        modalVisible: false
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        
        return (
            //   <View style={{marginTop: 22}}>
            
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <View style={{ marginTop: 22 }}>
                    <View>
                        <Text>Hello World!</Text>

                        <TouchableHighlight
                            onPress={() => {
                                this.props.active(!this.state.modalVisible);
                            }}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

            //   </View>
        );
    }
}