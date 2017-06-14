import React from 'react';
import {StyleSheet, View, Text, TextInput,Button,Alert} from "react-native";
import  ValidationComponent  from 'react-native-form-validator';

export default class SignUp extends ValidationComponent {
    static navigationOptions = {
        title: 'Sign Up',
    };
    constructor(props) {
        super(props);
        this.state = {username: '',rollno: '',name:'',dob:'',section:'',password:'',message:''};
        this.validateFields = ()=>{
            this.validate({
                username:{required:true,minlength:7}
            });
        };


    }

    onSubmit(){
        this.validateFields()
        if(this.errors.length==0){
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
            });}
            else{
            this.setState({message:this.getErrorMessages()})
        }
    };

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <View>
                    <TextInput ref='username' style={styles.userText} autoCapitalize='none' placeholder="User Name" onChangeText={(username) => this.setState({username})}
                               value={this.state.username} />
                    <TextInput style={styles.userText} autoCapitalize='none' placeholder="Roll No" onChangeText={(rollno) => this.setState({rollno})}
                               value={this.state.rollno}/>
                    <TextInput style={styles.userText} autoCapitalize='none' placeholder="Name" onChangeText={(name) => this.setState({name})}
                               value={this.state.name}/>
                    <TextInput style={styles.userText} autoCapitalize='none' placeholder="Date Of Birth" onChangeText={(dob) => this.setState({dob})}
                               value={this.state.dob}/>
                    <TextInput style={styles.userText} autoCapitalize='none' placeholder="Class" onChangeText={(section) => this.setState({section})}
                               value={this.state.section}/>
                    <TextInput style={styles.userText} autoCapitalize='none' placeholder="Password" onChangeText={(password) => this.setState({password})}
                               value={this.state.password}/>
                    <TextInput style={styles.userText} autoCapitalize='none' placeholder="Confirm Password" />
                </View>
                <Button onPress={this.onSubmit.bind(this)} color="red"
                        accessibilityLabel="See an informative alert" title={"Sign Up"}
                />
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