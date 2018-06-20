import React, { Component } from 'react';
import { 
    Modal, 
    Text, 
    TouchableOpacity, 
    View,
    StyleSheet,
    Dimensions
} from 'react-native';

const height = Dimensions.get('screen').height;

export default class ModalBox extends Component {
    // state = {
    //     modalVisible: false
    // }

    // setModalVisible(visible) {
    //     this.setState({ modalVisible: visible });
    // }

    render() {
        
        return (
            //   <View style={{marginTop: 22}}>
            
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.props.visible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <View style={styles.backModal}>
                            <View style={styles.boxModal}>
                                <TouchableOpacity style={styles.deleteButton}
                                    onPress={this.props.fecharModal}>
                                    <Text style={{color: 'white'}}>X</Text>
                                </TouchableOpacity>
                                
                                {this.props.children}
                            </View>
                        </View>
            </Modal>

            //   </View>
        );
    }
}


const styles = StyleSheet.create({
    backModal: {
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0, 0.5)'
    },
    boxModal: {
        width: 350,
        padding: 40,
        backgroundColor: 'white'
    },
    deleteButton: {
        position: 'absolute',
        right: 15,
        top: 5,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'teal',
        borderRadius: 100
    }
});