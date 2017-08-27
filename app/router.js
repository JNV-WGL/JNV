import React from 'React';
import {StackNavigator} from 'react-navigation';
import SignUp from "./Screens/SignUp";
import SignIn from "./Screens/SignIn";
import home from "./Screens/home";
import attendance from "./Screens/Attendance";
import results from "./Screens/Results";

export const createRootNavigator = (signedIn = false) => {
    return StackNavigator({
            signin: {
                screen: SignIn,
                navigationOptions : {
                    title: 'JNV-Mamnoor'
                }
            },
            home: {
                screen: home,
                navigationOptions: {
                    title: "Home"
                }

            },
            signup: {
                screen: SignUp,
                navigationOptions: {
                    title: 'Sign Up'
                }
            },
            attendance: {
                screen: attendance,
                navigationOptions: {
                    title: 'Attendance'
                }
            },
            results: {
                screen: results,
                navigationOptions: {
                    title: 'Results'
                }
            }

        },
        {
            mode: "modal",
            initialRouteName:
                signedIn ? "home" : "signin"
        }
    );
};


