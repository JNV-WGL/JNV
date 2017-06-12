/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import HomeScreen from './app/Screens/Home'
import {
    AppRegistry,
} from 'react-native';


export default class JNV extends Component {
    render(){
        return (<HomeScreen/> );
    }
}



AppRegistry.registerComponent('JNV', () => JNV);
