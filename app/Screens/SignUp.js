import React from 'react';
import {StyleSheet, View, Text, TextInput,Button,Alert} from "react-native";
import  ValidationComponent  from 'react-native-form-validator';

export default class SignUp extends ValidationComponent {
    static navigationOptions = {
        title: 'Sign Up',
    };
    constructor(props) {
        super(props);
        this.state = {username: '',rollno: '',name:'',dob:'',section:'',password:'',confirmPassword:'',message:''};
        this.validateFields = ()=>{
            this.validate({
                username:{required:true,minlength:7},
                rollno:{required:true},
                name:{required:true},
                dob:{date:'YYYY-MM-DD'},
                class:{required:true},
                password:{minlength:6},
            });
        };


    }

    onSubmit(){
        this.validateFields();
        if(this.errors.length===0 && this.passwordMatch()){
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
                password: this.state.password,
                confirmPassword:this.state.confirmPassword
            })
        })
            .then((response) => {
                this.setState({message: JSON.parse(response._bodyText).message})
            })
            .catch((error) => {
                console.error(error);
            });}
            else{
            if(!this.passwordMatch()){
            this.setState({message:this.getErrorMessages() + "Passwords are not matching"})}
            else{
            this.setState({message:this.getErrorMessages()})
            }
        }
    };

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <View>
                    <TextInput ref='username' style={styles.userText} autoCapitalize='none' placeholder="User Name" onChangeText={(username) => this.setState({username})}
                               value={this.state.username} />

                    <TextInput ref='rollno' style={styles.userText} autoCapitalize='none' placeholder="Roll No" onChangeText={(rollno) => this.setState({rollno})}
                               value={this.state.rollno}/>
                    <TextInput ref='name' style={styles.userText} autoCapitalize='none' placeholder="Name" onChangeText={(name) => this.setState({name})}
                               value={this.state.name}/>
                    <TextInput ref='dob' style={styles.userText} autoCapitalize='none' placeholder="YYYY-MM-DD" onChangeText={(dob) => this.setState({dob})}
                               value={this.state.dob}/>
                    <TextInput ref='class' style={styles.userText} autoCapitalize='none' placeholder="Class" onChangeText={(section) => this.setState({section})}
                               value={this.state.section}/>
                    <TextInput ref='password' style={styles.userText}  password={true} autoCapitalize='none' placeholder="Password" onChangeText={(password) => this.setState({password})}
                               value={this.state.password}/>
                    <TextInput ref='confirmPassword' style={styles.userText}  password={true}  autoCapitalize='none' placeholder="Confirm Password" onChangeText={(confirmPassword) => this.setState({confirmPassword})} value={this.state.confirmPassword}/>
                </View>
                <Button onPress={this.onSubmit.bind(this)} color="red"
                        accessibilityLabel="See an informative alert" title={"Sign Up"}
                />
                <Text style={{color: "green"}}> {this.state.message}</Text>


            </View>


        );
    }

    passwordMatch() {
        return this.state.password===this.state.confirmPassword;
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