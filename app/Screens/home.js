import React, {Component} from 'react';
import {
    Text,
    View, Button,AsyncStorage,Alert
} from 'react-native';
import {NavigationActions} from "react-navigation";
import Square from '../components/Square'


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

    onScreenChange=()=>{
        const {navigate} =this.props.navigation;
        navigate('attendance');
    };
    render(){
    return(
        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
            <Square name="attendance" onScreenChange={()=>this.onScreenChange.bind(this)} />
            <Button  onPress={this.onSignOut} color="red" accessibilityLabel="See an informative alert" title={"Sign Out"}/>
        </View>
    );


}
}
