import React, {Component} from 'react';
import {
    AsyncStorage,
    StyleSheet,
    Text,
    View, TextInput, Button,
} from 'react-native';

const STORAGE_KEY="id_token";

export default class SignIn extends Component{
    static navigationOptions = {
        title: 'JNV-Mamnoor',
    };
    constructor(props) {
        super(props);
        this.state = {text: '', password: '', message: ''};

    }

    onSignUp = () => {
        const { navigate } = this.props.navigation;
        navigate('signup');
    };
     onSignIn = () => {

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
        }).then((response)=> { return JSON.parse(response._bodyText)})
            .then(async (response) =>{
            let isValid=response.isAuthenticated;
                if(isValid)
                {
                    try {
                    await AsyncStorage.setItem(STORAGE_KEY, response.username);
                        const { navigate } = this.props.navigation;
                        navigate('home');
                    } catch (error) {
                        console.log('AsyncStorage error: ' + error.message);
                        this.setState({message:'AsyncStorage error: ' + error.message});
                    }

                }
                else{

                    this.setState({message:"Invalid User Details!!!"});
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }   ;

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.loginText}>Login</Text>
                <View>
                    <TextInput autoCapitalize='none' style={styles.userText} placeholder='User Name' onChangeText={(text) => this.setState({text})}
                               value={this.state.text}/>
                </View>
                <View>
                    <TextInput style={[styles.userText, {marginBottom: "5%"}]} placeholder='Password' password={true}
                               onChangeText={(password) => this.setState({password})} value={this.state.password}/>
                </View>
                <Text style={{color: "green"}}> {this.state.message}</Text>
                <View style={styles.buttons}>
                    <Button style={styles.submit} onPress={this.onSignIn} color="red"
                            accessibilityLabel="See an informative alert" title={"Sign In"}/>
                    <Button style={styles.submit} onPress={this.onSignUp} color="red"
                            accessibilityLabel="See an informative alert" title={"Sign Up"}/>
                </View>

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
    buttons: {
        flexDirection: 'row'
    }
});