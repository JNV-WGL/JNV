import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View, TextInput, Button, Alert,AsyncStorage
} from 'react-native';
import {NavigationActions} from "react-navigation";


const STORAGE_KEY='id_token';
export default class home extends Component {
      onSignOut= async ()=> {
          let value=await AsyncStorage.getItem(STORAGE_KEY);
          if(value) {
              await AsyncStorage.removeItem(STORAGE_KEY);
              this.props
                  .navigation
                  .dispatch(NavigationActions.reset(
                      {
                          index: 0,
                          actions: [
                              NavigationActions.navigate({ routeName: 'signin'})
                          ]
                      }));
          }    };


    render(){
    return(
        <View>
        <Text>Welcome !!</Text>
        <Button  onPress={this.onSignOut} color="red" accessibilityLabel="See an informative alert" title={"Sign Out"}/>
        </View>
    );


}
}
