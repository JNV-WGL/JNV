import React,{Component} from 'React';
import {createRootNavigator} from "./router";
import {AsyncStorage} from 'react-native';
import {STORAGE_KEY} from "./Screens/home";
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
        };
    }

    async componentWillMount() {
        let value = await AsyncStorage.getItem(STORAGE_KEY);
        if (value) {
            this.setState({signedIn: true});
        }
    }

    render() {
        let {signedIn} = this.state;
        const Layout = createRootNavigator(signedIn);
        return <Layout/>;
    }
}