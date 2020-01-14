import React from 'react';
import { View, StyleSheet, Switch, Text, TextInput, Button, Dimensions } from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class MainScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            switchValue:false,
        }
    }

    getSize() {
        return {
            width: Dimensions.get('window').width, 
            height: 60//Dimensions.get('window').height
        }
    }

    toggleSwitch = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchValue: value})
        //state changes according to switch
        //which will result in re-render the text
     }

    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.italicText}>
                    Ut enim ad <Text style = {styles.wordBold}>minim </Text> veniam, quis aliquip ex ea commodo consequat.
                </Text>
                <Switch style={{marginTop:30}} onValueChange = {this.toggleSwitch} value = {this.state.switchValue}/>
                <TextInput style={{height: 40, backgroundColor: '#ff00ff'}} placeholder="Type here to translate!" onChangeText={(text) => this.setState({text})} value={this.state.text}/>
                <View style = {styles.child}></View>
                <View style={[styles.overlay, this.getSize()]}>
                    <View style={styles.containerr}>
                        <View style={styles.leftContainer}>
                            <Button title="Button 1"/>
                        </View>
                        <View style={styles.rightContainer}>
                            
                        </View>
                    </View>
                </View>
                <Button title="Loading button" loading/>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
       flex: 1,
       alignItems: 'center',
       backgroundColor: '#ede3f2',
       padding: 10
    },
    child: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 10,
        width: width
     },
     italicText: {
        color: '#37859b',
        fontStyle: 'italic'
     },
     containerr: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#008999',
      },
      buttonContainer: {
        flex: 1,
        backgroundColor: '#008800',
      },
      leftContainer: {
        flex: 1,
        backgroundColor: '#00FF00',
      },
      rightContainer: {
        flex: 1,
        backgroundColor: '#000000',
      }
})