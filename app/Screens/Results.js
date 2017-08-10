import React, {Component} from 'react';
import {
    Text,
} from 'react-native';


export default class Attendance  extends Component{
    static navigationOptions = {
        title: 'Results',
    };

    render(){
        return(
            <Text>Hello this is Results page
            </Text>        );
    }
}