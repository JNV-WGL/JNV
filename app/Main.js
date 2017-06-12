import React from 'React';
import {StackNavigator} from 'react-navigation'
import SignUp from "./Screens/SignUp";
import SignIn from "./Screens/SignIn";
export const App =StackNavigator({
    signin:{
        screen:SignIn
    },
    signup:{
        screen:SignUp
    },

});

