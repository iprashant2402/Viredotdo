import React, { Component } from 'react';
import {View,Text,ScrollView}  from 'react-native';
import {HeaderIconButton} from '../Components/headerIconButton';
import styled from 'styled-components/native';

const DateText = styled.Text`
    font-family : 'montserrat';
    font-size : 25;
    color : #fff;
    font-weight: bold;
`
export  class DateComponent extends Component {
    render() {
        let dateObj = new Date();
        let currDate = dateObj.getDate();
        let currMonth = dateObj.getMonth() +1;
        let currYear = dateObj.getFullYear();
        let currDay = dateObj.getDay();
        let dayMapArr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let monthMapArr = ['Nope','Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
        return (
            <View style={{flex : 1, padding : 10}}>
                <DateText>
                 {dayMapArr[currDay]}, {currDate} {monthMapArr[currMonth]}
                </DateText>
            </View>
        )
    }
}
