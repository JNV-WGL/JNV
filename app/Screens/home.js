import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View, TextInput, Button, Alert
} from 'react-native';


export default class home extends Component {
    onSignOut=()=>{
        // Alert.alert("Hello");
        const { navigate } = this.props.navigation;
        navigate('signin');
    };


    render(){
    return(
        <View>
        <Text>Welcome !!</Text>
        <Button  onPress={this.onSignOut} color="red" accessibilityLabel="See an informative alert" title={"Sign Out"}/>
        </View>
    );


}
}
