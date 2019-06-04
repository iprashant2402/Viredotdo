import React, { Component } from "react";
import styled from 'styled-components/native';
import {Text} from 'react-native';
import {HeaderIconButton} from './headerIconButton';

const PriorityTagBox = styled.Text`
    background-color : ${props=> props.color || 'blue'};
    padding : 5px;
    border-radius : 100;
    width : 100px;
    text-align : center;
`
export class PriorityTag extends Component{
    render(){
        let colorsMapping = {
            'Very low' : '#12CBC4',
            'Low' : '#0652DD',
            'Medium' : '#FFC312',
            'High' : '#EE5A24',
            'Very high' : '#EA2027'
        };
        let text = this.props.type;
        return(
            <PriorityTagBox color={colorsMapping[text]}>
                <Text style={{color:'#fff'}}>
                    {text}
                </Text>
            </PriorityTagBox>
        );
    }
}