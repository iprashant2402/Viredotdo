import React, { Component } from "react";
import styled from 'styled-components/native';
import {Text} from 'react-native';
import {HeaderIconButton} from './headerIconButton';

const listItem = styled.View`
padding : 10px;
border : 1px solid #000;
`
const listText = styled.Text`
font-family : 'rubik-regular';
font-size : 20;
`
export class TaskListItem extends Component{
    render(){
        let text = this.props.text;
        return(
            <listItem style={{flexDirection : 'row'}}>
                <listText style={{flex : 3}}><Text>{text}</Text></listText>
                <HeaderIconButton icon='align-center' color='black' style={{flex:1}}></HeaderIconButton>
            </listItem>
        );
    }
}