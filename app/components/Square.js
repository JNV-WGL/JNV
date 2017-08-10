import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from "react-native";

export default class Square extends Component{


    render(){
        return(
            <TouchableOpacity onPress={()=>this.props.onScreenChange()(this.props.screenName)}>
            <View style={{margin:10,borderRadius: 4,height:167,width:167,shadowOpacity:.20,shadowColor: "#000000",shadowRadius: 2,
                shadowOffset: {
                    height: 1,
                    width: 0
                }}}  >

                <Text style={{textAlign:'center',marginTop:"45%",fontSize:20}}>{this.props.name}</Text>
            </View>
            </TouchableOpacity>

                );
    }
}