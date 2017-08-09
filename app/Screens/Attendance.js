import React, {Component} from 'react';
import {
    Text,
} from 'react-native';


export default class Attendance  extends Component{
    static navigationOptions = {
        title: 'Attendance',
    };

    render(){
        return(
            <Text>Hello this is Attendance page
            </Text>        );
    }
}