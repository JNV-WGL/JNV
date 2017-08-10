import React from 'React';
import {StackNavigator} from 'react-navigation'
import SignUp from "./Screens/SignUp";
import SignIn from "./Screens/SignIn";
import home from "./Screens/home";
import attendance from "./Screens/Attendance";
import results from "./Screens/Results";
export const App =StackNavigator({
    signin:{
        screen:SignIn
    },
    home:{
        screen:home
    },
    signup:{
        screen:SignUp
    },
    attendance:{
        screen:attendance
    },
    results:{
        screen:results
    }
});

