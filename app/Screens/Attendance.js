import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';

export default class CalendarsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onDayPress = this.onDayPress.bind(this);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Calendar
                    onDayPress={this.onDayPress}
                    style={styles.calendar}
                    hideExtraDays
                    onMonthChange={this.onMonthChange}
                    markedDates={{[this.state.selected]: {selected: true}}}
                />
            </ScrollView>
        );
    }

    onDayPress(day) {
        this.setState({
            selected: day.dateString
        });
    }

    onMonthChange(month){
        console.log("month is "+month);
    }
}

const styles = StyleSheet.create({
    calendar: {
        borderTopWidth: 1,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 350,
        margin: 10,
        borderRadius: 4,
        shadowOpacity: .20,
        shadowColor: "#000000",
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },
    text: {
        textAlign: 'center',
        borderColor: '#bbb',
        padding: 10,
        backgroundColor: '#eee'
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});