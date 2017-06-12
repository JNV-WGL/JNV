import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View, TextInput, Button,
} from 'react-native';


export default class HomeScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {text: '', password: '',message:''};

    }


    onSubmit = () => {
        // Alert.alert(this.state.text);

        return fetch('http://localhost:3000/login/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.text,
                password: this.state.password,
            })
        })
            .then((response)=>{this.setState({message:JSON.parse(response._bodyText).message})})
            .catch((error) => {
                console.error(error);
            });


    };


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.loginText}>Login</Text>
                <View>
                    <TextInput style={styles.userText} onChangeText={(text) => this.setState({text})}
                               value={this.state.text}/>
                </View>
                <View>
                    <TextInput style={[styles.userText, {marginBottom: "5%"}]} password={true}
                               onChangeText={(password) => this.setState({password})} value={this.state.password}/>
                </View>
                <View style={styles.buttons}>
                <Button style={styles.submit} onPress={this.onSubmit} color="red"
                        accessibilityLabel="See an informative alert" title={"Sign In"}/>
                <Button style={styles.submit} onPress={this.onSubmit} color="red"
                        accessibilityLabel="See an informative alert" title={"Sign Up"}/>
                </View>
                <Text> {this.state.message}</Text>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    loginText: {
        fontWeight: "800"
    },
    userText: {
        marginTop: "5%",
        width: 250,
        height: 30,
        borderColor: 'gray',
        borderWidth: 1

    },
    buttons:{


        flexDirection:'row'
    }
});