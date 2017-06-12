import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput,Button,Alert} from "react-native";

export default class SignUp extends Component {
    static navigationOptions = {
        title: 'Sign Up',
    };
    constructor(props) {
        super(props);
        this.state = {username: '',rollno: '',name:'',dob:'',section:'',password:'',message:''};

    }
    onSubmit=()=>{
        return fetch('http://localhost:3000/signup/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                rollno: this.state.rollno,
                name: this.state.name,
                dob: this.state.dob,
                class: this.state.section,
                password: this.state.password
            })
        })
            .then((response) => {
                this.setState({message: JSON.parse(response._bodyText).message})
            })
            .catch((error) => {
                console.error(error);
            });
    };

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <View>
                    <TextInput style={styles.userText} placeholder="User Name" onChangeText={(username) => this.setState({username})}
                               value={this.state.username} />
                    <TextInput style={styles.userText} placeholder="Roll No" onChangeText={(rollno) => this.setState({rollno})}
                               value={this.state.rollno}/>
                    <TextInput style={styles.userText} placeholder="Name" onChangeText={(name) => this.setState({name})}
                               value={this.state.name}/>
                    <TextInput style={styles.userText} placeholder="Date Of Birth" onChangeText={(dob) => this.setState({dob})}
                               value={this.state.dob}/>
                    <TextInput style={styles.userText} placeholder="Class" onChangeText={(section) => this.setState({section})}
                               value={this.state.section}/>
                    <TextInput style={styles.userText} placeholder="Password" onChangeText={(password) => this.setState({password})}
                               value={this.state.password}/>
                    <TextInput style={styles.userText} placeholder="Confirm Password"/>
                </View>
                <Button onPress={this.onSubmit} color="red"
                        accessibilityLabel="See an informative alert" title={"Sign Up"}/>
                <Text style={{color: "green"}}> {this.state.message}</Text>
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