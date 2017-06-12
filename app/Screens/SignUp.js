import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput,Button,Alert} from "react-native";

export default class SignUp extends Component {
    static navigationOptions = {
        title: 'Sign Up',
    };
    onSubmit=()=>{
        Alert.alert("Congeatulation ");
    };

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <View>
                    <TextInput style={styles.userText} placeholder="User Name"/>
                    <TextInput style={styles.userText} placeholder="Roll No"/>
                    <TextInput style={styles.userText} placeholder="Name"/>
                    <TextInput style={styles.userText} placeholder="Date Of Birth"/>
                    <TextInput style={styles.userText} placeholder="User Name"/>
                    <TextInput style={styles.userText} placeholder="Password"/>
                    <TextInput style={styles.userText} placeholder="Confirm Password"/>
                </View>
                <Button onPress={this.onSubmit} color="red"
                        accessibilityLabel="See an informative alert" title={"Sign Up"}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    userText: {
        marginTop: "5%",
        width: 250,
        height: 30,
        borderColor: 'gray',
        borderWidth: 1

    },

});