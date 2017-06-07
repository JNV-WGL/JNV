/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Alert,
    View, TextInput, Button
} from 'react-native';


const onButtonPress = () => {

};


export default class JNV extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'UserName',password:"Password" };

    }



  render() {
    //noinspection JSAnnotator
      return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={styles.loginText}>Login</Text>
        <View>
        <TextInput style={styles.userText} onChangeText={(text) => this.setState({text})} value={this.state.text}/>
        </View>
        <View>
        <TextInput style={[styles.userText,{marginBottom:"5%"}]}  password={true} onChangeText={(password) => this.setState({password})} value={this.state.password}/>
        </View>
          <Button style={styles.submit} onPress={onButtonPress}   color="red" accessibilityLabel="See an informative alert" title={"Submit"} />
      </View>

    );
  }
}


const styles = StyleSheet.create({
    loginText:{
      fontWeight:"800"
    },
    userText:{
        marginTop:"5%",
        width:250,
        height: 30,
        borderColor: 'gray',
        borderWidth: 1

    },

});

AppRegistry.registerComponent('JNV', () => JNV);
